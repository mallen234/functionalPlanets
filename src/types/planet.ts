export interface vector3D {
  vector: [number, number, number];
}

export interface Particle3D {
  label: string;
  position: vector3D;
  velocity: vector3D;
  mass: number;
  size: number;
  colour: string;
}

export interface Forces {
  forces: vector3D[];
}

export const seperationBetweenVectors = (
  v1: vector3D,
  v2: vector3D
): vector3D => {
  const x1 = v1.vector[0] - v2.vector[0];
  const x2 = v1.vector[1] - v2.vector[1];
  const x3 = v1.vector[2] - v2.vector[2];
  return { vector: [x1, x2, x3] };
};

export const calculateTotalForce = (planetlist: Particle3D[]): Forces => {
  const N = planetlist.length;
  const g = 1.476147e-34; // Gravitational constant
  const A: vector3D[][] = new Array(N).fill(0).map(() =>
    new Array(N).fill(0).map(
      () =>
        ({
          vector: [0, 0, 0],
        } as vector3D)
    )
  );

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const r: vector3D = seperationBetweenVectors(
        planetlist[i].position,
        planetlist[j].position
      );
      const r1: number = Math.sqrt(
        r.vector[0] ** 2 + r.vector[1] ** 2 + r.vector[2] ** 2
      );
      const r_hat: vector3D = {
        ...r,
        vector: r.vector.map((v) => v / r1),
      } as vector3D;

      const F: vector3D = {
        ...r_hat,
        vector: r_hat.vector.map(
          (component) =>
            (-component * (g * planetlist[i].mass * planetlist[j].mass)) /
            r1 ** 2
        ),
      } as vector3D;

      A[i][j] = F;
      A[j][i] = {
        ...F,
        vector: F.vector.map((component) => -component),
      } as vector3D;
    }
  }

  const totalForce: vector3D[] = [];
  for (let i = 0; i < N; i++) {
    const totalForceOnParticle: vector3D = { vector: [0, 0, 0] };
    for (let j = 0; j < N; j++) {
      totalForceOnParticle.vector[0] += A[i][j].vector[0];
      totalForceOnParticle.vector[1] += A[i][j].vector[1];
      totalForceOnParticle.vector[2] += A[i][j].vector[2];
    }
    totalForce.push(totalForceOnParticle);
  }

  return { forces: totalForce };
};

export const updateParticlePosition = (
  particle: Particle3D,
  dt: number,
  force: vector3D
): Particle3D => {
  const halfDtSqOverMass = (0.5 * dt ** 2) / particle.mass;

  const newPosition = [
    particle.position.vector[0] +
      dt * particle.velocity.vector[0] +
      halfDtSqOverMass * force.vector[0],
    particle.position.vector[1] +
      dt * particle.velocity.vector[1] +
      halfDtSqOverMass * force.vector[1],
    particle.position.vector[2] +
      dt * particle.velocity.vector[2] +
      halfDtSqOverMass * force.vector[2],
  ];

  return {
    ...particle,
    position: { vector: newPosition } as vector3D,
  };
};

export const updateParticleVelocity = (
  particle: Particle3D,
  dt: number,
  force: vector3D
): Particle3D => {
  const newVelocity = [
    particle.velocity.vector[0] + (dt * force.vector[0]) / particle.mass,
    particle.velocity.vector[1] + (dt * force.vector[1]) / particle.mass,
    particle.velocity.vector[2] + (dt * force.vector[2]) / particle.mass,
  ];

  return {
    ...particle,
    velocity: { vector: newVelocity } as vector3D,
  };
};
