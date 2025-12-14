export interface Subject {
    name: string;
    credits: string;
    type: 'Core' | 'Elective' | 'Specialization';
    description: string;
}

export interface Phase {
    phase: string;
    year: string;
    semesters: string;
    duration: string;
    subjects: Subject[];
}

export interface TimelineItem {
    phase: string;
    year: string;
    skills: string[];
}

export const commerceCurriculumData: Phase[] = [
    {
        phase: "FOUNDATION",
        year: "1st Year",
        semesters: "1-2",
        duration: "1 Year",
        subjects: [
            { name: "Financial Accounting", credits: "100 marks", type: "Core", description: "Accounting principles, journal, ledger, trial balance, financial statements, accounting standards, IFRS basics." },
            { name: "Business Organization & Management", credits: "100 marks", type: "Core", description: "Business types, sole proprietorship, partnership, company, organizational structure, management functions." },
            { name: "Business Law", credits: "100 marks", type: "Core", description: "Indian Contract Act, sale of goods, negotiable instruments, consumer protection, employment law." },
            { name: "Business Mathematics", credits: "100 marks", type: "Core", description: "Ratios, percentages, logarithms, permutation-combination, algebra, basic calculus applications in business." },
            { name: "Microeconomics", credits: "100 marks", type: "Core", description: "Demand and supply, price determination, consumer behavior, perfect competition, market structures." },
            { name: "Computer Applications in Business", credits: "100 marks", type: "Core", description: "MS Office, spreadsheets, database basics, business software, internet and email, e-commerce fundamentals." }
        ]
    },
    {
        phase: "INTERMEDIATE",
        year: "2nd Year",
        semesters: "3-4",
        duration: "1 Year",
        subjects: [
            { name: "Corporate Accounting", credits: "100 marks", type: "Core", description: "Share capital, debentures, company accounts, cash flow statement, financial analysis, consolidated accounts." },
            { name: "Company Law", credits: "100 marks", type: "Core", description: "Companies Act 2013, types of companies, incorporation, meetings, resolutions, directors, liquidation." },
            { name: "Income Tax Law & Practice", credits: "100 marks", type: "Core", description: "Income tax concepts, assessment, heads of income, deductions, TDS, penalties, return filing." },
            { name: "Cost Accounting", credits: "100 marks", type: "Core", description: "Cost concepts, cost accounting methods, costing systems, break-even analysis, marginal costing." },
            { name: "Business Statistics", credits: "100 marks", type: "Core", description: "Data collection, measures of central tendency, dispersion, correlation, regression, probability distributions." },
            { name: "Macroeconomics", credits: "100 marks", type: "Core", description: "National income, inflation, unemployment, monetary policy, fiscal policy, international trade." }
        ]
    },
    {
        phase: "SPECIALIZATION",
        year: "3rd Year",
        semesters: "5-6",
        duration: "1 Year",
        subjects: [
            { name: "Auditing & Corporate Governance", credits: "100 marks", type: "Core", description: "Auditing principles, audit procedures, audit reports, internal control, corporate governance framework." },
            { name: "Financial Management", credits: "100 marks", type: "Core", description: "Financial planning, capital budgeting, working capital management, cost of capital, dividend policy." },
            { name: "Marketing Management", credits: "100 marks", type: "Core", description: "Marketing concepts, segmentation, 4Ps, consumer behavior, distribution, advertising, digital marketing." },
            { name: "Business Ethics & Corporate Governance", credits: "100 marks", type: "Core", description: "Ethics frameworks, CSR, sustainability, corporate scandals, corporate governance codes, compliance." },
            { name: "Indirect Tax Law", credits: "100 marks", type: "Core", description: "GST fundamentals, GST registration, filing, HSN codes, exemptions, input tax credit, IGST, CGST, SGST." },
            { name: "Fundamentals of Entrepreneurship", credits: "100 marks", type: "Core", description: "Entrepreneurship concepts, business planning, start-up ideas, funding, legal structure, success factors." }
        ]
    },
    {
        phase: "ELECTIVES & SPECIALIZATIONS",
        year: "3rd Year (Electives)",
        semesters: "5-6",
        duration: "Selective",
        subjects: [
            { name: "Banking & Insurance", credits: "100 marks", type: "Elective", description: "Banking system, credit creation, insurance types, policy, claims, banking regulations, RBI functions." },
            { name: "Human Resource Management", credits: "100 marks", type: "Elective", description: "HR functions, recruitment, training, performance management, compensation, employee relations, labor laws." },
            { name: "International Business", credits: "100 marks", type: "Elective", description: "International trade, export-import, foreign exchange, international agreements, global business environment." },
            { name: "Portfolio Management", credits: "100 marks", type: "Elective", description: "Investment analysis, portfolio construction, risk-return analysis, asset allocation, mutual funds." },
            { name: "E-Commerce", credits: "100 marks", type: "Elective", description: "E-commerce models, digital marketing, payment systems, logistics, e-business strategy, cybersecurity." },
            { name: "Retail Management", credits: "100 marks", type: "Elective", description: "Retail concepts, store management, inventory management, customer service, retail analytics, omnichannel." },
            { name: "Business Research", credits: "100 marks", type: "Elective", description: "Research methodology, research design, data analysis, questionnaires, business analytics, insights." },
            { name: "Strategic Management", credits: "100 marks", type: "Elective", description: "Strategic analysis, SWOT, competitive advantage, business models, strategy formulation, implementation." }
        ]
    }
];

export const commerceTimelineData: TimelineItem[] = [
    { phase: "Foundation & Fundamentals", year: "Year 1", skills: ["Accounting", "Business Laws", "Management", "Economics", "Mathematics"] },
    { phase: "Applied Knowledge", year: "Year 2", skills: ["Corporate Accounting", "Taxation", "Auditing", "Statistics", "Cost Analysis"] },
    { phase: "Professional Skills", year: "Year 3", skills: ["Financial Management", "Marketing", "Entrepreneurship", "Business Ethics", "Specialization"] },
    { phase: "Career Launch", year: "Post-Graduation", skills: ["CA/CS Qualification", "Corporate Jobs", "Entrepreneurship", "Higher Studies", "Professional Growth"] }
];
