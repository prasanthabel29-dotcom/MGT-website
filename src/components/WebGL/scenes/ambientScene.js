import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  float wave(vec2 p, float freq, float speed) {
    return sin(p.x * freq + uTime * speed) * cos(p.y * freq * 0.85 - uTime * speed * 0.7);
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv + uMouse * 0.04;

    float n1 = wave(p, 4.2, 0.22);
    float n2 = wave(p + 0.35, 3.1, 0.18);
    float n3 = wave(p - 0.2, 5.5, 0.14);

    vec3 base = vec3(0.945, 0.947, 0.952);
    vec3 blue = vec3(0.82, 0.89, 0.98);
    vec3 teal = vec3(0.84, 0.95, 0.91);
    vec3 indigo = vec3(0.88, 0.86, 0.98);

    vec3 color = mix(base, blue, smoothstep(-0.15, 0.55, n1) * 0.55);
    color = mix(color, teal, smoothstep(0.1, 0.75, n2) * 0.35);
    color = mix(color, indigo, smoothstep(0.25, 0.9, n3) * 0.22);

    float vignette = 1.0 - length(uv - 0.5) * 0.35;
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export function createAmbientScene(canvas, { reducedMotion = false } = {}) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
  };

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 2),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    })
  );
  scene.add(mesh);

  let mouseX = 0;
  let mouseY = 0;
  let raf = 0;
  const clock = new THREE.Clock();

  const animate = () => {
    raf = requestAnimationFrame(animate);
    if (!reducedMotion) {
      uniforms.uTime.value = clock.getElapsedTime();
      uniforms.uMouse.value.set(mouseX, mouseY);
    }
    renderer.render(scene, camera);
  };

  const resize = () => {
    const parent = canvas.parentElement || canvas;
    const w = parent.clientWidth;
    const h = parent.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
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
      mesh.geometry.dispose();
      mesh.material.dispose();
      renderer.dispose();
    },
    resize,
  };
}
