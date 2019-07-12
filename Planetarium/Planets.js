function addMoon() {
	var sphere = new THREE.SphereGeometry( .54,32,32 );
	var material = new THREE.MeshPhongMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/moon.jpg');
	moon = new THREE.Mesh( sphere, material );
	moon.position.z = 0;
	moon.position.x = -15;
	moon.position.y = 0;
	camera.translateX(-15);
	scene.add(moon);
	//centerCam = true;
}


function addMercury() {
	var sphere = new THREE.SphereGeometry( .68,32,32 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/mercury.jpg');
	mercury = new THREE.Mesh( sphere, material );
	mercury.position.z = 0;
	mercury.position.x = -6.68;
	mercury.position.y = 0;
	scene.add(mercury);
}

function addVenus() {
	var sphere = new THREE.SphereGeometry( 1.9,32,32 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/venus.jpg');
	venus = new THREE.Mesh( sphere, material );
	venus.position.z = 0;
	venus.position.x = -4.0;
	venus.position.y = 0;
	scene.add(venus);
}

function addMars() {
	var sphere = new THREE.SphereGeometry( 1.07,32,32 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/mars.jpg');
	mars = new THREE.Mesh( sphere, material );
	mars.position.z = 0;
	mars.position.x = 3.47;
	mars.position.y = 0;
	scene.add(mars);
}

function addJupiter() {
	var sphere = new THREE.SphereGeometry( 22.4,64,64 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/jupiter.jpg');
	jupiter = new THREE.Mesh( sphere, material );
	jupiter.position.z = 0;
	jupiter.position.x = 28.0;
	jupiter.position.y = 0;
	scene.add(jupiter);
}

function addSaturn() {
	var sphere = new THREE.SphereGeometry( 19,32,32 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/saturn.jpg');
	saturn = new THREE.Mesh( sphere, material );
	saturn.position.z = 0;
	saturn.position.x = 70.4;
	saturn.position.y = 0;
	scene.add(saturn);
}

function addUranus() {
	var sphere = new THREE.SphereGeometry( 8,32,32 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/uranus.jpg');
	uranus = new THREE.Mesh( sphere, material );
	uranus.position.z = 0;
	uranus.position.x = 98.4;
	uranus.position.y = 0;
	scene.add(uranus);
}

function addNeptune() {
	var sphere = new THREE.SphereGeometry( 7.9,32,32 );
	var material = new THREE.MeshBasicMaterial();
	material.map = THREE.ImageUtils.loadTexture('textures/neptune.jpg');
	neptune = new THREE.Mesh( sphere, material );
	neptune.position.z = 0;
	neptune.position.x = 115.3;
	neptune.position.y = 0;
	scene.add(neptune);
}

function shiftCenter(planet) {
	target.position.x = 25;
	planet.position.x = 0;
}