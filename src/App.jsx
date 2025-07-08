import { useState, useRef, Suspense } from 'react'
import './App.css'
import {
  Text3D,
  OrbitControls,
  Center,
  Stars,
  Float,
  Sparkles,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";

function Hero() {
  const ref = useRef();

  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <>
      <Center scale={[1, 1, 1]}>
          <Float speed={1}>
            <Text3D
              position={[0, 0, -10]}
              scale={[-0.5, 0.5, 0.5]}
              ref={ref}
              font={"fonts/RoundedMplus1c_Regular.json"}
              height={0.5}
            >
              {`We apologize for the inconvenience.
Flowzeal is undergoing maintenance on 
6 July 2025 from 18:00 to 19:30 JST

申し訳ありません。
下記の時間はメンテナンス中です。
2025/07/06 18:00~19:30(日本時間)`}
            </Text3D>
          </Float>
      </Center>
    </>
  );
}

function App() {

  return (
    <div className="scene" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, background: '#222', zIndex: 9999 }}>
      <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, -15], fov: 60 }}>
        <OrbitControls
          enableZoom={true}
          autoRotate={true}
          autoRotateSpeed={-0.1}
          enablePan={true}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          zoomSpeed={1}
          dampingFactor={0.05}
        />
        <Suspense fallback={"Loading"}>
            <Sparkles
                size={50}
                scale={[50, 50, 50]}
                position={[0, 0, -10]}
                speed={2}
                count={1000}
                opacity={0.5}/>
          <Hero />
        </Suspense>
        <ambientLight intensity={0.6} color={"#dee2ff"} />
      </Canvas>
    </div>
  )
}

export default App
