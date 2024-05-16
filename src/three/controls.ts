// controls.js
import { OrbitControls } from "three/examples/jsm/Addons.js";
import "../style.css";
import { Camera, TextureLoader } from "three";

export const createControls = (camera: Camera, canvas: HTMLCanvasElement) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0;
  return controls;
};
