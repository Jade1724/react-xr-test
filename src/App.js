import { XR, Hands, VRButton } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';


function Model(props) {
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/paint-brush/model.gltf')
  return <primitive object={scene} {...props} />
}


function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <OrbitControls />
        <XR>
          <ambientLight />
          <pointLight position={[10, 10, 10,]} />
          <Suspense fallback={null}>
            <Model position={[0, 1.2, -0.5]} />
          </Suspense>
          <Hands />
        </XR>
      </Canvas>
    </>
  );
}

export default App;
