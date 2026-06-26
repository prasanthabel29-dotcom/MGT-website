import { useEffect, useState } from "react";

export function useWebGLSupport() {
  const [support, setSupport] = useState({
    enabled: false,
    reducedMotion: false,
    isMobile: false,
  });

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const hasWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          canvas.getContext("webgl2") || canvas.getContext("webgl")
        );
      } catch {
        return false;
      }
    })();

    setSupport({
      enabled: hasWebGL && !reducedMotion,
      reducedMotion,
      isMobile,
    });
  }, []);

  return support;
}
