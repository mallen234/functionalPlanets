import { Particle3D, vector3D } from "../types/planet";

export const initialPlanets: Particle3D[] = [
  {
    label: "Sun",
    position: {
      vector: [
        -1.09863209794663e-3, 7.505765467113248e-3, -4.855729046925131e-5,
      ],
    } as vector3D,
    velocity: {
      vector: [
        -8.08009163134962e-6, 1.582090746289873e-6, 2.086404809446381e-7,
      ],
    } as vector3D,
    mass: 1988500e24,
    size: 0.5, // Largest size, the Sun
    colour: "#FFD700", // Gold
  },

  {
    label: "Earth",
    position: {
      vector: [
        -7.969469952340048e-1, 5.916323880099404e-1, -7.026146956992951e-5,
      ],
    } as vector3D,
    velocity: {
      vector: [
        -1.046274105658384e-2, -1.393615668005346e-2, 5.256620797853664e-7,
      ],
    } as vector3D,
    mass: 5.97219e24,
    size: 0.1, // Baseline reference size for Earth
    colour: "#2E8B57", // Sea Green for land
  },
  {
    label: "Jupiter",
    position: {
      vector: [-1.837840637474007, -5.003191496363762, 6.186079206303165e-2],
    } as vector3D,
    velocity: {
      vector: [
        6.991817507863415e-3, -2.241852924772884e-3, -1.471242587597067e-4,
      ],
    } as vector3D,
    mass: 1898.13e24,
    size: 0.5, // Larger relative size for Jupiter
    colour: "#D2B48C", // Tan
  },
];
