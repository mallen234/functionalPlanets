import * as THREE from "three";
import { createScene } from "../three/scene";
import { createCamera } from "../three/camera";
import { createRenderer } from "../three/renderer";
import { createControls } from "../three/controls";
import { Sizes } from "../types/types";
import { calculateTotalForce, Particle3D } from "../types/planet";
import { simulationStep } from "../simulation/simulation";

export const simCanvas = (planetList: Particle3D[]) => {
  const sizes: Sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let forces = calculateTotalForce(planetList);

  console.log(planetList);

  const { scene, scenePlanets } = createScene(planetList);
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
    let updatedValues = simulationStep(planetList, 0.1, forces);

    for (let i = 0; i <= 50; i++) {
      updatedValues = simulationStep(planetList, 0.1, forces);
    }

    planetList = updatedValues.planets;
    forces = updatedValues.forces;
    scenePlanets.map((planet, index) => {
      planet.mesh.position.set(...planetList[index].position.vector);
    });
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();
};
