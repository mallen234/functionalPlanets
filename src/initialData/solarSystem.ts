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
  },
  {
    label: "Mercury",
    position: {
      vector: [
        3.440177150316953e-1, 4.391586225422056e-2, -2.873350321870726e-2,
      ],
    } as vector3D,
    velocity: {
      vector: [
        -8.395220204648486e-3, 2.923915518568342e-2, 3.158727048588207e-3,
      ],
    } as vector3D,
    mass: 0.3302e24,
  },
  {
    label: "Venus",
    position: {
      vector: [
        -6.28172022962608e-1, -3.495715390468305e-1, 3.123883353203612e-2,
      ],
    } as vector3D,
    velocity: {
      vector: [
        9.859976720654589e-3, -1.766858865685918e-2, -8.117107720942417e-4,
      ],
    } as vector3D,
    mass: 48.685e23,
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
  },
  {
    label: "Moon",
    position: {
      vector: [
        -7.954585884349001e-1, 5.937185712105453e-1, -2.772273923750411e-4,
      ],
    } as vector3D,
    velocity: {
      vector: [
        -1.096088070200042e-2, -1.362540966684871e-2, 2.896485406979358e-5,
      ],
    } as vector3D,
    mass: 7.349e22,
  },
  {
    label: "Mars",
    position: {
      vector: [6.320870664782525e-1, 1.375985259542616, 1.308933014627369e-2],
    } as vector3D,
    velocity: {
      vector: [
        -1.217896590714805e-2, 7.068756441759382e-3, 4.469325271435516e-4,
      ],
    } as vector3D,
    mass: 6.4171e23,
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
  },
  {
    label: "Saturn",
    position: {
      vector: [2.180345599696063, -9.811057329699995, 8.379856115543641e-2],
    } as vector3D,
    velocity: {
      vector: [
        5.139186095153194e-3, 1.19287202130032e-3, -2.254188816975533e-4,
      ],
    } as vector3D,
    mass: 5.6834e26,
  },
  {
    label: "Uranus",
    position: {
      vector: [1.692620334991027e1, 1.038715340718549e1, -1.807028387405926e-1],
    } as vector3D,
    velocity: {
      vector: [
        -2.085891004534619e-3, 3.16886447111783e-3, 3.880335267483073e-5,
      ],
    } as vector3D,
    mass: 86.813e24,
  },
  {
    label: "Neptune",
    position: {
      vector: [2.901418077759902e1, -7.349631925571408, -5.173096125918059e-1],
    } as vector3D,
    velocity: {
      vector: [
        7.495256383204527e-4, 3.061560573296124e-3, -8.008425980741021e-5,
      ],
    } as vector3D,
    mass: 102.413e24,
  },
  {
    label: "Pluto",
    position: {
      vector: [
        1.201093099160781e1, -3.152151514760828e1, -1.012826044420478e-1,
      ],
    } as vector3D,
    velocity: {
      vector: [
        3.00108123366975e-3, 4.456136710032395e-4, -9.280986297882954e-4,
      ],
    } as vector3D,
    mass: 1.307e22,
  },
  {
    label: "Halley's_Comet",
    position: {
      vector: [-2.037372963373874e1, 2.639779300251809e1, -9.955867482249042],
    } as vector3D,
    velocity: {
      vector: [1.71337586120913e-4, 6.406200068874306e-4, -5.92245539777201e-5],
    } as vector3D,
    mass: 2.2e14,
  },
];
