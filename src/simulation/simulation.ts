import {
  Particle3D,
  calculateTotalForce,
  updateParticlePosition,
  updateParticleVelocity,
} from "../types/planet";
import { Forces } from "../types/planet";

export const simulationStep = (
  planets: Particle3D[],
  dt: number,
  forces: Forces
) => {
  // update positions
  for (let j = 0; j < planets.length; j++) {
    planets[j] = updateParticlePosition(planets[j], dt, forces.forces[j]);
  }

  // Calculate new forces
  let forcesNew: Forces = calculateTotalForce(planets);

  // Update velocities

  for (let k = 0; k < planets.length; k++) {
    planets[k] = updateParticleVelocity(planets[k], dt, forces.forces[k]);
  }

  // Update force
  forces = forcesNew;

  return { planets, forces };
};
