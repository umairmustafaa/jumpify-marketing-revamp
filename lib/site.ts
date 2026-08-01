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
  {
    label: "Blocks & Sectors",
    href: "/blocks",
    children: [
      { label: "Sector O — Model Block", href: "/blocks/sector-o-model-block" },
      { label: "N Block", href: "/blocks/n-block" },
      { label: "Overseas Enclave", href: "/blocks/overseas-enclave" },
      { label: "Commercial Plots", href: "/blocks#commercial-plots" },
      { label: "View all 14 blocks", href: "/blocks" },
    ],
  },
  { label: "Payment Plan", href: "/#payment-plan" },
  { label: "About", href: "/about" },
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
    slug: "faisal-town-phase-2-payment-plan-2026",
    title: "Faisal Town Phase 2 Payment Plan 2026: All Plot Sizes & Blocks",
    excerpt:
      "The complete, updated 2026 payment plan for Faisal Town Phase 2 — plot prices, down payment and quarterly installments for every size and block.",
    date: "2026-07-28",
    readingTime: "7 min read",
    category: "Payment Plan",
    heroImage: "/images/projects/faisal-town-phase-2.webp",
    body: [
      "If you are planning to invest in Faisal Town Phase 2, the payment plan is usually the first thing you want to see. This guide breaks down the updated 2026 pricing for residential and commercial plots, along with the installment structure, so you can plan your investment with clarity.",
      "Faisal Town Phase 2 is offered on an easy four-year installment plan. In most blocks you pay roughly 20% as down payment and the remaining balance across 16 quarterly installments, which makes it accessible for salaried buyers and overseas investors alike. A lump-sum (cash) purchase typically earns a discount of around 20%.",
      "Following the April 2026 revision, indicative residential prices are approximately: 5 Marla from PKR 39.75 Lac, 8 Marla from PKR 55.4 Lac, 10 Marla from PKR 72.6 Lac, 14 Marla from PKR 91.4 Lac, and 1 Kanal from PKR 1.23 Crore. Newly launched blocks such as Sector P and Sector T sometimes carry discounted introductory rates below these figures.",
      "Prices vary by block. Premium and overseas blocks are priced higher than general residential sectors, while newly launched blocks are usually the most affordable entry point with the most upside. Commercial plots in Sector O and the Central Business District follow a separate plan, generally with a 25% down payment and a three-year schedule.",
      "Because rates are revised periodically as development progresses, always request the current official rate list before booking. At Jumpify Marketing we share the latest confirmed figures for your chosen block and plot size, with no hidden charges — just an honest breakdown of total cost, down payment and installments.",
      "Ready to see the full block-wise plan? Contact our team and we'll send the complete Faisal Town Phase 2 payment plan directly to your WhatsApp.",
    ],
  },
  {
    slug: "is-faisal-town-phase-2-noc-approved",
    title: "Is Faisal Town Phase 2 NOC Approved? Latest Status Explained (2026)",
    excerpt:
      "An honest look at the Faisal Town Phase 2 NOC status — where the approval stands in 2026, which authority is involved, and what buyers must verify.",
    date: "2026-07-20",
    readingTime: "6 min read",
    category: "NOC & Legal",
    heroImage: "/images/gallery/sector-entrance.webp",
    body: [
      "The most important question any serious buyer asks about Faisal Town Phase 2 is simple: is it approved? We believe you deserve a straight, honest answer rather than marketing spin — so here is where things actually stand in 2026.",
      "As of 2026, Faisal Town Phase 2 does not yet hold a fully approved NOC (No Objection Certificate). Its status is best described as 'under process.' After the project was flagged by the Rawalpindi Development Authority (RDA), the developer submitted the land plan and the approval is reported to be under process with PHATA (the Punjab Housing & Town Planning Agency).",
      "What does that mean for you as a buyer? A pre-approval project typically offers lower entry prices — which is the opportunity — but it also carries higher risk until the NOC is granted. Understanding this trade-off honestly is the difference between a smart calculated investment and a blind gamble.",
      "We always recommend that buyers independently verify the latest status with the relevant authority before booking. You can check the approved-societies list on the authority's official website and ask any dealer to show current documentation.",
      "One point in the project's favour is the developer's track record. CAM Construction, owned by Ch. Abdul Majeed, is the same group behind Faisal Town Phase 1 (F-18) and Faisal Hills — projects that were developed and delivered. A proven history of securing approvals is a meaningful, though not guaranteed, signal.",
      "At Jumpify Marketing we will never tell you a project is 'approved' when it is not. If you want a transparent, up-to-date picture of the Faisal Town Phase 2 NOC status before you invest, talk to our team.",
    ],
  },
  {
    slug: "faisal-town-phase-2-sector-o-model-block",
    title: "Sector O (Model Block) Faisal Town Phase 2: Prices, Possession & Features",
    excerpt:
      "Everything about Sector O, the flagship Model Block of Faisal Town Phase 2 — semi-developed plots, faster possession and prime central location.",
    date: "2026-07-12",
    readingTime: "6 min read",
    category: "Blocks & Sectors",
    heroImage: "/images/gallery/aerial-community.png",
    body: [
      "Sector O — widely marketed as the 'Model Block' — is the flagship of Faisal Town Phase 2 and the block most investors ask about first. It is positioned as a modern, semi-developed cluster designed to combine everyday convenience with strong long-term value.",
      "The biggest draw of Sector O is possession timing. Because it is semi-developed, possession is marketed within roughly one to one-and-a-half years for early full-payers — much sooner than newly launched blocks. That makes it attractive to end-users who want to build, as well as investors seeking quicker appreciation.",
      "Sector O offers the standard residential plot range along with a dedicated commercial component. The Model Block commercial plots (around 13.33 Marla, with a B+G+6 building envelope) sit in a central commercial zone and are offered on a three-year plan, with lump-sum discounts of about 20% for overseas and 15% for local buyers.",
      "Infrastructure is a selling point here: wide carpeted roads, green spaces, and proximity to the Central Business District and the main boulevard network. The block also benefits from the 350-ft boulevard that connects the society's two gates.",
      "For investors, Sector O tends to command a premium over general blocks, reflecting its development status and location. If your priority is faster possession or a build-ready plot, it is usually the first block we recommend evaluating.",
      "Want current Sector O availability and pricing? Contact Jumpify Marketing and we'll walk you through the latest options.",
    ],
  },
  {
    slug: "faisal-town-phase-2-5-marla-price",
    title: "5 Marla Plot in Faisal Town Phase 2: 2026 Price & Installment Plan",
    excerpt:
      "The 2026 price of a 5 Marla plot in Faisal Town Phase 2, its installment breakdown, and why it's the most popular entry point for investors.",
    date: "2026-07-05",
    readingTime: "5 min read",
    category: "Plot Prices",
    heroImage: "/images/projects/faisal-jewel.webp",
    body: [
      "The 5 Marla plot is the most in-demand size in Faisal Town Phase 2, and for good reason: it offers the lowest entry price and the highest resale liquidity, because it attracts the largest pool of buyers in the twin cities market.",
      "As per the April 2026 revision, a 5 Marla plot (dimensions 25×50) is indicatively priced from around PKR 39.75 Lac in general residential blocks. Newly launched blocks such as Sector P have carried discounted introductory rates closer to PKR 35.9 Lac, so the exact figure depends on which block you choose.",
      "On the standard four-year plan you would typically pay about 20% down — roughly PKR 8 Lac — and the balance in 16 quarterly installments of approximately PKR 2 Lac each. A cash purchase usually earns a discount of around 20%.",
      "For first-time investors and overseas buyers, the 5 Marla is often the smartest starting point: manageable installments, broad demand on resale, and meaningful upside as the society develops and (potentially) secures its NOC.",
      "Prices move with each rate revision, so confirm the current figure before booking. Contact Jumpify Marketing for today's confirmed 5 Marla rate and the blocks with the best value right now.",
    ],
  },
  {
    slug: "faisal-town-phase-2-10-marla-price",
    title: "10 Marla Plot in Faisal Town Phase 2: 2026 Price & Payment Plan",
    excerpt:
      "Updated 2026 pricing and installment plan for a 10 Marla plot in Faisal Town Phase 2, and who this plot size suits best.",
    date: "2026-06-26",
    readingTime: "5 min read",
    category: "Plot Prices",
    heroImage: "/images/projects/faisal-hills.webp",
    body: [
      "The 10 Marla plot in Faisal Town Phase 2 is the sweet spot for buyers who want a larger home or stronger appreciation potential than a 5 Marla, without stepping up to a full 1 Kanal budget.",
      "Following the April 2026 revision, a 10 Marla plot (dimensions 35×70, officially 10.89 Marla) is indicatively priced from around PKR 72.6 Lac in general residential blocks, with premium and overseas blocks priced higher.",
      "On the four-year plan, expect roughly 20% down — about PKR 14.5 Lac — and the remaining balance across 16 quarterly installments of approximately PKR 3.6 Lac. Lump-sum buyers typically receive around a 20% discount.",
      "The 10 Marla appeals to end-users planning a spacious home and to medium-to-long-term investors, since larger plots in prime blocks often appreciate more strongly once development matures. Liquidity is slightly lower than 5 Marla but still healthy.",
      "For the current confirmed 10 Marla rate and the best-value blocks available today, get in touch with Jumpify Marketing.",
    ],
  },
  {
    slug: "faisal-town-phase-2-vs-faisal-hills",
    title: "Faisal Town Phase 2 vs Faisal Hills: Which Is the Better Investment?",
    excerpt:
      "A balanced comparison of two projects from the same developer group — development stage, location, pricing and which suits your goals.",
    date: "2026-06-15",
    readingTime: "7 min read",
    category: "Comparison",
    heroImage: "/images/projects/faisal-hills.webp",
    body: [
      "Faisal Town Phase 2 and Faisal Hills are two of the most compared societies in the Islamabad-Rawalpindi region — partly because they come from the same developer group behind Faisal Town Phase 1. If you are weighing one against the other, here is an honest side-by-side.",
      "Development stage is the clearest difference. Faisal Hills is the more mature, developed society with quicker possession and established surroundings. Faisal Town Phase 2 is newer, still developing, and therefore offers lower launch-stage pricing with potentially higher upside — but also higher early-stage risk.",
      "Location favours Faisal Town Phase 2 for connectivity: it sits directly on the M-2 Motorway at the Thalian Interchange, minutes from the New Islamabad International Airport and linked to the Rawalpindi Ring Road. Faisal Hills, on the main G.T. Road near Taxila, offers scenic Margalla views and its own established access.",
      "On approvals, both should be verified independently at the time of purchase. Faisal Hills is generally regarded as further along, while Faisal Town Phase 2's NOC is currently under process — a factor to weigh against its pricing advantage.",
      "So which is better? If you want quicker possession and a more settled community, Faisal Hills is compelling. If you want lower entry pricing and are comfortable with a developing project for stronger potential appreciation, Faisal Town Phase 2 is the aggressive-growth pick.",
      "The right answer depends on your budget, timeline and risk appetite. At Jumpify Marketing we can model both options against your goals — reach out for a no-pressure comparison.",
    ],
  },
  {
    slug: "faisal-town-phase-2-file-vs-plot",
    title: "File vs Plot in Faisal Town Phase 2: Key Differences Explained",
    excerpt:
      "What is the difference between a file and a plot in Faisal Town Phase 2, and which one is right for your investment strategy?",
    date: "2026-06-04",
    readingTime: "5 min read",
    category: "Buyer Tips",
    heroImage: "/images/gallery/sector-entrance.webp",
    body: [
      "New buyers in Faisal Town Phase 2 often get confused between a 'file' and a 'plot.' Understanding the difference is essential before you invest, because it affects both your risk and your potential return.",
      "A file is an allocation document representing your right to a plot that has not yet been balloted or assigned a specific physical location. A plot, by contrast, has a confirmed number and a fixed location on the ground that you can visit and verify.",
      "Files are generally cheaper and more liquid, which makes them popular with short-term investors who intend to sell before or shortly after balloting. The trade-off is uncertainty: you don't know your exact location until the ballot, and there is a small additional risk premium.",
      "Plots suit end-users and long-term investors who want certainty — a confirmed location, the ability to inspect surroundings, and a clearer path to construction and possession. They typically cost more than files of the same size.",
      "Neither is universally 'better' — it depends on your goal, budget and how long you plan to hold. Our advisors at Jumpify Marketing will explain the current file and plot options in each block so you can choose with full information.",
    ],
  },
  {
    slug: "faisal-town-phase-2-overseas-investment-guide",
    title: "Faisal Town Phase 2 for Overseas Pakistanis: Complete 2026 Guide",
    excerpt:
      "How overseas Pakistanis can invest in Faisal Town Phase 2 safely and remotely — the Overseas Enclave, the process, and what to watch for.",
    date: "2026-05-22",
    readingTime: "7 min read",
    category: "Overseas Investors",
    heroImage: "/images/gallery/aerial-community.png",
    body: [
      "Overseas Pakistanis are among the most active investors in Islamabad's property market, drawn by rupee-based appreciation and the chance to build an asset back home. Faisal Town Phase 2 has been designed with this audience in mind — but investing from abroad requires the right process and the right partner.",
      "The project features a dedicated Overseas Enclave: a premium, gated block with international-standard planning, wide roads, green spaces and modern facilities, often with an added lump-sum discount for overseas buyers. It is positioned as a secure, self-contained community for families investing from abroad.",
      "The remote process is straightforward when handled properly: you receive video walkthroughs and live availability, confirm your block and plot size, make secure remote payments, and have your booking and transfer documentation executed on your behalf, with receipts and files couriered to you.",
      "Two cautions matter most for overseas investors. First, verify the project's NOC status honestly — Faisal Town Phase 2's approval is currently under process, so weigh the pricing advantage against that. Second, work only with a responsive, transparent dealer who provides documented proof at every step.",
      "At Jumpify Marketing we run a dedicated overseas desk built exactly for this. If you are in Dubai, the UK, the US or anywhere abroad, we can guide you through a compliant, worry-free investment in Faisal Town Phase 2 from start to finish.",
    ],
  },
  {
    slug: "faisal-town-phase-2-location-guide",
    title: "Faisal Town Phase 2 Location: Airport, Ring Road & Motorway Access",
    excerpt:
      "Exactly where Faisal Town Phase 2 is located, how to reach it, and why its M-2 Motorway position is central to its investment case.",
    date: "2026-05-10",
    readingTime: "5 min read",
    category: "Location",
    heroImage: "/images/projects/faisal-town-phase-2.webp",
    body: [
      "Location is the single strongest pillar of the Faisal Town Phase 2 investment case, so it's worth understanding precisely where the society sits and how you get there.",
      "Faisal Town Phase 2 is located at the Thalian Interchange on the M-2 (Lahore–Islamabad) Motorway. The main gate is roughly two kilometres from the interchange, giving residents direct, high-speed motorway access in and out of the twin cities.",
      "The society is approximately a 10–15 minute drive from the New Islamabad International Airport — a genuine advantage for frequent travellers and for long-term demand. A second gate connects to the newly built Rawalpindi Ring Road, opening up fast routes across Rawalpindi.",
      "The surroundings add to the appeal: the project sits adjacent to Capital Smart City and near DHA Islamabad-Gandhara and CDA Sector I-16, placing it within an established growth corridor rather than in isolation. Internally, a 350-ft main boulevard links the two gates and the major blocks.",
      "This combination of motorway frontage, airport proximity and ring-road connectivity is what underpins the long-term demand story. To see the exact location on a map and plan a site visit, contact Jumpify Marketing.",
    ],
  },
  {
    slug: "how-to-book-plot-faisal-town-phase-2",
    title: "How to Book a Plot in Faisal Town Phase 2 (Step-by-Step 2026)",
    excerpt:
      "A simple step-by-step guide to booking a plot in Faisal Town Phase 2 in 2026 — documents required, the process, and tips to book safely.",
    date: "2026-04-30",
    readingTime: "6 min read",
    category: "How-To Guide",
    heroImage: "/images/projects/faisal-jewel.webp",
    body: [
      "Booking a plot in Faisal Town Phase 2 is a straightforward process when you follow the right steps and work with a transparent dealer. Here is a clear 2026 walkthrough.",
      "Step 1 — Choose your block and plot size. Decide based on your budget and goal: a general block for value, Sector O for faster possession, or the Overseas Enclave if you're abroad. Your dealer should share current availability and confirmed rates for each.",
      "Step 2 — Prepare your documents. You will typically need copies of your CNIC (or NICOP for overseas Pakistanis), passport-size photographs, and next-of-kin details. Payment is usually made via pay order or demand draft rather than personal cheque.",
      "Step 3 — Complete the booking. Submit the booking form with your down payment and processing fee. You then receive an official receipt and, in due course, your file or allocation documents. Keep every stamped document safe.",
      "Step 4 — Verify before you pay. Confirm the current NOC status and cross-check the rate list. Faisal Town Phase 2's approval is currently under process, so make sure you are comfortable with that and that your documentation is genuine.",
      "Want help booking safely at the correct rate? Jumpify Marketing handles the entire process transparently, including documentation and after-sales support. Get in touch to begin.",
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
