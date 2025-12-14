export interface Subject {
    name: string;
    credits: number;
    languages: string[];
    description: string;
}

export interface Semester {
    semester: number;
    year: string;
    credits: number;
    subjects: Subject[];
}

export interface TimelineItem {
    phase: string;
    year: string;
    skills: string[];
}

export const semestersData: Semester[] = [
    {
        semester: 1,
        year: "1st Year",
        credits: 24,
        subjects: [
            { name: "Engineering Mathematics-I", credits: 3, languages: ["Math"], description: "Calculus, Differential Equations, Linear Algebra. Applications in programming." },
            { name: "Physics-I", credits: 3, languages: ["Physics"], description: "Mechanics, Thermodynamics, Waves. Fundamentals for digital systems." },
            { name: "Chemistry", credits: 3, languages: ["Chemistry"], description: "Basic chemical principles and reactions." },
            { name: "Introduction to Programming", credits: 4, languages: ["C"], description: "Basics of programming using C. Variables, operators, control flow." },
            { name: "Digital Design Basics", credits: 3, languages: ["Logic"], description: "Number systems, Boolean algebra, Logic gates." },
            { name: "Technical Communication", credits: 2, languages: ["Soft Skills"], description: "Written and verbal communication for engineers." },
            { name: "Engineering Graphics", credits: 2, languages: ["CAD"], description: "Technical drawing and visualization." }
        ]
    },
    {
        semester: 2,
        year: "1st Year",
        credits: 24,
        subjects: [
            { name: "Engineering Mathematics-II", credits: 3, languages: ["Math"], description: "Probability, Statistics, Numerical Methods." },
            { name: "Physics-II", credits: 3, languages: ["Physics"], description: "Electricity, Magnetism, Modern Physics." },
            { name: "Data Structures", credits: 4, languages: ["C"], description: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs implementation in C." },
            { name: "Object-Oriented Programming", credits: 4, languages: ["C++"], description: "Classes, Objects, Inheritance, Polymorphism, Encapsulation in C++." },
            { name: "Computer Organization", credits: 3, languages: ["Logic"], description: "CPU architecture, Memory organization, Instruction set." },
            { name: "Environmental Studies", credits: 2, languages: ["Soft Skills"], description: "Sustainability and environmental awareness." },
            { name: "Basic Electrical Engineering", credits: 2, languages: ["Electronics"], description: "Circuits, Electrical machines, Power." }
        ]
    },
    {
        semester: 3,
        year: "2nd Year",
        credits: 24,
        subjects: [
            { name: "Discrete Mathematics", credits: 3, languages: ["Math"], description: "Set Theory, Logic, Graph Theory, Combinatorics. Foundation for algorithms." },
            { name: "Digital Electronics", credits: 3, languages: ["Logic"], description: "Combinational circuits, Sequential circuits, State machines." },
            { name: "Database Management Systems", credits: 4, languages: ["SQL"], description: "ER Model, Relational Model, SQL queries, Normalization, Transactions." },
            { name: "Web Technologies", credits: 3, languages: ["Web", "HTML/CSS/JS"], description: "HTML5, CSS3, JavaScript. Frontend development basics." },
            { name: "Algorithm Design & Analysis", credits: 4, languages: ["Algorithm"], description: "Sorting, Searching, Time Complexity, Space Complexity, Asymptotic Analysis." },
            { name: "Microprocessors", credits: 3, languages: ["Assembly"], description: "CPU architecture, Assembly language programming, Interrupts." },
            { name: "Professional Practice", credits: 2, languages: ["Soft Skills"], description: "Ethics, Professional development, Team work." }
        ]
    },
    {
        semester: 4,
        year: "2nd Year",
        credits: 24,
        subjects: [
            { name: "Operating Systems", credits: 4, languages: ["C"], description: "Process management, Memory management, File systems, Synchronization." },
            { name: "Theory of Computation", credits: 3, languages: ["Theory"], description: "Automata Theory, Formal Languages, Turing Machines, Complexity Classes." },
            { name: "Computer Networks", credits: 4, languages: ["Network"], description: "OSI Model, TCP/IP, Network protocols, Socket programming." },
            { name: "Software Engineering", credits: 3, languages: ["SE"], description: "SDLC, Design Patterns, UML, Agile methodologies." },
            { name: "Java Programming", credits: 4, languages: ["Java"], description: "Object-Oriented Java, Collections, Exception handling, Multithreading." },
            { name: "Compiler Design", credits: 3, languages: ["Compiler"], description: "Lexical analysis, Syntax analysis, Code generation." },
            { name: "Quantitative Aptitude", credits: 2, languages: ["Soft Skills"], description: "Problem-solving, Logical reasoning, Mathematical aptitude." }
        ]
    },
    {
        semester: 5,
        year: "3rd Year",
        credits: 24,
        subjects: [
            { name: "Artificial Intelligence & ML", credits: 4, languages: ["Python", "AI"], description: "Machine Learning algorithms, Neural Networks, Deep Learning with Python." },
            { name: "Data Science Fundamentals", credits: 3, languages: ["Python"], description: "Data collection, Preprocessing, Analysis, Visualization (Pandas, NumPy, Matplotlib)." },
            { name: "Cloud Computing & DevOps", credits: 3, languages: ["Cloud"], description: "AWS, Docker, Kubernetes, Containerization, CI/CD pipelines." },
            { name: "Cybersecurity Fundamentals", credits: 3, languages: ["Security"], description: "Cryptography, Network security, Ethical hacking basics." },
            { name: "Mobile App Development", credits: 4, languages: ["Java", "Android"], description: "Android development, Mobile UI/UX, Firebase integration." },
            { name: "Advanced Database Concepts", credits: 3, languages: ["SQL"], description: "Indexing, Query optimization, NoSQL databases (MongoDB)." },
            { name: "Project-I", credits: 4, languages: ["Project"], description: "Mini project applying knowledge from core subjects." }
        ]
    },
    {
        semester: 6,
        year: "3rd Year",
        credits: 24,
        subjects: [
            { name: "Big Data Analytics", credits: 3, languages: ["Hadoop", "Spark"], description: "MapReduce, Spark, Hive for large-scale data processing." },
            { name: "Full Stack Web Development", credits: 4, languages: ["Web", "MERN"], description: "React, Node.js, Express, MongoDB stack development." },
            { name: "Natural Language Processing", credits: 3, languages: ["Python"], description: "Text processing, Sentiment analysis, Language models." },
            { name: "Distributed Systems", credits: 3, languages: ["Distributed"], description: "Consensus algorithms, Distributed computing models, Fault tolerance." },
            { name: "Information Security", credits: 3, languages: ["Security"], description: "Authentication, Authorization, Encryption, Penetration testing." },
            { name: "System Design", credits: 3, languages: ["Design"], description: "Scalable system architecture, Load balancing, Caching strategies." },
            { name: "Project-II", credits: 4, languages: ["Project"], description: "Major project with industry relevance." }
        ]
    },
    {
        semester: 7,
        year: "4th Year",
        credits: 20,
        subjects: [
            { name: "Advanced Machine Learning", credits: 3, languages: ["Python", "TensorFlow"], description: "Deep Learning, CNNs, RNNs, Transfer Learning, Reinforcement Learning." },
            { name: "Blockchain Technology", credits: 3, languages: ["Solidity"], description: "Cryptocurrency, Smart Contracts, DApps, Consensus mechanisms." },
            { name: "IoT & Embedded Systems", credits: 3, languages: ["C", "Arduino"], description: "Microcontrollers, Sensors, Real-time systems, MQTT protocols." },
            { name: "High-Performance Computing", credits: 3, languages: ["CUDA", "Parallel"], description: "GPU programming, Parallel algorithms, Performance optimization." },
            { name: "Professional Ethics & Laws", credits: 2, languages: ["Soft Skills"], description: "Cyber laws, Ethical considerations, Data privacy regulations." },
            { name: "Project-III", credits: 3, languages: ["Project"], description: "Research or industry-oriented project." }
        ]
    },
    {
        semester: 8,
        year: "4th Year",
        credits: 20,
        subjects: [
            { name: "Internship/Industrial Training", credits: 6, languages: ["Internship"], description: "Real-world project experience with industry partners." },
            { name: "Entrepreneurship & Innovation", credits: 3, languages: ["Business"], description: "Startup ideas, Business models, Venture capital, Tech entrepreneurship." },
            { name: "Advanced Topics Seminar", credits: 2, languages: ["Seminar"], description: "Latest trends: Quantum computing, 5G, Edge computing, AR/VR." },
            { name: "Project-IV (Major)", credits: 6, languages: ["Project"], description: "Final capstone project, presentation, and thesis." },
            { name: "Elective-IV", credits: 3, languages: ["Elective"], description: "Choose from Game Development, Computer Vision, or Quantum Computing." }
        ]
    }
];

export const timelineData: TimelineItem[] = [
    { phase: "Foundation", year: "Year 1", skills: ["C Programming", "Data Structures", "Mathematics", "Problem Solving"] },
    { phase: "Core Concepts", year: "Year 2", skills: ["OOP", "Databases", "Operating Systems", "Algorithms", "Networks"] },
    { phase: "Specialization", year: "Year 3", skills: ["AI/ML", "Cloud Computing", "Web Development", "Security"] },
    { phase: "Industry Ready", year: "Year 4", skills: ["System Design", "DevOps", "Leadership", "Innovation"] }
];
