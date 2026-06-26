import * as THREE from "three";

const BRAND = {
  blue: new THREE.Color(0x3b82f6),
  green: new THREE.Color(0x22c55e),
  slate: new THREE.Color(0x64748b),
};

export function createNetworkScene(canvas, { reducedMotion = false } = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camera.position.z = 9;

  const count = reducedMotion ? 48 : 96;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 7;

    const pick =
      i % 7 === 0 ? BRAND.green : i % 4 === 0 ? BRAND.blue : BRAND.slate;
    colors[i * 3] = pick.r;
    colors[i * 3 + 1] = pick.g;
    colors[i * 3 + 2] = pick.b;
  }

  const pointsGeo = new THREE.BufferGeometry();
  pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const points = new THREE.Points(
    pointsGeo,
    new THREE.PointsMaterial({
      size: 0.09,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
    })
  );
  scene.add(points);

  const lineVerts = [];
  const threshold = 2.9;
  for (let i = 0; i < count; i += 1) {
    for (let j = i + 1; j < count; j += 1) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      if (dx * dx + dy * dy + dz * dz < threshold * threshold) {
        lineVerts.push(
          positions[i * 3],
          positions[i * 3 + 1],
          positions[i * 3 + 2],
          positions[j * 3],
          positions[j * 3 + 1],
          positions[j * 3 + 2]
        );
      }
    }
  }

  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(lineVerts, 3)
  );
  const lines = new THREE.LineSegments(
    linesGeo,
    new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.18,
    })
  );
  scene.add(lines);

  const ringGeo = new THREE.RingGeometry(3.2, 3.25, 64);
  const ring = new THREE.Mesh(
    ringGeo,
    new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    })
  );
  scene.add(ring);

  let mouseX = 0;
  let mouseY = 0;
  let raf = 0;
  const clock = new THREE.Clock();

  const animate = () => {
    raf = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    if (!reducedMotion) {
      points.rotation.y = t * 0.035 + mouseX * 0.18;
      points.rotation.x = mouseY * 0.12;
      lines.rotation.copy(points.rotation);
      ring.rotation.z = t * 0.02;
      ring.rotation.x = Math.PI * 0.5 + mouseY * 0.05;
    }

    renderer.render(scene, camera);
  };

  const resize = () => {
    const parent = canvas.parentElement || canvas;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  const onMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  resize();
  window.addEventListener("resize", resize);
  if (!reducedMotion) {
    window.addEventListener("mousemove", onMouseMove);
  }
  animate();

  return {
    destroy() {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      pointsGeo.dispose();
      linesGeo.dispose();
      ringGeo.dispose();
      renderer.dispose();
    },
    resize,
  };
}
