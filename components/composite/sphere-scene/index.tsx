"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./model";

function SphereScene() {
  return (
    <Canvas>
      <Model />
    </Canvas>
  );
}

export default SphereScene;
