import "./style.css";
// main.js
import * as THREE from "three";
import { createScene } from "./three/scene";
import { createCamera } from "./three/camera";
import { createRenderer } from "./three/renderer";
import { createControls } from "./three/controls";
import { Size } from "three/examples/jsm/Addons.js";
import { Sizes } from "./types/types";

const sizes: Sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

console.log(window.innerWidth, window.innerHeight);

const { scene, sun, earth, mars, light } = createScene();
const camera = createCamera(sizes);

const canvas: HTMLCanvasElement = document.querySelector(
  ".webgl"
) as HTMLCanvasElement;
console.log(scene);
const renderer: THREE.WebGLRenderer = createRenderer(
  canvas,
  sizes,
  scene,
  camera
);
const controls = createControls(camera, canvas);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

// const loop = () => {
//   controls.update();
//   renderer.render(scene, camera);
//   window.requestAnimationFrame(loop);
// }
let time = 0;
