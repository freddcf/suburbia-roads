import { useRef } from "react";
import { Billboard } from "@react-three/drei";
import * as THREE from "three";

interface HotspotProps {
  position: [number, number, number];
  isVisivle: boolean;
  color?: string;
}

export function Hotspot({
  position,
  isVisivle,
  color = "#E6FC6A",
}: HotspotProps) {
  const hotspotRef = useRef<THREE.Mesh>(null);

  return (
    <Billboard position={position} follow={true}>
      <mesh ref={hotspotRef} visible={isVisivle}>
        <circleGeometry args={[0.02, 35]} />
        <meshStandardMaterial color={color} transparent opacity={1} />
      </mesh>

      <mesh
        visible={isVisivle}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <circleGeometry args={[0.03, 35]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </Billboard>
  );
}
