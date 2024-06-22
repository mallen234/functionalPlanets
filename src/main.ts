import "./style.css";
// main.js
import * as THREE from "three";
import { createScene } from "./three/scene";
import { createCamera } from "./three/camera";
import { createRenderer } from "./three/renderer";
import { createControls } from "./three/controls";
import { Sizes } from "./types/types";
import { initialPlanets } from "./initialData/threeBodyProblem";
import { calculateTotalForce } from "./types/planet";
import { simulationStep } from "./simulation";

const sizes: Sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

let planetList = initialPlanets;
let forces = calculateTotalForce(planetList);

const { scene, sun, light } = createScene();
const camera = createCamera(sizes);

const canvas: HTMLCanvasElement = document.querySelector(
  ".webgl"
) as HTMLCanvasElement;
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

const loop = () => {
  controls.update();

  let updatedValues = simulationStep(planetList, 5, forces);

  planetList = updatedValues.planets;
  forces = updatedValues.forces;
  console.log(planetList[0].position.vector[1]);

  sun.position.set(...planetList[2].position.vector);

  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();
