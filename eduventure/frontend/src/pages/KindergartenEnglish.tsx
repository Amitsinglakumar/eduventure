import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useEduVenture } from '../context/EduVentureContext';
import './KindergartenEnglish.css';

const KindergartenEnglish: React.FC = () => {
    const { addXP, state } = useEduVenture();
    const [activeTab, setActiveTab] = useState('listening');
    const [progress, setProgress] = useState(0);
    const [totalXP, setTotalXP] = useState(0);
    const [streak, setStreak] = useState(0);
    const canvasRef = useRef<HTMLDivElement>(null);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const [flashcardContent, setFlashcardContent] = useState('Click to Start!');
    const [isFlipped, setIsFlipped] = useState(false);
    const [quizScore, setQuizScore] = useState(0);

    // Sync with Context state
    useEffect(() => {
        if (state.student) {
            setTotalXP(state.student.totalXP);
            setStreak(state.student.streak);
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
    const speakWord = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
        awardUserXP(10);
    };

    const speakPhrase = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        window.speechSynthesis.speak(utterance);
        awardUserXP(15);
    };

    const speakSentence = (sentence: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
        awardUserXP(20);
    };

    const playSound = (soundType: string) => {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        const audioContext = new AudioContext();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch (soundType) {
            case 'birds':
                oscillator.frequency.value = 1000;
                oscillator.frequency.exponentialRampToValueAtTime(2000, audioContext.currentTime + 0.5);
                break;
            case 'water':
                oscillator.frequency.value = 200;
                break;
            case 'wind':
                oscillator.frequency.value = 100;
                break;
            case 'bell':
                oscillator.frequency.value = 800;
                break;
        }

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);

        awardUserXP(5);
    };

    // Three.js Background
    useEffect(() => {
        if (!canvasRef.current) return;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x667eea);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const container = canvasRef.current;
        container.innerHTML = '';
        container.appendChild(renderer.domElement);

        // Lighting
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(5, 5, 7);
        scene.add(light);

        // Animated Floating Books/Particles
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
            particles.rotation.x += 0.0003;
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
    const learnLetter = (letter: string) => {
        speakWord(letter);
    };

    const nextFlashcard = () => {
        const nextIndex = (currentLetterIndex + 1) % letters.length;
        setCurrentLetterIndex(nextIndex);
        const letter = letters[nextIndex];
        setFlashcardContent(letter);
        setIsFlipped(false);
        speakWord(letter);
    };

    const handleQuizAnswer = (isCorrect: boolean, e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        if (isCorrect) {
            target.classList.add('correct');
            awardUserXP(50);
            setQuizScore(prev => prev + 1);
            createRewardAnimation('🎉 Correct!');
        } else {
            target.classList.add('incorrect');
            createRewardAnimation('❌ Try Again!');
        }

        // Disable siblings
        if (target.parentElement) {
            const siblings = target.parentElement.children;
            for (let i = 0; i < siblings.length; i++) {
                (siblings[i] as HTMLElement).style.pointerEvents = 'none';
                (siblings[i] as HTMLElement).style.opacity = '0.7';
            }
        }
    };

    // Standalone quiz check (for story questions etc)
    const checkAnswer = (isCorrect: boolean, e: React.MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        if (isCorrect) {
            target.classList.add('correct');
            awardUserXP(25);
            createRewardAnimation('✨ Great!');
        } else {
            target.classList.add('incorrect');
        }
        // Disable siblings
        if (target.parentElement) {
            const siblings = target.parentElement.children;
            for (let i = 0; i < siblings.length; i++) {
                (siblings[i] as HTMLElement).style.pointerEvents = 'none';
                (siblings[i] as HTMLElement).style.opacity = '0.7';
            }
        }
    };


    const checkWriting = () => {
        const input = document.getElementById('nameInput') as HTMLInputElement;
        const val = input.value.trim();
        if (val.length > 0) {
            alert(`Great job writing: ${val}! 👏`);
            speakWord(val);
            awardUserXP(30);
        } else {
            alert('Please type name first!');
        }
    };

    const checkSentence = () => {
        const input = (document.getElementById('sentenceInput') as HTMLTextAreaElement).value.trim().toLowerCase();
        const correct = 'i see a cat.';

        if (input === correct) {
            alert('Perfect! You wrote it correctly! 🌟');
            awardUserXP(50);
            createRewardAnimation('⭐ Perfect!');
        } else {
            alert(`You wrote: "${input}"\nCorrect answer: "${correct}"\nTry again!`);
        }
    };

    const checkLabel = () => {
        const input = (document.getElementById('labelInput') as HTMLInputElement).value.trim().toLowerCase();
        if (input === 'cat') {
            alert('Correct! That is a cat! 🐱');
            awardUserXP(30);
        } else {
            alert('Try again! What animal is it?');
        }
    };

    const saveJournal = () => {
        const input = (document.getElementById('journalInput') as HTMLTextAreaElement).value.trim();
        if (input.length > 0) {
            alert(`Great writing! Your journal entry has been saved! 📔`);
            awardUserXP(50);
            (document.getElementById('journalInput') as HTMLTextAreaElement).value = '';
            createRewardAnimation('📝 Saved!');
        } else {
            alert('Write something first!');
        }
    };

    return (
        <div className="english-module-body">
            <div id="canvas-container" ref={canvasRef}></div>

            <div className="main-content">
                <div className="english-header">
                    <h1>
                        <span className="emoji-animation">📚</span>
                        English Adventure Kingdom
                        <span className="emoji-animation">🎨</span>
                    </h1>
                    <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Learn Letters, Words & Stories with Fun! <span className="emoji-animation">🌟</span>
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
                            <span className="xp-badge">{streak} Day Streak 🔥</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="tab-menu">
                        {['listening', 'letters', 'words', 'reading', 'writing', 'quiz'].map(tab => (
                            <button
                                key={tab}
                                className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab === 'listening' ? 'Listening Skills' :
                                    tab === 'letters' ? 'Learn Letters' :
                                        tab === 'words' ? 'Build Words' :
                                            tab === 'reading' ? 'Reading Practice' :
                                                tab === 'writing' ? 'Writing Skills' : 'Fun Quiz!'}
                            </button>
                        ))}
                    </div>

                    {/* Content Sections */}
                    {activeTab === 'listening' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🎧 Listening & Speaking Skills</h2>

                            <h3>Term 1: Environmental Sounds</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => playSound('birds')}>
                                    <div className="icon">🐦</div><div>Birds Chirping</div>
                                </div>
                                <div className="activity-item" onClick={() => playSound('water')}>
                                    <div className="icon">💧</div><div>Water Flowing</div>
                                </div>
                                <div className="activity-item" onClick={() => playSound('wind')}>
                                    <div className="icon">🌬️</div><div>Wind Blowing</div>
                                </div>
                                <div className="activity-item" onClick={() => playSound('bell')}>
                                    <div className="icon">🔔</div><div>Bell Ringing</div>
                                </div>
                            </div>

                            <h3>Daily Routine Vocabulary</h3>
                            <div className="activity-grid">
                                {['sit', 'stand', 'eat', 'drink', 'sleep', 'play'].map(word => (
                                    <div className="activity-item" key={word} onClick={() => speakWord(word)}>
                                        <div className="icon">
                                            {word === 'sit' ? '🪑' : word === 'stand' ? '🕴️' : word === 'eat' ? '🍽️' :
                                                word === 'drink' ? '🥤' : word === 'sleep' ? '😴' : '🎮'}
                                        </div>
                                        <div>{word.charAt(0).toUpperCase() + word.slice(1)}</div>
                                    </div>
                                ))}
                            </div>

                            <h3>Family Members</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => speakWord('mother')}>
                                    <div className="icon">👩</div><div>Mother</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('father')}>
                                    <div className="icon">👨</div><div>Father</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('sister')}>
                                    <div className="icon">👧</div><div>Sister</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('brother')}>
                                    <div className="icon">👦</div><div>Brother</div>
                                </div>
                            </div>

                            <h3>Body Parts - Touch & Say!</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => speakWord('head')}>
                                    <div className="icon">🧠</div><div>Head</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('eyes')}>
                                    <div className="icon">👀</div><div>Eyes</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('nose')}>
                                    <div className="icon">👃</div><div>Nose</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('mouth')}>
                                    <div className="icon">👅</div><div>Mouth</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('hands')}>
                                    <div className="icon">👐</div><div>Hands</div>
                                </div>
                                <div className="activity-item" onClick={() => speakWord('feet')}>
                                    <div className="icon">🦶</div><div>Feet</div>
                                </div>
                            </div>

                            <h3>Simple Conversations</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                                <button className="voice-button" onClick={() => speakPhrase('Good morning!')}>🎤 Good morning!</button>
                                <button className="voice-button" onClick={() => speakPhrase('Hello, my name is...')}>🎤 Hello, my name is...</button>
                                <button className="voice-button" onClick={() => speakPhrase('What is this?')}>🎤 What is this?</button>
                                <button className="voice-button" onClick={() => speakPhrase('Who is this?')}>🎤 Who is this?</button>
                                <button className="voice-button" onClick={() => speakPhrase('How are you?')}>🎤 How are you?</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'letters' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🔤 Learn English Letters</h2>
                            <h3>Capital Letters (A-Z)</h3>
                            <div className="letter-grid">
                                {letters.map(letter => (
                                    <div key={letter} className="letter-card" onClick={(e) => {
                                        const target = e.currentTarget;
                                        target.classList.add('active');
                                        setTimeout(() => target.classList.remove('active'), 500);
                                        learnLetter(letter);
                                    }}>{letter}</div>
                                ))}
                            </div>

                            <h3>Lowercase Letters (a-z)</h3>
                            <div className="letter-grid">
                                {lowerLetters.map(letter => (
                                    <div key={letter} className="letter-card" onClick={(e) => {
                                        const target = e.currentTarget;
                                        target.classList.add('active');
                                        setTimeout(() => target.classList.remove('active'), 500);
                                        learnLetter(letter);
                                    }}>{letter}</div>
                                ))}
                            </div>

                            <p style={{ color: '#667eea', fontSize: '1.1rem', margin: '1rem 0' }}>
                                Click each letter above to hear its sound! 🎵
                            </p>

                            <h3>Flashcards</h3>
                            <div className={`flashcard-container ${isFlipped ? 'clicked' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
                                <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
                                    {flashcardContent}
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <button className="voice-button" onClick={nextFlashcard}>Next Letter →</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'words' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🎯 Build Words</h2>
                            <h3>CVC Words - Easy Word Building!</h3>
                            <p style={{ color: '#667eea', margin: '1rem 0' }}>
                                CVC = Consonant + Vowel + Consonant
                            </p>

                            <h3>Words with 'A'</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => speakWord('cat')}><div className="icon">🐱</div><div>cat</div></div>
                                <div className="activity-item" onClick={() => speakWord('mat')}><div className="icon">🟫</div><div>mat</div></div>
                                <div className="activity-item" onClick={() => speakWord('bat')}><div className="icon">🦇</div><div>bat</div></div>
                                <div className="activity-item" onClick={() => speakWord('hat')}><div className="icon">🎩</div><div>hat</div></div>
                                <div className="activity-item" onClick={() => speakWord('rat')}><div className="icon">🐭</div><div>rat</div></div>
                                <div className="activity-item" onClick={() => speakWord('sat')}><div className="icon">🪑</div><div>sat</div></div>
                            </div>

                            <h3>Words with 'I'</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => speakWord('sit')}><div className="icon">🪑</div><div>sit</div></div>
                                <div className="activity-item" onClick={() => speakWord('bit')}><div className="icon">🍖</div><div>bit</div></div>
                                <div className="activity-item" onClick={() => speakWord('pit')}><div className="icon">🕳️</div><div>pit</div></div>
                                <div className="activity-item" onClick={() => speakWord('fit')}><div className="icon">💪</div><div>fit</div></div>
                                <div className="activity-item" onClick={() => speakWord('hit')}><div className="icon">👊</div><div>hit</div></div>
                                <div className="activity-item" onClick={() => speakWord('kit')}><div className="icon">🎁</div><div>kit</div></div>
                            </div>

                            <h3>Words with 'O'</h3>
                            <div className="activity-grid">
                                <div className="activity-item" onClick={() => speakWord('top')}><div className="icon">🔝</div><div>top</div></div>
                                <div className="activity-item" onClick={() => speakWord('pot')}><div className="icon">🫖</div><div>pot</div></div>
                                <div className="activity-item" onClick={() => speakWord('dot')}><div className="icon">⚫</div><div>dot</div></div>
                                <div className="activity-item" onClick={() => speakWord('hot')}><div className="icon">🔥</div><div>hot</div></div>
                                <div className="activity-item" onClick={() => speakWord('got')}><div className="icon">✅</div><div>got</div></div>
                                <div className="activity-item" onClick={() => speakWord('lot')}><div className="icon">📍</div><div>lot</div></div>
                            </div>

                            <h3>Word Family Practice: -at words</h3>
                            <ul className="word-list">
                                <li onClick={() => speakWord('cat')}>🐱 cat</li>
                                <li onClick={() => speakWord('bat')}>🦇 bat</li>
                                <li onClick={() => speakWord('hat')}>🎩 hat</li>
                                <li onClick={() => speakWord('mat')}>🟫 mat</li>
                                <li onClick={() => speakWord('fat')}>🐷 fat</li>
                                <li onClick={() => speakWord('sat')}>🪑 sat</li>
                            </ul>

                            <h3>Sight Words (First Set)</h3>
                            <ul className="word-list">
                                {['I', 'a', 'the', 'and', 'is', 'to', 'in', 'it', 'you', 'he', 'she', 'we', 'look', 'see', 'can'].map(w => (
                                    <li key={w} onClick={() => speakWord(w)}>{w}</li>
                                ))}
                            </ul>

                        </div>
                    )}

                    {activeTab === 'reading' && (
                        <div className="learning-card animate-fade-in">
                            <h2>📖 Reading Practice</h2>

                            <h3>Simple Sentences</h3>
                            {[
                                { text: 'I see a cat.', color: '#667eea' },
                                { text: 'The cat is big.', color: '#764ba2' },
                                { text: 'I like to play.', color: '#f5576c' },
                                { text: 'My mom is nice.', color: '#f093fb' }
                            ].map((item, idx) => (
                                <div key={idx} style={{ background: '#f0f4ff', padding: '1.5rem', borderRadius: '15px', borderLeft: `5px solid ${item.color}`, marginBottom: '1rem' }}>
                                    <p style={{ fontSize: '1.3rem', color: '#333' }}>{item.text}</p>
                                    <button className="voice-button" onClick={() => speakSentence(item.text)}>🎤 Listen</button>
                                </div>
                            ))}

                            <h3>Sequencing Stories</h3>
                            <p style={{ color: '#667eea', margin: '1rem 0', fontWeight: 'bold' }}>
                                Put the pictures in the right order:
                            </p>
                            <div className="activity-grid">
                                <div className="activity-item"><div className="icon">1️⃣</div><div>Wake up</div></div>
                                <div className="activity-item"><div className="icon">2️⃣</div><div>Eat breakfast</div></div>
                                <div className="activity-item"><div className="icon">3️⃣</div><div>Go to school</div></div>
                                <div className="activity-item"><div className="icon">4️⃣</div><div>Play</div></div>
                                <div className="activity-item"><div className="icon">5️⃣</div><div>Go home</div></div>
                                <div className="activity-item"><div className="icon">6️⃣</div><div>Sleep</div></div>
                            </div>

                            <h3>Story Comprehension</h3>
                            <div style={{ background: '#fff3cd', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0', border: '3px solid #ffc107' }}>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', margin: '0', color: '#333' }}>
                                    <strong>The Little Star</strong><br /><br />
                                    Once upon a time, there was a little star in the sky.
                                    The star was very bright. It loved to twinkle all night long.
                                    The star had many friends - the moon and other stars.
                                    Together, they made the night sky beautiful.
                                    Everyone looked up and smiled!
                                    The little star was very happy. ⭐
                                </p>
                                <button className="voice-button" onClick={() => speakSentence('Once upon a time, there was a little star in the sky. The star was very bright. It loved to twinkle all night long. The star had many friends - the moon and other stars. Together, they made the night sky beautiful. Everyone looked up and smiled! The little star was very happy!')}
                                    style={{ marginTop: '1rem' }}>
                                    🎤 Listen to Story
                                </button>
                            </div>

                            <h3>Story Questions</h3>
                            <div className="quiz-container">
                                <p className="quiz-question">What was the little star?</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => checkAnswer(true, e)}>✅ Bright</div>
                                    <div className="quiz-option" onClick={(e) => checkAnswer(false, e)}>❌ Sad</div>
                                </div>
                            </div>
                            <div className="quiz-container">
                                <p className="quiz-question">Who were the star&apos;s friends?</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => checkAnswer(true, e)}>✅ Moon and stars</div>
                                    <div className="quiz-option" onClick={(e) => checkAnswer(false, e)}>❌ Cats</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'writing' && (
                        <div className="learning-card animate-fade-in">
                            <h2>✏️ Writing Skills</h2>
                            <h3>Name Writing Practice</h3>
                            <div style={{ background: '#f0f4ff', padding: '1.5rem', borderRadius: '15px' }}>
                                <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '1rem' }}>
                                    Practice writing your name:
                                </p>
                                <input type="text" id="nameInput" placeholder="Type name..."
                                    style={{ padding: '1rem', width: '100%', borderRadius: '10px', border: '3px solid #667eea', fontSize: '1.2rem' }} />
                                <button className="voice-button" onClick={() => checkWriting()} style={{ marginTop: '1rem' }}>✏️ Check My Writing</button>
                            </div>

                            <h3>Letter Tracing</h3>
                            <p style={{ color: '#667eea', margin: '1rem 0', fontSize: '1.1rem' }}>
                                Practice tracing the dotted lines:
                            </p>
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '15px', border: '3px dashed #667eea', margin: '1rem 0', textAlign: 'center' }}>
                                <p style={{ fontSize: '3rem', letterSpacing: '0.5rem', color: '#667eea', fontWeight: 'bold' }}>
                                    A . . . B . . . C . . . D . . . E
                                </p>
                                <p style={{ color: '#999', fontSize: '1rem' }}>Follow the dots and trace the letters!</p>
                            </div>

                            <h3>Simple Sentences - Copy Writing</h3>
                            <div className="quiz-container">
                                <p style={{ fontSize: '1.3rem', color: '#333', margin: '1rem 0' }}>
                                    Copy this sentence:
                                </p>
                                <p style={{ fontSize: '1.5rem', color: '#667eea', fontWeight: 'bold', margin: '1rem 0' }}>
                                    I see a cat.
                                </p>
                                <textarea id="sentenceInput" placeholder="Write the sentence here..."
                                    style={{ width: '100%', padding: '1rem', border: '3px solid #667eea', borderRadius: '10px', fontSize: '1.1rem', minHeight: '80px', fontFamily: "'Fredoka', cursive" }}></textarea>
                                <button className="voice-button" onClick={checkSentence} style={{ marginTop: '1rem' }}>
                                    ✅ Check Answer
                                </button>
                            </div>

                            <h3>Picture Labeling</h3>
                            <div className="quiz-container">
                                <p style={{ fontSize: '1.5rem', textAlign: 'center', margin: '1rem 0' }}>🐱</p>
                                <p style={{ color: '#667eea', fontWeight: 'bold', margin: '1rem 0' }}>
                                    What is this animal?
                                </p>
                                <input type="text" id="labelInput" placeholder="Type your answer..."
                                    style={{ padding: '1rem', border: '3px solid #667eea', borderRadius: '10px', fontSize: '1.2rem', width: '100%' }} />
                                <button className="voice-button" onClick={checkLabel} style={{ marginTop: '1rem' }}>
                                    ✅ Check Answer
                                </button>
                            </div>

                            <h3>Creative Writing - Daily Journal</h3>
                            <div style={{ background: '#fff3cd', padding: '1.5rem', borderRadius: '15px', margin: '1rem 0', border: '3px solid #ffc107' }}>
                                <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '1rem' }}>
                                    What did you do today? Write one sentence:
                                </p>
                                <textarea id="journalInput" placeholder="I... (Write about your day!)"
                                    style={{ width: '100%', padding: '1rem', border: '3px solid #ffc107', borderRadius: '10px', fontSize: '1.1rem', minHeight: '100px', fontFamily: "'Fredoka', cursive" }}></textarea>
                                <button className="voice-button" onClick={saveJournal} style={{ marginTop: '1rem', background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)' }}>
                                    💾 Save My Journal
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'quiz' && (
                        <div className="learning-card animate-fade-in">
                            <h2>🎮 Fun Learning Quiz!</h2>

                            <h3>Letter Recognition Quiz</h3>
                            <div className="quiz-container">
                                <p className="quiz-question">Score: {quizScore}</p>
                                <p className="quiz-question">What is the first letter of the alphabet?</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(true, e)}>A</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>B</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>C</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>D</div>
                                </div>
                            </div>

                            <div className="quiz-container">
                                <p className="quiz-question">Which word starts with &apos;C&apos;?</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>Dog</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(true, e)}>Cat</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>Bat</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>Hat</div>
                                </div>
                            </div>
                            <div className="quiz-container">
                                <p className="quiz-question">How many letters are in the word &quot;APPLE&quot;?</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>3</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>4</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(true, e)}>5</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>6</div>
                                </div>
                            </div>

                            <div className="quiz-container">
                                <p className="quiz-question">Which word rhymes with &quot;cat&quot;?</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(true, e)}>bat</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>dog</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>bird</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>fish</div>
                                </div>
                            </div>

                            <h3>Sight Words Quiz</h3>
                            <div className="quiz-container">
                                <p className="quiz-question">Complete: ___ see a cat.</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(true, e)}>I</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>A</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>The</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>And</div>
                                </div>
                            </div>
                            <div className="quiz-container">
                                <p className="quiz-question">Which is a sight word?</p>
                                <div className="quiz-options">
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(true, e)}>the</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>elephant</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>beautiful</div>
                                    <div className="quiz-option" onClick={(e) => handleQuizAnswer(false, e)}>wonderful</div>
                                </div>
                            </div>

                            <h3>Your Quiz Score</h3>
                            <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem', borderRadius: '15px', textAlign: 'center', margin: '1rem 0' }}>
                                <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>{quizScore}</p>
                                <p style={{ fontSize: '1.2rem' }}>Correct Answers</p>
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default KindergartenEnglish;
