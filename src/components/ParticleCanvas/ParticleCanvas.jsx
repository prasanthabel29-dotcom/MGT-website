import React, { useEffect, useRef } from "react";
import styles from "./ParticleCanvas.module.css";

const PARTICLE_COUNT = 90;
const CONNECTION_DISTANCE = 150;
const MOUSE_DISTANCE = 180;
const PARTICLE_SPEED = 0.35;

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * PARTICLE_SPEED,
    vy: (Math.random() - 0.5) * PARTICLE_SPEED,
    radius: 1.6 + Math.random() * 1.2,
  }));
}

function ParticleCanvas({ className = "" }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;

    const resize = () => {
      const { width, height } = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!particlesRef.current.length) {
        particlesRef.current = createParticles(width, height);
      }
    };

    const handleMouseMove = (event) => {
      const rect = parent.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const drawLine = (x1, y1, x2, y2, opacity, color) => {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(${color}, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    };

    const animate = () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));

        if (mouse.x !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < MOUSE_DISTANCE) {
            particle.x += (dx / distance) * 1.1;
            particle.y += (dy / distance) * 1.1;
          }
        }
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.45;
            drawLine(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y,
              opacity,
              "56, 189, 248"
            );
          }
        }
      }

      if (mouse.x !== null) {
        particles.forEach((particle) => {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < MOUSE_DISTANCE) {
            const opacity = (1 - distance / MOUSE_DISTANCE) * 0.75;
            drawLine(
              mouse.x,
              mouse.y,
              particle.x,
              particle.y,
              opacity,
              "34, 197, 94"
            );
          }
        });

        ctx.beginPath();
        ctx.fillStyle = "rgba(34, 197, 94, 0.9)";
        ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(125, 211, 252, 0.85)";
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}

export default ParticleCanvas;
