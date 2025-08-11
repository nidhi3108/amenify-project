import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import panoImg from "../images/pexels-heyho-6970025.jpg"; 

const PanoramaViewer = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
  90, // smaller FOV makes it look less zoomed
  mountRef.current.clientWidth / mountRef.current.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 0.01);


    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   mountRef.current.clientWidth / mountRef.current.clientHeight,
    //   0.1,
    //   1000
    // );
    // camera.position.set(0, 0, 0.01);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current.clientWidth,
      mountRef.current.clientHeight
    );
    mountRef.current.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(panoImg, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const animate = () => {
        requestAnimationFrame(animate);
        mesh.rotation.y += 0.0015;
        renderer.render(scene, camera);
      };
      animate();
    });

    const handleResize = () => {
      camera.aspect =
        mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight
      );
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "72vh", overflow: "hidden" }}
    />
  );
};

export default PanoramaViewer;
