// camera.js
import * as THREE from "three";
import "../style.css";
import { Sizes } from "../types/types";

export const createCamera = (sizes: Sizes) => {
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(0, 5, 20);
  camera.lookAt(0, 0, 0);
  return camera;
};
