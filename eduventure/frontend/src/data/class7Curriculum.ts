import { Subject } from './class6Curriculum';

export const class7Curriculum: Record<string, Subject> = {
    math: {
        id: 'math',
        name: 'Mathematics',
        icon: '📐',
        color: 'from-blue-500 to-indigo-600',
        chapters: [
            {
                id: 1,
                title: 'Integers',
                sections: [
                    { title: 'Properties', content: ['Positive (>0), Negative (<0)', 'Additive Inverse: a + (-a) = 0'] },
                    { title: 'Operations', content: ['(-) × (-) = (+)', '(-) ÷ (-) = (+)', 'Division by zero is undefined'] }
                ],
                practiceQuestions: [
                    'Simplify: 10 + (-5) - 3 + 8',
                    'Find: (-4) × (7 - 9)',
                    'Calculate: (-2) × (-3) × (-1)'
                ]
            },
            {
                id: 2,
                title: 'Fractions and Decimals',
                sections: [
                    { title: 'Fractions', content: ['Multiplication: Num×Num, Den×Den', 'Division: Multiply by Reciprocal'] },
                    { title: 'Decimals', content: ['Place Value positions', 'Operations with decimal points'] }
                ],
                practiceQuestions: [
                    'Multiply: 3/5 × 4/7',
                    'Divide: 5/8 ÷ 3/4',
                    'Multiply decimals: 2.5 × 4.2'
                ]
            },
            {
                id: 3,
                title: 'Data Handling',
                sections: [
                    { title: 'Central Tendency', content: ['Mean (Average)', 'Median (Middle)', 'Mode (Most Frequent)'] },
                    { title: 'Probability', content: ['Chance of event happening', 'Range 0 to 1'] }
                ],
                practiceQuestions: [
                    'Find mean of: 5, 8, 3, 9, 10',
                    'Find median of: 3, 7, 2, 8, 5',
                    'Probability of drawing red ball from 3 red, 2 blue?'
                ]
            },
            {
                id: 4,
                title: 'Simple Equations',
                sections: [
                    { title: 'Solving', content: ['Isolate variable', 'Perform inverse operations'] },
                    { title: 'Applications', content: ['Forming equations from word problems'] }
                ],
                practiceQuestions: [
                    'Solve: 4x + 2 = 18',
                    'Write equation: "A number multiplied by 3 is 18"',
                    'Check if x = 3 is solution to 2x + 4 = 10'
                ]
            },
            {
                id: 5,
                title: 'Lines and Angles',
                sections: [
                    { title: 'Pairs', content: ['Complementary (Sum 90°)', 'Supplementary (Sum 180°)', 'Vertically Opposite (Equal)'] },
                    { title: 'Transversal', content: ['Alternate Interior Angles Equal', 'Corresponding Angles Equal'] }
                ],
                practiceQuestions: [
                    'Find complementary angle of 35°',
                    'If two angles are 45° each, find third angle'
                ]
            },
            {
                id: 6,
                title: 'Triangles & Properties',
                sections: [
                    { title: 'Properties', content: ['Angle Sum Property (180°)', 'Exterior Angle = Sum of opp interior angles'] },
                    { title: 'Inequality', content: ['Sum of two sides > third side'] }
                ],
                practiceQuestions: [
                    'Is triangle possible with sides 1, 2, 5?',
                    'Find exterior angle if interior angles are 50° and 60°'
                ]
            },
            {
                id: 7,
                title: 'Congruence of Triangles',
                sections: [
                    { title: 'Criteria', content: ['SSS (Side-Side-Side)', 'SAS (Side-Angle-Side)', 'ASA (Angle-Side-Angle)', 'RHS (Right Angle-Hypotenuse-Side)'] }
                ],
                practiceQuestions: [
                    'State which congruence criterion used',
                    'Prove two triangles congruent using SSS'
                ]
            },
            {
                id: 8,
                title: 'Comparing Quantities',
                sections: [
                    { title: 'Ratios', content: ['Percentage = (Part/Whole) × 100', 'Profit/Loss %'] },
                    { title: 'Simple Interest', content: ['I = (P×R×T)/100', 'Amount = P + I'] }
                ],
                practiceQuestions: [
                    'Convert 3/5 to percentage',
                    'Calculate SI: P=2000, R=8%, T=3 years'
                ]
            },
            {
                id: 9,
                title: 'Rational Numbers',
                sections: [
                    { title: 'Definition', content: ['p/q form where q≠0', 'Includes integers and fractions'] },
                    { title: 'Standard Form', content: ['Lowest terms', 'Positive denominator'] }
                ],
                practiceQuestions: [
                    'Write 5 rational numbers between 1 and 2',
                    'Divide: 3/4 ÷ 2/5'
                ]
            },
            {
                id: 10,
                title: 'Practical Geometry',
                sections: [
                    { title: 'Construction', content: ['Parallel lines', 'Triangles (SSS, SAS, ASA, RHS)'] }
                ],
                practiceQuestions: [
                    'Construct triangle: sides 3cm, 4cm, 5cm',
                    'Draw angle and bisect it'
                ]
            },
            {
                id: 11,
                title: 'Perimeter and Area',
                sections: [
                    { title: 'Formulas', content: ['Circle Circumference: 2πr', 'Circle Area: πr²', 'Parallelogram Area: b×h'] }
                ],
                practiceQuestions: [
                    'Find circumference of circle: radius = 10cm',
                    'Find area of parallelogram: base = 10cm, height = 6cm'
                ]
            },
            {
                id: 12,
                title: 'Algebraic Expressions',
                sections: [
                    { title: 'Terms', content: ['Like vs Unlike terms', 'Coefficients'] },
                    { title: 'Operations', content: ['Addition/Subtraction of expressions', 'Finding value'] }
                ],
                practiceQuestions: [
                    'Simplify: 2x + 5y - 3x + 2y',
                    'Subtract: (7m + 4n) - (2m + 3n)'
                ]
            },
            {
                id: 13,
                title: 'Exponents and Powers',
                sections: [
                    { title: 'Laws', content: ['a^m × a^n = a^(m+n)', '(a^m)^n = a^(mn)', 'a⁰ = 1'] },
                    { title: 'Scientific Notation', content: ['Standard form for large numbers'] }
                ],
                practiceQuestions: [
                    'Simplify: 2³ × 2⁴',
                    'Write in scientific notation: 34000'
                ]
            }
        ]
    },
    science: {
        id: 'science',
        name: 'Science',
        icon: '🧪',
        color: 'from-green-500 to-emerald-600',
        chapters: [
            {
                id: 1, title: 'Nutrition in Plants',
                sections: [{ title: 'Photosynthesis', content: ['Process of making food', 'Chlorophyll, Sunlight, CO2, Water'] }],
                practiceQuestions: ['What are stomata?', 'Define autotrophs.']
            },
            {
                id: 2, title: 'Nutrition in Animals',
                sections: [{ title: 'Digestion', content: ['Human digestive system', 'Ruminants', 'Amoeba'] }],
                practiceQuestions: ['Function of villi?', 'What is bile?']
            },
            {
                id: 3, title: 'Fiber to Fabric',
                sections: [{ title: 'Animal Fibers', content: ['Wool (Sheep, Yak)', 'Silk (Silkworm life cycle)'] }],
                practiceQuestions: ['Stages of silkworm life cycle?', 'What is shearing?']
            },
            {
                id: 4, title: 'Heat',
                sections: [{ title: 'Transfer Methods', content: ['Conduction (Solids)', 'Convection (Liquids/Gases)', 'Radiation (No medium)'] }],
                practiceQuestions: ['Why are handles made of plastic?', 'Explain sea breeze.']
            },
            {
                id: 5, title: 'Acids, Bases and Salts',
                sections: [{ title: 'Nature', content: ['Acid (Sour, Litmus Red)', 'Base (Bitter, Litmus Blue)', 'Neutralization'] }],
                practiceQuestions: ['Color of phenolphthalein in base?', 'Reaction between acid and base?']
            },
            {
                id: 6, title: 'Physical and Chemical Changes',
                sections: [{ title: 'Changes', content: ['Physical: Reversible (Melting)', 'Chemical: Irreversible (Rusting, Burning)'] }],
                practiceQuestions: ['Is tearing paper chemical change?', 'Formula for rust?']
            },
            {
                id: 7, title: 'Weather, Climate, Adaptations',
                sections: [{ title: 'Climate Types', content: ['Polar Regions (Penguins)', 'Tropical Rainforests (Red-eyed frog)'] }],
                practiceQuestions: ['Difference between weather and climate.']
            },
            {
                id: 8, title: 'Winds, Storms and Cyclones',
                sections: [{ title: 'Air Pressure', content: ['High speed winds reduce pressure', 'Cyclone formation'] }],
                practiceQuestions: ['Why do roofs blow away?', 'Safety mainly during lightning?']
            },
            {
                id: 9, title: 'Soil',
                sections: [{ title: 'Profile', content: ['Horizons A, B, C, Bedrock', 'Types: Sandy, Clayey, Loamy'] }],
                practiceQuestions: ['Which soil is best for plants?', 'What is percolation rate?']
            },
            {
                id: 10, title: 'Respiration in Organisms',
                sections: [{ title: 'Breathing', content: ['Aerobic (With O2)', 'Anaerobic (Without O2)', 'Lungs, Gills, Skin'] }],
                practiceQuestions: ['End products of aerobic respiration?', 'How do earthworms breathe?']
            },
            {
                id: 11, title: 'Transportation',
                sections: [{ title: 'Systems', content: ['Circulatory (Heart, Blood)', 'Excretory (Kidneys)', 'Plant Transport (Xylem/Phloem)'] }],
                practiceQuestions: ['Function of platelets?', 'What is transpiration?']
            },
            {
                id: 12, title: 'Reproduction in Plants',
                sections: [{ title: 'Modes', content: ['Asexual (Vegetative)', 'Sexual (Pollination, Fertilization)'] }],
                practiceQuestions: ['Define pollination.', 'What develops into fruit?']
            },
            {
                id: 13, title: 'Motion and Time',
                sections: [{ title: 'Speed', content: ['Distance/Time', 'Uniform/Non-uniform motion', 'Distance-Time Graphs'] }],
                practiceQuestions: ['Formula for speed?', 'Shape of graph for uniform motion?']
            },
            {
                id: 14, title: 'Electric Current Effects',
                sections: [{ title: 'Effects', content: ['Heating Effect (Fuse, Heater)', 'Magnetic Effect (Electromagnets)'] }],
                practiceQuestions: ['Principle of electric fuse?', 'Who discovered magnetic effect?']
            },
            {
                id: 15, title: 'Light',
                sections: [{ title: 'Optics', content: ['Reflection', 'Lenses (Convex/Concave)', 'Mirrors', 'Dispersion (Rainbow)'] }],
                practiceQuestions: ['Image formed by convex mirror?', 'Spectrum of light?']
            },
            {
                id: 16, title: 'Water: A Precious Resource',
                sections: [{ title: 'Management', content: ['Water Table', 'Aquifer', 'Conservation methods'] }],
                practiceQuestions: ['What is drip irrigation?', 'Causes of water depletion?']
            },
            {
                id: 17, title: 'Forests: Our Lifeline',
                sections: [{ title: 'Ecosystem', content: ['Canopy', 'Decomposers', 'Interdependence'] }],
                practiceQuestions: ['Role of decomposers?', 'Why are forests called green lungs?']
            },
            {
                id: 18, title: 'Wastewater Story',
                sections: [{ title: 'Sewage', content: ['Treatment Plant (WWTP)', 'Sanitation and Disease'] }],
                practiceQuestions: ['Steps in WWTP?', 'Better housekeeping practices?']
            }
        ]
    },
    socialScience: {
        id: 'socialScience',
        name: 'Social Science',
        icon: '🌏',
        color: 'from-amber-500 to-orange-600',
        chapters: [
            { id: 1, title: 'History: Tracing Changes', sections: [{ title: 'Sources', content: ['Maps', 'Terms (Hindustan)', 'Manuscripts'] }], practiceQuestions: [] },
            { id: 2, title: 'History: New Kings & Kingdoms', sections: [{ title: 'Dynasties', content: ['Cholas', 'Rashtrakutas', 'Tripartite Struggle'] }], practiceQuestions: [] },
            { id: 3, title: 'History: Delhi Sultanate', sections: [{ title: 'Rulers', content: ['Slave, Khilji, Tughlaq, Lodi Dynasties'] }], practiceQuestions: [] },
            { id: 4, title: 'History: Mughal Empire', sections: [{ title: 'Emperors', content: ['Babur to Aurangzeb', 'Administration (Mansabdars)'] }], practiceQuestions: [] },
            { id: 5, title: 'History: Rulers and Buildings', sections: [{ title: 'Architecture', content: ['Qutub Minar', 'Taj Mahal', 'Temples'] }], practiceQuestions: [] },
            { id: 6, title: 'History: Towns and Traders', sections: [{ title: 'Centers', content: ['Hampi', 'Masulipatnam', 'Surat'] }], practiceQuestions: [] },
            { id: 7, title: 'History: Tribes and Nomads', sections: [{ title: 'Societies', content: ['Gonds', 'Ahoms', 'Social Change'] }], practiceQuestions: [] },
            { id: 8, title: 'History: Devotional Paths', sections: [{ title: 'Bhakti/Sufi', content: ['Nayanars, Alvars', 'Kabir, Guru Nanak'] }], practiceQuestions: [] },
            { id: 9, title: 'History: Regional Cultures', sections: [{ title: 'Arts', content: ['Kathak', 'Miniature Paintings', 'Bengali Language'] }], practiceQuestions: [] },
            { id: 10, title: 'History: 18th Century', sections: [{ title: 'Later Mughals', content: ['Independence of provinces', 'Marathas', 'Sikhs'] }], practiceQuestions: [] },
            { id: 11, title: 'Geography: Environment', sections: [{ title: 'System', content: ['Biotic/Abiotic', 'Ecosystem'] }], practiceQuestions: [] },
            { id: 12, title: 'Geography: Inside Our Earth', sections: [{ title: 'Layers', content: ['Crust, Mantle, Core', 'Rock Types'] }], practiceQuestions: [] },
            { id: 13, title: 'Geography: Changing Earth', sections: [{ title: 'Movement', content: ['Volcanoes', 'Earthquakes', 'Erosion (River, Wind, Ice)'] }], practiceQuestions: [] },
            { id: 14, title: 'Geography: Air', sections: [{ title: 'Atmosphere', content: ['Composition', 'Layers', 'Weather vs Climate'] }], practiceQuestions: [] },
            { id: 15, title: 'Geography: Water', sections: [{ title: 'Hydropshere', content: ['Water Cycle', 'Tides, Waves, Currents'] }], practiceQuestions: [] },
            { id: 16, title: 'Geography: Natural Vegetation', sections: [{ title: 'Biomes', content: ['Forests', 'Grasslands', 'Shrubs'] }], practiceQuestions: [] },
            { id: 17, title: 'Geography: Human Environment', sections: [{ title: 'Settlements', content: ['Transport', 'Communication'] }], practiceQuestions: [] },
            { id: 18, title: 'Civics: Equality', sections: [{ title: 'Democracy', content: ['Universal Adult Franchise', 'Civil Rights Movement'] }], practiceQuestions: [] },
            { id: 19, title: 'Civics: State Government', sections: [{ title: 'Working', content: ['MLA', 'Legislative Assembly', 'Coalitions'] }], practiceQuestions: [] },
            { id: 20, title: 'Civics: Gender', sections: [{ title: 'Roles', content: ['Stereotypes', 'Women\'s work value'] }], practiceQuestions: [] },
            { id: 21, title: 'Civics: Media', sections: [{ title: 'Role', content: ['Technology', 'Money', 'Democracy'] }], practiceQuestions: [] },
            { id: 22, title: 'Civics: Markets', sections: [{ title: 'Types', content: ['Weekly', 'Shops', 'Malls', 'Wholesale'] }], practiceQuestions: [] }
        ]
    },
    english: {
        id: 'english',
        name: 'English',
        icon: '📖',
        color: 'from-violet-500 to-purple-600',
        chapters: [
            {
                id: 1, title: 'Grammar: Tenses',
                sections: [{ title: 'Forms', content: ['Present (Simple, Cont, Perfect)', 'Past', 'Future'] }],
                practiceQuestions: ['Change to past perfect: He eats apple.']
            },
            {
                id: 2, title: 'Grammar: Voice & Speech',
                sections: [{ title: 'Structures', content: ['Active vs Passive Voice', 'Direct vs Indirect Speech'] }],
                practiceQuestions: ['Convert: "Close the door" to passive.']
            },
            {
                id: 3, title: 'Writing Skills',
                sections: [{ title: 'Formats', content: ['Formal Letters', 'Notices', 'Articles', 'Stories'] }],
                practiceQuestions: []
            },
            {
                id: 4, title: 'Literature',
                sections: [{ title: 'Themes', content: ['Poems', 'Stories about values, nature, humor'] }],
                practiceQuestions: []
            }
        ]
    },
    hindi: {
        id: 'hindi',
        name: 'Hindi',
        icon: '🇮🇳',
        color: 'from-orange-500 to-red-600',
        chapters: [
            {
                id: 1, title: 'व्याकरण (Grammar)',
                sections: [{ title: 'Advanced', content: ['संधि', 'समास', 'मुहावरे', 'कारक'] }],
                practiceQuestions: ['संधि विच्छेद करो: विद्यालय', 'मुहावरे का अर्थ: नौ दो ग्यारह होना']
            },
            {
                id: 2, title: 'साहित्य (Literature)',
                sections: [{ title: 'Genres', content: ['दोहे (कबीर, रहीम)', 'कहानियाँ', 'एकांकी'] }],
                practiceQuestions: []
            },
            {
                id: 3, title: 'लेखन (Writing)',
                sections: [{ title: 'Skills', content: ['संवाद लेखन', 'सूचना लेखन', 'विज्ञापन'] }],
                practiceQuestions: []
            }
        ]
    }
};
