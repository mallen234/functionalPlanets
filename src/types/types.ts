import { Mesh } from "three";

export interface Sizes {
  width: number;
  height: number;
}

export interface ScenePlanet {
  name: string;
  mesh: Mesh;
}
