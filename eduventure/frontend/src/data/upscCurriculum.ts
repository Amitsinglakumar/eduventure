export interface Subject {
    name: string;
    marks: string;
    details: string;
}

export interface Phase {
    phase: string;
    duration: string;
    marks: string;
    description: string;
    subjects: Subject[];
}

export interface TimelineItem {
    phase: string;
    tasks: string[];
}

export interface InfoSection {
    title: string;
    items: string[];
}

export const upscPhasesData: Phase[] = [
    {
        phase: "STAGE 1: PRELIMS",
        duration: "4-6 Months Preparation",
        marks: "400 Total (200+200)",
        description: "Objective type MCQ-based examination",
        subjects: [
            { name: "General Studies-I", marks: "200", details: "Current Affairs, History, Geography, Polity, Society" },
            { name: "CSAT (Paper-II)", marks: "200", details: "Comprehension, Logic, Reasoning, Math, Data Interpretation" }
        ]
    },
    {
        phase: "STAGE 2: MAINS",
        duration: "5-7 Months Preparation",
        marks: "1750 Total + 275 Interview",
        description: "Descriptive essay-type examination",
        subjects: [
            { name: "Essay", marks: "250", details: "Analytical writing on contemporary issues" },
            { name: "GS Paper-I", marks: "250", details: "History, Culture, Heritage, Geography" },
            { name: "GS Paper-II", marks: "250", details: "Polity, Constitution, Governance, International Relations" },
            { name: "GS Paper-III", marks: "250", details: "Economy, Tech, Biodiversity, Environment, Security" },
            { name: "GS Paper-IV", marks: "250", details: "Ethics, Integrity, Aptitude" },
            { name: "Optional Subject (2 Papers)", marks: "500", details: "Choose from 48 subjects - Paper 1 & 2" },
            { name: "Language Papers (2 Papers)", marks: "300", details: "Qualifying papers in Hindi & English" }
        ]
    },
    {
        phase: "STAGE 3: INTERVIEW",
        duration: "3-4 Months Preparation",
        marks: "275 Total",
        description: "Personality assessment & interaction",
        subjects: [
            { name: "Personality Test", marks: "275", details: "45-60 minute interview with 3-4 members panel" },
            { name: "Focus Areas", marks: "All", details: "Communication, Leadership, Decision-making, General Awareness" }
        ]
    },
    {
        phase: "FINAL MERIT LIST",
        duration: "After Interview",
        marks: "2025 Total (Prelims + Mains + Interview)",
        description: "Final ranking and service allocation",
        subjects: [
            { name: "Merit Calculation", marks: "1750", details: "Mains: 1750 marks (largest component)" },
            { name: "Prelims Qualifying", marks: "400", details: "Qualifying only - not counted in final merit" },
            { name: "Interview Score", marks: "275", details: "Counted in final merit calculation" }
        ]
    }
];

export const upscTimelineData: TimelineItem[] = [
    { phase: "Month 1-3: Foundation Building", tasks: ["Start NCERT (Class 6-12)", "Current affairs analysis", "Basic polity & geography", "Previous 5 years prelims papers"] },
    { phase: "Month 4-6: Core GS Preparation", tasks: ["Complete GS-I (History, Culture)", "Complete Polity & Constitution", "Geography & Natural Resources", "Mock tests weekly"] },
    { phase: "Month 7-9: Advanced Topics", tasks: ["GS-II & III (Economy, Science, Tech)", "Internal Security & International Relations", "Environment & Disaster Management", "CSAT regular practice"] },
    { phase: "Month 10-12: Intensive Revision", tasks: ["Full length prelims tests", "Current affairs catch-up", "Identify weak areas", "Mock interview preparation"] },
    { phase: "Prelims Success (Month 12-14)", tasks: ["After Prelims: Take a break", "Start mains-specific preparation", "Detailed answer writing practice", "Optional subject deep-dive"] },
    { phase: "Month 15-18: Mains Preparation", tasks: ["Essay writing - 2 per week", "GS papers - 4 answers per day", "Optional subject focus", "Answer answer copying and evaluation"] },
    { phase: "Month 19-24: Final Revision", tasks: ["Revise all 4 GS papers", "Optional subject final revision", "Mock interviews with experts", "Interview preparation & confidence building"] }
];

export const upscStrategyData: InfoSection[] = [
    {
        title: "🎯 Phase-Wise Strategy",
        items: [
            "Foundation Phase (0-3 months): Build strong base with NCERT books and standard references",
            "Development Phase (3-9 months): Cover entire GS syllabus systematically with depth",
            "Consolidation Phase (9-12 months): Full-length tests, weak area improvement, current affairs",
            "Post-Prelims (12-18 months): Mains-specific writing practice, optional subject focus",
            "Final Preparation (18-24 months): Intensive revision, mock interviews, confidence building"
        ]
    },
    {
        title: "📚 Subject Prioritization",
        items: [
            "Highest Priority: Polity, Current Affairs, Indian Economy, Ancient/Medieval History",
            "High Priority: Modern History, Geography, Science & Tech, Ethics",
            "Medium Priority: Environment, International Relations, Internal Security",
            "Support Topics: Art & Culture, Literature, Philosophy (for mains)"
        ]
    },
    {
        title: "⏰ Daily Study Schedule (8-10 hours/day)",
        items: [
            "Morning (2-3 hrs): New topic learning with NCERT/standard book",
            "Mid-day (1.5-2 hrs): Previous year questions & MCQ practice",
            "Afternoon (1.5-2 hrs): Current affairs reading & analysis",
            "Evening (1.5-2 hrs): Revision & consolidation with personal notes",
            "Night (1-1.5 hrs): Mock tests or specific topic practice"
        ]
    }
];

export const upscResourcesData: InfoSection[] = [
    {
        title: "📖 Recommended Books for GS (Prelims & Mains)",
        items: [
            "Polity: M. Laxmikanth's 'Indian Polity' (Comprehensive), NCERT Class 11-12",
            "History: RS Sharma (Ancient), Bipan Chandra (Modern), NCERT Books",
            "Geography: Majid Husain, NCERT Class 11-12, Spectrum's 'Brief History of Modern India'",
            "Economy: Ramesh Singh's 'Indian Economy', NCERT Class 12 Economics",
            "Science & Tech: Class 10-12 NCERT, Current affairs analysis",
            "Ethics: Lexicon for Ethics, Subbarao's book on Ethics",
            "Current Affairs: Indian Express, The Hindu, Yojana Magazine, PIB"
        ]
    },
    {
        title: "🖥️ Online Platforms & Resources",
        items: [
            "Notes & Analysis: Vajiram & Ravi, RAU IAS, Drishti IAS websites",
            "News Analysis: The Hindu e-paper, Indian Express, PIB Press Releases",
            "Mock Tests: Official UPSC website, Unacademy, BYJU's IAS, GradeStack",
            "YouTube Channels: Drishti IAS, Vajiram & Ravi, ForumIAS, UniAdmissions",
            "Current Affairs Magazines: Yojana, Kurukshetra, Agriculture Today",
            "Previous Years Papers: UPSC official website (15+ years available)"
        ]
    },
    {
        title: "🎯 Optional Subject Selection (Choose 1 from 48)",
        items: [
            "High-Scoring Subjects: Psychology, Sociology, Anthropology, Public Administration",
            "Overlap with GS: Geography, History, Political Science, Economics",
            "Science Stream: Botany, Zoology, Chemistry, Physics, Geology",
            "Engineering Stream: Civil Engineering, Mechanical Engineering, Electrical Engineering",
            "Literature: English Literature, Hindi Literature (if comfortable with language)",
            "Selection Criteria: Academic background, availability of resources, interest level, scoring trends"
        ]
    },
    {
        title: "🏆 Key Success Factors",
        items: [
            "Consistency: Study daily without major breaks (8-10 hours minimum)",
            "Depth + Breadth: Balance between detailed knowledge and coverage",
            "Current Affairs: Daily reading of 1-2 newspapers minimum",
            "Answer Writing: Practice 4-5 mains answers daily (mains stage)",
            "Mock Tests: Weekly full-length tests to measure progress",
            "Revision: Weekly revision of covered topics",
            "Mental Health: Regular exercise, adequate sleep, stress management",
            "Mentorship: Join coaching or study group for guidance"
        ]
    }
];
