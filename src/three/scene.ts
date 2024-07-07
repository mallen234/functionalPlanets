// scene.js
import * as THREE from "three";
import "../style.css";
import { Particle3D } from "../types/planet";
import { ScenePlanet } from "../types/types";

export const createScene = (planetList: Particle3D[]) => {
  const scene = new THREE.Scene();

  console.log(planetList);
  const scenePlanets: ScenePlanet[] = planetList.map((planet: Particle3D) => {
    const geom = new THREE.SphereGeometry(planet.size, 64, 64);
    const material = new THREE.MeshBasicMaterial({ color: planet.colour });
    const scenePlanet = {
      name: planet.label,
      mesh: new THREE.Mesh(geom, material),
    } as ScenePlanet;
    return scenePlanet;
  });

  const light = new THREE.SpotLight();
  const light_2 = new THREE.AmbientLight(0xffffff, 1);
  light.position.set(0, 10, 10);
  light_2.position.set(0, 10, 10);
  scene.add(light);
  scenePlanets.map((planet) => scene.add(planet.mesh));

  return { scene, scenePlanets };
};
