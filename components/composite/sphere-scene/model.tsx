import {
  MeshReflectorMaterial,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";

function Model() {
  return (
    <group>
      <OrbitControls />

      <mesh>
        <sphereGeometry />
        {/* <meshBasicMaterial color={"red"} />
        < */}
        <SpotLight />
        <MeshReflectorMaterial mirror={2} />
      </mesh>
    </group>
  );
}

export default Model;
