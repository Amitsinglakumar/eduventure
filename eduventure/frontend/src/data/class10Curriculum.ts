export interface Topic {
    title: string;
    points: string[];
}

export interface Question {
    id: number;
    question: string;
    answer: string;
}

export interface Chapter10 {
    id: number;
    title: string;
    description?: string; // Short info for the card
    topics?: string[];
    keyConcepts: Topic[];
    formulas?: string[];
    questions?: Question[];
    xp: number;
}

export interface Subject10 {
    id: string;
    name: string;
    icon: string;
    chapters: Chapter10[];
}

export const class10Curriculum: Record<string, Subject10> = {
    math: {
        id: 'math',
        name: 'Mathematics',
        icon: '📐',
        chapters: [
            {
                id: 1,
                title: 'Real Numbers',
                description: "Euclid's algorithm, Prime factorization, Irrational numbers",
                xp: 20,
                keyConcepts: [
                    { title: "Euclid's Division Algorithm", points: ['a = bq + r (0 ≤ r < b)'] },
                    { title: 'Fundamental Theorem of Arithmetic', points: ['Unique prime factorization for composite numbers'] }
                ],
                formulas: ['GCD(a,b) × LCM(a,b) = a × b']
            },
            {
                id: 2,
                title: 'Polynomials',
                description: 'Division algorithm, Remainder theorem, Factor theorem, Zeros',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 3,
                title: 'Linear Equations',
                description: 'System of equations, Solutions, Methods, Applications',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 4,
                title: 'Quadratic Equations',
                description: 'Solutions, Discriminant, Roots, Applications',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 5,
                title: 'AP (Progressions)',
                description: 'Arithmetic progressions, Sum formula, nth term',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 6,
                title: 'Triangles',
                description: 'Similarity, AA criterion, Pythagoras theorem',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 7,
                title: 'Coordinates',
                description: 'Distance formula, Section formula, Area of triangle',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 8,
                title: 'Circles',
                description: 'Tangents, Power of point, Angles in circle',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 9,
                title: 'Constructions',
                description: 'Geometric constructions, Tangent constructions',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 10,
                title: 'Areas & Volumes',
                description: 'Surface area, Volume formulas, 3D shapes',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 11,
                title: 'Trigonometry',
                description: 'Ratios, Identities, Heights and distances',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 12,
                title: 'Statistics',
                description: 'Mean, Median, Mode, Grouped data',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 13,
                title: 'Probability',
                description: 'Events, Outcomes, Conditional probability',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 14,
                title: 'Complex Numbers',
                description: 'Introduction, Operations, Properties',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 15,
                title: 'Matrices',
                description: 'Types, Operations, Determinant',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 16,
                title: 'Calculus Basics',
                description: 'Limits, Derivatives, Applications',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 17,
                title: 'Sets & Relations',
                description: 'Set theory, Functions, Relations',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 18,
                title: 'Logic & Proofs',
                description: 'Mathematical logic, Proof techniques',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 19,
                title: 'Permutations',
                description: 'Combinations & permutations, Factorial',
                xp: 20,
                keyConcepts: [],
            },
            {
                id: 20,
                title: 'Binomial Theorem',
                description: "Expansion, Pascal's triangle, Properties",
                xp: 20,
                keyConcepts: [],
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
