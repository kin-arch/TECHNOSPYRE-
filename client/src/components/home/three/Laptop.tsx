import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Realistic MacBook-style laptop facing the camera.
 * Open lid, screen visible front-on, brushed aluminum body, keyboard keys.
 */
export function Laptop() {
  const glowRef = useRef<THREE.Mesh>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (glowRef.current) {
      const m = glowRef.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.35 + Math.sin(clock.elapsedTime * 1.4) * 0.08;
    }
  });

  // Rich dashboard-looking texture
  const screenTexture = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 1200;
    c.height = 800;
    const ctx = c.getContext("2d")!;

    // Dark gradient background
    const grad = ctx.createLinearGradient(0, 0, 1280, 800);
    grad.addColorStop(0, "#0a1130");
    grad.addColorStop(0.5, "#0d1b8f");
    grad.addColorStop(1, "#0066ff");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1280, 800);

    // Top menu bar
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.fillRect(0, 0, 1280, 36);
    ["#FF5F57", "#FEBC2E", "#28C840"].forEach((color, i) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(24 + i * 22, 18, 7, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "bold 14px -apple-system, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("TechnoSpyre · Cloud Console", 110, 23);
    ctx.textAlign = "right";
    ctx.fillText("⌘  ●  ◐  ◔  100%", 1260, 23);

    // Sidebar
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 36, 220, 764);
    ctx.fillStyle = "rgba(0,207,255,0.9)";
    ctx.font = "bold 22px -apple-system, sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("◆  TechnoSpyre", 24, 88);
    const navItems = ["Dashboard", "Analytics", "Cloud", "AI Models", "Security", "Settings"];
    navItems.forEach((label, i) => {
      const y = 140 + i * 50;
      if (i === 0) {
        ctx.fillStyle = "rgba(0,207,255,0.18)";
        ctx.fillRect(12, y - 24, 196, 38);
      }
      ctx.fillStyle = i === 0 ? "#00CFFF" : "rgba(255,255,255,0.7)";
      ctx.font = "16px -apple-system, sans-serif";
      ctx.fillText(`●  ${label}`, 28, y);
    });

    // Main heading
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = "bold 38px -apple-system, sans-serif";
    ctx.fillText("Welcome back, Admin", 260, 100);
    ctx.font = "18px -apple-system, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.fillText("Live system metrics — last 24h", 260, 130);

    // KPI cards row
    const kpis = [
      { label: "Uptime", value: "99.98%", color: "#00CFFF" },
      { label: "Requests", value: "5.6M", color: "#28C840" },
      { label: "Latency", value: "42ms", color: "#FEBC2E" },
      { label: "Threats", value: "0", color: "#FF5F57" },
    ];
    kpis.forEach((k, i) => {
      const x = 260 + i * 245;
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      roundRect(ctx, x, 160, 220, 110, 14);
      ctx.fill();
      ctx.fillStyle = k.color;
      ctx.fillRect(x, 160, 4, 110);
      ctx.fillStyle = "rgba(255,255,255,0.55)";
      ctx.font = "13px -apple-system, sans-serif";
      ctx.fillText(k.label.toUpperCase(), x + 20, 188);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 36px -apple-system, sans-serif";
      ctx.fillText(k.value, x + 20, 235);
      ctx.fillStyle = k.color;
      ctx.font = "12px -apple-system, sans-serif";
      ctx.fillText("▲ +2.4% today", x + 20, 258);
    });

    // Big chart card
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    roundRect(ctx, 260, 300, 700, 340, 14);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "bold 18px -apple-system, sans-serif";
    ctx.fillText("Traffic Overview", 280, 330);

    // Faux chart line
    ctx.strokeStyle = "#00CFFF";
    ctx.lineWidth = 3;
    ctx.beginPath();
    const baseY = 580;
    for (let i = 0; i <= 60; i++) {
      const x = 290 + i * 11;
      const y = baseY - (Math.sin(i * 0.35) * 50 + Math.cos(i * 0.18) * 30 + i * 1.4);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    // Filled area
    ctx.lineTo(950, baseY);
    ctx.lineTo(290, baseY);
    ctx.closePath();
    const fill = ctx.createLinearGradient(0, 350, 0, baseY);
    fill.addColorStop(0, "rgba(0,207,255,0.45)");
    fill.addColorStop(1, "rgba(0,207,255,0)");
    ctx.fillStyle = fill;
    ctx.fill();

    // Right activity panel
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    roundRect(ctx, 980, 300, 280, 340, 14);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "bold 16px -apple-system, sans-serif";
    ctx.fillText("Activity", 1000, 330);
    for (let i = 0; i < 5; i++) {
      const y = 360 + i * 52;
      ctx.fillStyle = ["#00CFFF", "#28C840", "#FEBC2E", "#0066FF", "#A855F7"][i];
      ctx.beginPath();
      ctx.arc(1010, y + 14, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.font = "13px -apple-system, sans-serif";
      ctx.fillText(["Deployment ✓", "User signup", "Backup done", "API call", "AI inference"][i], 1030, y + 12);
      ctx.fillStyle = "rgba(255,255,255,0.4)";
      ctx.font = "11px -apple-system, sans-serif";
      ctx.fillText(`${i + 2}m ago`, 1030, y + 30);
    }

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    return tex;
  }, []);

  return (
    <group rotation={[0, 0, 0]} position={[0, -0.4, 0]}>
      {/* Base body — slim aluminum slab */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[3.4, 0.1, 2.3]} />
        <meshStandardMaterial color="#c8ccd4" metalness={0.95} roughness={0.28} />
      </mesh>
      {/* Bottom bevel */}
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[3.35, 0.02, 2.25]} />
        <meshStandardMaterial color="#9ba0a8" metalness={0.9} roughness={0.4} />
      </mesh>

      {/* Keyboard well (recessed darker area) */}
      <mesh position={[0, 0.051, -0.15]}>
        <boxGeometry args={[2.95, 0.005, 1.35]} />
        <meshStandardMaterial color="#0a0d18" metalness={0.5} roughness={0.7} />
      </mesh>

      {/* Keyboard keys grid */}
      <group position={[0, 0.057, -0.15]}>
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 14 }).map((_, col) => (
            <mesh
              key={`${row}-${col}`}
              position={[-1.35 + col * 0.21, 0, -0.45 + row * 0.22]}
              castShadow
            >
              <boxGeometry args={[0.18, 0.02, 0.18]} />
              <meshStandardMaterial color="#1a1f2e" metalness={0.4} roughness={0.65} />
            </mesh>
          ))
        )}
      </group>

      {/* Trackpad */}
      <mesh position={[0, 0.054, 0.75]} receiveShadow>
        <boxGeometry args={[1.5, 0.005, 0.85]} />
        <meshStandardMaterial color="#1c2030" metalness={0.6} roughness={0.35} />
      </mesh>

      {/* Screen lid — open and facing camera (slight backward tilt) */}
      <group position={[0, 0.05, -1.15]} rotation={[-0.08, 0, 0]}>
        {/* Lid back panel */}
        <mesh castShadow position={[0, 1.05, -0.04]}>
          <boxGeometry args={[3.4, 2.15, 0.08]} />
          <meshStandardMaterial color="#c8ccd4" metalness={0.95} roughness={0.32} />
        </mesh>
        {/* Black bezel */}
        <mesh position={[0, 1.05, 0.005]}>
          <planeGeometry args={[3.35, 2.1]} />
          <meshStandardMaterial color="#050810" metalness={0.2} roughness={0.5} />
        </mesh>
        {/* Screen face */}
        <mesh ref={screenRef} position={[0, 1.05, 0.012]}>
          <planeGeometry args={[3.15, 1.95]} />
          <meshStandardMaterial
            map={screenTexture}
            emissive="#0066FF"
            emissiveIntensity={0.55}
            emissiveMap={screenTexture}
            toneMapped={false}
          />
        </mesh>
        {/* Camera notch */}
        <mesh position={[0, 2.07, 0.013]}>
          <circleGeometry args={[0.025, 24]} />
          <meshStandardMaterial color="#000" />
        </mesh>
        {/* Front-glow halo */}
        <mesh ref={glowRef} position={[0, 1.05, 0.05]}>
          <planeGeometry args={[3.8, 2.6]} />
          <meshBasicMaterial
            color="#00CFFF"
            transparent
            opacity={0.35}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
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
