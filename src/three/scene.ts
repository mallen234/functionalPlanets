// scene.js
import * as THREE from "three";
import "../style.css";

export const createScene = () => {
  //   const scene = new THREE.Scene();

  //   const geometry = new THREE.SphereGeometry(3, 64, 64);

  //   //   const Mmaterial = new THREE.MeshStandardMaterial({ color: 0xffa500 });
  //   //   const Ematerial = new THREE.MeshStandardMaterial({ color: 0x00ffff });
  //   //   const Smaterial = new THREE.MeshStandardMaterial({ color: 0x00ffff });
  //   const Smaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });

  //   const sun = new THREE.Mesh(geometry, Smaterial);
  //   //   const earth = new THREE.Mesh(geometry, Ematerial);
  //   //   const mars = new THREE.Mesh(geometry, Mmaterial);

  //   //   scene.add(sun, earth, mars);
  //   scene.add(sun);

  //   const light = new THREE.PointLight();
  //   const light_2 = new THREE.AmbientLight(0xffffff, 0.5);
  //   scene.add(light_2);

  //   const pointLightHelper = new THREE.PointLightHelper(light);
  //   scene.add(pointLightHelper);

  //   light.position.set(0, 10, 10);
  //   scene.add(light);

  //   return { scene, sun, light };

  const scene = new THREE.Scene();

  const geometry = new THREE.SphereGeometry(13, 64, 64);

  const Mmaterial = new THREE.MeshPhongMaterial({ color: 0x9ec2535 });
  const Ematerial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
  const Smaterial = new THREE.MeshBasicMaterial({
    color: "#F00",
    wireframe: true,
  });
  const sun = new THREE.Mesh(geometry, Smaterial);
  // const earth = new THREE.Mesh(geometry, Ematerial);
  // const mars = new THREE.Mesh(geometry, Mmaterial);

  const light = new THREE.SpotLight();
  const light_2 = new THREE.AmbientLight(0xffffff, 1);
  light.position.set(0, 10, 10);
  light_2.position.set(0, 10, 10);
  scene.add(light, sun);

  const pointLightHelper = new THREE.SpotLightHelper(light);
  scene.add(pointLightHelper);

  // scene.add(light_2);
  scene.add(light);

  return { scene, sun, light };
};
