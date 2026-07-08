// Central configuration & content for Jumpify Marketing.
// Edit business details, services, projects and blog posts here.

export const site = {
  name: "Jumpify Marketing",
  legalName: "Jumpify Marketing",
  tagline: "Elevating Real Estate Marketing in Pakistan",
  description:
    "Jumpify Marketing is a trusted real estate investment consultancy in Pakistan & Dubai. We specialise in secure, NOC-approved, high-yield property investments in Faisal Town Phase 2 and premier projects across Islamabad and Rawalpindi.",
  // Update this to your live domain before deploying.
  url: "https://jumpifymarketing.com",
  foundedYear: 2019,
  phone: "+92 340 8988872",
  phoneHref: "+923408988872",
  whatsapp: "923408988872",
  phone2: "+92 339 9955566",
  phoneHref2: "+923399955566",
  whatsapp2: "923399955566",
  email: "jumpifymarketing@gmail.com",
  address: {
    line1: "Office No. N99, Sikandarabad",
    line2: "Murree Road, Rawalpindi",
    city: "Rawalpindi",
    region: "Punjab",
    country: "Pakistan",
    postalCode: "46000",
  },
  cities: ["Islamabad", "Rawalpindi", "Dubai"],
  social: {
    facebook: "https://www.facebook.com/jumpifymarketingofficial",
    instagram: "https://www.instagram.com/jumpifymarketingofficial",
    linkedin: "https://www.linkedin.com/company/jumpifymarketing",
    youtube: "https://www.youtube.com/@jumpifymarketing",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Faisal Town Phase 2", href: "/projects/faisal-town-phase-2" },
      { label: "Faisal Hills", href: "/projects/faisal-hills" },
      { label: "Faisal Town Phase 1", href: "/projects/faisal-town-phase-1" },
      { label: "Faisal Jewel", href: "/projects/faisal-jewel" },
      { label: "Faisal Heights", href: "/projects/faisal-heights" },
      { label: "Aviation Arcade", href: "/projects/aviation-arcade" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 5000, suffix: "+", label: "Investors Served" },
  { value: 100000, suffix: "+", label: "Kanal Marketed" },
  { value: 6, suffix: "", label: "Premium Projects" },
  { value: 6, suffix: "+", label: "Years of Trust" },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Investment Consultation",
    description:
      "One-on-one guidance on residential and commercial plots, matched to your budget, timeline and expected returns.",
    icon: "chart",
  },
  {
    title: "Premium Project Access",
    description:
      "Priority allocation and file booking in the most in-demand blocks of Faisal Town Phase 2 and partner projects.",
    icon: "building",
  },
  {
    title: "NOC-Approved Transactions",
    description:
      "Every deal is backed by verified, NOC-approved documentation so your investment stays 100% secure and transferable.",
    icon: "shield",
  },
  {
    title: "After-Sales Support",
    description:
      "Dedicated relationship managers handle transfers, resale and paperwork long after your purchase is complete.",
    icon: "headset",
  },
  {
    title: "Market & Yield Analysis",
    description:
      "Data-driven area reports, price trends and rental yield forecasts so you invest with clarity, not guesswork.",
    icon: "trending",
  },
  {
    title: "Overseas Investor Desk",
    description:
      "Fully digital booking, e-payments and remote documentation for Pakistanis investing from Dubai and beyond.",
    icon: "globe",
  },
];

export type Project = {
  slug: string;
  name: string;
  location: string;
  tag: string;
  status: "Booking Open" | "Fast Selling" | "Ready to Move" | "New Launch";
  blurb: string;
  overview: string;
  highlights: string[];
  paymentPlan: { plot: string; total: string; down: string; monthly: string }[];
  amenities: string[];
  developer: string;
  accent: string; // hex used for the generated fallback cover art
  heroImage: string;
  gallery: string[];
  mapQuery: string; // Google Maps search query for the embedded map
  locationPoints: string[]; // location & accessibility bullet points
  whyInvest: string[];
  faqs: { q: string; a: string }[];
};

// Shared community/lifestyle imagery reused across project galleries.
const sharedGallery = ["/images/gallery/aerial-community.png", "/images/gallery/sector-entrance.webp"];

export const projects: Project[] = [
  {
    slug: "faisal-town-phase-2",
    name: "Faisal Town Phase 2",
    location: "Islamabad – Thalian Interchange, M-2 Motorway",
    tag: "Flagship Project",
    status: "Fast Selling",
    blurb:
      "Our flagship offering — a master-planned, NOC-processed community directly on the M-2 Motorway with world-class amenities.",
    overview:
      "Faisal Town Phase 2 is a landmark residential development by Zedem International (Ch. Abdul Majeed) located near the New Islamabad International Airport at the Thalian Interchange. Spanning thousands of kanals of prime land, it offers 5, 7, 10 Marla and 1 & 2 Kanal residential plots on a transparent installment plan, making it one of the most secure investment opportunities in the twin cities.",
    highlights: [
      "Direct access from M-2 Lahore–Islamabad Motorway",
      "Minutes from New Islamabad International Airport",
      "Grid-station backed uninterrupted electricity",
      "Carpeted main boulevards & underground utilities",
    ],
    paymentPlan: [
      { plot: "5 Marla", total: "PKR 4,150,000", down: "PKR 830,000", monthly: "PKR 41,500" },
      { plot: "7 Marla", total: "PKR 5,600,000", down: "PKR 1,120,000", monthly: "PKR 56,000" },
      { plot: "10 Marla", total: "PKR 7,800,000", down: "PKR 1,560,000", monthly: "PKR 78,000" },
      { plot: "1 Kanal", total: "PKR 13,500,000", down: "PKR 2,700,000", monthly: "PKR 135,000" },
    ],
    amenities: [
      "Grand Jamia Mosque",
      "Gated security & CCTV",
      "Zoo & theme park",
      "Commercial hubs",
      "Parks & green belts",
      "Schools & hospitals",
    ],
    developer: "Zedem International – Ch. Abdul Majeed",
    accent: "#c9a24b",
    heroImage: "/images/projects/faisal-town-phase-2.webp",
    gallery: ["/images/projects/faisal-town-phase-2.webp", ...sharedGallery],
    mapQuery: "Faisal Town Phase 2 Islamabad",
    locationPoints: [
      "Direct entrance from the M-2 Lahore–Islamabad Motorway at the Thalian Interchange",
      "Approximately 5 minutes from the New Islamabad International Airport",
      "Connected to the proposed Rawalpindi Ring Road for quick access to Rawalpindi",
      "Close to Fatima Jinnah Women University and the Chakri Road corridor",
      "Surrounded by established societies, ensuring strong future connectivity",
    ],
    whyInvest: [
      "Backed by a proven developer with a track record of delivered communities",
      "Transparent installment plan lowers the entry barrier for salaried investors",
      "Consistent on-ground development is driving steady resale appreciation",
      "High rental and end-user demand thanks to airport and motorway proximity",
      "A limited window of pre-development pricing before the next escalation",
    ],
    faqs: [
      {
        q: "Is Faisal Town Phase 2 a good investment in 2026?",
        a: "Yes. Its location on the M-2 Motorway beside the New Islamabad International Airport, combined with an easy installment plan and active development, makes it one of the strongest appreciation plays in the twin cities right now.",
      },
      {
        q: "What plot sizes are available in Faisal Town Phase 2?",
        a: "The society offers 5, 7 and 10 Marla plus 1 and 2 Kanal residential plots, along with commercial plots in selected blocks.",
      },
      {
        q: "Can I buy on an installment plan?",
        a: "Yes. Plots are available on a flexible plan with a down payment followed by easy monthly and half-yearly installments. Contact us for the latest confirmed schedule.",
      },
    ],
  },
  {
    slug: "faisal-hills",
    name: "Faisal Hills",
    location: "Taxila – Grand Trunk Road, Islamabad",
    tag: "High Growth",
    status: "Booking Open",
    blurb:
      "A scenic, hill-view community on the main G.T. Road with rapid development and strong resale appreciation.",
    overview:
      "Faisal Hills is a premium residential society at the foothills near Taxila, offering breathtaking Margalla views, wide roads and a fully approved master plan. Its consistent development pace has made it a favourite for both end-users and investors seeking capital growth.",
    highlights: [
      "Main G.T. Road frontage",
      "Panoramic Margalla Hills views",
      "Executive & Prime block options",
      "Fast-track development & possession",
    ],
    paymentPlan: [
      { plot: "5 Marla", total: "PKR 3,900,000", down: "PKR 780,000", monthly: "PKR 39,000" },
      { plot: "8 Marla", total: "PKR 5,400,000", down: "PKR 1,080,000", monthly: "PKR 54,000" },
      { plot: "10 Marla", total: "PKR 6,700,000", down: "PKR 1,340,000", monthly: "PKR 67,000" },
      { plot: "1 Kanal", total: "PKR 11,200,000", down: "PKR 2,240,000", monthly: "PKR 112,000" },
    ],
    amenities: [
      "Central park & lake",
      "Gated community",
      "Grid station",
      "Educational complex",
      "Commercial avenue",
      "24/7 security",
    ],
    developer: "Zedem International",
    accent: "#2e7d64",
    heroImage: "/images/projects/faisal-hills.webp",
    gallery: ["/images/projects/faisal-hills.webp", ...sharedGallery],
    mapQuery: "Faisal Hills Taxila Islamabad",
    locationPoints: [
      "Prime frontage on the main G.T. Road near Taxila",
      "Direct access towards the M-1 Motorway and Hazara Expressway",
      "Panoramic views of the Margalla Hills foothills",
      "Close to Wah Cantt, HIT and established commercial areas",
      "Easy reach of Islamabad via the G.T. Road corridor",
    ],
    whyInvest: [
      "Rapid, visible development supporting healthy capital growth",
      "Scenic hill-view location that commands premium end-user demand",
      "Executive and Prime blocks catering to different budgets",
      "Established society with a growing resident population",
      "Strong resale liquidity in smaller plot categories",
    ],
    faqs: [
      {
        q: "Where is Faisal Hills located?",
        a: "Faisal Hills is situated on the main G.T. Road near Taxila, offering quick access to Islamabad, Wah Cantt and the motorway network.",
      },
      {
        q: "Is Faisal Hills approved?",
        a: "Faisal Hills has an approved master plan and continues to develop rapidly. We share the latest documentation status with every client before booking.",
      },
    ],
  },
  {
    slug: "faisal-town-phase-1",
    name: "Faisal Town Phase 1",
    location: "Islamabad – Fateh Jang Road",
    tag: "Ready to Move",
    status: "Ready to Move",
    blurb:
      "A fully developed, established community with possession-ready plots and a thriving resident population.",
    overview:
      "Faisal Town Phase 1 is a mature, fully-developed society offering possession-ready plots and constructed homes. With established infrastructure, active commercial markets and a large community, it delivers immediate liveability and stable value.",
    highlights: [
      "Possession-ready developed plots",
      "Established commercial markets",
      "Complete underground utilities",
      "Active resident community",
    ],
    paymentPlan: [
      { plot: "5 Marla", total: "PKR 6,500,000", down: "Full / Resale", monthly: "—" },
      { plot: "8 Marla", total: "PKR 9,200,000", down: "Full / Resale", monthly: "—" },
      { plot: "10 Marla", total: "PKR 11,500,000", down: "Full / Resale", monthly: "—" },
      { plot: "1 Kanal", total: "PKR 19,000,000", down: "Full / Resale", monthly: "—" },
    ],
    amenities: [
      "Developed road network",
      "Parks & mosques",
      "Markets & plazas",
      "Schools nearby",
      "Water & gas supply",
      "Community security",
    ],
    developer: "Zedem International",
    accent: "#1f6f9c",
    heroImage: "/images/projects/faisal-town-phase-1.webp",
    gallery: ["/images/projects/faisal-town-phase-1.webp", ...sharedGallery],
    mapQuery: "Faisal Town Islamabad",
    locationPoints: [
      "Located on Fateh Jang Road with easy access to Islamabad",
      "Fully developed road network and established infrastructure",
      "Close to the New Islamabad International Airport",
      "Active commercial markets within the community",
      "Well-connected to the wider twin-cities road network",
    ],
    whyInvest: [
      "Possession-ready plots for immediate construction or living",
      "Mature, fully-developed society with stable, proven value",
      "Thriving commercial activity supporting rental income",
      "Large existing community and complete civic amenities",
      "Lower risk profile ideal for end-users and conservative investors",
    ],
    faqs: [
      {
        q: "Is Faisal Town Phase 1 fully developed?",
        a: "Yes. Faisal Town Phase 1 is a mature, fully-developed society with possession-ready plots, constructed homes, active markets and complete infrastructure.",
      },
      {
        q: "Can I build immediately after purchase?",
        a: "In most blocks, yes — plots are possession-ready, so you can begin construction subject to the society's standard approvals.",
      },
    ],
  },
  {
    slug: "faisal-jewel",
    name: "Faisal Jewel",
    location: "Islamabad – Adjacent Faisal Town",
    tag: "New Launch",
    status: "New Launch",
    blurb:
      "The newest launch in the Faisal family — limited inventory, launch pricing and premium block planning.",
    overview:
      "Faisal Jewel is the latest addition to the Faisal Town portfolio, offering early-investor launch pricing in a compact, thoughtfully-planned community. Limited files make it an ideal short-to-mid term appreciation play for smart investors.",
    highlights: [
      "Launch-price entry advantage",
      "Limited, high-demand inventory",
      "Premium block master planning",
      "Backed by a proven developer",
    ],
    paymentPlan: [
      { plot: "5 Marla", total: "PKR 3,600,000", down: "PKR 720,000", monthly: "PKR 36,000" },
      { plot: "7 Marla", total: "PKR 4,900,000", down: "PKR 980,000", monthly: "PKR 49,000" },
      { plot: "10 Marla", total: "PKR 6,900,000", down: "PKR 1,380,000", monthly: "PKR 69,000" },
      { plot: "1 Kanal", total: "PKR 11,900,000", down: "PKR 2,380,000", monthly: "PKR 119,000" },
    ],
    amenities: [
      "Modern gated entrance",
      "Green belts",
      "Community mosque",
      "Commercial strip",
      "Wide carpeted roads",
      "Surveillance security",
    ],
    developer: "Zedem International",
    accent: "#8e4fae",
    heroImage: "/images/projects/faisal-jewel.webp",
    gallery: ["/images/projects/faisal-jewel.webp", ...sharedGallery],
    mapQuery: "Faisal Town Islamabad",
    locationPoints: [
      "Located adjacent to the established Faisal Town community",
      "Quick access to Fateh Jang Road and the airport corridor",
      "Surrounded by developed societies and existing infrastructure",
      "Well-positioned for connectivity to Islamabad and Rawalpindi",
      "Compact footprint keeps every plot close to main amenities",
    ],
    whyInvest: [
      "Early launch-price entry offers strong short-to-mid term upside",
      "Limited inventory creates natural demand and price support",
      "Premium block planning in a compact, walkable layout",
      "Backed by the same trusted developer as the Faisal portfolio",
      "Ideal for investors seeking a lower-ticket entry point",
    ],
    faqs: [
      {
        q: "What makes Faisal Jewel attractive for investors?",
        a: "As the newest launch in the Faisal portfolio, Faisal Jewel offers early-investor pricing and limited inventory — a combination that historically drives strong appreciation for early buyers.",
      },
      {
        q: "Is Faisal Jewel suitable for a smaller budget?",
        a: "Yes. Its launch pricing and smaller plot options make it one of the more accessible entry points in the area.",
      },
    ],
  },
  {
    slug: "faisal-heights",
    name: "Faisal Heights",
    location: "Taxila – Main G.T. Road, near Islamabad",
    tag: "Residential",
    status: "Booking Open",
    blurb:
      "A rising residential community on the main G.T. Road in Taxila, combining convenient motorway access with modern neighbourhood living.",
    overview:
      "Faisal Heights is a well-planned residential society developed by Zedem International on the main Grand Trunk Road near Taxila. Designed for families and investors alike, it offers a range of plot sizes with modern infrastructure, green open spaces and reliable utility connections. Its location between Taxila and the Islamabad–Peshawar Motorway corridor makes it a compelling choice for end-users seeking both connectivity and community, while investors benefit from consistent demand in a fast-developing belt.",
    highlights: [
      "Prominent G.T. Road frontage near Taxila",
      "Multiple plot sizes for every budget",
      "Modern road network with underground utilities",
      "Strong demand in the Taxila–Islamabad belt",
    ],
    paymentPlan: [
      { plot: "5 Marla", total: "PKR 3,500,000", down: "PKR 700,000", monthly: "PKR 35,000" },
      { plot: "8 Marla", total: "PKR 5,000,000", down: "PKR 1,000,000", monthly: "PKR 50,000" },
      { plot: "10 Marla", total: "PKR 6,200,000", down: "PKR 1,240,000", monthly: "PKR 62,000" },
      { plot: "1 Kanal", total: "PKR 10,500,000", down: "PKR 2,100,000", monthly: "PKR 105,000" },
    ],
    amenities: [
      "Gated community entrance",
      "Carpeted internal roads",
      "Community mosque",
      "Parks & children's play areas",
      "Commercial zone",
      "24/7 security patrols",
    ],
    developer: "Zedem International",
    accent: "#c0392b",
    heroImage: "/images/projects/faisal-heights.webp",
    gallery: ["/images/projects/faisal-heights.webp", ...sharedGallery],
    mapQuery: "Faisal Heights Taxila GT Road",
    locationPoints: [
      "Situated on the main G.T. Road — one of Pakistan's most trafficked arterial routes",
      "Approximately 30 minutes from Islamabad city centre via the G.T. Road",
      "Quick link to the M-1 Motorway for access towards Peshawar and Hazara",
      "Close to Taxila's established educational institutions, hospitals and markets",
      "Adjacent to Wah Cantt and the Heavy Industries Taxila (HIT) zone",
    ],
    whyInvest: [
      "G.T. Road address gives the project excellent visibility and resale appeal",
      "Taxila is a proven real estate growth corridor due to industrial and educational demand",
      "Affordable entry pricing compared to comparable societies closer to Islamabad",
      "Developer track record in the region boosts buyer confidence",
      "Growing end-user community supports stable long-term rental yields",
    ],
    faqs: [
      {
        q: "What is Faisal Heights and who is the developer?",
        a: "Faisal Heights is a residential housing society on the main G.T. Road near Taxila, developed by Zedem International — the same developer behind Faisal Hills and Faisal Town Phase 2.",
      },
      {
        q: "Is the payment plan flexible?",
        a: "Yes. Faisal Heights offers an accessible installment-based payment plan with a down payment and easy monthly installments spread over several years. Contact us for the latest schedule.",
      },
      {
        q: "How is Faisal Heights different from Faisal Hills?",
        a: "Both are Zedem International projects near Taxila, but they are separate developments with distinct master plans, block structures and pricing. Faisal Hills is positioned higher up with hill views, while Faisal Heights focuses on G.T. Road connectivity and community convenience.",
      },
    ],
  },
  {
    slug: "aviation-arcade",
    name: "Aviation Arcade",
    location: "Islamabad – Near New Islamabad International Airport",
    tag: "Commercial",
    status: "New Launch",
    blurb:
      "A purpose-built commercial hub in the airport corridor — capitalise on Islamabad's fastest-growing economic zone.",
    overview:
      "Aviation Arcade is a premium commercial development strategically positioned near the New Islamabad International Airport — one of the most economically active corridors in Pakistan. Designed for shops, offices, food & beverage outlets and service businesses, it offers investors access to a captive footfall of travellers, airport staff, hotel guests and residents of the surrounding master-planned societies. With the area's rapid infrastructure growth, commercial files here represent an early entry into a high-demand micro-market.",
    highlights: [
      "Prime location in the NIIA commercial corridor",
      "Mixed-use floors: retail, offices & F&B",
      "High footfall from airport, hotels & societies",
      "Early-investor commercial file pricing",
    ],
    paymentPlan: [
      { plot: "250 Sq Ft Shop", total: "PKR 7,500,000", down: "PKR 1,500,000", monthly: "PKR 75,000" },
      { plot: "500 Sq Ft Office", total: "PKR 13,500,000", down: "PKR 2,700,000", monthly: "PKR 135,000" },
      { plot: "750 Sq Ft Office", total: "PKR 19,000,000", down: "PKR 3,800,000", monthly: "PKR 190,000" },
      { plot: "1,000 Sq Ft Unit", total: "PKR 24,500,000", down: "PKR 4,900,000", monthly: "PKR 245,000" },
    ],
    amenities: [
      "Dedicated car parking",
      "24/7 security & access control",
      "High-speed passenger lifts",
      "Backup power generator",
      "Centralised waste management",
      "Fibre-optic internet infrastructure",
    ],
    developer: "Zedem International",
    accent: "#1a5276",
    heroImage: "/images/projects/aviation-arcade.webp",
    gallery: ["/images/projects/aviation-arcade.webp", ...sharedGallery],
    mapQuery: "New Islamabad International Airport Thalian",
    locationPoints: [
      "Located within minutes of the New Islamabad International Airport",
      "Direct access from the M-2 Motorway at the Thalian Interchange",
      "Surrounded by master-planned residential societies generating consistent footfall",
      "Close to planned hotel and hospitality developments in the NIIA zone",
      "Strategic position on a route used daily by thousands of airport commuters",
    ],
    whyInvest: [
      "Commercial property near international airports is a globally proven appreciation asset",
      "The NIIA corridor is still in early development, offering pre-maturity pricing",
      "Captive audience from airport operations, hotels and nearby residential communities",
      "Rental yield potential from businesses seeking premium airport-adjacent addresses",
      "Backed by a developer with an established presence in the same corridor",
    ],
    faqs: [
      {
        q: "What type of units are available in Aviation Arcade?",
        a: "Aviation Arcade offers retail shops on ground and lower floors, along with office and mixed-use units on upper floors, catering to a range of business types from retail to professional services.",
      },
      {
        q: "Is commercial property a good investment near the airport?",
        a: "Airport-adjacent commercial real estate has historically shown strong appreciation and rental demand worldwide. With the NIIA still in its growth phase, early investors stand to benefit most from the corridor's development.",
      },
      {
        q: "Can overseas Pakistanis invest in Aviation Arcade?",
        a: "Absolutely. Jumpify Marketing offers a fully digital booking process for overseas investors — including video walkthroughs, e-payments and remote documentation — so you can invest from anywhere.",
      },
    ],
  },
];

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  heroImage?: string; // optional real image; PostCard falls back to gradient if absent
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "why-faisal-town-phase-2-is-the-best-investment-2026",
    title: "Why Faisal Town Phase 2 Is the Smartest Property Investment in 2026",
    excerpt:
      "From motorway access to NOC progress and installment flexibility — here is why investors are choosing Faisal Town Phase 2 this year.",
    date: "2026-06-18",
    readingTime: "6 min read",
    category: "Investment Guide",
    heroImage: "/images/projects/faisal-town-phase-2.webp",
    body: [
      "Faisal Town Phase 2 has quickly become one of the most talked-about investment opportunities in the twin cities of Islamabad and Rawalpindi. Its position directly on the M-2 Motorway at the Thalian Interchange — minutes from the New Islamabad International Airport — gives it a locational advantage very few societies can match.",
      "For investors, three factors stand out in 2026: transparent NOC processing by the CDA/RDA framework, a flexible installment plan that lowers the entry barrier, and consistent on-ground development that supports resale appreciation. Together, these reduce risk while keeping the upside strong.",
      "At Jumpify Marketing, we help you pick the right block and plot size based on your goals — whether that is short-term flipping or long-term capital growth. Book a free consultation to see the latest available files and pricing.",
    ],
  },
  {
    slug: "5-marla-vs-10-marla-which-plot-should-you-buy",
    title: "5 Marla vs 10 Marla: Which Plot Size Should You Buy?",
    excerpt:
      "A practical breakdown of budget, resale liquidity and rental potential to help you choose the right plot size for your investment.",
    date: "2026-05-30",
    readingTime: "5 min read",
    category: "Buyer Tips",
    heroImage: "/images/projects/faisal-hills.webp",
    body: [
      "One of the most common questions we hear from new investors is whether to buy a 5 Marla or a 10 Marla plot. The right answer depends on your budget, your time horizon and your goal — end-use versus pure investment.",
      "5 Marla plots offer the lowest entry point and the highest resale liquidity, since they attract the largest pool of buyers. 10 Marla and 1 Kanal plots, on the other hand, tend to appreciate more in premium blocks and suit investors who can hold for the medium to long term.",
      "Our advisors model both scenarios for you with real area data so you can make a confident, numbers-backed decision.",
    ],
  },
  {
    slug: "how-overseas-pakistanis-can-invest-safely-from-dubai",
    title: "How Overseas Pakistanis Can Invest in Property Safely from Dubai",
    excerpt:
      "A fully digital, secure process lets overseas investors book, pay and transfer property without flying home. Here is how it works.",
    date: "2026-05-12",
    readingTime: "7 min read",
    category: "Overseas Investors",
    heroImage: "/images/gallery/aerial-community.png",
    body: [
      "Overseas Pakistanis are among the most active real estate investors in the country, yet distance and trust concerns often hold them back. At Jumpify Marketing we have built a fully digital process designed specifically for the overseas investor.",
      "From verified video walkthroughs and live availability sheets to secure e-payments and remotely-executed transfer documentation, every step is handled transparently by a dedicated overseas desk. You receive stamped receipts and file documents couriered to your address.",
      "If you are based in Dubai or anywhere in the GCC, our team can guide you through a compliant, worry-free investment from start to finish.",
    ],
  },
  {
    slug: "understanding-noc-approval-in-pakistani-housing-societies",
    title: "Understanding NOC Approval in Pakistani Housing Societies",
    excerpt:
      "The NOC is the single most important document protecting your investment. Learn what it means and how to verify it.",
    date: "2026-04-22",
    readingTime: "6 min read",
    category: "Investment Guide",
    heroImage: "/images/gallery/sector-entrance.webp",
    body: [
      "A No Objection Certificate (NOC) issued by the relevant development authority is the clearest signal that a housing society is legal, approved and safe to invest in. It protects buyers from fraud, demolition risk and transfer complications.",
      "Before you invest, always confirm the society's approval status with the CDA, RDA or the concerned authority — and work only with dealers who provide verified documentation. Jumpify Marketing exclusively markets NOC-approved and NOC-processing projects.",
      "This buyer-first commitment is why thousands of investors trust us with their hard-earned savings.",
    ],
  },
];

export const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Investor, Islamabad",
    quote:
      "Jumpify guided me to the right block in Faisal Town Phase 2 and handled every document. My file appreciated within months. Truly professional.",
  },
  {
    name: "Sana Malik",
    role: "Overseas Investor, Dubai",
    quote:
      "I invested entirely from Dubai without any stress. The digital process and honest communication made me feel completely secure.",
  },
  {
    name: "Bilal Khan",
    role: "Business Owner, Rawalpindi",
    quote:
      "Transparent pricing, no hidden charges and genuine after-sales support. Jumpify is now my go-to real estate partner.",
  },
];
