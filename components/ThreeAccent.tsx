"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeAccent() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2.1, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color("#8b5cf6"),
      transparent: true,
      opacity: 0.55,
    });
    const mesh = new THREE.LineSegments(wireframe, material);
    scene.add(mesh);

    const innerGeometry = new THREE.IcosahedronGeometry(1.15, 1);
    const innerWire = new THREE.WireframeGeometry(innerGeometry);
    const innerMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color("#22d3ee"),
      transparent: true,
      opacity: 0.4,
    });
    const innerMesh = new THREE.LineSegments(innerWire, innerMaterial);
    scene.add(innerMesh);

    let raf = 0;
    const animate = () => {
      if (!reduceMotion) {
        mesh.rotation.y += 0.0022;
        mesh.rotation.x += 0.001;
        innerMesh.rotation.y -= 0.0032;
        innerMesh.rotation.x -= 0.0016;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      wireframe.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerWire.dispose();
      innerMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
}
