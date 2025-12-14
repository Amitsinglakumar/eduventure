export interface Subject {
    name: string;
    credits: string;
    type: 'Theory' | 'Practical' | 'Clinical';
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

export const mbbsCurriculumData: Phase[] = [
    {
        phase: "PRE-CLINICAL",
        year: "1st Year",
        semesters: "1-2",
        duration: "1 Year",
        subjects: [
            { name: "Anatomy", credits: "100 hrs", type: "Theory", description: "Gross anatomy, Microanatomy, Embryology, Neuroanatomy. Human body structure and systems." },
            { name: "Physiology", credits: "80 hrs", type: "Practical", description: "Body functions, Cellular physiology, Organ systems, Homeostasis mechanisms." },
            { name: "Biochemistry", credits: "80 hrs", type: "Theory", description: "Biomolecules, Enzymes, Metabolic pathways, Nutritional biochemistry, Immunology." }
        ]
    },
    {
        phase: "PARA-CLINICAL",
        year: "2nd Year",
        semesters: "3-5",
        duration: "1.5 Years",
        subjects: [
            { name: "Pathology", credits: "90 hrs", type: "Theory", description: "General pathology, Systemic pathology, Autopsy procedures, Forensic aspects." },
            { name: "Pharmacology", credits: "80 hrs", type: "Theory", description: "General pharmacology, Autonomic system, CNS drugs, Cardiovascular, GI, Chemotherapy." },
            { name: "Microbiology", credits: "80 hrs", type: "Clinical", description: "Bacteriology, Virology, Parasitology, Mycology, Clinical microbiology." },
            { name: "Forensic Medicine", credits: "40 hrs", type: "Theory", description: "Medical jurisprudence, Toxicology, Wound analysis, Medico-legal procedures." },
            { name: "Community Medicine", credits: "60 hrs", type: "Clinical", description: "Epidemiology, Biostatistics, Public health, Disease prevention, Health education." }
        ]
    },
    {
        phase: "CLINICAL",
        year: "3rd-4th Year",
        semesters: "6-9",
        duration: "2 Years",
        subjects: [
            { name: "General Medicine", credits: "200 hrs", type: "Clinical", description: "Diagnosis and treatment of adult diseases, Clinical pharmacology, Critical care." },
            { name: "Surgery", credits: "180 hrs", type: "Clinical", description: "Surgical principles, Pre/post-operative care, Common surgical procedures, Trauma." },
            { name: "Obstetrics & Gynaecology", credits: "150 hrs", type: "Clinical", description: "Pregnancy, Labor management, Gynecological disorders, Contraception, Neonatology." },
            { name: "Pediatrics", credits: "120 hrs", type: "Clinical", description: "Child health, Vaccination, Pediatric diseases, Growth and development." },
            { name: "Psychiatry", credits: "60 hrs", type: "Clinical", description: "Mental disorders, Psychiatric treatment, Psychological assessment, Substance abuse." },
            { name: "Dermatology", credits: "50 hrs", type: "Clinical", description: "Skin disorders, Dermatological procedures, STIs, Cosmetic dermatology." },
            { name: "ENT", credits: "50 hrs", type: "Clinical", description: "Ear, Nose, Throat disorders, Audiovestibular function, ENT procedures." },
            { name: "Ophthalmology", credits: "50 hrs", type: "Clinical", description: "Eye anatomy, Vision disorders, Refractive errors, Ophthalmological surgery." },
            { name: "Orthopedics", credits: "50 hrs", type: "Clinical", description: "Bone and joint disorders, Fractures, Orthopedic procedures, Rehabilitation." },
            { name: "Anesthesiology", credits: "40 hrs", type: "Clinical", description: "Anesthesia principles, Pain management, Airway management, Post-operative care." },
            { name: "Radiology", credits: "40 hrs", type: "Clinical", description: "Imaging modalities, X-ray, CT, MRI, Ultrasound, Image interpretation." },
            { name: "General Practice", credits: "60 hrs", type: "Clinical", description: "Primary care, Patient counseling, Health maintenance, Community health." }
        ]
    },
    {
        phase: "INTERNSHIP",
        year: "5th Year",
        semesters: "Rotatory",
        duration: "1 Year",
        subjects: [
            { name: "Internal Medicine", credits: "2 months", type: "Clinical", description: "Direct patient care, Clinical decision making, Adult disease management." },
            { name: "General Surgery", credits: "2 months", type: "Clinical", description: "Operating room experience, Surgical procedures, Patient care." },
            { name: "Obstetrics & Gynecology", credits: "2 months", type: "Clinical", description: "Delivery room experience, Gynecological procedures, Emergency management." },
            { name: "Pediatrics", credits: "1 month", type: "Clinical", description: "Child patient care, Growth monitoring, Vaccination programs." },
            { name: "Preventive Medicine", credits: "3 months", type: "Clinical", description: "Public health centers, Health camps, Community outreach programs." },
            { name: "Orthopedics", credits: "15 days", type: "Clinical", description: "Fracture management, Orthopedic procedures, Rehabilitation." },
            { name: "ENT", credits: "15 days", type: "Clinical", description: "ENT patient care, Ear cleaning, Basic procedures." },
            { name: "Ophthalmology", credits: "15 days", type: "Clinical", description: "Ophthalmology clinic, Vision testing, Eye procedures." },
            { name: "Elective", credits: "15 days", type: "Clinical", description: "Choose from Anesthesia, Psychiatry, Dermatology, or Radiology." }
        ]
    }
];

export const mbbsTimelineData: TimelineItem[] = [
    { phase: "Pre-Clinical Foundation", year: "Year 1", skills: ["Anatomy", "Physiology", "Biochemistry", "Basic Sciences"] },
    { phase: "Para-Clinical Knowledge", year: "Year 2", skills: ["Pathology", "Pharmacology", "Microbiology", "Disease Understanding"] },
    { phase: "Clinical Exposure", year: "Years 3-4", skills: ["Patient Interaction", "Diagnosis", "Treatment Planning", "Clinical Skills"] },
    { phase: "Practical Experience", year: "Year 5 (Internship)", skills: ["Independent Decisions", "Patient Management", "Leadership", "Professional Development"] }
];
