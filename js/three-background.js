// Three.js Background Implementation
const initThreeJSBackground = () => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  // Optional: Add a very faint fog for depth
  scene.fog = new THREE.FogExp2(0x050816, 0.001);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 100;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = window.innerWidth < 768 ? 300 : 800; // less on mobile
  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);

  const color1 = new THREE.Color(0x12d640); // electric green
  const color2 = new THREE.Color(0x00f0ff); // cyan
  const color3 = new THREE.Color(0x8a2be2); // purple

  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Spread particles over a large area
    posArray[i] = (Math.random() - 0.5) * 400; // x
    posArray[i + 1] = (Math.random() - 0.5) * 400; // y
    posArray[i + 2] = (Math.random() - 0.5) * 400; // z

    const mixedColor = [color1, color2, color3][Math.floor(Math.random() * 3)];
    colorsArray[i] = mixedColor.r;
    colorsArray[i + 1] = mixedColor.g;
    colorsArray[i + 2] = mixedColor.b;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

  // Particle Material
  const particlesMaterial = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Floating Geometries (Subtle)
  const geoGroup = new THREE.Group();
  
  const addFloatingShape = (geometry, color, x, y, z) => {
    const material = new THREE.MeshBasicMaterial({ 
      color: color, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.15 
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.set(Math.random(), Math.random(), Math.random());
    
    // Add custom rotation speed
    mesh.userData = {
      rx: (Math.random() - 0.5) * 0.01,
      ry: (Math.random() - 0.5) * 0.01,
      rz: (Math.random() - 0.5) * 0.01
    };
    
    geoGroup.add(mesh);
  };

  if (window.innerWidth > 768) {
    addFloatingShape(new THREE.IcosahedronGeometry(20, 1), 0x12d640, 80, 40, -50);
    addFloatingShape(new THREE.OctahedronGeometry(15, 0), 0x00f0ff, -80, -30, -30);
    addFloatingShape(new THREE.TorusGeometry(12, 3, 16, 100), 0x8a2be2, 50, -60, -60);
  }
  
  scene.add(geoGroup);

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX) * 0.05;
    mouseY = (event.clientY - windowHalfY) * 0.05;
  });

  // Animation Loop
  const clock = new THREE.Clock();

  const animate = () => {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.2;
    targetY = mouseY * 0.2;

    // Slowly rotate particles
    particlesMesh.rotation.y = elapsedTime * 0.02;
    particlesMesh.rotation.x = elapsedTime * 0.01;

    // Mouse parallax for particles
    particlesMesh.position.x += (mouseX * 0.5 - particlesMesh.position.x) * 0.02;
    particlesMesh.position.y += (-mouseY * 0.5 - particlesMesh.position.y) * 0.02;

    // Mouse parallax for geometries
    geoGroup.position.x += (mouseX - geoGroup.position.x) * 0.05;
    geoGroup.position.y += (-mouseY - geoGroup.position.y) * 0.05;

    // Rotate individual shapes
    geoGroup.children.forEach(child => {
      child.rotation.x += child.userData.rx;
      child.rotation.y += child.userData.ry;
      child.rotation.z += child.userData.rz;
    });

    renderer.render(scene, camera);
  };

  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
};

document.addEventListener('DOMContentLoaded', initThreeJSBackground);
