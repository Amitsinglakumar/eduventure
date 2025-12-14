export interface Topic {
    title: string;
    points: string[];
}

export interface Question {
    id: number;
    question: string;
    answer: string;
}

export interface Chapter8 {
    id: number;
    title: string;
    topics: string[]; // For the card preview
    keyConcepts: Topic[]; // Detailed concepts
    formulas?: string[];
    questions: Question[];
    xp: number;
}

export interface Subject8 {
    id: string;
    name: string;
    icon: string;
    chapters: Chapter8[];
}

export const class8Curriculum: Record<string, Subject8> = {
    mathematics: {
        id: 'mathematics',
        name: 'Mathematics',
        icon: '📐',
        chapters: [
            {
                id: 1,
                title: 'Rational Numbers',
                topics: ['Properties', 'Operations', 'Comparison'],
                xp: 10,
                keyConcepts: [
                    { title: 'Properties', points: ['Closure, Commutative, Associative, Distributive', 'Identity elements (0 for +, 1 for ×)'] },
                    { title: 'Standard Form', points: ['When GCD(numerator, denominator) = 1'] }
                ],
                formulas: ['a/b + c/d = (ad + bc)/bd', 'a/b × c/d = (ac)/(bd)'],
                questions: [
                    { id: 1, question: 'Find sum: 3/4 + 2/5', answer: '23/20' },
                    { id: 2, question: 'Multiply: 3/5 × 10/9', answer: '2/3' },
                    { id: 3, question: 'Divide: 7/8 ÷ 3/4', answer: '7/6' }
                ]
            },
            {
                id: 2,
                title: 'Exponents and Powers',
                topics: ['Laws of exponents', 'Scientific notation', 'Negative exponents'],
                xp: 10,
                keyConcepts: [
                    { title: 'Laws', points: ['Product Rule: a^m × a^n = a^(m+n)', 'Power Rule: (a^m)^n = a^(mn)'] },
                    { title: 'Scientific Notation', points: ['a × 10^n where 1 ≤ a < 10'] }
                ],
                formulas: ['a^(-n) = 1/a^n', 'a^0 = 1'],
                questions: [
                    { id: 1, question: 'Simplify: 2^5 × 2^3', answer: '2^8 = 256' },
                    { id: 2, question: 'Evaluate: 5^(-2)', answer: '1/25' },
                    { id: 3, question: 'Standard form of 156000', answer: '1.56 × 10^5' }
                ]
            },
            {
                id: 3,
                title: 'Squares and Square Roots',
                topics: ['Perfect squares', 'Square root', 'Patterns'],
                xp: 10,
                keyConcepts: [
                    { title: 'Perfect Square', points: ['Product of two equal numbers'] },
                    { title: 'Methods', points: ['Prime Factorization', 'Division Method'] }
                ],
                formulas: ['√(a × b) = √a × √b'],
                questions: [
                    { id: 1, question: 'Is 100 a perfect square?', answer: 'Yes, 10^2 = 100' },
                    { id: 2, question: 'Find √81', answer: '9' }
                ]
            },
            {
                id: 4,
                title: 'Comparing Quantities',
                topics: ['Ratios', 'Percentages', 'Interest'],
                xp: 10,
                keyConcepts: [
                    { title: 'Profit/Loss', points: ['Profit% = (Profit/CP) × 100'] },
                    { title: 'Interest', points: ['Simple and Compound Interest'] }
                ],
                formulas: ['SI = (P×R×T)/100', 'A = P(1 + R/100)^n'],
                questions: [
                    { id: 1, question: 'Find 10% of 500', answer: '50' },
                    { id: 2, question: 'Calculate SI: P=1000, R=5%, T=2', answer: '100' }
                ]
            },
            {
                id: 5,
                title: 'Algebraic Expressions',
                topics: ['Terms', 'Identities', 'Multiplication'],
                xp: 10,
                keyConcepts: [
                    { title: 'Identities', points: ['(a+b)² = a² + 2ab + b²', '(a-b)² = a² - 2ab + b²'] }
                ],
                questions: [
                    { id: 1, question: 'Expand (x+3)²', answer: 'x² + 6x + 9' },
                    { id: 2, question: 'Multiply (2x)(3y)', answer: '6xy' }
                ]
            }
        ]
    },
    science: {
        id: 'science',
        name: 'Science',
        icon: '🔬',
        chapters: [
            {
                id: 1,
                title: 'Force and Pressure',
                topics: ['Contact forces', 'Non-contact forces', 'Pressure'],
                xp: 10,
                keyConcepts: [
                    { title: 'Force', points: ['Push or pull', 'F = ma'] },
                    { title: 'Pressure', points: ['Force per unit area'] }
                ],
                formulas: ['P = F/A'],
                questions: [
                    { id: 1, question: 'Define Force', answer: 'A push or pull acting on an object' },
                    { id: 2, question: 'Formula for Pressure?', answer: 'Pressure = Force / Area' }
                ]
            },
            {
                id: 2,
                title: 'Light',
                topics: ['Reflection', 'Refraction', 'Human Eye'],
                xp: 10,
                keyConcepts: [
                    { title: 'Reflection', points: ['Angle of incidence = Angle of reflection'] },
                    { title: 'Lenses', points: ['Convex (converging)', 'Concave (diverging)'] }
                ],
                questions: [
                    { id: 1, question: 'Law of reflection?', answer: 'i = r' },
                    { id: 2, question: 'Image in plane mirror?', answer: 'Virtual and erect' }
                ]
            },
            {
                id: 3,
                title: 'Chemical Effects of Current',
                topics: ['Electroplating', 'Conduction in liquids'],
                xp: 10,
                keyConcepts: [
                    { title: 'Electrolysis', points: ['Chemical decomposition produced by passing an electric current'] }
                ],
                questions: [
                    { id: 1, question: 'What is electroplating?', answer: 'Coating one metal on another using electricity' }
                ]
            }
        ]
    },
    social: {
        id: 'social',
        name: 'Social Science',
        icon: '🌍',
        chapters: [
            {
                id: 1,
                title: 'Resources',
                topics: ['Natural', 'Human made', 'Conservation'],
                xp: 10,
                keyConcepts: [
                    { title: 'Types', points: ['Renewable vs Non-renewable'] }
                ],
                questions: [
                    { id: 1, question: 'Example of renewable resource?', answer: 'Solar energy' }
                ]
            },
            {
                id: 2,
                title: 'The Indian Constitution',
                topics: ['Key features', 'Fundamental Rights', 'Secularism'],
                xp: 10,
                keyConcepts: [
                    { title: 'Preamble', points: ['Introduction to the constitution'] }
                ],
                questions: [
                    { id: 1, question: 'Father of Indian Constitution?', answer: 'Dr. B.R. Ambedkar' }
                ]
            }
        ]
    },
    english: {
        id: 'english',
        name: 'English',
        icon: '📖',
        chapters: [
            {
                id: 1,
                title: 'Tenses',
                topics: ['Present', 'Past', 'Future', 'Perfect Tenses'],
                xp: 10,
                keyConcepts: [
                    { title: 'Perfect Tense', points: ['Has/Have + V3'] }
                ],
                questions: [
                    { id: 1, question: 'Convert to Present Perfect: He eats.', answer: 'He has eaten.' }
                ]
            }
        ]
    },
    hindi: {
        id: 'hindi',
        name: 'Hindi',
        icon: '🇮🇳',
        chapters: [
            {
                id: 1,
                title: 'भाषा और व्याकरण',
                topics: ['वर्ण विचार', 'शब्द विचार'],
                xp: 10,
                keyConcepts: [
                    { title: 'संज्ञा', points: ['व्यक्तिवाचक, जातिवाचक, भाववाचक'] }
                ],
                questions: [
                    { id: 1, question: 'संज्ञा के कितने भेद हैं?', answer: 'तीन (मुख्य रूप से)' }
                ]
            }
        ]
    }
};
