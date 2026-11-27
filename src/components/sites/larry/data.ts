// Content for Larry Harvey's personal site. Layout cloned from dardelin.com (see docs/research/dardelin).
// Sources: interviews with Larry (project docs), hfgwm.com, Five Star Professional, Woodlands Online.

const IMG = "/sites/larry/images";

export const SOURCE = "https://www.hfgwm.com";

export const navLinks = [
  { label: "Story", href: "/#story" },
  { label: "The work", href: null },
  { label: "In the world", href: "/#solutions" },
  { label: "Giving back", href: "/#home-causes" },
  { label: "References", href: "/references" },
] as const;

export const solutionLinks = [
  { label: "Wealth\nManagement", href: "/wealth", icon: "crown" },
  { label: "Legacy\nArchitect", href: "/legacy", icon: "bulb" },
  { label: "Harvey Trinity\nWine", href: "/wine", icon: "grid" },
  { label: "Loving Is\nAI", href: "/lovingis", icon: "heart" },
] as const;

const LOGO = "/sites/larry/images/logos";

export type Logo = { alt: string; src: string; w: number; h: number; filter?: string };

/** Logo wall under the hero (same marquee as the source). White badges on black; heights follow the source (25 to 50 px). */
export const logoRows: { logos: Logo[]; direction: "left" | "right"; duration: number }[] = [
  {
    direction: "left",
    duration: 120,
    logos: [
      { alt: "Five Star Wealth Manager 2025", src: `${LOGO}/five-star-2025-white.png`, w: 120, h: 50 },
      { alt: "HFG Wealth Management", src: `${LOGO}/hfg-white-tag.png`, w: 122, h: 50 },
      { alt: "Financial Advisor Magazine RIA Survey & Ranking 2020", src: `${LOGO}/fa-ria-2020-white.png`, w: 150, h: 50 },
      { alt: "Best of The Woodlands 2024, Woodlands Online", src: `${LOGO}/best-of-woodlands-white.png`, w: 52, h: 50 },
      { alt: "The American College of Financial Services", src: `${LOGO}/american-college.svg`, w: 150, h: 40 },
    ],
  },
  {
    direction: "right",
    duration: 132,
    logos: [
      { alt: "Loving Is AI", src: `${LOGO}/lovingis-white.png`, w: 150, h: 48 },
      { alt: "The World's Greatest Experiment", src: `${LOGO}/twge-white.png`, w: 196, h: 50 },
      { alt: "Financial Planning Association", src: `${LOGO}/fpa.svg`, w: 110, h: 40 },
      { alt: "BBB Awards for Excellence Winner 2020", src: `${LOGO}/bbb-white.png`, w: 34, h: 50 },
    ],
  },
  {
    direction: "left",
    duration: 126,
    logos: [
      { alt: "Bear Bryant Awards, American Heart Association", src: `${LOGO}/bear-bryant-white.png`, w: 120, h: 50 },
      { alt: "American Heart Association", src: `${LOGO}/aha.svg`, w: 80, h: 48 },
      { alt: "Memorial Hermann", src: `${LOGO}/memorial-hermann.svg`, w: 140, h: 40 },
      { alt: "Breaking Strongholds", src: `${LOGO}/breaking-strongholds-white.png`, w: 84, h: 50 },
    ],
  },
  {
    direction: "right",
    duration: 138,
    logos: [
      { alt: "The University of Tampa", src: `${LOGO}/ut-tampa-white.png`, w: 140, h: 50 },
      { alt: "Woodlands Online", src: `${LOGO}/woodlands-online-white.png`, w: 50, h: 50 },
      { alt: "Community Impact", src: `${LOGO}/community-impact-white.png`, w: 84, h: 50 },
      { alt: "Houston Business Journal", src: `${LOGO}/hbj.png`, w: 66, h: 40 },
    ],
  },
];

export type Front = { title: string; text: string; img: string | null; alt: string; imgHeight: number; href: string; logo?: string; logoFilter?: string };

export const enjeux: Front[] = [
  {
    title: "40+ years",
    text: "Serving families since 1985. Lutheran Brotherhood, Harvey Financial Group, HFG Wealth Management.",
    img: null,
    alt: "Forty years of service",
    imgHeight: 315,
    href: "#wealth",
    logo: "/sites/larry/images/logos/hfg-white-tag.png",
  },
  {
    title: "Five Star Wealth Manager",
    text: "Fifteen consecutive years, 2012 to 2026. Founder and CEO of HFG Wealth Management.",
    img: null,
    alt: "Five Star Wealth Manager",
    imgHeight: 340,
    href: "#wealth",
    logo: "/sites/larry/images/logos/five-star-2025-white.png",
  },
  {
    title: "Top wealth management firm",
    text: "Houston Business Journal, 2012 to 2023. Independent, family-owned, The Woodlands, Texas.",
    img: null,
    alt: "Houston Business Journal",
    imgHeight: 310,
    href: "#wealth",
    logo: "/sites/larry/images/logos/hbj-color.png",
  },
  {
    title: "ChFC, fiduciary, fee-only",
    text: "Chartered Financial Consultant. Anything we offer has to be appropriate for you and your family.",
    img: null,
    alt: "Fiduciary",
    imgHeight: 300,
    href: "#wealth",
    logo: "/sites/larry/images/logos/american-college.svg",
    logoFilter: "brightness(0) invert(1)",
  },
];

export const stats = [
  { value: "$500M+", tabletValue: "$500M+", label: "Entrusted to HFG \nby the families it serves" },
  { value: "440+", tabletValue: "440+", label: "Families served today" },
  { value: "40+", tabletValue: "40+", label: "Years serving families, \nsince 1985" },
  { value: "15", tabletValue: "15", label: "Consecutive years as \nFive Star Wealth Manager" },
];

export type Programme = { title: string; text: string; href: string; img: string | null; alt: string; bw?: string };

export const programmes: Programme[] = [
  {
    title: "Loving Is AI",
    text: "Advisor and early investor in the world's first Loving Intelligence. Nova is an AI companion built from love instead of fear, with a protocol that puts dignity and care into the tools we will hand to our children. The kind of technology Larry believes the future deserves.",
    href: "/lovingis",
    bw: "/sites/larry/images/lovingis-card-bw.jpg",
    img: null,
    alt: "Loving Is AI",
  },
  {
    title: "The World's Greatest Experiment",
    text: "Charity reimagined. Board member and supporter of the experiment that turns love into clean water, food and school at Love Farms in Pakistan, Sierra Leone and the Philippines. In Sierra Leone, a community restaurant carries his name.",
    href: "#world",
    img: null,
    alt: "The World's Greatest Experiment",
  },
  {
    title: "Legacy Architect",
    text: "Larry's own technology for the legacy of the future. Forty years of planning for families, turned into a tool: take the books, the notes and the hard-won rules of a lifetime, condense them with AI, and hand them to the people who come after you, with the values attached.",
    href: "/legacy",
    img: null,
    alt: "Legacy Architect app",
  },
];

export type WorldItem = { eyebrow: string; title: string; text: string; quote?: string; href: string; linkLabel: string; video?: boolean };

export const world: WorldItem[] = [
  {
    eyebrow: "Advisor and early investor",
    title: "Loving Is AI",
    text: "The world's first Loving Intelligence. Loving Is builds the human layer of artificial intelligence: Nova, an AI companion created from love, not fear, and a protocol that puts dignity, care and human agency into the tools people use every day. Larry advises the company and backed it early, because forty years of helping families trust an invisible future taught him that intelligence without humanity isn't enough.",
    href: "https://lovingis.ai",
    linkLabel: "lovingis.ai",
  },
  {
    eyebrow: "Advisor and board member",
    title: "The World's Greatest Experiment",
    text: "Charity reimagined. TWGE turns love into clean water, food and opportunity: members fund Love Farms in Pakistan, Sierra Leone and the Philippines, and the communities there meditate every day, sending love back to the people who support them. Larry sits on the board and advises the organization on building something that lasts.",
    href: "https://theworldsgreatestexperiment.com",
    linkLabel: "theworldsgreatestexperiment.com",
  },
  {
    eyebrow: "Sponsor",
    title: "Larry's restaurant at the Love Farm",
    text: "At the Love Farm, Larry sponsors the restaurant that feeds the community every day. A table set until it is full of the ones who show up: the simplest version of everything he believes about legacy.",
    href: "https://theworldsgreatestexperiment.com",
    linkLabel: "Watch the film",
    video: true,
  },
];

export type Cause = { title: string; meta: string; text: string; quote?: string; href?: string };

export const homeCauses: Cause[] = [
  {
    title: "Heart",
    meta: "American Heart Association · from 2027",
    text: "Presenting sponsor of the American Heart Association's Paul \"Bear\" Bryant Lifetime Achievement Award from 2027, and a major donor to the Montgomery County Heart Ball.",
    quote: "The most meaningful legacies are built through character, service, and investing in the lives of others.",
    href: "https://bryantawards.org/hfg-wealth-management-named-presenting-sponsor-of-the-paul-bear-bryant-lifetime-achievement-award/news/",
  },
  {
    title: "Women's health",
    meta: "Memorial Hermann The Woodlands · annual",
    text: "Sponsor of the In the Pink of Health luncheon with MD Anderson Breast Care at Memorial Hermann The Woodlands, supporting early detection and outreach for breast and ovarian cancer.",
    href: "https://hfgwm.com/how-hfg-impacts-the-community-breast-cancer-awareness-month/",
  },
  {
    title: "Larry's, Sierra Leone",
    meta: "The World's Greatest Experiment · Sierra Leone",
    text: "Board member and supporter of The World's Greatest Experiment. At the Love Farm in Sierra Leone, the community restaurant dedicated in his name is where the women of the culinary program train and the village eats.",
    href: "https://theworldsgreatestexperiment.com",
  },
  {
    title: "Florida",
    meta: "Hurricane Ian · 2022",
    text: "After Hurricane Ian hit Port Charlotte and Punta Gorda, where he grew up, HFG sent funds and helped load seven 18-wheelers of food, water and supplies with Mattress Mack.",
    quote: "It was our honor to send our prayers as well as tangible support.",
    href: "https://hfgwm.com/hfg-wealth-management-brings-hope-and-restoration-funds-to-victims-of-hurricane-ian/",
  },
];

export const virtues = [
  { n: "I", name: "Faith", quote: "The core of everything. Without it, how do you even take your step forward?" },
  { n: "II", name: "Love", quote: "An embrace of love. An embrace of protection and safety." },
  { n: "III", name: "Devotion", quote: "Make a commitment to do the work. To actually show up." },
  { n: "IV", name: "Legacy", quote: "Find the destination first. Then work backwards." },
  { n: "V", name: "Unity", quote: "Stand firm. Stand tall. Create unity." },
  { n: "VI", name: "Sacrifice", quote: "Why would you not do anything you possibly could so that others could benefit?" },
  { n: "VII", name: "Eternity", quote: "The world and the universe is going to get better, always." },
];

export type Article = { date: string; dateTime: string; title: string; text: string; href: string; img: string | null; alt: string };

export const articles: Article[] = [
  {
    date: "October 2022",
    dateTime: "2022-10-01",
    title: "Seven trucks to Florida",
    text: "After Hurricane Ian hit Port Charlotte and Punta Gorda, where Larry grew up and still has family, HFG sent funds and helped load seven 18-wheelers of food, water and supplies. \"It was our honor to send our prayers as well as tangible support.\"",
    href: "https://hfgwm.com/hfg-wealth-management-brings-hope-and-restoration-funds-to-victims-of-hurricane-ian/",
    img: null,
    alt: "Hurricane Ian relief",
  },
  {
    date: "August 2026",
    dateTime: "2026-08-13",
    title: "Bear Bryant Lifetime Achievement Award",
    text: "Presenting sponsor of the American Heart Association's Paul \"Bear\" Bryant Lifetime Achievement Award from 2027. \"The most meaningful legacies are built through character, service, and investing in the lives of others.\"",
    href: "https://www.woodlandsonline.com/npps/story.cfm?nppage=84549",
    img: null,
    alt: "Bear Bryant Awards",
  },
  {
    date: "Letter",
    dateTime: "2026-11-01",
    title: "Why \"Trinity\"",
    text: "Three tenses, one man. What you were given, what you live, what you leave. Faith is what holds the three together.",
    href: "#letters",
    img: null,
    alt: "Why Trinity",
  },
  {
    date: "Letter",
    dateTime: "2026-11-01",
    title: "The ten dollar bottle",
    text: "You don't give the ten dollar bottle to the people who appreciate the thousand dollar one. And you don't give the thousand dollar bottle to the ten dollar people. On choosing your table.",
    href: "#letters",
    img: null,
    alt: "On choosing your table",
  },
];

export const faqs = [
  {
    q: "Why \"Trinity\"?",
    a: "Three tenses, one man: what you were given, what you live, what you leave. Faith is what holds the three together.",
  },
  {
    q: "What are the letters?",
    a: "A letter now and then, in Larry's own words, when he has something worth saying. No tips, no promotions, no newsletter.",
  },
  {
    q: "Is HFG still taking new families?",
    a: "A few. The firm serves fifty families with full attention rather than thousands with none. Start with a conversation at hfgwm.com.",
  },
  {
    q: "What is Legacy Architect?",
    a: "A technology for organizing what you believe and what you've learned, and handing it to the next generation intact. Early access on request.",
  },
  {
    q: "Who is the wine for?",
    a: "For the ones who stayed. People who want something collectable, who understand legacy and the value of giving something for the future. Prelude arrives in January 2027.",
  },
  {
    q: "How do I reach Larry?",
    a: "Write through the form at the bottom of this page. He reads these himself.",
  },
];

export const footerColumns = [
  [
    { label: "Story", href: "#story" },
    { label: "Wealth", href: "/wealth" },
    { label: "Legacy Architect", href: "/legacy" },
    { label: "Loving Is AI", href: "/lovingis" },
    { label: "Harvey Trinity Wine", href: "/wine" },
  ],
  [
    { label: "In the world", href: "/#solutions" },
    { label: "Giving back", href: "/#home-causes" },
    { label: "References", href: "/references" },
    { label: "Questions", href: "#faq" },
    { label: "HFG Wealth Management", href: "https://www.hfgwm.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/larry-harvey-1239272" },
  ],
  [
    { label: "Privacy policy", href: "#" },
    { label: "Legal notice", href: "#" },
    { label: "Cookie banner", href: null },
  ],
] as const;

/** Photos for the cards and portraits are managed in /editor and stored in content.json. */
export const images = {
  noise: `${IMG}/noise.png`,
  linkedin: `${IMG}/logo-linkedin.png`,
};

/* ---------- References page ---------- */
export type RefKind = "Award" | "Credential" | "Career" | "Board & advisory" | "Sponsorship" | "Press";

export type Reference = {
  org: string;
  kind: RefKind;
  detail: string;
  year: string;
  href?: string;
  /** Path under /public, e.g. /sites/larry/images/logos/five-star.jpg. null = placeholder with the org name */
  logo: string | null;
};

export const references: Reference[] = [
  { org: "Five Star Professional", kind: "Award", detail: "Five Star Wealth Manager, fifteen consecutive years", year: "2012 to 2026", href: "https://www.fivestarprofessional.com/Spotlights/157691/Profile", logo: `${LOGO}/five-star-color.png` },
  { org: "Houston Business Journal", kind: "Award", detail: "Top wealth management firm, Houston area", year: "2012 to 2023", href: "https://www.woodlandsonline.com/npps/story.cfm?nppage=58333", logo: `${LOGO}/hbj-color.png` },
  { org: "Financial Advisor Magazine", kind: "Award", detail: "RIA Ranking", year: "2020", href: "https://www.hfgwm.com", logo: `${LOGO}/fa-ria-color.png` },
  { org: "Woodlands Online", kind: "Award", detail: "Best of The Woodlands", year: "Ongoing", href: "https://www.woodlandsonline.com", logo: `${LOGO}/best-of-woodlands-color.png` },
  { org: "Better Business Bureau", kind: "Award", detail: "Accredited business", year: "Ongoing", href: "https://www.bbb.org", logo: `${LOGO}/bbb-color.png` },
  { org: "The American College", kind: "Credential", detail: "Chartered Financial Consultant (ChFC), Bryn Mawr, Pennsylvania", year: "", href: "https://www.theamericancollege.edu/chfc", logo: `${LOGO}/american-college.svg` },
  { org: "University of Tampa", kind: "Credential", detail: "Degrees in accounting and business management", year: "", href: "https://www.ut.edu", logo: `${LOGO}/ut-tampa-white-red.png` },
  { org: "Financial Planning Association", kind: "Credential", detail: "Member", year: "", href: "https://www.financialplanningassociation.org", logo: `${LOGO}/fpa.svg` },
  { org: "Society of Financial Service Professionals", kind: "Credential", detail: "Member", year: "", href: "https://www.societyoffsp.org", logo: null },
  { org: "Lutheran Brotherhood / Thrivent", kind: "Career", detail: "Insurance agent to Associate General Agent, Estate and Charitable Planning Specialist for the Southeast", year: "1985 to 1998", href: "https://www.thrivent.com", logo: null },
  { org: "Harvey Financial Group", kind: "Career", detail: "Founded. Fee-based financial planning and investment advisory", year: "1998", logo: null },
  { org: "HFG Wealth Management", kind: "Career", detail: "Founded. Independent, fee-only fiduciary, The Woodlands and Nederland, Texas", year: "2008", href: "https://www.hfgwm.com", logo: `${LOGO}/hfg-white-tag.png` },
  { org: "Waterside Wealth Advisors", kind: "Career", detail: "Acquired by HFG, the firm's second acquisition", year: "2023", href: "https://www.woodlandsonline.com/npps/story.cfm?nppage=77263", logo: null },
  { org: "The World's Greatest Experiment", kind: "Board & advisory", detail: "Advisor and board member. Love Farms in Pakistan, Sierra Leone and the Philippines", year: "Current", href: "https://theworldsgreatestexperiment.com", logo: `${LOGO}/twge.png` },
  { org: "Loving Is AI", kind: "Board & advisory", detail: "Advisor and early investor in the world's first Loving Intelligence", year: "Current", href: "https://lovingis.ai", logo: `${LOGO}/lovingis.png` },
  { org: "American Heart Association", kind: "Sponsorship", detail: "Presenting sponsor, Paul \"Bear\" Bryant Lifetime Achievement Award", year: "From 2027", href: "https://bryantawards.org/hfg-wealth-management-named-presenting-sponsor-of-the-paul-bear-bryant-lifetime-achievement-award/news/", logo: `${LOGO}/bear-bryant.png` },
  { org: "American Heart Association", kind: "Sponsorship", detail: "Major donor, Montgomery County Heart Ball", year: "2024", href: "https://hellowoodlands.com/2024-montgomery-county-heart-ball-unites-community-and-highlights-survivors-spanning-generations/", logo: `${LOGO}/aha.svg` },
  { org: "MD Anderson Breast Care at Memorial Hermann", kind: "Sponsorship", detail: "In the Pink of Health luncheon, breast and ovarian cancer outreach", year: "Ongoing", href: "https://hfgwm.com/how-hfg-impacts-the-community-breast-cancer-awareness-month/", logo: `${LOGO}/memorial-hermann.svg` },
  { org: "Breaking Strongholds", kind: "Sponsorship", detail: "Platinum sponsor, Reflective Life Ministries", year: "Ongoing", href: "https://www.breakingstrongholds.com", logo: `${LOGO}/breaking-strongholds.png` },
  { org: "Education for Tomorrow's Alliance", kind: "Sponsorship", detail: "Trivia Night sponsor, Conroe, Texas", year: "2016", href: "https://www.woodlandsonline.com/npps/story.cfm?nppage=59231", logo: null },
  { org: "Hurricane Ian relief with Mattress Mack", kind: "Sponsorship", detail: "Seven 18-wheelers of supplies to Port Charlotte and Punta Gorda, Florida", year: "2022", href: "https://hfgwm.com/hfg-wealth-management-brings-hope-and-restoration-funds-to-victims-of-hurricane-ian/", logo: null },
  { org: "Bear Bryant Awards", kind: "Press", detail: "HFG named presenting sponsor of the Lifetime Achievement Award", year: "2026", href: "https://bryantawards.org/hfg-wealth-management-named-presenting-sponsor-of-the-paul-bear-bryant-lifetime-achievement-award/news/", logo: `${LOGO}/bear-bryant.png` },
  { org: "Hello Woodlands", kind: "Press", detail: "HFG Wealth Management named presenting sponsor", year: "2026", href: "https://hellowoodlands.com/hfg-wealth-management-named-presenting-sponsor-of-the-paul-bear-bryant-lifetime-achievement-award/", logo: `${LOGO}/hello-woodlands-color.png` },
  { org: "Woodlands Online", kind: "Press", detail: "Awards, hires, acquisitions and community work, a dozen stories", year: "2015 to 2026", href: "https://www.woodlandsonline.com/npps/story.cfm?nppage=84549", logo: `${LOGO}/woodlands-online.png` },
  { org: "Community Impact", kind: "Press", detail: "The Woodlands edition", year: "2019", href: "https://editions.communityimpact.com/view/874622/8", logo: `${LOGO}/community-impact.png` },
];
