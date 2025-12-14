export interface Topic {
    title: string;
    points: string[];
}

export interface Question {
    id: number;
    question: string;
    answer: string;
}

export interface Chapter9 {
    id: number;
    title: string;
    topics: string[]; // For the card preview
    keyConcepts: Topic[]; // Detailed concepts
    formulas?: string[];
    questions: Question[];
    xp: number;
}

export interface Subject9 {
    id: string;
    name: string;
    icon: string;
    chapters: Chapter9[];
}

export const class9Curriculum: Record<string, Subject9> = {
    mathematics: {
        id: 'mathematics',
        name: 'Mathematics',
        icon: '📐',
        chapters: [
            {
                id: 1,
                title: 'Number Systems',
                topics: ['Real Numbers', 'Irrational Numbers', 'Laws of Exponents'],
                xp: 15,
                keyConcepts: [
                    { title: 'Real Numbers', points: ['Rational (p/q) and Irrational (non-terminating, non-recurring)', 'Number Line Representation'] },
                    { title: 'Irrational Numbers', points: ['Cannot be expressed as p/q', 'Examples: √2, π'] }
                ],
                formulas: ['x^a × x^b = x^(a+b)', '√ab = √a × √b'],
                questions: [
                    { id: 1, question: 'Simplify: √2 × √8', answer: '4' },
                    { id: 2, question: 'Is π rational?', answer: 'No, it is irrational' }
                ]
            },
            {
                id: 2,
                title: 'Polynomials',
                topics: ['Operations', 'Factorization', 'Remainder Theorem'],
                xp: 15,
                keyConcepts: [{ title: 'Polynomials', points: ['Degree of polynomial', 'Zeroes of polynomial'] }],
                questions: [{ id: 1, question: 'Degree of x^3 + 2x + 1', answer: '3' }]
            },
            {
                id: 3,
                title: 'Coordinate Geometry',
                topics: ['Cartesian Plane', 'Distance Formula', 'Section Formula'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 4,
                title: 'Linear Equations in 2 Variables',
                topics: ['Graphing', 'Solving Systems', 'Applications'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 5,
                title: 'Introduction to Euclid\'s Geometry',
                topics: ['Axioms & Postulates', 'Euclidean Proof', 'Basic Constructs'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 6,
                title: 'Lines and Angles',
                topics: ['Angle Pairs', 'Parallel Lines', 'Transversals'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 7,
                title: 'Triangles',
                topics: ['Congruence', 'Similarity', 'Properties'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 8,
                title: 'Quadrilaterals',
                topics: ['Classification', 'Properties', 'Area'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 9,
                title: 'Circles',
                topics: ['Chords & Arcs', 'Tangents', 'Angles'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 10,
                title: 'Constructions',
                topics: ['Geometric Constructions', 'Angles', 'Triangles & Circles'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 11,
                title: 'Areas of Parallelograms and Triangles',
                topics: ['Area Formulas', 'Calculations', 'Applications'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 12,
                title: 'Surface Areas and Volumes',
                topics: ['3D Shapes', 'Surface Area', 'Volume'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 13,
                title: 'Statistics',
                topics: ['Mean, Median, Mode', 'Grouped Data', 'Graphs'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 14,
                title: 'Probability',
                topics: ['Experiments', 'Outcomes', 'Calculations'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 15,
                title: 'Trigonometry Introduction',
                topics: ['Ratios', 'Angles', 'Applications'],
                xp: 15,
                keyConcepts: [],
                questions: []
            },
            {
                id: 16,
                title: 'Sequences and Series',
                topics: ['Arithmetic Progressions', 'Geometric Series', 'Formulas'],
                xp: 15,
                keyConcepts: [],
                questions: []
            }
        ]
    },
    science: {
        id: 'science',
        name: 'Science',
        icon: '🔬',
        chapters: []
    },
    social: {
        id: 'social',
        name: 'Social Science',
        icon: '🌍',
        chapters: []
    },
    english: {
        id: 'english',
        name: 'English',
        icon: '📖',
        chapters: []
    },
    hindi: {
        id: 'hindi',
        name: 'Hindi',
        icon: '🇮🇳',
        chapters: []
    }
};
