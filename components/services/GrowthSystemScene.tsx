"use client";

/* eslint-disable react-hooks/immutability --
   Three.js scene graphs and materials are imperative and are intentionally
   mutated per-frame inside useFrame — this is the standard r3f pattern. */

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";
import * as THREE from "three";

const STAGE_COUNT = 5;
const SEGMENTS = 6;

type Palette = {
  fill: string;
  edge: string;
  accent: string;
  accentSoft: string;
  hub: string;
  line: string;
};

const PALETTES: Record<"dark" | "light", Palette> = {
  dark: {
    fill: "#94A3B8",
    edge: "#E2E8F0",
    accent: "#60A5FA",
    accentSoft: "#3B82F6",
    hub: "#93C5FD",
    line: "#3B82F6",
  },
  light: {
    fill: "#475569",
    edge: "#0F172A",
    accent: "#2563EB",
    accentSoft: "#1D4ED8",
    hub: "#1D4ED8",
    line: "#2563EB",
  },
};

const LAYOUT_DESKTOP: THREE.Vector3[] = [
  new THREE.Vector3(-5.9, -0.15, 0.25),
  new THREE.Vector3(-2.95, 0.45, -0.55),
  new THREE.Vector3(0, -0.1, 0.15),
  new THREE.Vector3(2.95, 0.5, -0.55),
  new THREE.Vector3(5.9, -0.12, 0.25),
];

const LAYOUT_MOBILE: THREE.Vector3[] = [
  new THREE.Vector3(-0.55, -3.7, 0.2),
  new THREE.Vector3(0.55, -1.85, -0.35),
  new THREE.Vector3(-0.4, 0, 0.15),
  new THREE.Vector3(0.5, 1.85, -0.3),
  new THREE.Vector3(-0.5, 3.7, 0.2),
];

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

function damp(current: number, target: number, lambda: number, dt: number) {
  return THREE.MathUtils.damp(current, target, lambda, dt);
}

function dampVec3(current: THREE.Vector3, target: THREE.Vector3, lambda: number, dt: number) {
  current.x = damp(current.x, target.x, lambda, dt);
  current.y = damp(current.y, target.y, lambda, dt);
  current.z = damp(current.z, target.z, lambda, dt);
  return current;
}

function ringPosition(index: number, radius: number, out: THREE.Vector3) {
  const angle = -Math.PI / 2 + (index / STAGE_COUNT) * Math.PI * 2;
  out.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.72, Math.sin(angle * 2) * 0.35);
  return out;
}

function makeFillMaterial(color: string, opacity: number) {
  return new THREE.MeshStandardMaterial({
    color,
    transparent: true,
    opacity,
    roughness: 0.28,
    metalness: 0.18,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
}

function makeEdgeMaterial(color: string, opacity: number) {
  return new THREE.LineBasicMaterial({ color, transparent: true, opacity });
}

function addEdges(parent: THREE.Group, geometry: THREE.BufferGeometry, material: THREE.LineBasicMaterial) {
  const lines = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 20), material);
  parent.add(lines);
  return lines;
}

function createBuildModule(fillMat: THREE.Material, edgeMat: THREE.LineBasicMaterial) {
  const group = new THREE.Group();
  const slabs: Array<[number, number, number, number, number, number]> = [
    [1.7, 0.08, 1.15, 0, -0.55, 0],
    [1.4, 0.14, 0.95, 0.04, -0.32, 0.06],
    [1.1, 0.14, 0.78, -0.05, -0.06, -0.05],
    [0.82, 0.14, 0.6, 0.06, 0.2, 0.04],
    [0.55, 0.12, 0.42, -0.03, 0.44, -0.03],
  ];
  for (const [w, h, d, x, y, z] of slabs) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, fillMat);
    mesh.position.set(x, y, z);
    group.add(mesh);
    addEdges(group, geo, edgeMat).position.copy(mesh.position);
  }
  return group;
}

function createAttractModule(
  fillMat: THREE.Material,
  edgeMat: THREE.LineBasicMaterial,
  accentMat: THREE.MeshStandardMaterial
) {
  const group = new THREE.Group();

  const pillarGeo = new THREE.CylinderGeometry(0.055, 0.075, 1.55, 10);
  const pillar = new THREE.Mesh(pillarGeo, fillMat);
  pillar.position.y = 0.05;
  group.add(pillar);
  addEdges(group, pillarGeo, edgeMat).position.copy(pillar.position);

  const ringSpecs: Array<[number, number, number]> = [
    [0.42, -0.45, 0.035],
    [0.62, -0.05, 0.032],
    [0.82, 0.38, 0.028],
  ];
  for (const [radius, y, tube] of ringSpecs) {
    const geo = new THREE.TorusGeometry(radius, tube, 8, 40);
    const mesh = new THREE.Mesh(geo, fillMat);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.y = y;
    group.add(mesh);
    const edges = addEdges(group, geo, edgeMat);
    edges.rotation.copy(mesh.rotation);
    edges.position.copy(mesh.position);
  }

  const beacon = new THREE.Mesh(new THREE.SphereGeometry(0.12, 14, 14), accentMat);
  beacon.position.y = 0.92;
  group.add(beacon);

  return group;
}

function createConvertModule(
  fillMat: THREE.Material,
  edgeMat: THREE.LineBasicMaterial,
  accentMat: THREE.MeshStandardMaterial
) {
  const group = new THREE.Group();
  const tiers: Array<[number, number, number, number]> = [
    [0.72, 0.48, 0.34, 0.48],
    [0.48, 0.26, 0.32, 0.14],
    [0.26, 0.1, 0.28, -0.16],
  ];
  for (const [rTop, rBottom, h, y] of tiers) {
    const geo = new THREE.CylinderGeometry(rTop, rBottom, h, 20, 1, true);
    const mesh = new THREE.Mesh(geo, fillMat);
    mesh.position.y = y;
    group.add(mesh);
    addEdges(group, geo, edgeMat).position.copy(mesh.position);
  }

  const node = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 14), accentMat);
  node.position.y = -0.52;
  group.add(node);

  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.18, 8), fillMat);
  stem.position.y = -0.34;
  group.add(stem);

  return group;
}

function createAutomateModule(
  fillMat: THREE.Material,
  edgeMat: THREE.LineBasicMaterial,
  accentMat: THREE.MeshStandardMaterial
) {
  const group = new THREE.Group();

  const ringGeo = new THREE.TorusGeometry(0.68, 0.05, 10, 44);
  const ring = new THREE.Mesh(ringGeo, fillMat);
  ring.rotation.x = Math.PI / 2.15;
  group.add(ring);
  addEdges(group, ringGeo, edgeMat).rotation.copy(ring.rotation);

  const crossGeo = new THREE.TorusGeometry(0.5, 0.04, 10, 40);
  const cross = new THREE.Mesh(crossGeo, fillMat);
  cross.rotation.y = Math.PI / 2;
  cross.rotation.z = 0.35;
  group.add(cross);
  addEdges(group, crossGeo, edgeMat).rotation.copy(cross.rotation);

  const nodeGeo = new THREE.SphereGeometry(0.09, 12, 12);
  for (const a of [0.3, 2.4, 4.4]) {
    const node = new THREE.Mesh(nodeGeo, accentMat);
    node.position.set(Math.cos(a) * 0.68, Math.sin(a) * 0.18, Math.sin(a) * 0.62);
    group.add(node);
  }

  const coreGeo = new THREE.BoxGeometry(0.26, 0.26, 0.26);
  const core = new THREE.Mesh(coreGeo, fillMat);
  core.rotation.set(0.5, 0.6, 0.2);
  group.add(core);
  addEdges(group, coreGeo, edgeMat).rotation.copy(core.rotation);

  return group;
}

function createIntelligenceModule(
  fillMat: THREE.Material,
  edgeMat: THREE.LineBasicMaterial,
  accentMat: THREE.MeshStandardMaterial
) {
  const group = new THREE.Group();

  const shellGeo = new THREE.IcosahedronGeometry(0.62, 0);
  group.add(new THREE.Mesh(shellGeo, fillMat));
  addEdges(group, shellGeo, edgeMat);

  const coreGeo = new THREE.IcosahedronGeometry(0.3, 0);
  group.add(new THREE.Mesh(coreGeo, accentMat));
  addEdges(group, coreGeo, edgeMat).scale.setScalar(1.02);

  const haloGeo = new THREE.TorusGeometry(0.82, 0.025, 8, 48);
  const halo = new THREE.Mesh(haloGeo, fillMat);
  halo.rotation.x = Math.PI / 2.4;
  halo.rotation.y = 0.4;
  group.add(halo);
  addEdges(group, haloGeo, edgeMat).rotation.copy(halo.rotation);

  const satGeo = new THREE.SphereGeometry(0.07, 10, 10);
  for (const [x, y, z] of [
    [0.75, 0.35, 0.2],
    [-0.6, 0.15, 0.55],
    [0.1, -0.7, -0.4],
  ] as Array<[number, number, number]>) {
    const sat = new THREE.Mesh(satGeo, accentMat);
    sat.position.set(x, y, z);
    group.add(sat);
  }

  return group;
}

type Connection = { mesh: THREE.Mesh; from: number; to: number };

type ModuleRig = {
  root: THREE.Group;
  visual: THREE.Group;
  fillMats: THREE.MeshStandardMaterial[];
  edgeMats: THREE.LineBasicMaterial[];
  accentMats: THREE.MeshStandardMaterial[];
  layoutPos: THREE.Vector3;
  ringPos: THREE.Vector3;
  currentPos: THREE.Vector3;
};

const UP = new THREE.Vector3(0, 1, 0);
const DIR = new THREE.Vector3();
const MID = new THREE.Vector3();
const QUAT = new THREE.Quaternion();
const ORIGIN = new THREE.Vector3(0, 0, 0);

function updateTie(mesh: THREE.Mesh, from: THREE.Vector3, to: THREE.Vector3, t: number) {
  if (t <= 0.001) {
    mesh.visible = false;
    return;
  }
  DIR.subVectors(to, from);
  const len = DIR.length();
  if (len < 0.0001) {
    mesh.visible = false;
    return;
  }
  DIR.normalize();
  const drawLen = len * t;
  MID.copy(from).addScaledVector(DIR, drawLen * 0.5);
  mesh.position.copy(MID);
  mesh.quaternion.copy(QUAT.setFromUnitVectors(UP, DIR));
  mesh.scale.set(1, drawLen, 1);
  mesh.visible = true;
}

function Systems({
  progress,
  theme,
  isMobile,
}: {
  progress: MotionValue<number>;
  theme: "dark" | "light";
  isMobile: boolean;
}) {
  const { camera } = useThree();
  const palette = PALETTES[theme];
  const rootRef = useRef<THREE.Group>(null);
  const hubRef = useRef<THREE.Group>(null);
  const groundRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));
  const camTarget = useRef(new THREE.Vector3(0, 0.4, 11));
  const focus = useRef(new THREE.Vector3());
  const tmp = useRef(new THREE.Vector3());

  const layout = isMobile ? LAYOUT_MOBILE : LAYOUT_DESKTOP;
  const baseZ = isMobile ? 9.2 : 11;
  const ringRadius = isMobile ? 2.15 : 3.1;

  const shared = useMemo(() => {
    const lineMat = new THREE.MeshBasicMaterial({ color: palette.line, transparent: true, opacity: 0.7 });
    const spokeMat = new THREE.MeshBasicMaterial({ color: palette.accent, transparent: true, opacity: 0 });
    const hubMat = new THREE.MeshStandardMaterial({
      color: palette.hub,
      emissive: new THREE.Color(palette.hub),
      emissiveIntensity: 0.7,
      roughness: 0.3,
      metalness: 0.3,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const groundMat = new THREE.MeshBasicMaterial({
      color: palette.edge,
      transparent: true,
      opacity: 0,
    });
    const tieGeo = new THREE.CylinderGeometry(0.016, 0.016, 1, 6, 1, true);
    const spokeGeo = new THREE.CylinderGeometry(0.012, 0.012, 1, 6, 1, true);
    const ringGeo = new THREE.TorusGeometry(1, 0.012, 6, 72);
    return { lineMat, spokeMat, hubMat, groundMat, tieGeo, spokeGeo, ringGeo };
  }, [palette]);

  const rigs = useMemo<ModuleRig[]>(() => {
    const builders = [
      createBuildModule,
      createAttractModule,
      createConvertModule,
      createAutomateModule,
      createIntelligenceModule,
    ];
    return builders.map((build, i) => {
      const fillMat = makeFillMaterial(palette.fill, 0.25);
      const edgeMat = makeEdgeMaterial(palette.edge, 0.35);
      const accentMat = new THREE.MeshStandardMaterial({
        color: palette.accent,
        emissive: new THREE.Color(palette.accentSoft),
        emissiveIntensity: 0.4,
        roughness: 0.35,
        metalness: 0.25,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
      });
      const visual = build(fillMat, edgeMat, accentMat);
      const root = new THREE.Group();
      root.add(visual);
      root.position.copy(layout[i]);
      return {
        root,
        visual,
        fillMats: [fillMat],
        edgeMats: [edgeMat],
        accentMats: [accentMat],
        layoutPos: layout[i].clone(),
        ringPos: ringPosition(i, ringRadius, new THREE.Vector3()),
        currentPos: layout[i].clone(),
      };
    });
  }, [palette, layout, ringRadius]);

  const neighbourTies = useMemo<Connection[]>(
    () =>
      Array.from({ length: STAGE_COUNT - 1 }, (_, i) => ({
        mesh: new THREE.Mesh(shared.tieGeo, shared.lineMat),
        from: i,
        to: i + 1,
      })),
    [shared]
  );

  const loopTie = useMemo(() => new THREE.Mesh(shared.tieGeo, shared.lineMat), [shared]);

  const spokes = useMemo(
    () => rigs.map(() => new THREE.Mesh(shared.spokeGeo, shared.spokeMat)),
    [rigs, shared]
  );

  useEffect(() => {
    const group = rootRef.current;
    if (!group) return;
    for (const rig of rigs) group.add(rig.root);
    for (const tie of neighbourTies) group.add(tie.mesh);
    group.add(loopTie);
    for (const spoke of spokes) group.add(spoke);
    return () => {
      for (const rig of rigs) group.remove(rig.root);
      for (const tie of neighbourTies) group.remove(tie.mesh);
      group.remove(loopTie);
      for (const spoke of spokes) group.remove(spoke);
    };
  }, [rigs, neighbourTies, loopTie, spokes]);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      pointer.current.tx = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useEffect(() => {
    return () => {
      for (const rig of rigs) {
        rig.root.traverse((obj) => {
          if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
            obj.geometry.dispose();
          }
        });
        for (const m of rig.fillMats) m.dispose();
        for (const m of rig.edgeMats) m.dispose();
        for (const m of rig.accentMats) m.dispose();
      }
      shared.lineMat.dispose();
      shared.spokeMat.dispose();
      shared.hubMat.dispose();
      shared.groundMat.dispose();
      shared.tieGeo.dispose();
      shared.spokeGeo.dispose();
      shared.ringGeo.dispose();
    };
  }, [rigs, shared]);

  useFrame((state, delta) => {
    const group = rootRef.current;
    if (!group) return;

    const dt = Math.min(delta, 0.05);
    const p = THREE.MathUtils.clamp(progress.get(), 0, 1);
    const sf = p * SEGMENTS;
    const ringBlend = smoothstep(4.35, 5.1, sf);
    const focusIdx = THREE.MathUtils.clamp(sf - 0.5, 0, STAGE_COUNT - 1);
    const time = state.clock.elapsedTime;

    focus.current.set(0, 0, 0);
    let weightSum = 0;

    for (let i = 0; i < rigs.length; i++) {
      const rig = rigs[i];
      const emphasis = THREE.MathUtils.lerp(Math.max(0, 1 - Math.abs(focusIdx - i)), 0.8, ringBlend);
      const w = emphasis + 0.08;

      focus.current.x += rig.layoutPos.x * (1 - ringBlend) * w;
      focus.current.y += rig.layoutPos.y * (1 - ringBlend) * w;
      focus.current.z += rig.layoutPos.z * (1 - ringBlend) * w;
      weightSum += w;

      const bob = Math.sin(time * 0.7 + i * 1.3) * 0.035 * (1 - ringBlend * 0.7);
      const target = tmp.current.lerpVectors(rig.layoutPos, rig.ringPos, ringBlend);
      target.y += bob + emphasis * 0.18;
      dampVec3(rig.currentPos, target, 5.5, dt);
      rig.root.position.copy(rig.currentPos);

      const s = damp(rig.root.scale.x, THREE.MathUtils.lerp(0.86, 1.14, emphasis), 6, dt);
      rig.root.scale.setScalar(s);

      const fillOpacity = THREE.MathUtils.lerp(0.16, 0.46, emphasis);
      const edgeOpacity = THREE.MathUtils.lerp(0.22, 0.9, emphasis);
      for (const m of rig.fillMats) m.opacity = damp(m.opacity, fillOpacity, 6, dt);
      for (const m of rig.edgeMats) m.opacity = damp(m.opacity, edgeOpacity, 6, dt);
      for (const m of rig.accentMats) {
        m.emissiveIntensity = damp(m.emissiveIntensity, 0.25 + emphasis * 0.9, 6, dt);
        m.opacity = damp(m.opacity, 0.55 + emphasis * 0.45, 6, dt);
      }

      rig.visual.rotation.y = damp(
        rig.visual.rotation.y,
        (1 - emphasis) * 0.22 * (i % 2 === 0 ? 1 : -1) +
          ringBlend * (i / STAGE_COUNT) * Math.PI * 0.15,
        4,
        dt
      );
    }

    if (weightSum > 0) {
      focus.current.multiplyScalar(1 / weightSum);
    }

    pointer.current.x = damp(pointer.current.x, pointer.current.tx, 4, dt);
    pointer.current.y = damp(pointer.current.y, pointer.current.ty, 4, dt);

    const camDistance = THREE.MathUtils.lerp(baseZ, baseZ + (isMobile ? 1.4 : 2.2), ringBlend);
    const parallax = isMobile ? 0 : 0.55;
    camTarget.current.set(
      focus.current.x * (isMobile ? 0.25 : 0.62) + pointer.current.x * parallax,
      focus.current.y * (isMobile ? 0.45 : 0.35) + 0.35 - pointer.current.y * parallax * 0.5,
      camDistance
    );
    dampVec3(camera.position, camTarget.current, 3.2, dt);

    lookTarget.current.x = damp(lookTarget.current.x, focus.current.x * (1 - ringBlend * 0.85), 3.5, dt);
    lookTarget.current.y = damp(lookTarget.current.y, focus.current.y * (1 - ringBlend * 0.85), 3.5, dt);
    lookTarget.current.z = damp(lookTarget.current.z, focus.current.z * 0.3 * (1 - ringBlend), 3.5, dt);
    camera.lookAt(lookTarget.current);

    let tieAvg = 0;
    for (let i = 0; i < neighbourTies.length; i++) {
      const appear = smoothstep(i + 0.4, i + 0.95, focusIdx);
      tieAvg += appear;
      updateTie(
        neighbourTies[i].mesh,
        rigs[neighbourTies[i].from].currentPos,
        rigs[neighbourTies[i].to].currentPos,
        Math.max(appear, ringBlend)
      );
    }
    tieAvg /= neighbourTies.length;

    updateTie(loopTie, rigs[4].currentPos, rigs[0].currentPos, smoothstep(0.45, 0.9, ringBlend));

    const spokeT = smoothstep(0.55, 1, ringBlend);
    for (let i = 0; i < spokes.length; i++) {
      updateTie(spokes[i], ORIGIN, rigs[i].currentPos, spokeT);
    }

    shared.lineMat.opacity = damp(shared.lineMat.opacity, THREE.MathUtils.lerp(0.55, 0.95, Math.max(tieAvg, ringBlend)), 5, dt);
    shared.spokeMat.opacity = damp(shared.spokeMat.opacity, spokeT * 0.5, 5, dt);

    if (hubRef.current) {
      const hubScale = smoothstep(0.65, 1, ringBlend);
      hubRef.current.scale.setScalar(damp(hubRef.current.scale.x, Math.max(hubScale, 0.001), 5, dt));
      hubRef.current.rotation.y += dt * 0.3 * ringBlend;
      shared.hubMat.opacity = damp(shared.hubMat.opacity, hubScale * 0.95, 5, dt);
    }

    if (groundRef.current) {
      const gScale = damp(groundRef.current.scale.x, 0.6 + ringBlend * (isMobile ? 1.4 : 2.6), 4, dt);
      groundRef.current.scale.setScalar(gScale);
      groundRef.current.rotation.z += dt * 0.05 * ringBlend;
      shared.groundMat.opacity = damp(shared.groundMat.opacity, ringBlend * 0.35, 4, dt);
    }
  });

  return (
    <>
      <ambientLight intensity={theme === "dark" ? 0.65 : 0.8} />
      <directionalLight position={[5, 7, 6]} intensity={theme === "dark" ? 1 : 0.9} />
      <directionalLight position={[-6, -3, -4]} intensity={0.4} color={palette.accentSoft} />

      <group ref={rootRef} />

      <group ref={hubRef} scale={0.001}>
        <mesh material={shared.hubMat}>
          <icosahedronGeometry args={[0.34, 0]} />
        </mesh>
        <mesh material={shared.hubMat}>
          <torusGeometry args={[0.62, 0.02, 8, 48]} />
        </mesh>
      </group>

      <group ref={groundRef} position={[0, isMobile ? -4.6 : -2.1, 0]} scale={0.6}>
        <mesh material={shared.groundMat} rotation={[-Math.PI / 2, 0, 0]} geometry={shared.ringGeo} />
        <mesh
          material={shared.groundMat}
          rotation={[-Math.PI / 2, 0, 0]}
          geometry={shared.ringGeo}
          scale={0.72}
        />
      </group>
    </>
  );
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")));
  } catch {
    return false;
  }
}

export default function GrowthSystemScene({
  progress,
  theme,
  isMobile,
  visible,
  onReady,
}: {
  progress: MotionValue<number>;
  theme: "dark" | "light";
  isMobile: boolean;
  visible: boolean;
  onReady?: () => void;
}) {
  const [webgl] = useState(() => (typeof window === "undefined" ? true : supportsWebGL()));
  const [mounted, setMounted] = useState(false);

  if (!webgl) return null;

  return (
    <div
      className="absolute inset-0 transition-opacity duration-700"
      style={{ opacity: visible && mounted ? 1 : 0, pointerEvents: "none" }}
    >
      <Canvas
        flat
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        camera={{ fov: 42, near: 0.1, far: 80, position: [0, 0.4, isMobile ? 9.2 : 11] }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={visible ? "always" : "never"}
        onCreated={() => {
          setMounted(true);
          onReady?.();
        }}
        style={{ background: "transparent" }}
      >
        <Systems progress={progress} theme={theme} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
