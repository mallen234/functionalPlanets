import "./style.css";
// main.js
import { simCanvas } from "./three/canvas";
import { initialPlanets } from "./initialData/solarSystem";

simCanvas(initialPlanets);

const controlCenter = document.getElementById("controlCenter");
// const controlCenterButton = document.getElementById("controlCenterButton");
const handleButtonAdd = () => {
  if (controlCenter) {
    controlCenter.style.zIndex = controlCenter.style.zIndex === "2" ? "0" : "2";
  }
};

document
  .getElementById("controlCenterButton")
  ?.addEventListener("click", () => handleButtonAdd());
