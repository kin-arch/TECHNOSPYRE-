import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Realistic iPhone-style smartphone, front-facing with Dynamic Island. */
export function Phone() {
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const m = glowRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.32 + Math.sin(clock.elapsedTime * 2) * 0.08;
    }
  });

  const screenTexture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 600;
    c.height = 1300;
    const ctx = c.getContext("2d")!;

    // Background
    const grad = ctx.createLinearGradient(0, 0, 600, 1300);
    grad.addColorStop(0, "#0a1130");
    grad.addColorStop(0.5, "#0066FF");
    grad.addColorStop(1, "#00CFFF");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 1300);

    // Status bar
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = "bold 26px -apple-system, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("9:41", 40, 70);
    ctx.textAlign = "right";
    ctx.fillText("5G  ▮  100%", 560, 70);

    // Greeting
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.font = "20px -apple-system, sans-serif";
    ctx.fillText("Good morning,", 40, 200);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 38px -apple-system, sans-serif";
    ctx.fillText("Admin 👋", 40, 250);

    // Hero balance card
    ctx.fillStyle = "rgba(255,255,255,0.14)";
    roundRect(ctx, 40, 290, 520, 200, 24);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "16px -apple-system, sans-serif";
    ctx.fillText("TOTAL REQUESTS · 24h", 64, 330);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 56px -apple-system, sans-serif";
    ctx.fillText("5.62M", 64, 400);
    ctx.fillStyle = "#28C840";
    ctx.font = "bold 18px -apple-system, sans-serif";
    ctx.fillText("▲ +12.4%", 64, 440);
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.fillText("vs yesterday", 170, 440);

    // Mini chart on hero card
    ctx.strokeStyle = "rgba(255,255,255,0.85)";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= 20; i++) {
      const x = 350 + i * 10;
      const y = 420 - Math.sin(i * 0.4) * 18 - i * 1.2;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Quick action grid
    const actions = [
      { label: "Deploy", color: "#00CFFF" },
      { label: "Scale", color: "#28C840" },
      { label: "Logs", color: "#FEBC2E" },
      { label: "AI", color: "#A855F7" },
    ];
    actions.forEach((a, i) => {
      const x = 40 + (i % 2) * 270;
      const y = 530 + Math.floor(i / 2) * 130;
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      roundRect(ctx, x, y, 250, 110, 20);
      ctx.fill();
      ctx.fillStyle = a.color;
      roundRect(ctx, x + 20, y + 22, 60, 60, 14);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 22px -apple-system, sans-serif";
      ctx.fillText(a.label, x + 100, y + 65);
    });

    // Activity list
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "bold 22px -apple-system, sans-serif";
    ctx.fillText("Recent Activity", 40, 830);
    const acts = [
      { t: "Deployment ✓", s: "prod-cluster · 2m", color: "#28C840" },
      { t: "User signup", s: "+1 user · 5m", color: "#00CFFF" },
      { t: "AI inference", s: "gpt-4 · 8m", color: "#A855F7" },
      { t: "Backup done", s: "12.4 GB · 14m", color: "#FEBC2E" },
    ];
    acts.forEach((a, i) => {
      const y = 870 + i * 88;
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      roundRect(ctx, 40, y, 520, 76, 16);
      ctx.fill();
      ctx.fillStyle = a.color;
      ctx.beginPath();
      ctx.arc(80, y + 38, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 18px -apple-system, sans-serif";
      ctx.fillText(a.t, 115, y + 34);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "14px -apple-system, sans-serif";
      ctx.fillText(a.s, 115, y + 56);
    });

    // Home indicator
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    roundRect(ctx, 220, 1260, 160, 6, 3);
    ctx.fill();

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }, []);

  return (
    <group>
      {/* Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.45, 2.95, 0.16]} />
        <meshStandardMaterial color="#1a2030" metalness={0.95} roughness={0.22} />
      </mesh>
      {/* Side rail accent */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.47, 2.97, 0.155]} />
        <meshStandardMaterial color="#c8ccd4" metalness={0.95} roughness={0.3} />
      </mesh>
      {/* Bezel plate */}
      <mesh position={[0, 0, 0.082]}>
        <planeGeometry args={[1.42, 2.92]} />
        <meshStandardMaterial color="#050810" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.085]}>
        <planeGeometry args={[1.32, 2.82]} />
        <meshStandardMaterial
          map={screenTexture}
          emissive="#0066FF"
          emissiveIntensity={0.5}
          emissiveMap={screenTexture}
          toneMapped={false}
        />
      </mesh>
      {/* Dynamic Island */}
      <mesh position={[0, 1.32, 0.087]}>
        <planeGeometry args={[0.42, 0.12]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      {/* Side button */}
      <mesh position={[0.74, 0.4, 0]}>
        <boxGeometry args={[0.02, 0.35, 0.08]} />
        <meshStandardMaterial color="#9ba0a8" metalness={0.9} roughness={0.4} />
      </mesh>
      {/* Glow */}
      <mesh ref={glowRef} position={[0, 0, 0.11]}>
        <planeGeometry args={[1.8, 3.4]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.32} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
