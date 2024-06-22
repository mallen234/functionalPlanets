import {
  Particle3D,
  calculateTotalForce,
  updateParticlePosition,
} from "./types/planet";
import { Forces } from "./types/planet";

export const simulationStep = (
  planets: Particle3D[],
  dt: number,
  forces: Forces
) => {
  // update positions
  for (let j = 0; j < planets.length; j++) {
    planets[j] = updateParticlePosition(planets[j], dt, forces.forces[j]);
    // planets[j].leap_pos2nd(dt, F[j]);
  }

  // Calculate new forces
  let forcesNew: Forces = calculateTotalForce(planets);
  // let forceNew = Particle3D.R_Force(planets, N);

  // Update velocities

  for (let k = 0; k < planets.length; k++) {
    planets[k] = updateParticlePosition(planets[k], dt, forces.forces[k]);
    // let A = F[k].map((value, index) => 0.5 * (value + forceNew[k][index]));
    // planets[k].leap_velocity(dt, A);
  }

  // Update force
  forces = forcesNew;

  return { planets, forces };
};
