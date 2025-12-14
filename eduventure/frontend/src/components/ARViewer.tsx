import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={2} />;
}

const ARViewer = () => {
    // Placeholder for actual WebXR AR. 
    // For a web browser without AR hardware, we show a 3D model viewer.
    // In a real implementation, we would use <XR> from @react-three/xr

    return (
        <div className="h-[500px] w-full bg-slate-100 rounded-3xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-sm font-bold">
                AR Preview Mode
            </div>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                {/* Placeholder Duck model or similar */}
                <mesh rotation={[0, 0, 0]}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="hotpink" />
                </mesh>
                <OrbitControls />
            </Canvas>
            <div className="absolute bottom-4 left-0 right-0 text-center text-slate-500 text-sm">
                Click and drag to rotate the 3D object
            </div>
        </div>
    );
};

export default ARViewer;
