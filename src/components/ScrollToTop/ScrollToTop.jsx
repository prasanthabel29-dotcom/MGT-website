import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Smoothly scrolls the window to the top when the route pathname changes.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
