import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

interface MacBookShowcaseProps {
  index?: number;
}

function createDashboardTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext('2d')!;

  // Background gradient
  const grad = ctx.createLinearGradient(0, 0, 1024, 640);
  grad.addColorStop(0, '#0f172a');
  grad.addColorStop(1, '#1e1b4b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 640);

  // Sidebar
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(0, 0, 220, 640);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  for (let i = 0; i < 6; i++) {
    ctx.fillRect(20, 90 + i * 50, 180, 30);
  }

  // Header bar
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.fillRect(220, 0, 804, 70);

  // Logo area
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 32px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Technospyre', 110, 45);

  // Main text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('BUILD THE FUTURE', 260, 160);

  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText('Enterprise HMS & ERP Solutions Dashboard', 260, 200);

  // Dashboard Cards
  ctx.fillStyle = 'rgba(56, 189, 248, 0.1)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(260, 250, 220, 140, 10); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.roundRect(500, 250, 220, 140, 10); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.roundRect(740, 250, 220, 140, 10); ctx.fill(); ctx.stroke();

  // Chart area
  ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
  ctx.beginPath(); ctx.roundRect(260, 410, 700, 200, 10); ctx.fill(); ctx.stroke();

  // Chart line
  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(260, 580);
  ctx.lineTo(400, 480);
  ctx.lineTo(550, 530);
  ctx.lineTo(700, 440);
  ctx.lineTo(960, 460);
  ctx.stroke();

  // Chart fill
  const fillGrad = ctx.createLinearGradient(0, 440, 0, 610);
  fillGrad.addColorStop(0, 'rgba(56, 189, 248, 0.5)');
  fillGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
  ctx.fillStyle = fillGrad;
  ctx.lineTo(960, 610);
  ctx.lineTo(260, 610);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;
  texture.wrapS = THREE.RepeatWrapping;
  const screenSize = [29.4, 20];
  texture.repeat.y = (1024 / 640 / screenSize[0]) * screenSize[1];
  return texture;
}

export const MacBookShowcase: React.FC<MacBookShowcaseProps> = ({ index }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasEl = canvasRef.current;
    const screenSize = [29.4, 20];

    // Outer-scope vars
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let orbit: OrbitControls;
    let lightHolder: THREE.Group;
    let macGroup: THREE.Group;
    let lidGroup: THREE.Group;
    let bottomGroup: THREE.Group;
    let screenLight: THREE.RectAreaLight;

    let darkPlasticMaterial: THREE.MeshStandardMaterial;
    let cameraMaterial: THREE.MeshBasicMaterial;
    let baseMetalMaterial: THREE.MeshStandardMaterial;
    let logoMaterial: THREE.MeshBasicMaterial;
    let screenMaterial: THREE.MeshBasicMaterial;
    let keyboardMaterial: THREE.MeshBasicMaterial;
    let screenImageTexture: THREE.CanvasTexture;

    let mainTl: gsap.core.Timeline;
    let rafId: number;

    // Smooth mouse tracking
    let mouse = { x: 0, y: 0 };
    let targetRot = { x: 0, y: 0 };
    let currentRot = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasEl.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    // Track on the whole window so cursor doesn't need to be over the canvas
    window.addEventListener('mousemove', handleMouseMove);

    // ── initScene ─────────────────────────────────────────────────────────────
    function initScene() {
      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(32, canvasEl.clientWidth / canvasEl.clientHeight, 0.1, 1000);
      camera.position.set(0, 0.2, 4.5);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvasEl });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      lightHolder = new THREE.Group();
      scene.add(lightHolder);

      const keyLight = new THREE.PointLight(0xffffff, 1.0);
      keyLight.position.set(2, 3, 6);
      lightHolder.add(keyLight);

      const rimLight = new THREE.DirectionalLight(0x88ccff, 0.5);
      rimLight.position.set(-3, 2, -2);
      scene.add(rimLight);

      // Orbit controls — disabled zoom and rotate, only used for damping
      orbit = new OrbitControls(camera, renderer.domElement);
      orbit.enablePan = false;
      orbit.enableZoom = false;      // ← no scroll zoom
      orbit.enableRotate = false;    // ← no click-drag rotation
      orbit.enableDamping = false;

      macGroup = new THREE.Group();
      macGroup.position.set(0, -0.2, 0);
      macGroup.scale.set(0.22, 0.22, 0.22);
      scene.add(macGroup);

      lidGroup = new THREE.Group();
      macGroup.add(lidGroup);
      bottomGroup = new THREE.Group();
      macGroup.add(bottomGroup);
    }

    function updateSceneSize() {
      const w = canvasEl.clientWidth;
      const h = canvasEl.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }

    // ── createMaterials ───────────────────────────────────────────────────────
    function createMaterials() {
      const textLoader = new THREE.TextureLoader();

      screenImageTexture = createDashboardTexture();
      screenMaterial = new THREE.MeshBasicMaterial({
        map: screenImageTexture,
        transparent: true,
        opacity: 0,
        side: THREE.BackSide,
      });

      const keyboardTexture = textLoader.load('https://ksenia-k.com/img/threejs/keyboard-overlay.png');
      keyboardMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        alphaMap: keyboardTexture,
        transparent: true,
      });

      darkPlasticMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.9, metalness: 0.9 });
      cameraMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
      baseMetalMaterial = new THREE.MeshStandardMaterial({ color: 0xcecfd3, metalness: 0.8, roughness: 0.2 });
      logoMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    }

    // ── render loop ───────────────────────────────────────────────────────────
    function render() {
      rafId = requestAnimationFrame(render);

      // Smooth mouse-responsive tilt only
      targetRot.y = mouse.x * 0.18;
      targetRot.x = -mouse.y * 0.10;
      currentRot.y += (targetRot.y - currentRot.y) * 0.04;
      currentRot.x += (targetRot.x - currentRot.x) * 0.04;

      // Apply tilt on top of whatever GSAP set for macGroup
      lightHolder.quaternion.copy(camera.quaternion);
      renderer.render(scene, camera);
    }

    // ── parseModel ────────────────────────────────────────────────────────────
    function parseModel(glb: any) {
      [...glb.scene.children].forEach((child: THREE.Object3D) => {
        if (child.name === '_top') {
          lidGroup.add(child);
          (child as THREE.Group).children.forEach((mesh: any) => {
            if (mesh.name === 'lid') mesh.material = baseMetalMaterial;
            else if (mesh.name === 'logo') mesh.material = logoMaterial;
            else if (mesh.name === 'screen-frame') mesh.material = darkPlasticMaterial;
            else if (mesh.name === 'camera') mesh.material = cameraMaterial;
          });
        } else if (child.name === '_bottom') {
          bottomGroup.add(child);
          (child as THREE.Group).children.forEach((mesh: any) => {
            if (['base'].includes(mesh.name)) mesh.material = baseMetalMaterial;
            else if (['legs', 'keyboard', 'inner'].includes(mesh.name)) mesh.material = darkPlasticMaterial;
          });
        }
      });
    }

    function addScreen() {
      const screenMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(screenSize[0], screenSize[1]),
        screenMaterial,
      );
      screenMesh.position.set(0, 10.5, -0.11);
      screenMesh.rotation.set(Math.PI, 0, 0);
      lidGroup.add(screenMesh);

      screenLight = new THREE.RectAreaLight(0xffffff, 0, screenSize[0], screenSize[1]);
      screenLight.position.set(0, 10.5, 0);
      screenLight.rotation.set(Math.PI, 0, 0);
      lidGroup.add(screenLight);

      const darkScreen = screenMesh.clone();
      darkScreen.position.set(0, 10.5, -0.111);
      darkScreen.rotation.set(Math.PI, Math.PI, 0);
     
      lidGroup.add(darkScreen);
    }

    function addKeyboard() {
      const keyboardKeys = new THREE.Mesh(
        new THREE.PlaneGeometry(27.7, 11.6),
        keyboardMaterial,
      );
      keyboardKeys.rotation.set(-0.5 * Math.PI, 0, 0);
      keyboardKeys.position.set(0, 0.045, 7.21);
      bottomGroup.add(keyboardKeys);
    }

    // ── createTimelines ───────────────────────────────────────────────────────
    function createTimelines() {
      // 1. Screen fades in when lid opens
      const screenOnTl = gsap.timeline({ paused: true })
        .to(screenMaterial, { duration: 0.4, opacity: 0.96 }, 0)
        .to(screenLight, { duration: 0.4, intensity: 1.5 }, 0);

      // 2. Lid opens — this is the ONLY animation on load
      const laptopOpeningTl = gsap.timeline({ paused: true })
        .from(lidGroup.position, { duration: 0.75, z: '+=0.1' }, 0)
        .fromTo(lidGroup.rotation, { x: 0.5 * Math.PI }, { x: -0.18 * Math.PI, duration: 1.2, ease: 'power2.out' }, 0)
        .to(screenOnTl, { duration: 0.06, progress: 1 }, 0.1);

      // 3. Laptop enters from bottom, opens lid
      const laptopAppearTl = gsap.timeline({ paused: true })
        .fromTo(
          macGroup.rotation,
          { x: 0.4 * Math.PI, y: 0.15 * Math.PI },
          { duration: 1.6, x: 0.03 * Math.PI, y: -0.08 * Math.PI, ease: 'power3.out' },
          0,
        )
        .fromTo(
          macGroup.position,
          { y: -1.5 },
          { duration: 1.2, y: -0.2, ease: 'power3.out' },
          0,
        )
        .fromTo(
          macGroup.scale,
          { x: 0.08, y: 0.08, z: 0.08 },
          { duration: 1.2, x: 0.22, y: 0.22, z: 0.22, ease: 'back.out(1.2)' },
          0,
        );

      // Master: appear → open, nothing else
      mainTl = gsap.timeline()
        .to(laptopAppearTl, { duration: 1.6, progress: 1, ease: 'none' }, 0)
        .to(laptopOpeningTl, { duration: 1.2, progress: 1, ease: 'none' }, 0.3);

      // Very subtle continuous float (only Y, tiny amount)
      gsap.to([lidGroup.position, bottomGroup.position], {
        duration: 2.5,
        y: '+=0.08',
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    // ── Boot ──────────────────────────────────────────────────────────────────
    initScene();
    createMaterials();

    const modelLoader = new GLTFLoader();
    modelLoader.load(
      'https://ksenia-k.com/models/mac-noUv.glb',
      (glb) => {
        parseModel(glb);
        addScreen();
        addKeyboard();
        createTimelines();
        mainTl.play(0);
        render();
        updateSceneSize();
      },
      undefined,
      (err) => console.error('[MacBookShowcase] GLTF error:', err),
    );

    const onResize = () => updateSceneSize();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mainTl) mainTl.kill();
      gsap.killTweensOf([lidGroup?.position, bottomGroup?.position]);
      renderer?.dispose();
    };
  }, [index]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: 'none' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};
