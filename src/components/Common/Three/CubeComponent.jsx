import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js' 
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import prefix from '@/common/prefix';
import TWEEN from '@tweenjs/tween.js'
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import {EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing//UnrealBloomPass";


const CubeComponent = () => {
    const containerRef = useRef();
    const cube = useRef();
    const greenLight = useRef();
    
    const quaternion = new THREE.Quaternion(); 
    


    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const dragStart = useRef({ x: 0, y: 0 });

    const startDragging = (event) => {
      // Check if mouse position is within the canvas boundaries
      const rect = containerRef.current.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.left + rect.width ||
        event.clientY < rect.top || event.clientY > rect.top + rect.height) {
        return; // Ignore dragging if outside the canvas
      }
    
      event.preventDefault();
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

  const dragging = (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;

      // Calculate the rotation quaternion based on mouse movement
      const deltaRotationQuaternion = new THREE.Quaternion()
          .setFromEuler(
              new THREE.Euler(
                  deltaY * 0.005,
                  deltaX * 0.005,
                  0,
                  'XYZ'
              )
          );

      // Combine the new rotation with the existing quaternion rotation
      quaternion.multiplyQuaternions(deltaRotationQuaternion, quaternion);

      cube.current.setRotationFromQuaternion(quaternion);

      previousMousePosition = {
          x: event.clientX,
          y: event.clientY,
      };
  };
  
  const stopDragging = () => {
    isDragging = false;
    
  
    const currentRotation = cube.current.rotation.clone();
    const targetRotation = new THREE.Euler(0, Math.PI, 0); // Adjust this angle as needed
  
    new TWEEN.Tween({ x: currentRotation.x, y: currentRotation.y, z: currentRotation.z })
      .to({ x: targetRotation.x, y: targetRotation.y, z: targetRotation.z }, 1000) // Set the duration for the rotation
      .easing(TWEEN.Easing.Quadratic.InOut) // Adjust the easing function as needed
      .onUpdate((tweenData) => {
        cube.current.rotation.set(tweenData.x, tweenData.y, tweenData.z);
      })
      .start();
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
      controls.enableZoom = false
      controls.dispose();

      //bloom
      const renderTarget = new THREE.WebGLRenderTarget(
        window.innerWidth,
        window.innerHeight,
        {
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBFormat,
          stencilBuffer:
      
      false,
        }
      );

      const renderPass = new RenderPass(scene, camera);
      renderPass.renderTarget = renderTarget;

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.6,
        0.1,
        0.1
      );
      const composer = new EffectComposer(renderer);
      composer.addPass(renderPass);
      composer.addPass(bloomPass);



      const textureLoader = new THREE.TextureLoader();
      const logoTexture = textureLoader.load(`${prefix}/dark/assets/imgs/koboldlogo02.png`);

      const matlogo = new THREE.MeshPhongMaterial({

        map: logoTexture, // Texture for the front face// Adjust the bump intensity
      });

      const matgreen = new THREE.MeshPhongMaterial({ color: 0x004516 });

  
      // Create a larger cube with a Phong material
      const cubeSize = 2.5;
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize, 27, 27, 27);
      const materials = [
        matlogo,
        matlogo,
        matlogo,
        matlogo,
        matlogo,
        matlogo,
        
      ];
  
      cube.current = new THREE.Mesh(geometry, materials);
      scene.add(cube.current);

      greenLight.current = new THREE.PointLight(0x278f48, 1, 10); // Green light
      greenLight.current.position.set(0, 0, 2);
      scene.add(greenLight.current);
  
      // Add a white directional light
      const light1 = new THREE.DirectionalLight(0x919191, 7);
      light1.position.set(0, 1, 0);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight(0xedfff0, 5);
      light2.position.set(0, -1, 0);
      scene.add(light2);





      // bloom

      


  
      controls.current = new OrbitControls(camera, renderer.domElement);
      controls.current.enableZoom = false
      controls.current.dispose();
      controls.current.addEventListener('change', () => {
        renderer.render(scene, camera);
      });
  
      const animate = () => {
        TWEEN.update();
        requestAnimationFrame(animate);
        if (!isDragging) {
          // Adjust the rotation to create a slight animation effect
          cube.current.rotation.x += 0.0005;
          cube.current.rotation.y += 0.0001;
          cube.current.rotation.z += 0.002;
        }
        renderer.render(scene, camera);
        //composer.render()
      };
      animate();
  
      const handleResize = () => {
        const { clientWidth, clientHeight } = containerRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      };

      controls.dispose();
  
      window.addEventListener('resize', handleResize);

      window.addEventListener('mousemove', onMouseMove);
          // Add event listeners for dragging the cube
    window.addEventListener('mousedown', startDragging);
    window.addEventListener('mousemove', dragging);
    window.addEventListener('mouseup', stopDragging);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousedown', startDragging);
        window.removeEventListener('mousemove', dragging);
        window.removeEventListener('mouseup', stopDragging);
      };
    }, []);
  
    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
  };
export default CubeComponent;