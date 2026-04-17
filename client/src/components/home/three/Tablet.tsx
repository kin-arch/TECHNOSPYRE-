import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Realistic iPad-style tablet, front-facing with bezel and home indicator. */
export function Tablet() {
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const m = glowRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.3 + Math.sin(clock.elapsedTime * 1.6) * 0.07;
    }
  });

  const screenTexture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 820;
    c.height = 1180;
    const ctx = c.getContext("2d")!;

    // Background
    const grad = ctx.createLinearGradient(0, 0, 820, 1180);
    grad.addColorStop(0, "#0a1130");
    grad.addColorStop(0.5, "#0d1b8f");
    grad.addColorStop(1, "#00CFFF");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 820, 1180);

    // Status bar
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = "bold 22px -apple-system, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("9:41", 40, 42);
    ctx.textAlign = "right";
    ctx.fillText("5G  ▮▮▮  100%", 780, 42);

    // Header
    ctx.textAlign = "left";
    ctx.fillStyle = "#fff";
    ctx.font = "bold 44px -apple-system, sans-serif";
    ctx.fillText("Cloud Console", 40, 130);
    ctx.font = "20px -apple-system, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.fillText("Manage your infrastructure on the go", 40, 165);

    // Search bar
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    roundRect(ctx, 40, 200, 740, 60, 16);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.5)";
    ctx.font = "20px -apple-system, sans-serif";
    ctx.fillText("⌕   Search resources, services...", 70, 240);

    // KPI tiles
    const kpis = [
      { label: "Servers", value: "248", color: "#00CFFF" },
      { label: "Users", value: "12.4K", color: "#28C840" },
      { label: "Uptime", value: "99.9%", color: "#FEBC2E" },
      { label: "AI Calls", value: "5.6M", color: "#A855F7" },
    ];
    kpis.forEach((k, i) => {
      const x = 40 + (i % 2) * 380;
      const y = 300 + Math.floor(i / 2) * 180;
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      roundRect(ctx, x, y, 360, 160, 22);
      ctx.fill();
      ctx.fillStyle = k.color;
      ctx.beginPath();
      ctx.arc(x + 50, y + 50, 24, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.font = "bold 14px -apple-system, sans-serif";
      ctx.fillText(k.label.toUpperCase(), x + 30, y + 110);
      ctx.font = "bold 44px -apple-system, sans-serif";
      ctx.fillText(k.value, x + 30, y + 150);
    });

    // Chart card
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    roundRect(ctx, 40, 680, 740, 360, 22);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 22px -apple-system, sans-serif";
    ctx.fillText("Performance · Last 7 days", 60, 720);

    // Bar chart
    const bars = [60, 90, 70, 130, 110, 160, 140];
    bars.forEach((h, i) => {
      const x = 80 + i * 95;
      const y = 1010 - h;
      const g = ctx.createLinearGradient(0, y, 0, 1010);
      g.addColorStop(0, "#00CFFF");
      g.addColorStop(1, "rgba(0,207,255,0.2)");
      ctx.fillStyle = g;
      roundRect(ctx, x, y, 70, h, 8);
      ctx.fill();
    });

    // Bottom dock
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    roundRect(ctx, 140, 1080, 540, 80, 24);
    ctx.fill();
    ["#00CFFF", "#28C840", "#FEBC2E", "#A855F7", "#FF5F57"].forEach((color, i) => {
      ctx.fillStyle = color;
      roundRect(ctx, 170 + i * 100, 1095, 56, 50, 12);
      ctx.fill();
    });

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }, []);

  return (
    <group>
      {/* Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.3, 3.1, 0.12]} />
        <meshStandardMaterial color="#1a2030" metalness={0.92} roughness={0.28} />
      </mesh>
      {/* Aluminum back rim */}
      <mesh position={[0, 0, -0.061]}>
        <boxGeometry args={[2.28, 3.08, 0.005]} />
        <meshStandardMaterial color="#c8ccd4" metalness={0.95} roughness={0.3} />
      </mesh>
      {/* Bezel (black plate) */}
      <mesh position={[0, 0, 0.062]}>
        <planeGeometry args={[2.25, 3.05]} />
        <meshStandardMaterial color="#050810" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.066]}>
        <planeGeometry args={[2.0, 2.85]} />
        <meshStandardMaterial
          map={screenTexture}
          emissive="#0066FF"
          emissiveIntensity={0.5}
          emissiveMap={screenTexture}
          toneMapped={false}
        />
      </mesh>
      {/* Front camera dot */}
      <mesh position={[0, 1.48, 0.067]}>
        <circleGeometry args={[0.022, 24]} />
        <meshStandardMaterial color="#0a0d18" />
      </mesh>
      {/* Glow */}
      <mesh ref={glowRef} position={[0, 0, 0.09]}>
        <planeGeometry args={[2.7, 3.5]} />
        <meshBasicMaterial color="#00CFFF" transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
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
