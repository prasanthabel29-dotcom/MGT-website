import React, { useEffect, useRef } from "react";
import styles from "./WebGLHero.module.css";
import { useWebGLSupport } from "./useWebGLSupport";
import { createNetworkScene } from "./scenes/networkScene";
import { createAmbientScene } from "./scenes/ambientScene";

function WebGLHero({ variant = "ambient", className = "" }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const { enabled, reducedMotion } = useWebGLSupport();

  useEffect(() => {
    if (!enabled || !canvasRef.current) return undefined;

    const factory = variant === "network" ? createNetworkScene : createAmbientScene;
    sceneRef.current = factory(canvasRef.current, { reducedMotion });

    return () => {
      sceneRef.current?.destroy();
      sceneRef.current = null;
    };
  }, [enabled, reducedMotion, variant]);

  const fallbackClass =
    variant === "network" ? styles.fallbackNetwork : styles.fallbackAmbient;

  return (
    <div
      className={`${styles.wrap} ${className}`}
      aria-hidden="true"
    >
      {enabled ? (
        <canvas ref={canvasRef} className={styles.canvas} />
      ) : (
        <div className={fallbackClass} />
      )}
      {variant === "ambient" && <div className={styles.grid} />}
      {variant === "network" && <div className={styles.networkGlow} />}
    </div>
  );
}

export default WebGLHero;
