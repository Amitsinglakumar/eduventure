export interface Topic {
    title: string;
    points: string[];
}

export interface Section {
    title: string;
    content: string[] | Topic[];
}

export interface Chapter {
    id: number;
    title: string;
    sections: Section[];
    practiceQuestions: string[];
}

export interface Subject {
    id: string;
    name: string;
    icon: string;
    color: string;
    chapters: Chapter[];
}

export const class6Curriculum: Record<string, Subject> = {
    math: {
        id: 'math',
        name: 'Mathematics',
        icon: '📐',
        color: 'from-blue-400 to-blue-600',
        chapters: [
            {
                id: 1,
                title: 'Knowing Our Numbers',
                sections: [
                    { title: 'Comparing Numbers', content: ['Greater than (>), less than (<), equal to (=)', 'Ascending and descending order'] },
                    { title: 'Place Value', content: ['Units, Tens, Hundreds, Thousands', 'Lakhs, Crores (Indian System)', 'Millions, Billions (International System)'] },
                    { title: 'Operations', content: ['Expanding Numbers: 234 = 200 + 30 + 4', 'Estimation: Rounding off to nearest 10, 100, 1000'] }
                ],
                practiceQuestions: [
                    'Write the number two lakh thirty-four thousand in numerals.',
                    'Compare 2,34,567 and 2,34,576.',
                    'Round 4,567 to nearest hundred.'
                ]
            },
            {
                id: 2,
                title: 'Whole Numbers',
                sections: [
                    { title: 'Basics', content: ['Successor: Number + 1', 'Predecessor: Number - 1', 'Zero is the smallest whole number.'] },
                    { title: 'Properties', content: ['Commutativity: a + b = b + a', 'Associativity: (a + b) + c = a + (b + c)', 'Distributive: a × (b + c) = a × b + a × c'] }
                ],
                practiceQuestions: [
                    'Find the successor of 99,999.',
                    'Verify: 45 + 67 = 67 + 45.',
                    'Which whole number has no predecessor?'
                ]
            },
            {
                id: 3,
                title: 'Playing with Numbers',
                sections: [
                    { title: 'Factors & Multiples', content: ['Factors divide exactly.', 'Multiples are products of a number.'] },
                    { title: 'Prime & Composite', content: ['Prime: Divisible by 1 and itself (2, 3, 5...)', 'Composite: More than 2 factors (4, 6, 8...)'] },
                    { title: 'Divisibility Rules', content: ['By 2: Even number', 'By 3: Sum of digits divisible by 3', 'By 5: Ends in 0 or 5'] },
                    { title: 'HCF & LCM', content: ['HCF: Highest Common Factor', 'LCM: Least Common Multiple'] }
                ],
                practiceQuestions: [
                    'List all factors of 24.',
                    'Is 143 prime or composite?',
                    'Find the HCF of 12 and 18.'
                ]
            },
            {
                id: 4,
                title: 'Basic Geometrical Ideas',
                sections: [
                    { title: 'Lines & Points', content: ['Point: Dot with no dimension', 'Line: Infinite in both directions', 'Ray: One endpoint', 'Segment: Two endpoints'] },
                    { title: 'Angles', content: ['Acute (<90°)', 'Right (90°)', 'Obtuse (>90°)', 'Straight (180°)'] },
                    { title: 'Polygons', content: ['Triangle (3 sides)', 'Quadrilateral (4 sides)', 'Pentagon (5 sides)'] }
                ],
                practiceQuestions: [
                    'Identify 5 angles in your room.',
                    'Draw an obtuse angle.',
                    'Difference between line and line segment?'
                ]
            },
            {
                id: 5,
                title: 'Understanding Elementary Shapes',
                sections: [
                    { title: 'Triangles', content: ['Equilateral (all sides equal)', 'Isosceles (2 sides equal)', 'Scalene (no sides equal)'] },
                    { title: 'Quadrilaterals', content: ['Square (all sides equal, 90°)', 'Rectangle (opposite sides equal, 90°)', 'Rhombus (all sides equal)'] },
                    { title: 'Mensuration', content: ['Perimeter: Sum of all sides', 'Area: Space inside boundary'] }
                ],
                practiceQuestions: [
                    'Find perimeter of square with side 7cm.',
                    'Find area of rectangle 10cm x 5cm.',
                    'Sum of angles in a triangle?'
                ]
            },
            {
                id: 6,
                title: 'Integers',
                sections: [
                    { title: 'Concepts', content: ['Positive (+1, +2)', 'Negative (-1, -2)', 'Zero (Neutral)'] },
                    { title: 'Operations', content: ['Addition: Same sign add, diff sign subtract', 'Subtraction: a - b = a + (-b)'] },
                    { title: 'Number Line', content: ['Right is increasing', 'Left is decreasing'] }
                ],
                practiceQuestions: [
                    'Arrange: -5, 3, -2, 0, 8',
                    'Calculate: -7 + 5',
                    'Which is greater: -10 or -5?'
                ]
            },
            {
                id: 7,
                title: 'Fractions',
                sections: [
                    { title: 'Types', content: ['Proper (Num < Den)', 'Improper (Num > Den)', 'Mixed (Whole + Fraction)'] },
                    { title: 'Operations', content: ['Equivalent Fractions', 'Simplest Form', 'Addition/Subtraction with common denominator'] }
                ],
                practiceQuestions: [
                    'Simplify 12/18',
                    'Add 1/4 + 2/8',
                    'Convert 11/4 to mixed number'
                ]
            },
            {
                id: 8,
                title: 'Decimals',
                sections: [
                    { title: 'Place Value', content: ['Tenths (0.1)', 'Hundredths (0.01)', 'Thousandths (0.001)'] },
                    { title: 'Operations', content: ['Addition: Align decimal points', 'Multiplication by 10/100: Shift point right'] }
                ],
                practiceQuestions: [
                    'Write 3/5 as decimal',
                    'Add 2.45 + 3.32',
                    'Multiply 1.5 x 100'
                ]
            },
            {
                id: 9,
                title: 'Data Handling',
                sections: [
                    { title: 'Recording Data', content: ['Tally Marks', 'Frequency Tables'] },
                    { title: 'Visuals', content: ['Pictograph (Pictures)', 'Bar Graph (Bars)'] },
                    { title: 'Stats', content: ['Mean (Average)', 'Median (Middle)', 'Mode (Most frequent)'] }
                ],
                practiceQuestions: [
                    'Find mean of 5, 8, 3, 9, 10',
                    'Draw tally marks for number 7'
                ]
            },
            {
                id: 10,
                title: 'Mensuration',
                sections: [
                    { title: 'Formulas', content: ['Sqaure Perimeter = 4a', 'Rectangle Area = l x b', 'Triangle Area = 0.5 x b x h'] },
                    { title: 'Units', content: ['Length: m, cm', 'Area: m², cm²'] }
                ],
                practiceQuestions: [
                    'Find area of rectangle 8m x 5m',
                    'Fencing needed for 12m x 8m field?'
                ]
            },
            {
                id: 11,
                title: 'Algebra',
                sections: [
                    { title: 'Basics', content: ['Variable: x, y (unknown)', 'Expression: 2x + 3', 'Equation: 2x = 10'] },
                    { title: 'Solving', content: ['Substitution: Put value of x', 'Balancing method'] }
                ],
                practiceQuestions: [
                    'Write expression: "5 more than x"',
                    'If x + 3 = 8, find x'
                ]
            },
            {
                id: 12,
                title: 'Ratio and Proportion',
                sections: [
                    { title: 'Ratio', content: ['Comparison of quanitities (3:5)', 'Simplifying 12:18 -> 2:3'] },
                    { title: 'Proportion', content: ['Equality of ratios (a:b :: c:d)', 'Unitary Method'] }
                ],
                practiceQuestions: [
                    'Simplify ratio 24:36',
                    'If 3 notebooks cost 45, find cost of 7'
                ]
            },
            {
                id: 13,
                title: 'Symmetry',
                sections: [
                    { title: 'Line Symmetry', content: ['Mirror image', 'Axis of symmetry'] },
                    { title: 'Rotational Symmetry', content: ['Looks same after rotation'] }
                ],
                practiceQuestions: [
                    'Lines of symmetry in a square?',
                    'Draw a figure with 3 lines of symmetry'
                ]
            }
        ]
    },
    science: {
        id: 'science',
        name: 'Science',
        icon: '🔬',
        color: 'from-green-400 to-green-600',
        chapters: [
            {
                id: 1,
                title: 'Food - Where Does It Come From?',
                sections: [
                    { title: 'Sources', content: ['Plants: Cereals, Pulses, Fruits, Veggies', 'Animals: Meat, Milk, Eggs, Honey'] },
                    { title: 'Diets', content: ['Herbivores (Plants)', 'Carnivores (Meat)', 'Omnivores (Both)'] }
                ],
                practiceQuestions: ['Name 3 plant parts we eat.', 'What are dairy products?']
            },
            {
                id: 2,
                title: 'Components of Food',
                sections: [
                    { title: 'Nutrients', content: ['Carbohydrates (Energy)', 'Proteins (Growth)', 'Fats (Stored Energy)'] },
                    { title: 'Vitamins & Minerals', content: ['Vit A (Eyes), Vit C (Immunity)', 'Calcium (Bones), Iron (Blood)'] },
                    { title: 'Balanced Diet', content: ['Right mix of all nutrients', 'Importance of water and fiber'] }
                ],
                practiceQuestions: ['Why do we need protein?', 'Deficiency of Vitamin C causes?']
            },
            {
                id: 3,
                title: 'Fiber to Fabric',
                sections: [
                    { title: 'Fibers', content: ['Natural: Cotton, Jute, Wool, Silk', 'Synthetic: Nylon, Polyester'] },
                    { title: 'Process', content: ['Spinning (Fiber to Yarn)', 'Weaving (Yarn to Fabric)'] }
                ],
                practiceQuestions: ['Name two animal fibers.', 'What is ginning?']
            },
            {
                id: 4,
                title: 'Sorting Materials',
                sections: [
                    { title: 'Properties', content: ['Hardness/Softness', 'Solubility (Soluble/Insoluble)', 'Transparency (Transparent/Opaque)', 'Density (Float/Sink)'] }
                ],
                practiceQuestions: ['Name an opaque material.', 'Does oil dissolve in water?']
            },
            {
                id: 5,
                title: 'Separation of Substances',
                sections: [
                    { title: 'Methods', content: ['Handpicking', 'Winnowing (Wind)', 'Sieving', 'Filtration', 'Evaporation'] }
                ],
                practiceQuestions: ['How to separate salt from water?', 'What is winnowing used for?']
            },
            {
                id: 6,
                title: 'Changes Around Us',
                sections: [
                    { title: 'Physical Changes', content: ['Reversible', 'No new substance (Melting ice)'] },
                    { title: 'Chemical Changes', content: ['Irreversible', 'New substance formed (Burning wood, Rusting)'] }
                ],
                practiceQuestions: ['Is rusting reversible?', 'Example of chemical change?']
            },
            {
                id: 7,
                title: 'Getting to Know Plants',
                sections: [
                    { title: 'Plant Parts', content: ['Root (Tap/Fibrous)', 'Stem (Transports water)', 'Leaf (Photosynthesis)', 'Flower (Reproduction)'] },
                    { title: 'Processes', content: ['Transpiration', 'Pollination'] }
                ],
                practiceQuestions: ['Function of roots?', 'What is photosynthesis?']
            },
            {
                id: 8,
                title: 'Body Movements',
                sections: [
                    { title: 'Skeletal System', content: ['Bones, Skull, Ribs, Spine', 'Joints: Hinge, Ball & Socket'] },
                    { title: 'Muscles', content: ['Contract and relax to move bones'] }
                ],
                practiceQuestions: ['Where is a hinge joint found?', 'Function of skull?']
            },
            {
                id: 9,
                title: 'Living Organisms & Habitats',
                sections: [
                    { title: 'Habitats', content: ['Terrestrial (Land)', 'Aquatic (Water)', 'Desert, Mountain, Grassland'] },
                    { title: 'Adaptations', content: ['Camels (Humps)', 'Fish (Gills, Streamlined)'] },
                    { title: 'Components', content: ['Biotic (Living)', 'Abiotic (Non-living: Soil, Air)'] }
                ],
                practiceQuestions: ['How do camels survive in desert?', 'What are biotic components?']
            },
            {
                id: 10,
                title: 'Motion and Measurement',
                sections: [
                    { title: 'Motion Types', content: ['Rectilinear (Straight)', 'Circular', 'Periodic'] },
                    { title: 'Measurement', content: ['Standard Units (SI)', '1m = 100cm, 1km = 1000m'] }
                ],
                practiceQuestions: ['Example of periodic motion?', 'Convert 5km to meters.']
            },
            {
                id: 11,
                title: 'Light, Shadows, Reflections',
                sections: [
                    { title: 'Light', content: ['Files in straight line', 'Transparent/Translucent/Opaque'] },
                    { title: 'Shadows', content: ['Formed when light is blocked', 'Always dark'] },
                    { title: 'Reflection', content: ['Bouncing of light', 'Mirrors'] }
                ],
                practiceQuestions: ['Condition for shadow formation?', 'Difference between shadow and image?']
            },
            {
                id: 12,
                title: 'Electricity and Circuits',
                sections: [
                    { title: 'Components', content: ['Cell (Source)', 'Bulb (Load)', 'Switch (Control)', 'Wire (Conductor)'] },
                    { title: 'Concepts', content: ['Open vs Closed Circuit', 'Conductors vs Insulators'] }
                ],
                practiceQuestions: ['Symbol for a battery?', 'Name an insulator.']
            },
            {
                id: 13,
                title: 'Fun with Magnets',
                sections: [
                    { title: 'Properties', content: ['Attract Iron', 'Two Poles (N/S)', 'Like repel, Unlike attract'] },
                    { title: 'Uses', content: ['Compass', 'Speakers', 'Separation'] }
                ],
                practiceQuestions: [' How many poles does a magnet have?', 'Which pole attracts North?']
            },
            {
                id: 14,
                title: 'Water',
                sections: [
                    { title: 'Water Cycle', content: ['Evaporation', 'Condensation', 'Precipitation'] },
                    { title: 'Conservation', content: ['Rainwater harvesting', 'Preventing pollution'] }
                ],
                practiceQuestions: ['What is evaporation?', 'Why should we conserve water?']
            },
            {
                id: 15,
                title: 'Air Around Us',
                sections: [
                    { title: 'Composition', content: ['Nitrogen (78%)', 'Oxygen (21%)', 'Other (1%)'] },
                    { title: 'Properties', content: ['Occupies space', 'Has weight', 'Needed for burning'] }
                ],
                practiceQuestions: ['Which gas is needed for breathing?', 'Percentage of Nitrogen?']
            },
            {
                id: 16,
                title: 'Garbage In, Garbage Out',
                sections: [
                    { title: 'Waste Types', content: ['Biodegradable (Rots)', 'Non-biodegradable (No rot)'] },
                    { title: 'Management', content: ['3 Rs: Reduce, Reuse, Recycle', 'Composting', 'Landfills'] }
                ],
                practiceQuestions: ['What is vermicomposting?', 'Give example of non-biodegradable waste.']
            }
        ]
    },
    socialScience: {
        id: 'socialScience',
        name: 'Social Science',
        icon: '🌍',
        color: 'from-yellow-500 to-orange-500',
        chapters: [
            {
                id: 1, title: 'History: What, Where, How and When?',
                sections: [{ title: 'Sources', content: ['Manuscripts', 'Inscriptions', 'Archaeology'] }],
                practiceQuestions: ['Difference between manuscript and inscription?']
            },
            {
                id: 2, title: 'History: Earliest People',
                sections: [{ title: 'Life', content: ['Hunter-gatherers', 'Stone tools', 'Cave Paintings', 'Discovery of Fire'] }],
                practiceQuestions: ['Why did early people move?', 'Uses of fire?']
            },
            {
                id: 3, title: 'History: Gathering to Growing',
                sections: [{ title: 'Farming', content: ['Domestication of plants/animals', 'First villages', 'Storage'] }],
                practiceQuestions: ['First animal to be tamed?', 'Changes brought by farming?']
            },
            {
                id: 4, title: 'History: Earliest Cities',
                sections: [{ title: 'Harappan Civilization', content: ['Town planning', 'Drainage', 'Great Bath', 'Seals'] }],
                practiceQuestions: ['Features of Harappan cities?', 'What is the Great Bath?']
            },
            {
                id: 5, title: 'History: Books and Burials',
                sections: [{ title: 'Vedas', content: ['Rigveda (Oldest)'] }, { title: 'Megaliths', content: ['Burial sites'] }],
                practiceQuestions: ['Oldest Veda?', 'What are Megaliths?']
            },
            { id: 6, title: 'History: Kings & Early Republics', sections: [{ title: 'Janapadas', content: ['Mahajanapadas', 'Magadha', 'Vajji'] }], practiceQuestions: [] },
            { id: 7, title: 'History: New Questions', sections: [{ title: 'Thinkers', content: ['Buddha', 'Mahavira', 'Upanishads'] }], practiceQuestions: [] },
            { id: 8, title: 'History: Ashoka', sections: [{ title: 'Mauryan Empire', content: ['Kalinga War', 'Dhamma', 'Edicts'] }], practiceQuestions: [] },
            { id: 9, title: 'Geography: Earth in Solar System', sections: [{ title: 'Solar System', content: ['Planets', 'Stars', 'Sun', 'Moon'] }], practiceQuestions: [] },
            { id: 10, title: 'Geography: Globe', sections: [{ title: 'Coordinates', content: ['Latitudes', 'Longitudes', 'Equator', 'Prime Meridian'] }], practiceQuestions: [] },
            { id: 11, title: 'Geography: Motions of Earth', sections: [{ title: 'Rotation vs Revolution', content: ['Day/Night', 'Seasons'] }], practiceQuestions: [] },
            { id: 12, title: 'Geography: Maps', sections: [{ title: 'Types', content: ['Physical', 'Political', 'Thematic'] }, { title: 'Components', content: ['Distance', 'Direction', 'Symbol'] }], practiceQuestions: [] },
            { id: 13, title: 'Geography: Domains of Earth', sections: [{ title: 'Spheres', content: ['Lithosphere', 'Atmosphere', 'Hydrosphere', 'Biosphere'] }], practiceQuestions: [] },
            { id: 14, title: 'Geography: Landforms', sections: [{ title: 'Major Landforms', content: ['Mountains', 'Plateaus', 'Plains'] }], practiceQuestions: [] },
            { id: 15, title: 'Geography: Our Country India', sections: [{ title: 'Facts', content: ['Locations', 'Neighbors', 'Physical Divisions'] }], practiceQuestions: [] },
            { id: 16, title: 'Civics: Diversity', sections: [{ title: 'Concept', content: ['Differences in language, food, religion', 'Unity in Diversity'] }], practiceQuestions: [] },
            { id: 17, title: 'Civics: Discrimination', sections: [{ title: 'Issues', content: ['Prejudice', 'Stereotypes', 'Inequality', 'Constitution'] }], practiceQuestions: [] },
            { id: 18, title: 'Civics: Government', sections: [{ title: 'Basics', content: ['Laws', 'Democracy vs Monarchy', 'Levels of Gov'] }], practiceQuestions: [] },
            { id: 19, title: 'Civics: Local Government', sections: [{ title: 'Panchayati Raj', content: ['Gram Sabha', 'Gram Panchayat', 'Three levels'] }], practiceQuestions: [] },
            { id: 20, title: 'Civics: Urban Administration', sections: [{ title: 'City Gov', content: ['Municipal Corp', 'Ward Councillor', 'Taxes'] }], practiceQuestions: [] }
        ]
    },
    english: {
        id: 'english',
        name: 'English',
        icon: '📚',
        color: 'from-purple-400 to-purple-600',
        chapters: [
            {
                id: 1, title: 'Grammar: Parts of Speech',
                sections: [
                    { title: 'Nouns', content: ['Proper', 'Common', 'Collective', 'Abstract'] },
                    { title: 'Pronouns', content: ['Personal', 'Reflexive', 'Demonstrative'] },
                    { title: 'Verbs', content: ['Action words', 'Tenses (Past, Present, Future)'] },
                    { title: 'Adjectives & Adverbs', content: ['Describing nouns', 'Describing verbs'] }
                ],
                practiceQuestions: ['Identify noun: "The cat runs."', 'Changing "happy" to adverb.']
            },
            {
                id: 2, title: 'Writing Skills',
                sections: [
                    { title: 'Formats', content: ['Paragraph Writing', 'Letter Writing (Formal/Informal)', 'Diary Entry', 'Story Writing'] }
                ],
                practiceQuestions: ['Write a letter to principal.', 'Write a diary entry about your day.']
            },
            {
                id: 3, title: 'Reading Comprehension',
                sections: [
                    { title: 'Skills', content: ['Finding main idea', 'Inference', 'Vocabulary in context'] }
                ],
                practiceQuestions: ['Read the passage and answer questions.']
            }
        ]
    },
    hindi: {
        id: 'hindi',
        name: 'Hindi',
        icon: '🇮🇳',
        color: 'from-orange-400 to-red-500',
        chapters: [
            {
                id: 1, title: 'व्याकरण (Grammar)',
                sections: [
                    { title: 'संज्ञा (Noun)', content: ['व्यक्तिवाचक', 'जातिवाचक', 'भाववाचक'] },
                    { title: 'सर्वनाम (Pronoun)', content: ['मैं, तुम, वह', 'भेद'] },
                    { title: 'विशेषण (Adjective)', content: ['गुणवाचक', 'संख्यावाचक'] },
                    { title: 'क्रिया (Verb)', content: ['सकर्मक', 'अकर्मक'] }
                ],
                practiceQuestions: ['संज्ञा के भेद लिखो।', 'विशेषण का उदाहरण दो।']
            },
            {
                id: 2, title: 'लेखन (Writing)',
                sections: [
                    { title: 'विधियाँ', content: ['पत्र लेखन', 'निबंध लेखन', 'अनुच्छेद लेखन'] }
                ],
                practiceQuestions: ['मित्र को पत्र लिखो।', 'दीवाली पर निबंध लिखो।']
            }
        ]
    }
};
