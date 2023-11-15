import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js' 
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import prefix from '@/common/prefix';
const CubeComponent = () => {
    const containerRef = useRef();
    const cube = useRef();
    const greenLight = useRef();
    
    


    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (event) => {
      if (event.target === cube.current) {
        isDragging = true;
        previousMousePosition = {
          x: event.clientX,
          y: event.clientY,
        };
    
        // Set the initial position of greenLight
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((previousMousePosition.x - rect.left) / rect.width) * 2 - 1;
        const y = -((previousMousePosition.y - rect.top) / rect.height) * 2 + 1;
        greenLight.current.position.set(x, y, greenLight.current.position.z);
      }
    };

    const onMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        greenLight.current.position.set(x, y, greenLight.current.position.z);
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 5;
      containerRef.current.style.height = '400px';
  
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);
      const controls = new OrbitControls(camera, renderer.domElement);

      const textureLoader = new THREE.TextureLoader();
      const logoTexture = textureLoader.load(`${prefix}/dark/assets/imgs/koboldlogo02.png`);
      const bumpMap = textureLoader.load(`${prefix}/dark/assets/imgs/three/NormalMap.png`);
      const specMap = textureLoader.load(`${prefix}/dark/assets/imgs/three/SpecularMap.png`);
  
      // Create a larger cube with a Phong material
      const cubeSize = 3;
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize, 32, 32, 32);
      const materials = [
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
        new THREE.MeshPhongMaterial({

          map: logoTexture, // Texture for the front face// Adjust the bump intensity
        }),
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
        new THREE.MeshPhongMaterial({ color: 0x004516 }), // Logo side forward
        new THREE.MeshPhongMaterial({ color: 0x004516 }),
      ];
  
      cube.current = new THREE.Mesh(geometry, materials);
      scene.add(cube.current);

      greenLight.current = new THREE.PointLight(0x278f48, 1, 10); // Green light
      greenLight.current.position.set(0, 0, 2);
      scene.add(greenLight.current);
  
      // Add a white directional light
      const light1 = new THREE.DirectionalLight(0x919191, 10);
      light1.position.set(0, 1, 0);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight(0xedfff0, 10);
      light2.position.set(0, -1, 0);
      scene.add(light2);


  
      controls.current = new OrbitControls(camera, renderer.domElement);
      controls.current.addEventListener('change', () => {
        renderer.render(scene, camera);
      });
  
      const animate = () => {
        requestAnimationFrame(animate);
        if (!isDragging) {
          // Adjust the rotation to create a slight animation effect
          cube.current.rotation.x += 0.0002;
          cube.current.rotation.y += 0.002;
          cube.current.rotation.z += 0.002;
        }
        renderer.render(scene, camera);
      };
      animate();
  
      const handleResize = () => {
        const { clientWidth, clientHeight } = containerRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      };
  
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
  };
export default CubeComponent;