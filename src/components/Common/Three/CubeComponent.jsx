import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as THREE from 'three';
import prefix from '@/common/prefix';
import styles from './CubeComponent.module.css';

const services = ['web', 'commerce', 'software'];

// Small solid models share the cube's green palette and need no external assets.
function createServiceObjects() {
  const dark = new THREE.MeshStandardMaterial({ color: 0x152c24, metalness: 0.45, roughness: 0.3 });
  const green = new THREE.MeshStandardMaterial({ color: 0x63eb99, emissive: 0x16753b, emissiveIntensity: 0.4, roughness: 0.35 });
  const white = new THREE.MeshStandardMaterial({ color: 0xe0f7ea, roughness: 0.4 });
  const addBox = (group, size, position, material) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.position.set(...position);
    group.add(mesh);
    return mesh;
  };
  const connect = (group, from, to, radius = 0.025) => {
    const start = new THREE.Vector3(...from);
    const end = new THREE.Vector3(...to);
    const delta = end.clone().sub(start);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), 12), green);
    mesh.position.copy(start.add(end).multiplyScalar(0.5));
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize());
    group.add(mesh);
  };

  const browser = new THREE.Group();
  addBox(browser, [1.05, 0.76, 0.14], [0, 0, 0], green);
  addBox(browser, [0.95, 0.54, 0.05], [0, -0.06, 0.09], dark);
  [-0.38, -0.26, -0.14].forEach((x) => {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.028, 12, 8), dark);
    dot.position.set(x, 0.29, 0.09);
    browser.add(dot);
  });
  addBox(browser, [0.22, 0.31, 0.035], [-0.29, -0.06, 0.13], green);
  [0.08, -0.04, -0.16].forEach((y, index) => {
    addBox(browser, [index === 2 ? 0.23 : 0.4, 0.035, 0.035], [0.1, y, 0.13], white);
  });

  const bag = new THREE.Group();
  const bagBody = addBox(bag, [0.68, 0.72, 0.32], [0, -0.1, 0], dark);
  const outline = new THREE.LineSegments(new THREE.EdgesGeometry(bagBody.geometry), new THREE.LineBasicMaterial({ color: 0x63eb99 }));
  outline.position.y = -0.1;
  bag.add(outline);
  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.038, 10, 28, Math.PI), green);
  handle.position.set(0, 0.26, 0);
  bag.add(handle);
  connect(bag, [-0.13, -0.08, 0.18], [-0.02, -0.19, 0.18]);
  connect(bag, [-0.02, -0.19, 0.18], [0.17, 0.04, 0.18]);

  const network = new THREE.Group();
  const points = [[0, 0, 0.12], [-0.42, 0.3, 0], [0.42, 0.3, 0], [-0.35, -0.35, 0], [0.35, -0.35, 0]];
  points.forEach((point, index) => {
    const node = new THREE.Mesh(new THREE.IcosahedronGeometry(index === 0 ? 0.19 : 0.12, 1), index === 0 ? white : green);
    node.position.set(...point);
    network.add(node);
    if (index) connect(network, points[0], point);
  });
  return [browser, bag, network];
}

export default function CubeComponent() {
  const { t } = useTranslation('common');
  const stageRef = useRef(null);
  const buttonsRef = useRef([]);
  const activeRef = useRef(null);
  const pausedRef = useRef(false);
  const [hovered, setHovered] = useState(null);
  const [focused, setFocused] = useState(null);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(false);
  const active = hovered ?? focused ?? selected;

  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => { pausedRef.current = paused; }, [paused]);

  useEffect(() => {
    const stage = stageRef.current;
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // Keep the logo and service buttons usable without WebGL.
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    stage.prepend(renderer.domElement);
    setAvailable(true);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-4.3, 4.3, 3.4, -3.4, 0.1, 30);
    camera.position.z = 10;
    scene.add(new THREE.AmbientLight(0xd9ffe8, 2));
    const key = new THREE.DirectionalLight(0xffffff, 3);
    key.position.set(3, 4, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0x39b549, 12, 15);
    rim.position.set(-3, 1, 4);
    scene.add(rim);

    let disposed = false;
    const texture = new THREE.TextureLoader().load(`${prefix}/dark/assets/imgs/koboldlogo02.png`, (loaded) => {
      if (disposed) loaded.dispose();
    });
    texture.colorSpace = THREE.SRGBColorSpace;
    const cube = new THREE.Mesh(new THREE.BoxGeometry(1.65, 1.65, 1.65), new THREE.MeshStandardMaterial({ map: texture, roughness: 0.45, metalness: 0.12 }));
    cube.rotation.set(0.18, -0.35, -0.08);
    scene.add(cube);

    const orbitPosition = (angle) => new THREE.Vector3(Math.cos(angle) * 2.95, Math.sin(angle) * 1.65, Math.sin(angle) * 0.65);
    const orbitPoints = Array.from({ length: 129 }, (_, index) => orbitPosition(index / 128 * Math.PI * 2));
    const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(orbitPoints), new THREE.LineBasicMaterial({ color: 0x4baa72, transparent: true, opacity: 0.22 }));
    scene.add(orbit);
    const objects = createServiceObjects();
    objects.forEach((object, index) => {
      object.position.copy(orbitPosition(index * Math.PI * 2 / 3 + 0.45));
      scene.add(object);
    });

    const resize = () => {
      const { width, height } = stage.getBoundingClientRect();
      const aspect = width / Math.max(height, 1);
      const viewWidth = Math.max(8.6, aspect * 5.9);
      camera.left = -viewWidth / 2;
      camera.right = viewWidth / 2;
      camera.top = viewWidth / aspect / 2;
      camera.bottom = -camera.top;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    resize();

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    visibilityObserver.observe(stage);
    let drag = null;
    const pointerDown = (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      drag = { x: event.clientX, y: event.clientY };
      renderer.domElement.setPointerCapture(event.pointerId);
    };
    const pointerMove = (event) => {
      if (!drag) return;
      cube.rotation.y += (event.clientX - drag.x) * 0.008;
      cube.rotation.x += (event.clientY - drag.y) * 0.008;
      drag = { x: event.clientX, y: event.clientY };
    };
    const pointerUp = () => { drag = null; };
    renderer.domElement.addEventListener('pointerdown', pointerDown);
    renderer.domElement.addEventListener('pointermove', pointerMove);
    renderer.domElement.addEventListener('pointerup', pointerUp);
    renderer.domElement.addEventListener('pointercancel', pointerUp);
    renderer.domElement.addEventListener('lostpointercapture', pointerUp);

    let frame;
    let lastTime = 0;
    let angle = 0.45;
    const projected = new THREE.Vector3();
    const animate = (time) => {
      frame = requestAnimationFrame(animate);
      const delta = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      if (!visible || document.hidden) return;
      const moving = !motion.matches && !pausedRef.current && activeRef.current === null && !drag;
      if (moving) {
        angle += delta * 0.13;
        cube.rotation.y += delta * 0.14;
        cube.rotation.z += delta * 0.025;
      }
      objects.forEach((object, index) => {
        const highlighted = activeRef.current === index;
        const target = orbitPosition(angle + index * Math.PI * 2 / 3);
        if (highlighted) target.z = 2.5;
        const blend = motion.matches ? 1 : 1 - Math.exp(-delta * 10);
        object.position.lerp(target, blend);
        const scale = THREE.MathUtils.lerp(object.scale.x, highlighted ? 1.3 : 1, blend);
        object.scale.setScalar(scale);
        object.rotation.y = highlighted ? -0.12 : Math.sin(angle + index) * 0.25;
        projected.copy(object.position).project(camera);
        const button = buttonsRef.current[index];
        if (button) {
          button.style.left = `${(projected.x + 1) * 50}%`;
          button.style.top = `${(1 - projected.y) * 50}%`;
        }
      });
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibilityObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointermove', pointerMove);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('pointercancel', pointerUp);
      renderer.domElement.removeEventListener('lostpointercapture', pointerUp);
      const geometries = new Set();
      const materials = new Set();
      scene.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) materials.add(object.material);
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className={styles.experience}>
      <div ref={stageRef} className={`${styles.stage} ${available ? styles.ready : ''}`} role="group" aria-label={t('orbit.title')}>
        {!available && <div className={styles.fallback} style={{ backgroundImage: `url(${prefix}/dark/assets/imgs/koboldlogo02.png)` }} />}
        {services.map((service, index) => (
          <button
            key={service}
            ref={(element) => { buttonsRef.current[index] = element; }}
            type="button"
            className={`${styles.service} ${active === index ? styles.active : ''}`}
            aria-label={t(`orbit.${service}.title`)}
            aria-pressed={selected === index}
            onPointerEnter={(event) => { if (event.pointerType !== 'touch') setHovered(index); }}
            onPointerLeave={() => setHovered(null)}
            onFocus={() => setFocused(index)}
            onBlur={() => setFocused(null)}
            onClick={() => setSelected(selected === index ? null : index)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setSelected(null);
                setHovered(null);
                event.currentTarget.blur();
              }
            }}
          >
            <span className={styles.marker} aria-hidden="true">{['▤', '✓', '●'][index]}</span>
            <span className={styles.objectLabel}>{t(`orbit.${service}.title`)}</span>
          </button>
        ))}
      </div>
      <div className={styles.caption} aria-live="polite" aria-atomic="true">
        {active === null ? <span className={styles.hint}>{t('orbit.hint')}</span> : <>
          <strong>{t(`orbit.${services[active]}.title`)}</strong>
          <span>{t(`orbit.${services[active]}.description`)}</span>
        </>}
      </div>
      {available && <button type="button" className={styles.motion} aria-pressed={paused} onClick={() => setPaused(!paused)}>
        <span aria-hidden="true">{paused ? '▷' : 'Ⅱ'}</span> {t(paused ? 'orbit.resume' : 'orbit.pause')}
      </button>}
    </div>
  );
}
