import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import birdScene from "../assets/3d/bird.glb";

function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    const targetXForward = camera.position.x + 10;
    const targetXBackward = camera.position.x - 10;

    if (birdRef.current.position.x > targetXForward) {
      // Gradual rotation towards backward direction
      birdRef.current.rotation.y += 0.02;
    } else if (birdRef.current.position.x < targetXBackward) {
      // Gradual rotation towards forward direction
      birdRef.current.rotation.y -= 0.02;
    }

    // Update the X and Z positions based on the direction
    const speed = 0.01;

    const moveX = Math.cos(birdRef.current.rotation.y) * speed;
    const moveZ = Math.sin(birdRef.current.rotation.y) * speed;

    birdRef.current.position.x += moveX;
    birdRef.current.position.z -= moveZ;
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
