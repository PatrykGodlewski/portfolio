"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CursorFollower() {
  const SIZE = 64;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const options = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, options),
    y: useSpring(mouse.y, options),
  };

  const opacity = useMotionValue(0);

  const hide = () => {
    opacity.set(0);
  };

  const show = () => {
    opacity.set(100);
  };

  const updateMousePosition = (event: MouseEvent) => {
    mouse.x.set(event.pageX - SIZE / 2);
    mouse.y.set(event.pageY - SIZE / 2);
    show();
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  });

  return (
    <motion.div
      className="bg-accent absolute rounded-full mix-blend-multiply pointer-events-none z-50"
      style={{
        translateX: smoothMouse.x,
        translateY: smoothMouse.y,
        width: SIZE,
        height: SIZE,
        opacity,
      }}
    />
  );
}

export default CursorFollower;
