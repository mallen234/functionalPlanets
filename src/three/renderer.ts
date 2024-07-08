// renderer.js
import * as THREE from "three";
import "../style.css";
import { Sizes } from "../types/types";

export const createRenderer = (
  canvas: HTMLCanvasElement,
  sizes: Sizes,
  scene: THREE.Scene,
  camera: THREE.Camera
): THREE.WebGLRenderer => {
  const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  return renderer;
};
