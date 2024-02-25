import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const useMousePosition = () => {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const options = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, options),
    y: useSpring(mouse.y, options),
  };

  const updateMousePosition = (event: MouseEvent) => {
    mouse.x.set(event.clientX);
    mouse.y.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  });

  return smoothMouse;
};
