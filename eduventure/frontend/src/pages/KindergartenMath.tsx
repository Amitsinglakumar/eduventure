import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useEduVenture } from '../context/EduVentureContext';
import './KindergartenMath.css';

const KindergartenMath: React.FC = () => {
    const { addXP, state } = useEduVenture();
    const [activeTab, setActiveTab] = useState('numbers');
    const [progress, setProgress] = useState(0);
    const [totalXP, setTotalXP] = useState(0);
    const [userPattern, setUserPattern] = useState<string[]>([]);
    const canvasRef = useRef<HTMLDivElement>(null);

    // Sync with Context state
    useEffect(() => {
        if (state.student) {
            setTotalXP(state.student.totalXP);
            updateProgress(state.student.totalXP);
        }
    }, [state.student]);

    const updateProgress = (xp: number) => {
        const levelXP = xp % 100;
        setProgress(levelXP);
    };

    const awardUserXP = (amount: number, label?: string) => {
        addXP(amount);
        createRewardAnimation(`+${amount} XP`);
        if (label) {
            console.log(`Completed: ${label}`);
        }
    };

    const createRewardAnimation = (text: string) => {
        const element = document.createElement('div');
        element.className = 'reward-animation';
        element.innerHTML = `<div class="celebration-text">${text}</div>`;
        document.body.appendChild(element);
        setTimeout(() => element.remove(), 1500);
    };

    // Speech Synthesis
    const speak = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
    };

    // Three.js Background
    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x10b981);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const container = canvasRef.current;
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        // Particles
        const geometry = new THREE.BufferGeometry();
        const particleCount = 100;
        const positionArray = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positionArray[i] = (Math.random() - 0.5) * 80;
            positionArray[i + 1] = (Math.random() - 0.5) * 80;
            positionArray[i + 2] = (Math.random() - 0.5) * 80;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
        const material = new THREE.PointsMaterial({ size: 2, color: 0xFFD700 });
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            particles.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (renderer.domElement && container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    // Game Logic
    const learnNumber = (num: number, e: React.MouseEvent) => {
        const target = e.currentTarget;
        target.classList.add('active');
        setTimeout(() => target.classList.remove('active'), 500);
        speak(`Number ${num}`);
        awardUserXP(10);
    };

    const learnShape = (shape: string) => {
        speak(shape);
        alert(`Great! You learned about ${shape}! 🎉`);
        awardUserXP(20);
    };

    const checkCounting = (expected: number, type: string) => {
        alert(`Great counting! You counted ${expected} ${type}! 🎉`);
        awardUserXP(30);
    };

    const handleOperation = (isCorrect: boolean, e: React.MouseEvent) => {
        const target = e.currentTarget;
        if (isCorrect) {
            target.classList.add('selected');
            alert('Correct! ✅🎉');
            awardUserXP(50);
            createRewardAnimation('🎉 Correct!');
        } else {
            alert('Try again! ❌');
        }
    };

    const addToPattern = (color: string) => {
        const newPattern = [...userPattern, color];
        setUserPattern(newPattern);
        awardUserXP(5);
    };

    const clearPattern = () => {
        setUserPattern([]);
    };

    const checkPattern = (correctColor: string) => {
        alert(`Correct! The next is ${correctColor}! 🎉`);
        awardUserXP(30);
    };

    return (
        <div className="math-module-body">
            <div className="canvas-container" ref={canvasRef}></div>

            <div className="main-content">
                <div className="header">
                    <h1>
                        <span className="emoji-animation">🔢</span>
                        Math Adventure Kingdom
                        <span className="emoji-animation">➕</span>
                    </h1>
                    <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Learn Numbers, Shapes & Operations with Fun! <span className="emoji-animation">🌟</span>
                    </p>
                </div>

                <div className="section-container">
                    {/* Progress */}
                    <div className="learning-card">
                        <h3>Your Progress Today</h3>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <span className="xp-badge">{totalXP} XP Earned</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="tab-menu">
                        {['numbers', 'shapes', 'addition', 'subtraction', 'patterns', 'measurement'].map(tab => (
                            <button
                                key={tab}
                                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Numbers Section */}
                    {activeTab === 'numbers' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🔢 Learning Numbers 0-10</h2>

                            <h3>Number Recognition & Counting</h3>
                            <p style={{ color: '#667eea', fontSize: '1.1rem', margin: '1rem 0' }}>
                                Click each number to learn! <span className="emoji-animation">👇</span>
                            </p>

                            <div className="number-grid">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                    <div key={num} className="number-card" onClick={(e) => learnNumber(num, e)}>{num}</div>
                                ))}
                            </div>

                            <h3>Counting Objects</h3>
                            <p style={{ color: '#667eea', margin: '1rem 0', fontWeight: 'bold' }}>How many apples? Count them!</p>
                            <div className="counting-grid">
                                {Array(3).fill('🍎').map((item, i) => (
                                    <div key={i} className="count-item">{item}</div>
                                ))}
                            </div>
                            <button className="voice-button" onClick={() => checkCounting(3, 'apples')}>Count: 3 Apples</button>

                            <p style={{ color: '#667eea', margin: '2rem 1rem 1rem 1rem', fontWeight: 'bold' }}>How many stars? Count them!</p>
                            <div className="counting-grid">
                                {Array(5).fill('⭐').map((item, i) => (
                                    <div key={i} className="count-item">{item}</div>
                                ))}
                            </div>
                            <button className="voice-button" onClick={() => checkCounting(5, 'stars')}>Count: 5 Stars</button>

                            <h3>Numbers 11-20 (Teens)</h3>
                            <p style={{ color: '#667eea', margin: '1rem 0' }}>Teen numbers = 10 + something!</p>
                            <div className="number-grid">
                                {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(num => (
                                    <div key={num} className="number-card" onClick={(e) => learnNumber(num, e)}>{num}</div>
                                ))}
                            </div>

                            <h3>Number Comparison</h3>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0' }}>
                                <p style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '1rem 0', fontWeight: 'bold' }}>
                                    5 is <span style={{ color: '#10b981' }}>MORE</span> than 3
                                </p>
                                <p style={{ textAlign: 'center', fontSize: '2rem', margin: '1rem 0' }}>5️⃣ {'>'} 3️⃣</p>
                            </div>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0' }}>
                                <p style={{ color: '#3b82f6', fontSize: '1.3rem', margin: '1rem 0', fontWeight: 'bold' }}>
                                    2 is <span style={{ color: '#ef4444' }}>LESS</span> than 7
                                </p>
                                <p style={{ textAlign: 'center', fontSize: '2rem', margin: '1rem 0' }}>2️⃣ {'<'} 7️⃣</p>
                            </div>
                        </div>
                    )}

                    {/* Shapes Section */}
                    {activeTab === 'shapes' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🔷 Learning Shapes</h2>

                            <h3>2D Shapes (Flat)</h3>
                            <div className="shape-grid">
                                {[
                                    { name: 'Circle', desc: '0 corners', style: { borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)', width: '100px', height: '100px' } },
                                    { name: 'Square', desc: '4 equal sides', style: { background: '#10b981', width: '100px', height: '100px' } },
                                    { name: 'Triangle', desc: '3 corners', custom: <div style={{ width: 0, height: 0, borderLeft: '50px solid transparent', borderRight: '50px solid transparent', borderBottom: '90px solid #f59e0b', margin: '0 auto' }}></div> },
                                    { name: 'Rectangle', desc: '4 sides', style: { background: '#8b5cf6', width: '130px', height: '80px' } },
                                    { name: 'Oval', desc: 'Stretched circle', style: { borderRadius: '50%', background: '#ec4899', width: '120px', height: '90px' } },
                                    { name: 'Star', desc: '5+ points', custom: <p style={{ fontSize: '4rem', margin: '1rem 0' }}>⭐</p> }
                                ].map((shape, i) => (
                                    <div key={i} className="shape-card" onClick={() => learnShape(shape.name)}>
                                        {shape.custom ? shape.custom : <div style={{ margin: '0 auto', ...shape.style }}></div>}
                                        <p style={{ marginTop: '1rem', color: '#3b82f6', fontWeight: 'bold', fontSize: '1.2rem' }}>{shape.name}</p>
                                        <p style={{ color: '#999', fontSize: '0.9rem' }}>{shape.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3>3D Shapes (Solid)</h3>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0', textAlign: 'center' }}>
                                <p style={{ color: '#3b82f6', fontWeight: 'bold', marginBottom: '1rem' }}>Real-world Examples:</p>
                                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {[
                                        { icon: '🔮', name: 'Sphere (Ball)' },
                                        { icon: '🎁', name: 'Cube (Box)' },
                                        { icon: '🎂', name: 'Cylinder (Cake)' },
                                        { icon: '🍦', name: 'Cone (Ice-cream)' }
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <p style={{ fontSize: '2rem' }}>{s.icon}</p>
                                            <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>{s.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Addition Section */}
                    {activeTab === 'addition' && (
                        <div className="learning-card animate-fade-in">
                            <h2>➕ Learning Addition</h2>
                            <p style={{ color: '#667eea', margin: '1rem 0', fontSize: '1.1rem' }}>Addition = Putting things together!</p>

                            <div className="addition-container">
                                <div className="math-equation">1 + 1 = ?</div>
                                <p style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1.5rem' }}>🍎 + 🍎 = ?</p>
                                <div className="operation-grid">
                                    <div className="operation-item" onClick={(e) => handleOperation(true, e)}>🔴 2</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 1</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 3</div>
                                </div>
                            </div>

                            <div className="addition-container">
                                <div className="math-equation">2 + 2 = ?</div>
                                <p style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1.5rem' }}>🐶🐶 + 🐶🐶 = ?</p>
                                <div className="operation-grid">
                                    <div className="operation-item" onClick={(e) => handleOperation(true, e)}>🔴 4</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 3</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 5</div>
                                </div>
                            </div>

                            <h3>Number Bonds - Ways to Make 5</h3>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0' }}>
                                <p style={{ color: '#3b82f6', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>All these equal 5!</p>
                                {['1 + 4 = 5', '2 + 3 = 5', '3 + 2 = 5', '4 + 1 = 5', '5 + 0 = 5'].map((bond, i) => (
                                    <p key={i} style={{ textAlign: 'center', fontSize: '1.5rem', margin: '0.5rem 0' }}>{bond}</p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Subtraction Section */}
                    {activeTab === 'subtraction' && (
                        <div className="learning-card animate-fade-in">
                            <h2>➖ Learning Subtraction</h2>
                            <p style={{ color: '#667eea', margin: '1rem 0', fontSize: '1.1rem' }}>Subtraction = Taking things away!</p>

                            <div className="addition-container">
                                <div className="math-equation">3 - 1 = ?</div>
                                <p style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1.5rem' }}>🍎🍎🍎 - 🍎 = ?</p>
                                <div className="operation-grid">
                                    <div className="operation-item" onClick={(e) => handleOperation(true, e)}>🔴 2</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 1</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 3</div>
                                </div>
                            </div>

                            <div className="addition-container">
                                <div className="math-equation">5 - 2 = ?</div>
                                <p style={{ textAlign: 'center', margin: '1rem 0', fontSize: '1.5rem' }}>🐶🐶🐶🐶🐶 - 🐶🐶 = ?</p>
                                <div className="operation-grid">
                                    <div className="operation-item" onClick={(e) => handleOperation(true, e)}>🔴 3</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 4</div>
                                    <div className="operation-item" onClick={(e) => handleOperation(false, e)}>🔴 5</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Patterns Section */}
                    {activeTab === 'patterns' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🎨 Learning Patterns</h2>
                            <p style={{ color: '#667eea', margin: '1rem 0', fontSize: '1.1rem' }}>Patterns repeat! Find what comes next!</p>

                            <h3>AB Patterns</h3>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0' }}>
                                <p style={{ color: '#3b82f6', fontWeight: 'bold', marginBottom: '1rem' }}>Red - Blue - Red - Blue - Red - ?</p>
                                <div className="pattern-row">
                                    {['🔴', '🔵', '🔴', '🔵', '🔴'].map((p, i) => (
                                        <div key={i} className="pattern-item" style={{ background: i % 2 === 0 ? '#ef4444' : '#3b82f6', color: 'white' }}>{p}</div>
                                    ))}
                                    <div className="pattern-item" style={{ background: '#ccc', cursor: 'pointer' }} onClick={() => checkPattern('Blue')}>❓</div>
                                </div>
                            </div>

                            <h3>Create Your Own Pattern</h3>
                            <p style={{ color: '#3b82f6', margin: '1rem 0', fontWeight: 'bold' }}>Click to create a pattern:</p>
                            <div className="pattern-row">
                                <div className="pattern-item" style={{ background: '#ef4444', cursor: 'pointer', color: 'white' }} onClick={() => addToPattern('red')}>🔴</div>
                                <div className="pattern-item" style={{ background: '#3b82f6', cursor: 'pointer', color: 'white' }} onClick={() => addToPattern('blue')}>🔵</div>
                                <div className="pattern-item" style={{ background: '#10b981', cursor: 'pointer', color: 'white' }} onClick={() => addToPattern('green')}>🟢</div>
                            </div>

                            <div className="pattern-row" style={{ minHeight: '60px', marginTop: '1rem' }}>
                                {userPattern.map((color, i) => (
                                    <div key={i} className="pattern-item"
                                        style={{ background: color === 'red' ? '#ef4444' : color === 'blue' ? '#3b82f6' : '#10b981', color: 'white' }}>
                                        {color === 'red' ? '🔴' : color === 'blue' ? '🔵' : '🟢'}
                                    </div>
                                ))}
                            </div>
                            <button className="voice-button" onClick={clearPattern} style={{ marginTop: '1rem', width: '100%' }}>Clear Pattern</button>
                        </div>
                    )}

                    {/* Measurement Section */}
                    {activeTab === 'measurement' && (
                        <div className="learning-card animate-fade-in">
                            <h2>📏 Learning Measurement</h2>

                            <h3>Length</h3>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '2rem 0' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ width: '50px', height: '5px', background: '#ef4444', margin: '0 auto 0.5rem' }}></div>
                                        <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>Short</p>
                                    </div>
                                    <p style={{ fontSize: '2rem', color: '#3b82f6' }}>vs</p>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ width: '150px', height: '5px', background: '#10b981', margin: '0 auto 0.5rem' }}></div>
                                        <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>Long</p>
                                    </div>
                                </div>
                            </div>

                            <h3>Time: Days of the Week</h3>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '1rem' }}>
                                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                                        <div key={day} style={{ background: 'white', padding: '1rem', borderRadius: '10px', textAlign: 'center', border: '2px solid #3b82f6' }}>
                                            <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>{day}</p>
                                            <p style={{ fontSize: '1.5rem' }}>📅</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <h3>Money: Basic Coins</h3>
                            <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0' }}>
                                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    {[
                                        { name: 'Penny (1¢)', icon: '🪙' },
                                        { name: 'Nickel (5¢)', icon: '🪙' },
                                        { name: 'Dime (10¢)', icon: '🪙' },
                                        { name: 'Quarter (25¢)', icon: '🪙' }
                                    ].map((coin, i) => (
                                        <div key={i} style={{ textAlign: 'center' }}>
                                            <p style={{ fontSize: '3rem' }}>{coin.icon}</p>
                                            <p style={{ color: '#3b82f6', fontWeight: 'bold' }}>{coin.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KindergartenMath;
