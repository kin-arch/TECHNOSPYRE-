import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { Laptop } from "./Laptop";
import { Tablet } from "./Tablet";
import { Phone } from "./Phone";

interface DeviceShowcaseProps {
  /** 0 = laptop, 1 = tablet, 2 = phone */
  index: number;
}

function DeviceStage({ index }: { index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const prevIndex = useRef(index);
  const targetRot = useRef({ x: 0, y: 0 });
  const { mouse } = useThree();

  useEffect(() => {
    if (!groupRef.current) return;
    const dir = index > prevIndex.current ? 1 : -1;
    prevIndex.current = index;

    const g = groupRef.current;
    gsap.killTweensOf([g.rotation, g.scale, g.position]);

    g.rotation.set(-0.5, dir * Math.PI * 0.5, 0);
    g.scale.set(0.5, 0.5, 0.5);
    g.position.set(0, -0.6, -1);

    const tl = gsap.timeline();
    tl.to(g.position, { y: 0, z: 0, duration: 1.1, ease: "power3.out" }, 0);
    tl.to(g.scale, { x: 1, y: 1, z: 1, duration: 1.0, ease: "back.out(1.4)" }, 0);
    tl.to(g.rotation, { y: 0, duration: 1.2, ease: "power3.out" }, 0);
    tl.to(g.rotation, { x: 0, duration: 1.4, ease: "power2.out" }, 0.1);
  }, [index]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    targetRot.current.y = mouse.x * 0.35;
    targetRot.current.x = -mouse.y * 0.2;
    if (groupRef.current.scale.x > 0.95) {
      groupRef.current.rotation.y +=
        (targetRot.current.y - groupRef.current.rotation.y) * Math.min(delta * 3, 1);
      groupRef.current.rotation.x +=
        (targetRot.current.x - groupRef.current.rotation.x) * Math.min(delta * 3, 1);
      groupRef.current.position.y = Math.sin(performance.now() * 0.001) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {index === 0 && <Laptop />}
      {index === 1 && <Tablet />}
      {index === 2 && <Phone />}
    </group>
  );
}

export function DeviceShowcase({ index }: DeviceShowcaseProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0.25, 4.2], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[3, 5, 5]}
        intensity={1.4}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#00CFFF" />
      <pointLight position={[0, -2, 4]} intensity={0.6} color="#0066FF" />
      <spotLight
        position={[0, 6, 3]}
        angle={0.4}
        penumbra={1}
        intensity={0.8}
        color="#ffffff"
      />

      <Suspense fallback={null}>
        <DeviceStage index={index} />
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.55}
          scale={8}
          blur={2.4}
          far={3}
          color="#000"
        />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
