import { Particle3D } from "./types/planet";
import { Forces } from "./types/planet";

export const simulationStep = (
  planetlist: Particle3D[],
  dt: number,
  F: Forces
) => {
  // update positions
  for (let j = 0; j < planetlist.length; j++) {
    planetlist[j].leap_pos2nd(dt, F[j]);
  }

  // Calculate new forces
  let forceNew = Particle3D.R_Force(planetlist, N);

  // Update velocities
  for (let k = 0; k < planetlist.length; k++) {
    let A = F[k].map((value, index) => 0.5 * (value + forceNew[k][index]));
    planetlist[k].leap_velocity(dt, A);
  }

  // Update force
  F = forceNew;

  return { planetlist, F };
};
