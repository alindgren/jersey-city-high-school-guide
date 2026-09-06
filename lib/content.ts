export const VERIFIED_DATE = 'September 6, 2026';
export const VERIFIED_ISO = '2026-09-06';

export type Source = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  reviewed: string;
  note: string;
};

export const sources: Source[] = [
  {
    id: 'jcps-admissions',
    title: 'McNair & Infinity admissions',
    publisher: 'Jersey City Public Schools / MS #7 counseling',
    url: 'https://sites.google.com/jcboe.org/ms-7-high-school-options/home/mcnair-infinity',
    reviewed: VERIFIED_DATE,
    note: 'Most recently published application dates, selection weights, and recommendation guidance.',
  },
  {
    id: 'jcps-psat',
    title: 'PSAT 8/9 guidance',
    publisher: 'Jersey City Public Schools / MS #7 counseling',
    url: 'https://sites.google.com/jcboe.org/ms-7-high-school-options/home/psat-89',
    reviewed: VERIFIED_DATE,
    note: 'Local test guidance for the most recently completed admissions cycle.',
  },
  {
    id: 'college-board',
    title: 'Fall 2026 in-school score release dates',
    publisher: 'College Board',
    url: 'https://satsuite.collegeboard.org/scores/score-release-dates',
    reviewed: VERIFIED_DATE,
    note: 'Official fall 2026 in-school testing window and score release schedule.',
  },
  {
    id: 'nj-performance',
    title: 'New Jersey School Performance Reports',
    publisher: 'New Jersey Department of Education',
    url: 'https://www.nj.gov/education/schoolperformance/',
    reviewed: VERIFIED_DATE,
    note: 'State source for enrollment, outcomes, coursework, and school context.',
  },
  {
    id: 'hcst-admissions',
    title: 'High school admissions',
    publisher: 'Hudson County Schools of Technology',
    url: 'https://hcstonline.org/admissions/',
    reviewed: VERIFIED_DATE,
    note: 'Official 2027–28 release notice, residency rules, and placement framework.',
  },
  {
    id: 'high-tech-academies',
    title: 'High Tech academies',
    publisher: 'High Tech High School',
    url: 'https://hths.hcstonline.org/academies/',
    reviewed: VERIFIED_DATE,
    note: 'Official overview of six academy groupings.',
  },
  {
    id: 'high-tech-academics',
    title: 'High Tech academic program',
    publisher: 'High Tech High School',
    url: 'https://hths.hcstonline.org/about-us/',
    reviewed: VERIFIED_DATE,
    note: 'Core academic requirements, AP examples, and LEAP information.',
  },
  {
    id: 'county-prep-programs',
    title: 'County Prep career and technical programs',
    publisher: 'County Prep High School',
    url: 'https://cphs.hcstonline.org/programs-of-study/careertechnicalprogram/',
    reviewed: VERIFIED_DATE,
    note: 'Current school-published list of CTE majors.',
  },
  {
    id: 'county-prep-academics',
    title: 'County Prep academics',
    publisher: 'County Prep High School',
    url: 'https://cphs.hcstonline.org/programs-of-study/academics/',
    reviewed: VERIFIED_DATE,
    note: 'Graduation requirements and academic program overview.',
  },
  {
    id: 'county-prep-ap',
    title: 'County Prep AP courses',
    publisher: 'County Prep High School',
    url: 'https://cphs.hcstonline.org/programs-of-study/ap-courses/',
    reviewed: VERIFIED_DATE,
    note: 'School-published AP course list.',
  },
  {
    id: 'sda-home',
    title: 'Saint Dominic Academy overview',
    publisher: 'Saint Dominic Academy',
    url: 'https://saintdoms.org/',
    reviewed: VERIFIED_DATE,
    note: 'Current school profile, programs, and September 27, 2026 open house.',
  },
  {
    id: 'sda-apply',
    title: 'How to apply',
    publisher: 'Saint Dominic Academy',
    url: 'https://saintdoms.org/admissions/how-to-apply/',
    reviewed: VERIFIED_DATE,
    note: 'Application steps, documents, and most recently published entrance-exam guidance.',
  },
  {
    id: 'sda-tuition',
    title: '2026–27 tuition and aid',
    publisher: 'Saint Dominic Academy',
    url: 'https://saintdoms.org/admissions/tuition/',
    reviewed: VERIFIED_DATE,
    note: 'Current tuition, fees, payment options, scholarships, and assistance information.',
  },
];

export type School = {
  slug: string;
  name: string;
  shortName: string;
  type: string;
  system: string;
  location: string;
  cost: string;
  test: string;
  eligibility: string;
  accent: string;
  summary: string;
  bestFor: string;
  tradeoff: string;
  admissionsStatus: string;
  admissions: string[];
  academics: string[];
  programs: string[];
  questions: string[];
  facts: { label: string; value: string }[];
  sourceIds: string[];
};

export const schools: School[] = [
  {
    slug: 'mcnair-academic',
    name: 'Dr. Ronald E. McNair Academic High School',
    shortName: 'McNair Academic',
    type: 'Selective academic magnet',
    system: 'Jersey City Public Schools',
    location: '123 Coles Street, Jersey City',
    cost: 'Public · no tuition',
    test: 'PSAT 8/9 required',
    eligibility: 'Jersey City residents entering grade 9',
    accent: 'orange',
    summary: 'The broadest traditional college-preparatory option in this group, with a large advanced-course ecosystem and an academically concentrated student body.',
    bestFor: 'Students who want academic breadth, many advanced-course choices, and a larger high-achieving peer community.',
    tradeoff: 'The pace and competition may feel intense; families should ask directly about workload, support, and student stress.',
    admissionsStatus: 'The 2027–28 application window has not yet been published. Prepare using the latest confirmed selection formula and watch JCPS announcements.',
    admissions: [
      'The latest published formula weights PSAT 8/9 scores at 40% and grades from grades 6–8 at 40%.',
      'Teacher recommendations account for 10%; attendance and extracurricular activities account for 5% each.',
      'The most recent cycle opened November 26, 2025, closed December 23, and sent decisions January 23, 2026. Those dates are a planning reference—not confirmed 2027–28 deadlines.',
      'Use a personal family email for the application and line up three teachers who know the student well, following the latest JCPS counseling guidance.',
    ],
    academics: [
      'A rigorous college-preparatory curriculum with substantial Advanced Placement breadth.',
      'Best understood as a general academic magnet rather than a four-year career-major school.',
      'NJDOE performance reports are the recommended source for current enrollment, outcomes, course participation, and student-group context.',
    ],
    programs: ['Broad AP course access', 'Research and critical-thinking emphasis', 'Academic clubs and extracurriculars', 'Traditional four-year high school setting'],
    questions: ['How many hours of homework are typical by grade?', 'How are AP seats and course conflicts handled?', 'What academic and wellness support is available?', 'How easy is it to balance clubs, arts, and athletics with coursework?'],
    facts: [
      { label: 'Admissions focus', value: '80% grades + PSAT' },
      { label: 'School model', value: 'Grades 9–12' },
      { label: 'Defining strength', value: 'Academic breadth' },
    ],
    sourceIds: ['jcps-admissions', 'jcps-psat', 'college-board', 'nj-performance'],
  },
  {
    slug: 'infinity-institute',
    name: 'Infinity Institute',
    shortName: 'Infinity Institute',
    type: 'Small selective academic magnet',
    system: 'Jersey City Public Schools',
    location: '222 Mercer Street, Jersey City',
    cost: 'Public · no tuition',
    test: 'PSAT 8/9 required',
    eligibility: 'Jersey City residents entering grade 9',
    accent: 'gold',
    summary: 'A very small grades 6–12 academic magnet that pairs serious college preparation with a more intimate, personalized school community.',
    bestFor: 'Students who thrive when teachers know them well and who prefer a small academic community to a large course-and-activity ecosystem.',
    tradeoff: 'A small school inevitably offers fewer sections, scheduling combinations, teams, and clubs than a larger high school.',
    admissionsStatus: 'The 2027–28 application window has not yet been published. The latest confirmed process is shared with McNair.',
    admissions: [
      'Infinity and McNair use one shared selective admissions framework in the latest JCPS guidance.',
      'The latest published weighting is 40% PSAT 8/9, 40% grades, 10% teacher recommendations, 5% attendance, and 5% extracurricular activities.',
      'Because Infinity begins in grade 6, some students are already enrolled before high school; families should ask how many external grade-9 seats are expected.',
      'The prior application window ran November 26–December 23, 2025. Treat that only as an advance-planning guide.',
    ],
    academics: [
      'A challenging college-preparatory program in a small setting.',
      'The school’s state report describes an emphasis on a safe, supportive, inclusive community alongside academic excellence.',
      'The small scale is the central differentiator: potential for close relationships, with less curricular breadth than McNair.',
    ],
    programs: ['Small grades 6–12 community', 'Advanced coursework', 'Cambridge program history', 'Close-knit academic culture'],
    questions: ['How many grade-9 seats will be available to outside applicants?', 'Which AP and elective courses will run for the class of 2031?', 'What clubs and teams are active this year?', 'How does counseling support a very small high school cohort?'],
    facts: [
      { label: 'Admissions focus', value: '80% grades + PSAT' },
      { label: 'School model', value: 'Grades 6–12' },
      { label: 'Defining strength', value: 'Small community' },
    ],
    sourceIds: ['jcps-admissions', 'jcps-psat', 'college-board', 'nj-performance'],
  },
  {
    slug: 'high-tech-high',
    name: 'High Tech High School',
    shortName: 'High Tech High',
    type: 'Selective county CTE magnet',
    system: 'Hudson County Schools of Technology',
    location: '1 High Tech Way, Secaucus',
    cost: 'Public · no tuition',
    test: 'No entrance test currently listed',
    eligibility: 'Full-time Hudson County residents in grade 8 on September 1, 2026',
    accent: 'teal',
    summary: 'A modern countywide magnet where the academy and major are central to four years of high school—not simply an extracurricular theme.',
    bestFor: 'Students ready to make a meaningful commitment to biomedical science, environmental science, design, computing, media, culinary arts, or performing arts.',
    tradeoff: 'A student should genuinely want the selected program of study; the Secaucus commute also deserves a realistic trial run.',
    admissionsStatus: 'HCST says complete 2027–28 information will be posted at the end of September 2026. Eligibility and the placement framework are already confirmed.',
    admissions: [
      'The student must be in grade 8 as of September 1, 2026, and the student and parent/guardian must be full-time Hudson County residents.',
      'HCST uses one high-school application process across its programs.',
      'School placement depends on acceptance status, the CTE major selected in the application, and academic score.',
      'Do not rely on last year’s dates. Join the HCST mailing list and return to the official admissions page at the end of September.',
    ],
    academics: [
      'A full college-preparatory core sits alongside career and technical education.',
      'The school lists AP options across English, history, science, and math, including Calculus AB/BC and multiple lab sciences.',
      'Dual-enrollment and LEAP opportunities can add college-level coursework, depending on program and availability.',
    ],
    programs: ['Biomedical Sciences', 'Culinary Arts', 'Design & Fabrication', 'Environmental Science', 'Media & Visual Arts', 'Performing Arts'],
    questions: ['What is the four-year course sequence for the intended major?', 'Can students change majors, and when?', 'What portfolio or audition materials are required?', 'What transportation is available from your part of Jersey City?'],
    facts: [
      { label: 'Admissions pool', value: 'All Hudson County' },
      { label: 'School model', value: 'Academy + CTE major' },
      { label: 'Defining strength', value: 'Deep specialization' },
    ],
    sourceIds: ['hcst-admissions', 'high-tech-academies', 'high-tech-academics', 'nj-performance'],
  },
  {
    slug: 'county-prep',
    name: 'County Prep High School',
    shortName: 'County Prep',
    type: 'Selective county CTE magnet',
    system: 'Hudson County Schools of Technology',
    location: '525 Montgomery Street, Jersey City',
    cost: 'Public · no tuition',
    test: 'No entrance test currently listed',
    eligibility: 'Full-time Hudson County residents in grade 8 on September 1, 2026',
    accent: 'blue',
    summary: 'A career-focused county magnet with an unusually practical range of health, professional-services, creative, and technology majors in Jersey City.',
    bestFor: 'Students excited by a specific applied path such as medical science, cybersecurity, business, culinary arts, cosmetology, fashion, media, or photography.',
    tradeoff: 'The strongest reason to choose County Prep is major fit—not a generic desire for a selective school.',
    admissionsStatus: 'HCST’s full 2027–28 dates are due at the end of September 2026. The same countywide eligibility and placement rules as High Tech apply.',
    admissions: [
      'County Prep and High Tech share the HCST high-school application process.',
      'Applicants must meet the 2027–28 grade and Hudson County residency rules.',
      'The chosen CTE major is a core placement factor, so families should study programs before submitting preferences.',
      'Exact application, recommendation, open-house, and decision dates are not yet published for 2027–28.',
    ],
    academics: [
      'College-preparatory requirements run alongside four years of vocational classes.',
      'County Prep currently lists AP courses across English, history, science, math, Spanish, computer science, seminar, and research.',
      'The school also publishes a broad elective menu spanning science, arts, business, media, psychology, and social studies.',
    ],
    programs: ['Medical Science', 'Kinesiology & Exercise Science', 'Networking & Cybersecurity', 'Business', 'Culinary Arts', 'Cosmetology', 'Fashion Design', 'Graphic & Media programs'],
    questions: ['Which certifications or college credits can the chosen major lead to?', 'How much of each day is spent in the major by grade?', 'What internships or work-based learning are typical?', 'How competitive is placement in the preferred major?'],
    facts: [
      { label: 'Admissions pool', value: 'All Hudson County' },
      { label: 'School model', value: 'Career-major CTE' },
      { label: 'Defining strength', value: 'Practical pathways' },
    ],
    sourceIds: ['hcst-admissions', 'county-prep-programs', 'county-prep-academics', 'county-prep-ap', 'nj-performance'],
  },
  {
    slug: 'saint-dominic-academy',
    name: 'Saint Dominic Academy',
    shortName: 'Saint Dominic Academy',
    type: 'Private all-girls Catholic college prep',
    system: 'Independent Catholic school',
    location: '2572 John F. Kennedy Boulevard, Jersey City',
    cost: '$19,500 tuition + $500 registration for 2026–27',
    test: 'HSPT/COOP in latest published process',
    eligibility: 'Girls applying to grades 7–12; freshman process shown here',
    accent: 'berry',
    summary: 'A small, values-centered all-girls environment with college preparation, close faculty relationships, leadership opportunities, and a medical pathway.',
    bestFor: 'Students who want a small all-girls community, Catholic education, and substantial personal attention—with MEDQUEST as a notable health-care option.',
    tradeoff: 'Tuition, Catholic formation, and the smaller course-and-activity scale are major fit questions, not footnotes.',
    admissionsStatus: 'Applications are available through the school. The fall open house is confirmed for Sunday, September 27, 2026, 11:00 a.m.–1:00 p.m.; full class-of-2031 deadlines are not yet posted.',
    admissions: [
      'The school’s current application page calls for an application account, transcript, recommendation letter, and an entrance/placement exam for eighth-grade applicants in its latest published cycle.',
      'The detailed school profile describes admission based on the formal application, recommendations, prior school records and standardized scores, including HSPT for high school.',
      'Attend the September 27 open house or schedule a tour to test the all-girls, small-school, and faith-centered fit.',
      'Ask admissions to confirm the class-of-2031 testing, scholarship, financial-aid, and response deadlines before acting.',
    ],
    academics: [
      'College-preparatory, honors, and AP coursework in a small-class environment.',
      'MEDQUEST is the school’s distinctive medical and health-care exploration pathway.',
      'The school promotes dual-enrollment, STEM, engineering/robotics, arts, clubs, athletics, service, and leadership.',
    ],
    programs: ['MEDQUEST health pathway', 'Honors and AP coursework', 'Dual enrollment', 'Fine and performing arts', 'Leadership and service', 'All-girls learning environment'],
    questions: ['What will 2027–28 tuition and total fees be after aid?', 'Which AP and dual-enrollment courses will run?', 'What does Catholic formation look like day to day?', 'How do MEDQUEST admission and scheduling work?'],
    facts: [
      { label: '2026–27 tuition', value: '$19,500 + fees' },
      { label: 'School model', value: 'Girls · grades 7–12' },
      { label: 'Defining strength', value: 'Small, supportive setting' },
    ],
    sourceIds: ['sda-home', 'sda-apply', 'sda-tuition'],
  },
];

export const upcomingSchools = [
  { name: 'Hudson Catholic', note: 'Coed Catholic college prep' },
  { name: 'Franklin School', note: 'Independent school on the waterfront' },
  { name: 'The Hudson School', note: 'Independent school in Hoboken' },
];

export type TimelineItem = {
  date: string;
  title: string;
  body: string;
  schools: string[];
  status: 'Confirmed' | 'Expected' | 'Action';
  sourceId?: string;
};

export const timeline: TimelineItem[] = [
  {
    date: 'Now · September',
    title: 'Confirm the PSAT 8/9 plan with your school',
    body: 'JCPS has not yet posted a districtwide 2026 test date. Ask your eighth-grade counselor how and when the student will test; the PSAT is required for McNair and Infinity.',
    schools: ['McNair', 'Infinity'],
    status: 'Action',
    sourceId: 'jcps-psat',
  },
  {
    date: 'Sunday, September 27 · 11 a.m.–1 p.m.',
    title: 'Saint Dominic Academy fall open house',
    body: 'Meet admissions, tour the campus, and ask for the class-of-2031 HSPT, application, scholarship, and financial-aid calendar.',
    schools: ['Saint Dominic'],
    status: 'Confirmed',
    sourceId: 'sda-home',
  },
  {
    date: 'End of September',
    title: 'HCST publishes 2027–28 admissions information',
    body: 'High Tech and County Prep say the new cycle’s full information will be available at the end of September. Join the mailing list now and compare majors before the application opens.',
    schools: ['High Tech', 'County Prep'],
    status: 'Confirmed',
    sourceId: 'hcst-admissions',
  },
  {
    date: 'October 1–30',
    title: 'Fall in-school PSAT 8/9 testing window',
    body: 'College Board’s national in-school window is confirmed. Your school selects its local date. Depending on submission date, fall scores are scheduled for student release from October 22 through November 12.',
    schools: ['McNair', 'Infinity'],
    status: 'Confirmed',
    sourceId: 'college-board',
  },
  {
    date: 'October–November',
    title: 'Visit HCST programs and prepare major materials',
    body: 'Once HCST posts the new calendar, register for open houses and note any portfolio, audition, essay, recommendation, or program-specific requirements.',
    schools: ['High Tech', 'County Prep'],
    status: 'Action',
    sourceId: 'hcst-admissions',
  },
  {
    date: 'Fall · exact date pending',
    title: 'Complete Saint Dominic testing and application steps',
    body: 'The latest school guidance used the COOP/HSPT for eighth-grade applicants. Confirm the class-of-2031 test date and document deadlines directly with admissions.',
    schools: ['Saint Dominic'],
    status: 'Action',
    sourceId: 'sda-apply',
  },
  {
    date: 'Late November–December · planning estimate',
    title: 'Likely McNair and Infinity application period',
    body: 'Last cycle ran November 26–December 23. The 2027–28 dates are not yet announced, so prepare recommendations and records early but wait for the official window.',
    schools: ['McNair', 'Infinity'],
    status: 'Expected',
    sourceId: 'jcps-admissions',
  },
  {
    date: 'Winter 2027',
    title: 'Decisions, responses, and financial aid',
    body: 'Track every portal and personal-email inbox. Compare offers alongside transportation, daily program fit, total private-school cost, and aid—not rankings alone.',
    schools: ['All schools'],
    status: 'Expected',
  },
];

export function getSchool(slug: string) {
  return schools.find((school) => school.slug === slug);
}

export function getSources(ids: string[]) {
  return ids.map((id) => sources.find((source) => source.id === id)).filter(Boolean) as Source[];
}
