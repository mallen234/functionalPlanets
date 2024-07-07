import "./style.css";
// main.js
import { simCanvas } from "./three/canvas";

simCanvas();

const handleButtonAdd = () => {};

document
  .getElementById("addCardButton")
  ?.addEventListener("click", () => handleButtonAdd());
