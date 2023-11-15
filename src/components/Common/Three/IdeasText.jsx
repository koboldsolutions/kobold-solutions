import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js' 
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const IdeasText = () => {

    const [isFontLoaded, setIsFontLoaded] = useState(false);
    const [font, setFont] = useState(null);

    const model = useRef();

    const containerRef = useRef();
    const mouseX = useRef(0);
    const mouseY = useRef(0);

    const handleMouseMove = (event) => {
      const deltaX = event.clientX - mouseX.current;
      const deltaY = event.clientY - mouseY.current;

      model.current.rotation.y += deltaX / 100; // Adjust the sensitivity as needed


      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };



    
    


    useEffect(() => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 5;
      containerRef.current.style.height = "100%";

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(1, 1, 1); // Adjust the light's position
      scene.add(directionalLight);

      



      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      containerRef.current.appendChild(renderer.domElement);

      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      const spotLight = new THREE.SpotLight(0x00ff00); // Green light
      spotLight.position.set(0, 5, 0); // Adjust the position of the light
      spotLight.target.position.set(0, 0, 0); // Set the target for the spotlight
      scene.add(spotLight);
      scene.add(spotLight.target);

      

      // Load the GLTF model
      const loader = new GLTFLoader();
      loader.load('dark/assets/3dassets/GLman.glb', (gltf) => {
        model.current = gltf.scene;

        // Set the position of the loaded model
        model.current.position.set(0, -3, 0); // Adjust the position as needed

        // Set the scale of the loaded model
        model.current.scale.set(50, 35, 35); // Adjust the scale as needed

        model.current.castShadow = true;
        model.current.receiveShadow = true;

        // Add the loaded model to the scene
        scene.add(model.current);



        // Render the scene
        const render = () => {
          renderer.render(scene, camera);
        };

        const animate = () => {
          requestAnimationFrame(animate);

          model.current.rotation.y += 0.01;
          renderer.render(scene, camera);
        };
        animate();

        render();

  
      
  
      const handleResize = () => {
        const { clientWidth, clientHeight } = containerRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      };
  
      window.addEventListener('resize', handleResize);
      containerRef.current.addEventListener('mousemove', handleMouseMove);

    
  
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    });
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};
  
export default IdeasText;
