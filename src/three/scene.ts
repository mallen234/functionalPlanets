// scene.js
import * as THREE from "three";
import "../style.css";

export const createScene = () => {
  const scene = new THREE.Scene();

  const sunGeometry = new THREE.SphereGeometry(1, 64, 64);
  const earthGeometry = new THREE.SphereGeometry(0.09, 64, 64);
  const jupiterGeometry = new THREE.SphereGeometry(0.4, 64, 64);

  const Mmaterial = new THREE.MeshBasicMaterial({ color: 0x9ec2535 });
  const Ematerial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const Smaterial = new THREE.MeshBasicMaterial({
    color: "#FFAE42",
  });
  const sun = new THREE.Mesh(sunGeometry, Smaterial);
  const earth = new THREE.Mesh(earthGeometry, Ematerial);
  const jupiter = new THREE.Mesh(jupiterGeometry, Mmaterial);

  const light = new THREE.SpotLight();
  const light_2 = new THREE.AmbientLight(0xffffff, 1);
  light.position.set(0, 10, 10);
  light_2.position.set(0, 10, 10);
  scene.add(light, sun, earth, jupiter);

  // const pointLightHelper = new THREE.SpotLightHelper(light);
  // scene.add(pointLightHelper);

  // scene.add(light_2);
  scene.add(light);

  return { scene, sun, earth, jupiter, light };
};
