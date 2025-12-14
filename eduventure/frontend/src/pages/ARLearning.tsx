import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Glasses,
    Box,
    Eye,
    Brain,
    Landmark,
    Skull,
    X,
    Maximize,
    RotateCw,
    Code,
    Zap,
    Lock,
    Cloud,
    Cpu
} from 'lucide-react';
import * as THREE from 'three';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

// ============================================================================
// 🎓 EDUCATIONAL AR/VR LEARNING PLATFORM (Three.js & Babylon.js Only)
// ============================================================================

interface Model3D {
    id: string;
    title: string;
    description: string;
    category: string;
    engine: 'three' | 'babylon';
    type: 'solar' | 'dna' | 'atom' | 'structure' | 'organ' | 'historical';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    tags: string[];
}

interface Category {
    name: string;
    icon: React.ComponentType<any>;
    color: string;
    models: Model3D[];
}

// ========================================================================
// 🔧 THREE.JS RENDERER COMPONENT
// ========================================================================

const ThreeJSViewer: React.FC<{ type: string }> = ({ type }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // SCENE SETUP
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0f172a); // Slate-900

        // CAMERA
        const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
        camera.position.z = 5;

        // RENDERER
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        mountRef.current.appendChild(renderer.domElement);

        // LIGHTING
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // OBJECTS
        const objects: THREE.Object3D[] = [];

        if (type === 'solar') {
            // Sun
            const sunGeo = new THREE.SphereGeometry(1.5, 32, 32);
            const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd00 });
            const sun = new THREE.Mesh(sunGeo, sunMat);
            scene.add(sun);
            objects.push(sun);

            // Earth
            const earthGeo = new THREE.SphereGeometry(0.5, 32, 32);
            const earthMat = new THREE.MeshStandardMaterial({ color: 0x2233ff });
            const earth = new THREE.Mesh(earthGeo, earthMat);
            earth.position.x = 3;
            scene.add(earth);
            objects.push(earth);
        } else if (type === 'atom') {
            // Nucleus
            const nucleusGeo = new THREE.SphereGeometry(0.8, 32, 32);
            const nucleusMat = new THREE.MeshStandardMaterial({ color: 0xff3333 });
            const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
            scene.add(nucleus);
            objects.push(nucleus);

            // Electrons
            for (let i = 0; i < 3; i++) {
                const electronGeo = new THREE.SphereGeometry(0.2, 16, 16);
                const electronMat = new THREE.MeshStandardMaterial({ color: 0x33ffff });
                const electron = new THREE.Mesh(electronGeo, electronMat);
                scene.add(electron);
                objects.push(electron);
            }
        } else {
            // Fallback Cube
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            objects.push(cube);
        }

        // ANIMATION LOOP
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            if (type === 'solar') {
                objects[0].rotation.y += 0.005; // Sun
                const time = Date.now() * 0.001;
                objects[1].position.x = Math.sin(time) * 3;
                objects[1].position.z = Math.cos(time) * 3;
                objects[1].rotation.y += 0.02;
            } else if (type === 'atom') {
                // Rotate electrons
                const time = Date.now() * 0.002;
                for (let i = 1; i < objects.length; i++) {
                    const offset = i * (Math.PI * 2 / 3);
                    objects[i].position.x = Math.sin(time + offset) * 2;
                    objects[i].position.y = Math.cos(time + offset) * 2;
                    objects[i].position.z = Math.sin(time * 2 + offset);
                }
            } else {
                objects[0].rotation.x += 0.01;
                objects[0].rotation.y += 0.01;
            }

            renderer.render(scene, camera);
        };
        animate();

        // CLEANUP
        return () => {
            cancelAnimationFrame(animationId);
            if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }

            // Dispose of scene resources
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    if (object.geometry) object.geometry.dispose();
                    if (object.material) {
                        if (Array.isArray(object.material)) {
                            object.material.forEach((material: THREE.Material) => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                }
            });

            renderer.dispose();
        };
    }, [type]);

    return <div ref={mountRef} className="w-full h-full" />;
};

// ========================================================================
// 🎲 BABYLON.JS RENDERER COMPONENT
// ========================================================================

const BabylonJSViewer: React.FC<{ type: string }> = ({ type }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const engine = new BABYLON.Engine(canvasRef.current, true);

        const createScene = () => {
            const scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color4(0.05, 0.05, 0.1, 1);

            // Camera
            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvasRef.current, true);

            // Light
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
            light.intensity = 0.7;

            // Objects
            if (type === 'structure') {
                // Pyramid
                const cylinder = BABYLON.MeshBuilder.CreateCylinder("pyramid", { diameterTop: 0, diameterBottom: 3, height: 3, tessellation: 4 }, scene);
                const mat = new BABYLON.StandardMaterial("mat", scene);
                mat.diffuseColor = new BABYLON.Color3(1, 0.8, 0.4); // Sand color
                cylinder.material = mat;
            } else if (type === 'dna') {
                // Double Helix Stub (Simplified as twisted spheres)
                for (let i = 0; i < 20; i++) {
                    const sphere1 = BABYLON.MeshBuilder.CreateSphere(`s1_${i}`, { diameter: 0.3 }, scene);
                    const sphere2 = BABYLON.MeshBuilder.CreateSphere(`s2_${i}`, { diameter: 0.3 }, scene);

                    const angle = i * 0.5;
                    sphere1.position = new BABYLON.Vector3(Math.cos(angle), i * 0.4 - 4, Math.sin(angle));
                    sphere2.position = new BABYLON.Vector3(Math.cos(angle + Math.PI), i * 0.4 - 4, Math.sin(angle + Math.PI));

                    const mat = new BABYLON.StandardMaterial("dnaMat", scene);
                    mat.diffuseColor = new BABYLON.Color3(0.2, 0.8, 1);
                    sphere1.material = mat;
                    sphere2.material = mat;
                }
            } else {
                // Default Sphere
                const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
                const mat = new BABYLON.StandardMaterial("mat", scene);
                mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
                sphere.material = mat;
            }

            return scene;
        };

        const scene = createScene();

        engine.runRenderLoop(() => {
            scene.render();
        });

        const resize = () => {
            engine.resize();
        };

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            engine.dispose();
        };
    }, [type]);

    return <canvas ref={canvasRef} className="w-full h-full outline-none" />;
};


const ARLearning: React.FC = () => {
    const [selectedModel, setSelectedModel] = useState<Model3D | null>(null);

    // ========================================================================
    // 📚 EDUCATIONAL CATEGORIES & MODELS
    // ========================================================================

    const categories: Category[] = [
        {
            name: "Science & Physics (Three.js)",
            icon: Brain,
            color: "from-purple-400 to-purple-600",
            models: [
                {
                    id: "solar-system",
                    title: "Solar System",
                    description: "Interactive planetary orbit simulation",
                    category: "Astronomy",
                    engine: "three",
                    type: "solar",
                    difficulty: "beginner",
                    tags: ["space", "gravity", "orbit"]
                },
                {
                    id: "atom-structure",
                    title: "Atomic Structure",
                    description: "Bohr model with orbiting electrons",
                    category: "Physics",
                    engine: "three",
                    type: "atom",
                    difficulty: "intermediate",
                    tags: ["quantum", "chemistry", "particles"]
                }
            ]
        },
        {
            name: "Biology & History (Babylon.js)",
            icon: Landmark,
            color: "from-amber-400 to-amber-600",
            models: [
                {
                    id: "dna-helix",
                    title: "DNA Double Helix",
                    description: "3D visualization of genetic structure",
                    category: "Biology",
                    engine: "babylon",
                    type: "dna",
                    difficulty: "advanced",
                    tags: ["genetics", "biology", "life"]
                },
                {
                    id: "pyramids",
                    title: "Great Pyramids",
                    description: "Geometric reconstruction of Giza",
                    category: "History",
                    engine: "babylon",
                    type: "structure",
                    difficulty: "beginner",
                    tags: ["history", "egypt", "geometry"]
                }
            ]
        }
    ];

    // ========================================================================
    // 🎯 RENDER MAIN INTERFACE
    // ========================================================================

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl">
                        <Glasses size={40} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-white">Advanced AR/VR Engine</h1>
                        <p className="text-blue-200 mt-1">Powered by Three.js & Babylon.js</p>
                    </div>
                </div>
            </motion.div>

            {/* Models Grid */}
            <div className="space-y-12 mb-20">
                {categories.map((category, catIdx) => (
                    <motion.div
                        key={catIdx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIdx * 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                                <category.icon size={24} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">{category.name}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {category.models.map((model, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setSelectedModel(model)}
                                    className="group cursor-pointer bg-slate-800/50 backdrop-blur-md hover:bg-slate-700/50 rounded-2xl p-5 border border-slate-700/50 hover:border-blue-500/50 transition-all shadow-lg"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        {model.engine === 'three' ? (
                                            <div className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded text-xs text-white border border-white/20">
                                                <Box size={14} /> Three.js
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-1 px-2 py-1 bg-amber-500/20 rounded text-xs text-amber-200 border border-amber-500/20">
                                                <Box size={14} /> Babylon.js
                                            </div>
                                        )}
                                        <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded-full">
                                            {model.difficulty}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-white group-hover:text-blue-300 mb-2">{model.title}</h3>
                                    <p className="text-sm text-slate-400 line-clamp-2">{model.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Model Viewer Modal */}
            <AnimatePresence>
                {selectedModel && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            className="w-full max-w-6xl h-[90vh] bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-900">
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg ${selectedModel.engine === 'three' ? 'bg-white text-black' : 'bg-amber-500 text-black'}`}>
                                        {selectedModel.engine === 'three' ? <span className="font-bold text-xs">THREE</span> : <span className="font-bold text-xs">BJS</span>}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-white">{selectedModel.title}</h2>
                                        <p className="text-slate-400 text-sm">{selectedModel.category}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedModel(null)}
                                    className="p-2 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Viewer Area */}
                            <div className="flex-1 relative bg-black">
                                {selectedModel.engine === 'three' ? (
                                    <ThreeJSViewer type={selectedModel.type} />
                                ) : (
                                    <BabylonJSViewer type={selectedModel.type} />
                                )}

                                {/* Overlay Controls */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                                    <button className="px-6 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full font-bold transition-colors flex items-center gap-2 border border-white/10">
                                        <RotateCw size={18} /> Rotate
                                    </button>
                                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg shadow-blue-900/50">
                                        <Maximize size={18} /> Fullscreen
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Tech Stack Info */}
            <div className="mt-12 p-8 rounded-3xl bg-slate-900 border border-slate-800">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Cpu /> Rendering Engine Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-bold">Three.js R160+</span>
                            <span className="text-green-400 text-sm">Active</span>
                        </div>
                        <p className="text-slate-400 text-sm">Handling Physics simulations and Planetary orbits using WebGLRenderer.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                        <div className="flex justify-between mb-2">
                            <span className="text-amber-500 font-bold">Babylon.js 7.0</span>
                            <span className="text-green-400 text-sm">Active</span>
                        </div>
                        <p className="text-slate-400 text-sm">Powering biological structures and architectural procedural generation.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ARLearning;
