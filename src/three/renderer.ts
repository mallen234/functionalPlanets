// renderer.js
import * as THREE from "three";
import "../style.css";

interface Sizes {
  width: number;
  height: number;
}

export const createRenderer = (
  canvas: HTMLCanvasElement,
  sizes: Sizes,
  scene: THREE.Scene,
  camera: THREE.Camera
) => {
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
  return renderer;
};
