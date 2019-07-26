
  //Renderer animates mainly
  const renderer = new THREE.WebGLRenderer({
      antialias: true
  });

//Setting width and height
  renderer.setSize(window.innerWidth, window.innerHeight);
  //adding canvas without HTML5
  document.body.appendChild(renderer.domElement);
  //New THREE.js SCENE
  const scene = new THREE.Scene;

  //The CUBE
  const cubeGeometry = new THREE.CubeGeometry(3, 3, 3);
  //Color mainly, but also texture
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0x00FF00
  });

  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  //Main rotation (original before spin)
  cube.rotation.z = Math.PI * 45 / 180;

//Add the cube to the scene
scene.add(cube);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
scene.add(camera);
camera.position.z = 5;

//Point the camera at the cube
camera.lookAt(cube.position);

//camera (sky like the sun and //reflective greenhouse effect)
var skyboxGeometry = new THREE.CubeGeometry(10000, 10000, 10000);
var skyboxMaterial = new THREE.MeshBasicMaterial({
  color: 0xFFFFFF,
  side: THREE.BackSide
});
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial);

//Add the skybox (lights)
scene.add(skybox);

//Main light
var pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 300, 200);

//Add the main light to the scene
scene.add(pointLight);


function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
