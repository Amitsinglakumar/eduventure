import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useEduVenture } from '../context/EduVentureContext';
import './KindergartenHindi.css';

const KindergartenHindi: React.FC = () => {
    const { addXP, state } = useEduVenture();
    const [activeTab, setActiveTab] = useState('vowels');
    const [progress, setProgress] = useState(0);
    const [totalXP, setTotalXP] = useState(0);
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
    const speakHindi = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'hi-IN';
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
        awardUserXP(10);
    };

    // Three.js Background
    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf5576c); // Fallback color

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

    const learnSwar = (e: React.MouseEvent, letter: string) => {
        const target = e.currentTarget as HTMLElement;
        target.classList.add('active');
        setTimeout(() => target.classList.remove('active'), 500);
        speakHindi(letter);
    };

    return (
        <div className="hindi-module-body">
            <div className="canvas-container" ref={canvasRef}></div>

            <div className="main-content">
                <div className="header">
                    <h1>
                        <span className="emoji-animation">📚</span>
                        हिंदी सीखने का साहस
                        <span className="emoji-animation">🎨</span>
                    </h1>
                    <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        वर्णमाला, शब्द और कहानियाँ सीखो! <span className="emoji-animation">🌟</span>
                    </p>
                </div>

                <div className="section-container">
                    {/* Progress */}
                    <div className="learning-card">
                        <h3>आज की प्रगति</h3>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <span className="xp-badge">{totalXP} XP प्राप्त</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="tab-menu">
                        {['vowels', 'consonants', 'words', 'sentences', 'stories'].map(tab => (
                            <button
                                key={tab}
                                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === 'vowels' ? 'स्वर (अ आ ई...)' :
                                    tab === 'consonants' ? 'व्यंजन (क ख ग...)' :
                                        tab === 'words' ? 'शब्द' :
                                            tab === 'sentences' ? 'वाक्य' : 'कहानियाँ'}
                            </button>
                        ))}
                    </div>

                    {/* Vowels Section */}
                    {activeTab === 'vowels' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🌸 हिंदी स्वर (Vowels)</h2>
                            <p style={{ color: '#667eea', fontSize: '1.1rem', margin: '1rem 0' }}>
                                हिंदी में 10 स्वर होते हैं। प्रत्येक स्वर को क्लिक करो और सुनो!
                            </p>

                            <h3>स्वर सीखो</h3>
                            <div className="letter-grid">
                                {['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ'].map(char => (
                                    <div key={char} className="letter-card" onClick={(e) => learnSwar(e, char)}>
                                        {char}
                                    </div>
                                ))}
                            </div>

                            <h3>रंगों के नाम (Colors)</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => speakHindi('लाल')}>
                                    <div className="icon">❤️</div><div>लाल (Red)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('पीला')}>
                                    <div className="icon">💛</div><div>पीला (Yellow)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('हरा')}>
                                    <div className="icon">💚</div><div>हरा (Green)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('नीला')}>
                                    <div className="icon">💙</div><div>नीला (Blue)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('काला')}>
                                    <div className="icon">⚫</div><div>काला (Black)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('सफेद')}>
                                    <div className="icon">⚪</div><div>सफेद (White)</div>
                                </div>
                            </div>

                            <h3>संख्याएँ 1-10 (Numbers)</h3>
                            <div className="activity-grid">
                                {[
                                    { num: '1️⃣', text: 'एक', eng: 'One' },
                                    { num: '2️⃣', text: 'दो', eng: 'Two' },
                                    { num: '3️⃣', text: 'तीन', eng: 'Three' },
                                    { num: '4️⃣', text: 'चार', eng: 'Four' },
                                    { num: '5️⃣', text: 'पाँच', eng: 'Five' },
                                    { num: '6️⃣', text: 'छह', eng: 'Six' },
                                    { num: '7️⃣', text: 'सात', eng: 'Seven' },
                                    { num: '8️⃣', text: 'आठ', eng: 'Eight' },
                                    { num: '9️⃣', text: 'नौ', eng: 'Nine' },
                                    { num: '🔟', text: 'दस', eng: 'Ten' }
                                ].map((item, index) => (
                                    <div key={index} className="activity-item" onClick={() => speakHindi(item.text)}>
                                        <div className="icon">{item.num}</div>
                                        <div>{item.text} ({item.eng})</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Consonants Section */}
                    {activeTab === 'consonants' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🎯 हिंदी व्यंजन (Consonants)</h2>
                            <p style={{ color: '#667eea', fontSize: '1.1rem', margin: '1rem 0' }}>
                                पहले 15 व्यंजन क्लिक करके सीखो।
                            </p>

                            <div className="letter-grid">
                                {['क', 'ख', 'ग', 'घ', 'च', 'छ', 'ज', 'झ', 'ट', 'ठ', 'ड', 'ढ', 'त', 'थ', 'द'].map(char => (
                                    <div key={char} className="letter-card" onClick={(e) => learnSwar(e, char)}>
                                        {char}
                                    </div>
                                ))}
                            </div>

                            <h3>परिवार के सदस्य (Family Members)</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => speakHindi('माँ')}>
                                    <div className="icon">👩</div><div>माँ (Mother)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('पापा')}>
                                    <div className="icon">👨</div><div>पापा (Father)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('बहन')}>
                                    <div className="icon">👧</div><div>बहन (Sister)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('भाई')}>
                                    <div className="icon">👦</div><div>भाई (Brother)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('दादा')}>
                                    <div className="icon">👴</div><div>दादा (Grandfather)</div>
                                </div>
                                <div className="activity-item" onClick={() => speakHindi('दादी')}>
                                    <div className="icon">👵</div><div>दादी (Grandmother)</div>
                                </div>
                            </div>

                            <h3>शरीर के अंग (Body Parts)</h3>
                            <div className="activity-grid">
                                {[
                                    { icon: '🧠', text: 'सिर', eng: 'Head' },
                                    { icon: '👀', text: 'आँख', eng: 'Eyes' },
                                    { icon: '👃', text: 'नाक', eng: 'Nose' },
                                    { icon: '👅', text: 'मुँह', eng: 'Mouth' },
                                    { icon: '👐', text: 'हाथ', eng: 'Hands' },
                                    { icon: '🦶', text: 'पैर', eng: 'Feet' }
                                ].map((item, idx) => (
                                    <div key={idx} className="activity-item" onClick={() => speakHindi(item.text)}>
                                        <div className="icon">{item.icon}</div>
                                        <div>{item.text} ({item.eng})</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Words Section */}
                    {activeTab === 'words' && (
                        <div className="learning-card animate-fade-in">
                            <h2>📝 हिंदी शब्द (Words)</h2>

                            <h3>दो अक्षर के शब्द (2-Letter Words)</h3>
                            <ul className="word-list">
                                {['कमल', 'नगर', 'फल', 'आग', 'पल'].map(word => (
                                    <li key={word} onClick={() => speakHindi(word)}>{word}</li>
                                ))}
                            </ul>

                            <h3>तीन अक्षर के शब्द (3-Letter Words)</h3>
                            <ul className="word-list">
                                {['किताब', 'सब्जी', 'बिल्ली', 'पहाड़', 'खिलौना'].map(word => (
                                    <li key={word} onClick={() => speakHindi(word)}>{word}</li>
                                ))}
                            </ul>

                            <h3>दिनचर्या के शब्द (Daily Routine Words)</h3>
                            <div className="activity-grid">
                                {[
                                    { icon: '😴', text: 'सोना', eng: 'Sleep' },
                                    { icon: '🍽️', text: 'खाना', eng: 'Eat' },
                                    { icon: '🥤', text: 'पीना', eng: 'Drink' },
                                    { icon: '🎮', text: 'खेलना', eng: 'Play' },
                                    { icon: '📖', text: 'पढ़ना', eng: 'Read' },
                                    { icon: '✏️', text: 'लिखना', eng: 'Write' }
                                ].map((item, idx) => (
                                    <div key={idx} className="activity-item" onClick={() => speakHindi(item.text)}>
                                        <div className="icon">{item.icon}</div>
                                        <div>{item.text} ({item.eng})</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Sentences Section */}
                    {activeTab === 'sentences' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🗣️ हिंदी वाक्य (Sentences)</h2>

                            <h3>सरल वाक्य (Simple Sentences)</h3>
                            {[
                                'मैं बहुत खुश हूँ।',
                                'यह एक बिल्ली है।',
                                'मुझे खेलना पसंद है।',
                                'नमस्ते! मेरा नाम राज है।'
                            ].map((sentence, idx) => (
                                <div key={idx} style={{ background: '#ffe0e6', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0', borderLeft: '5px solid #f5576c' }}>
                                    <p style={{ fontSize: '1.4rem', margin: '0.5rem 0', color: '#333' }}>{sentence}</p>
                                    <button className="voice-button" onClick={() => speakHindi(sentence)}>🎤 सुनो</button>
                                </div>
                            ))}

                            <h3>अभिवादन (Greetings)</h3>
                            <div className="activity-grid">
                                {[
                                    { icon: '🙏', text: 'नमस्ते', eng: 'Hello' },
                                    { icon: '🌅', text: 'शुभ प्रभात', eng: 'Good morning' },
                                    { icon: '🌙', text: 'शुभ रात्रि', eng: 'Good night' },
                                    { icon: '🤝', text: 'धन्यवाद', eng: 'Thank you' }
                                ].map((item, idx) => (
                                    <div key={idx} className="activity-item" onClick={() => speakHindi(item.text)}>
                                        <div className="icon">{item.icon}</div>
                                        <div>{item.text} ({item.eng})</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Stories Section */}
                    {activeTab === 'stories' && (
                        <div className="learning-card animate-fade-in">
                            <h2>📖 हिंदी कहानियाँ (Stories)</h2>

                            <h3>छोटी कहानी: चतुर खरगोश</h3>
                            <div style={{ background: '#fff3cd', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0', border: '3px solid #ffc107' }}>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
                                    एक बार एक जंगल में एक खरगोश रहता था।
                                    वह बहुत तेज दौड़ता था।
                                    एक दिन एक शेर उसे पकड़ने के लिए दौड़ा।
                                    लेकिन खरगोश ने अपनी बुद्धि से शेर को मूर्ख बना दिया।
                                    सभी जानवरों ने खरगोश की बहादुरी की प्रशंसा की।
                                    खरगोश जंगल में सुरक्षित और खुश रहने लगा।
                                </p>
                                <button className="voice-button"
                                    onClick={() => speakHindi('एक बार एक जंगल में एक खरगोश रहता था। वह बहुत तेज दौड़ता था। एक दिन एक शेर उसे पकड़ने के लिए दौड़ा। लेकिन खरगोश ने अपनी बुद्धि से शेर को मूर्ख बना दिया। सभी जानवरों ने खरगोश की बहादुरी की प्रशंसा की। खरगोश जंगल में सुरक्षित और खुश रहने लगा।')}
                                    style={{ width: '100%', marginTop: '1rem' }}
                                >
                                    🎤 कहानी सुनो
                                </button>
                            </div>

                            <h3>नैतिक सीख (Moral Lesson)</h3>
                            <div style={{ background: '#e0f4ff', padding: '1.5rem', borderRadius: '15px', borderLeft: '5px solid #667eea' }}>
                                <p style={{ fontSize: '1.1rem', color: '#333' }}>
                                    <strong>सीख:</strong> बुद्धि और साहस ताकत से अधिक महत्वपूर्ण है।
                                </p>
                            </div>

                            <h3>कहानी के प्रश्न (Story Questions)</h3>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0', border: '3px solid #FFD700' }}>
                                <p style={{ fontSize: '1.2rem', color: '#667eea', margin: '1rem 0', fontWeight: 'bold' }}>
                                    खरगोश कौन था?
                                </p>
                                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                    <button className="voice-button" onClick={() => { awardUserXP(20); alert('सही जवाब! 👏'); }}>तेज दौड़ने वाला</button>
                                    <button className="voice-button" onClick={() => alert('गलत। दोबारा कोशिश करो!')}>धीमा</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KindergartenHindi;
