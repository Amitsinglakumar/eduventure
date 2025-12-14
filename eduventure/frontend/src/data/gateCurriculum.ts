export interface GateBranch {
    name: string;
    code: string;
    candidates: number;
    cutoff: number;
}

export interface GateQuestion {
    branch: string;
    num: number;
    text: string;
    type: 'MCQ' | 'NAT';
    marks: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    options?: string[];
    answer?: string;
    solution: string;
}

export interface GateSyllabusTopic {
    subject: string;
    topics: string[];
}

export interface GateSyllabus {
    [key: string]: {
        name: string;
        topics: GateSyllabusTopic[];
    };
}

export const gateBranches: GateBranch[] = [
    { name: 'Computer Science & IT', code: 'CS', candidates: 123967, cutoff: 27.6 },
    { name: 'Mechanical Engineering', code: 'ME', candidates: 65546, cutoff: 28.6 },
    { name: 'Civil Engineering', code: 'CE', candidates: 85869, cutoff: 28.3 },
    { name: 'Electrical Engineering', code: 'EE', candidates: 59599, cutoff: 25.7 },
    { name: 'Electronics & Communication', code: 'EC', candidates: 63092, cutoff: 25.0 },
    { name: 'Chemical Engineering', code: 'CH', candidates: 13937, cutoff: 25.0 },
    { name: 'Instrumentation Engineering', code: 'IN', candidates: 9900, cutoff: 32.7 },
    { name: 'Aerospace Engineering', code: 'AE', candidates: 5255, cutoff: 33.3 },
    { name: 'Biotechnology', code: 'BT', candidates: 17078, cutoff: 38.9 },
    { name: 'Architecture & Planning', code: 'AR', candidates: 9080, cutoff: 41.5 },
    { name: 'Data Science & AI', code: 'DA', candidates: 39210, cutoff: 37.1 },
    { name: 'Engineering Sciences', code: 'XE', candidates: 11261, cutoff: 36.2 },
];

export const gateSyllabus: GateSyllabus = {
    cs: {
        name: 'Computer Science & IT',
        topics: [
            { subject: 'Engineering Mathematics', topics: ['Linear Algebra', 'Calculus', 'Discrete Mathematics', 'Probability & Statistics'] },
            { subject: 'Digital Logic', topics: ['Boolean Algebra', 'Combinational Circuits', 'Sequential Circuits', 'Number Systems'] },
            { subject: 'Computer Organization', topics: ['Machine Instructions', 'Addressing Modes', 'ALU & Data Path', 'Memory Hierarchy'] },
            { subject: 'Programming & Data Structures', topics: ['C Programming', 'Arrays, Linked Lists', 'Stacks, Queues', 'Trees, Graphs'] },
            { subject: 'Algorithms', topics: ['Searching, Sorting', 'Hashing', 'Asymptotic Analysis', 'Algorithm Design Techniques'] },
            { subject: 'Operating Systems', topics: ['Processes, Threads', 'CPU Scheduling', 'Deadlock', 'Memory Management'] },
            { subject: 'Databases', topics: ['ER-Model', 'Relational Model', 'SQL', 'Transactions', 'Normalization'] },
            { subject: 'Computer Networks', topics: ['ISO/OSI Stack', 'LAN', 'Flow & Error Control', 'IP Addressing', 'TCP/UDP'] },
        ]
    },
    me: {
        name: 'Mechanical Engineering',
        topics: [
            { subject: 'Engineering Mathematics', topics: ['Linear Algebra', 'Calculus', 'Differential Equations', 'Numerical Methods'] },
            { subject: 'Applied Mechanics & Design', topics: ['Engineering Mechanics', 'Mechanics of Materials', 'Theory of Machines', 'Machine Design'] },
            { subject: 'Fluid Mechanics & Thermal', topics: ['Fluid Mechanics', 'Thermodynamics', 'Heat-Transfer', 'Power Engineering'] },
            { subject: 'Materials & Manufacturing', topics: ['Engineering Materials', 'Casting, Forming, Joining', 'Machining', 'Metrology'] },
        ]
    }
};

export const gateQuestions: GateQuestion[] = [
    {
        branch: 'cs',
        num: 1,
        text: 'What is the time complexity of binary search algorithm in a sorted array?',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        options: ['O(n)', 'O(log n)', 'O(n²)', 'O(n log n)'],
        solution: 'Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity.'
    },
    {
        branch: 'cs',
        num: 2,
        text: 'In a complete binary tree with n nodes, what is the height of the tree?',
        type: 'NAT',
        marks: 2,
        difficulty: 'Medium',
        answer: 'log n',
        solution: 'In a complete binary tree with n nodes, the height is approximately log₂(n).'
    },
    {
        branch: 'me',
        num: 3,
        text: 'What is the maximum stress in a cantilever beam of length L, with point load P at free end?',
        type: 'MCQ',
        marks: 2,
        difficulty: 'Medium',
        options: ['PL/I', 'PL²/2I', 'PL/2I', 'PL/I (Correction: My/I)'],
        solution: 'Max Bending Moment M = PL. Stress σ = My/I. So max stress occurs at fixed end.'
    },
    {
        branch: 'cs',
        num: 4,
        text: 'Which scheduling algorithm minimizes average waiting time?',
        type: 'MCQ',
        marks: 2,
        difficulty: 'Medium',
        options: ['FCFS', 'SJF', 'Round Robin', 'Priority'],
        solution: 'Shortest Job First (SJF) is provably optimal for minimizing average waiting time.'
    }
];
