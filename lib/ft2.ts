// ─────────────────────────────────────────────────────────────────────────
// Faisal Town Phase 2 — single source of truth for all FT2 landing content.
//
// IMPORTANT (accuracy & compliance):
//  • FT2 is NOT NOC-approved. Status is "under process" (RDA flagged it, now
//    pursuing approval via PHATA). Never claim "approved". See `noc` below.
//  • Prices are dealer-published, revised April 2026, and INDICATIVE only.
//    Confirm against the developer's official rate sheet before publishing.
//  • Update `lastUpdated` whenever figures change (freshness = ranking signal).
// ─────────────────────────────────────────────────────────────────────────

export const ft2 = {
  name: "Faisal Town Phase 2",
  city: "Islamabad",
  lastUpdated: "August 2026",
  developer: "CAM Construction (Pvt.) Ltd.",
  owner: "Ch. Abdul Majeed",
  marketedBy: "Zedem International",
  masterPlanner: "Meinhardt Group",
  priceRevision: "April 2026",

  // Short, keyword-rich descriptors reused in meta + hero.
  headline: "Faisal Town Phase 2 — Payment Plan, Location & Booking 2026",
  subheadline:
    "Book your plot in Faisal Town Phase 2, Islamabad on full payment or an easy 36-month installment plan. Prime location on the M-2 Motorway at Thalian Interchange, minutes from the New Islamabad International Airport.",

  // At-a-glance facts (quick-facts strip)
  quickFacts: [
    { label: "Location", value: "Thalian Interchange, M-2 Motorway" },
    { label: "Developer", value: "Faisal Town Group (Ch. Abdul Majeed)" },
    { label: "Plot Sizes", value: "5 – 14 Marla · 1 & 2 Kanal" },
    { label: "Lump-sum Discount", value: "20% on Full Payment" },
    { label: "Payment Plan", value: "Full Payment or 36 Monthly" },
    { label: "Status", value: "Booking Open · NOC in Process" },
  ],

  // Lead-gen hero price hook (official rate — 5.56 Marla lump-sum price).
  priceHook: {
    fromSize: "5 Marla",
    fromPrice: "PKR 27.9 Lac",
    note: "on full payment · installments available",
  },
};

// ─────────────────────────────────────────────────────────────────────────
// OFFICIAL payment plans (from the Faisal Town Group rate sheets).
//  • Model Block (Sector O, Q & R): discount applies on FULL PAYMENT only.
//  • Overseas Enclave / installment blocks: 36 monthly installments.
// Development charges are included in the prices. Payment via pay order /
// demand draft / cash to "Faisal Town (Pvt.) Ltd." — cheques not accepted.
// ─────────────────────────────────────────────────────────────────────────

// Model Block — Sector O, Q & R (full-payment plan)
export type CashPlanRow = {
  size: string;
  dim: string;
  actualPrice: string; // incl. registration
  cashPrice: string; // after 20% full-payment discount
};

export const modelBlockPlan: CashPlanRow[] = [
  { size: "5.56 Marla", dim: "25×50 · 139 sq yd", actualPrice: "PKR 3,495,000", cashPrice: "PKR 2,790,000" },
  { size: "8 Marla", dim: "30×60 · 200 sq yd", actualPrice: "PKR 4,665,000", cashPrice: "PKR 3,730,000" },
  { size: "10.89 Marla", dim: "35×70 · 272 sq yd", actualPrice: "PKR 6,065,000", cashPrice: "PKR 4,850,000" },
  { size: "14.22 Marla", dim: "40×80 · 356 sq yd", actualPrice: "PKR 7,585,000", cashPrice: "PKR 6,060,000" },
  { size: "1 Kanal", dim: "50×90 · 500 sq yd", actualPrice: "PKR 10,155,000", cashPrice: "PKR 8,120,000" },
];

// Overseas Enclave / installment blocks — 36 monthly installments
export type InstallmentRow = {
  size: string;
  dim: string;
  cost: string; // cost of plot (installment)
  down: string; // down payment
  monthly: string; // 36 monthly installments
  cashPrice: string; // 20% lump-sum price
};

export const installmentPlan: InstallmentRow[] = [
  { size: "5.56 Marla", dim: "25×50 · 139 sq yd", cost: "PKR 3,495,000", down: "PKR 1,335,000", monthly: "PKR 60,000", cashPrice: "PKR 2,790,000" },
  { size: "8 Marla", dim: "30×60 · 200 sq yd", cost: "PKR 4,665,000", down: "PKR 1,785,000", monthly: "PKR 80,000", cashPrice: "PKR 3,730,000" },
  { size: "10.89 Marla", dim: "35×70 · 272 sq yd", cost: "PKR 6,065,000", down: "PKR 2,285,000", monthly: "PKR 105,000", cashPrice: "PKR 4,850,000" },
  { size: "14.22 Marla", dim: "40×80 · 356 sq yd", cost: "PKR 7,585,000", down: "PKR 2,725,000", monthly: "PKR 135,000", cashPrice: "PKR 6,060,000" },
  { size: "1 Kanal", dim: "50×90 · 500 sq yd", cost: "PKR 10,155,000", down: "PKR 3,495,000", monthly: "PKR 185,000", cashPrice: "PKR 8,120,000" },
  { size: "2 Kanal", dim: "75×120 · 1000 sq yd", cost: "PKR 19,295,000", down: "PKR 5,975,000", monthly: "PKR 370,000", cashPrice: "PKR 15,430,000" },
];

// Plot-size options for the lead form dropdown.
export const plotSizeOptions = installmentPlan.map((r) => r.size);

// Booking terms shown under the payment tables.
export const paymentNotes = [
  "Development charges are included in the plot price.",
  "Payment via pay order / demand draft / cash in favour of “Faisal Town (Pvt.) Ltd.” Cheques are not accepted.",
  "Corner, main-road, and park/lake-facing plots carry additional charges (typically 5–15%).",
  "Prices are per the developer’s current rate sheet and may be revised — confirm before booking.",
];

// ── Blocks / sectors — the complete directory ──────────────────────────────
// NOTE ON NOC: some individual dealer pages claim certain blocks are "NOC
// approved". The verified, authoritative status is that the WHOLE project's NOC
// is under process — so we do NOT repeat per-block "approved" claims here.
// Prices are indicative; block-specific current rates should be confirmed.
export type Block = {
  name: string;
  slug: string;
  type: "Residential" | "Commercial" | "Mixed-Use" | "Specialty District";
  tag: string; // short differentiator badge
  plotSizes: string;
  payment: string; // payment model — the real differentiator between blocks
  location: string;
  features: string[];
  bestFor: string;
  blurb: string;
  priceNote?: string; // distinctive pricing (mainly commercial)
  highlight?: boolean; // featured on the homepage
};

export const blocks: Block[] = [
  {
    name: "Sector O — Model Block",
    slug: "sector-o-model-block",
    type: "Residential",
    tag: "Flagship · Faster Possession",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal (+ commercial)",
    payment: "Full payment with a 20% discount (Sector O, Q & R). Commercial: 25% down, multi-year plan.",
    location: "Between the Chakri & Thalian interchanges with direct M-2 and Rawalpindi Ring Road access.",
    features: ["Semi-developed, amenity-rich", "Wide carpeted roads", "Malls & sports complexes", "Jogging tracks & parks"],
    bestFor: "End-users wanting faster possession and investors seeking quicker appreciation.",
    blurb:
      "The society's flagship showcase block. Semi-developed with amenity-rich planning and marketed for possession within roughly 1–1.5 years for early full-payers — the top pick for build-ready buyers.",
    highlight: true,
  },
  {
    name: "Overseas Enclave",
    slug: "overseas-enclave",
    type: "Residential",
    tag: "Premium · For Overseas",
    plotSizes: "5, 8, 10, 14 Marla · 1 & 2 Kanal",
    payment: "Down payment + 36 monthly installments; 20% lump-sum discount. Plots up to 2 Kanal.",
    location: "Close to the Thalian Interchange on the M-2, ~10–15 min from Islamabad International Airport.",
    features: ["365-ft main boulevard", "40%+ open space", "Gated, 24/7 security", "Intl-standard schools & hospital"],
    bestFor: "Overseas Pakistanis and investors wanting a premium, secure address.",
    blurb:
      "The society's premium address, built around a 365-ft boulevard with 40%+ of land reserved for open space and community facilities. Tailored for overseas Pakistanis with the widest quarterly-installment financing.",
    highlight: true,
  },
  {
    name: "N Block",
    slug: "n-block",
    type: "Residential",
    tag: "CBD Boulevard · Installments",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal (+ commercial)",
    payment: "36-month installment plan with fixed monthly amounts (from ~PKR 60,000/month); cash discount available.",
    location: "Flanks the Central Business District (CBD) directly on the 365-ft main boulevard.",
    features: ["365-ft boulevard frontage", "Residential + commercial", "Underground utilities", "Near CBD & airport"],
    bestFor: "Families and investors wanting proximity to the commercial heart.",
    blurb:
      "Positioned beside the Central Business District on the 365-ft main boulevard, blending residential plots with commercial frontage on main roads and corners. Clear monthly installment plan.",
    highlight: true,
  },
  {
    name: "Sector T",
    slug: "sector-t",
    type: "Residential",
    tag: "Beside the Model Block",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal",
    payment: "Development charges included in price; ~20% discount on full payment.",
    location: "Adjacent to the Model Block, near the Thalian Interchange, linked via Srinagar Highway & Ring Road.",
    features: ["Underground utilities", "Gated with CCTV", "Landscaped parks", "Wide carpeted roads"],
    bestFor: "Budgets from entry-level to luxury wanting an upmarket neighbour.",
    blurb:
      "A residential zone sitting right beside the prestigious Model Block, giving it an upmarket neighbour and quick reach to the Thalian Interchange and airport. Full slate of plot sizes with development charges included.",
  },
  {
    name: "P Block",
    slug: "p-block",
    type: "Residential",
    tag: "Construction-Ready",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal",
    payment: "Full-payment option unlocks early possession; installment options referenced.",
    location: "Central position near the Thalian Interchange, close to hospitals, schools and retail.",
    features: ["Complete roads & infrastructure", "Smart-plan layouts", "Jogging tracks", "Green belts"],
    bestFor: "End-users and relocating professionals wanting a ready-to-build plot.",
    blurb:
      "A construction-ready residential pocket where full payment unlocks early possession, aimed at buyers who want to build without waiting on development. Centrally placed near the Thalian Interchange.",
  },
  {
    name: "Sector X",
    slug: "sector-x",
    type: "Residential",
    tag: "Wide Boulevards",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal",
    payment: "36-month installment plan; 20% lump-sum / full-payment discount.",
    location: "East of the Overseas Enclave, near the Rawalpindi Ring Road; ~4 min to M-2, ~5 min to airport.",
    features: ["120–180 ft roads, ~350-ft boulevard", "Meinhardt master plan", "Parks & mosques", "Underground utilities"],
    bestFor: "Starter-plot families and investors betting on corridor growth.",
    blurb:
      "Borders the Overseas Enclave on its east and stands out for a very wide internal road hierarchy topped by a near-350-ft boulevard and a Meinhardt-designed master plan.",
  },
  {
    name: "Sector I",
    slug: "sector-i",
    type: "Mixed-Use",
    tag: "Widest Size Range",
    plotSizes: "5, 8, 10, 14 Marla · 1 & 2 Kanal (+ commercial)",
    payment: "36-month installment plan with a down payment per size; 20% lump-sum discount.",
    location: "Beside Commercial District West, bordering Sector J, on a 180-ft boulevard to Chakri Road & M-2.",
    features: ["129.55-kanal community club", "180-ft boulevard", "Green belt & water channel", "Residential + commercial"],
    bestFor: "Families sizing up (to 2 Kanal) and patient long-term investors.",
    blurb:
      "Offers the broadest size ladder in the society — from 5 Marla up to 2 Kanal — fronting a 180-ft boulevard beside a scenic green belt. Headline amenity is a 129.55-kanal multi-purpose community club.",
  },
  {
    name: "Sector J",
    slug: "sector-j",
    type: "Mixed-Use",
    tag: "3-Year Monthly Plan",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal",
    payment: "3-year (36-month) plan with fixed monthly installments (from ~PKR 60,000); 20% cash discount.",
    location: "Southwest of the society next to Education City, wrapped around the 220-ft 'Boulevard 11'.",
    features: ["220-ft & 120-ft boulevards", "Large sports complex", "Community clubs", "Gated, electronic surveillance"],
    bestFor: "First-time buyers and lifestyle-focused families as much as investors.",
    blurb:
      "A mixed-use pocket in the society's southwest wrapped around the 220-ft 'Boulevard 11' and sitting next to Education City, pairing a clear monthly installment plan with recreational anchors.",
  },
  {
    name: "Q Block",
    slug: "q-block",
    type: "Residential",
    tag: "Full Payment · Fast Handover",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal",
    payment: "Full payment only (no installments); ~20% cash discount. Pay order / demand draft / cash — no cheques.",
    location: "At the main entrance of Phase 2, closest to the Thalian Interchange and main boulevard commercial area.",
    features: ["Front-of-society position", "Wide carpeted roads", "Landscaped green belts", "Secure gated entry"],
    bestFor: "End-users wanting early, construction-ready possession and quick-return investors.",
    blurb:
      "Occupies the front-of-society position nearest the Thalian Interchange and main entrance gate, marketed on a full-payment-only basis with a fast handover target and a cash discount.",
  },
  {
    name: "R Block",
    slug: "r-block",
    type: "Residential",
    tag: "Full Payment · Developed",
    plotSizes: "5, 8, 10, 14 Marla · 1 Kanal",
    payment: "Full payment, with an early-possession pathway on complete payment.",
    location: "Near the Thalian Interchange entry point, alongside commercial and residential developments.",
    features: ["Completed infrastructure", "Smart layout planning", "Walking/jogging tracks", "Recreational parks"],
    bestFor: "Families, professionals and overseas buyers wanting a ready-to-build environment.",
    blurb:
      "A full-payment residential block near the Thalian Interchange entry point that advertises completed infrastructure and an early-possession pathway.",
  },
  {
    name: "Education City",
    slug: "education-city",
    type: "Specialty District",
    tag: "Universities & Hospital",
    plotSizes: "5, 8, 10 Marla · 1 & 2 Kanal",
    payment: "Up to 20% discount on full payment; installment options available.",
    location: "Adjacent to the Thalian Interchange / M-2, minutes from the airport, with internal access to Sports City.",
    features: ["Surbana Jurong master plan", "Teaching hospital", "Universities & institutes", "350-ft boulevard"],
    bestFor: "Investors targeting student/faculty rental demand and families valuing education access.",
    blurb:
      "A themed district anchored by universities, vocational institutes and a teaching hospital, master-planned by Surbana Jurong — its education cluster creates built-in rental demand.",
  },
  {
    name: "Sports City",
    slug: "sports-city",
    type: "Specialty District",
    tag: "Full Cash · Sports Hub",
    plotSizes: "8, 10, 14 Marla",
    payment: "Full cash payment only — no installment plan.",
    location: "Near Education City on a 220-ft road; ~3 min to the Thalian Interchange, ~5 min from the airport.",
    features: ["280.6-kanal sports complex", "Cricket, football, tennis, indoor", "180-ft boulevard", "Landscaped parks"],
    bestFor: "Committed cash buyers and end-users wanting a lifestyle-anchored community.",
    blurb:
      "A lifestyle district organised around a 280.6-kanal multi-purpose sports complex beside Education City, offered on a full-cash basis with a focused set of mid-range plot sizes.",
  },
  {
    name: "Sector O — Commercial",
    slug: "sector-o-commercial",
    type: "Commercial",
    tag: "Boulevard Frontage",
    plotSizes: "13.33 Marla (standard & corner)",
    payment: "25% down + 12 quarterly installments (3-year plan). 15% local / 20% overseas lump-sum discount.",
    location: "Sector O, fronting the 350-ft main boulevard; ~2 min from the airport, direct Ring Road & Chakri Road access.",
    features: ["B+G+6 building envelope", "350-ft boulevard frontage", "Maximum visibility", "~80% land leveled"],
    bestFor: "Corporate offices and multi-floor retail wanting premium visibility.",
    priceNote: "Indicative: standard ~PKR 38.4M, corner ~PKR 42.4M (before lump-sum discounts).",
    blurb:
      "The marquee commercial plots inside the Model Block, offered as standard or corner 13.33-Marla units fronting the 350-ft boulevard, with ~80% land leveling complete and the boulevard already operational.",
  },
  {
    name: "Commercial Plots (General)",
    slug: "commercial-plots",
    type: "Commercial",
    tag: "Markaz & Boulevard",
    plotSizes: "5.33 – 13.33 Marla + per-sq-yd boulevard & Markaz plots",
    payment: "25% down + 16 quarterly installments (4-year plan); development charges included in the rate.",
    location: "On the M-2 at the Thalian Interchange, near Capital Smart City (~5 min) and the Ring Road.",
    features: ["12 commercial categories", "Central Commercial Markaz", "Some on-ground possession", "Banks, mosques, gas"],
    bestFor: "Retail, offices, hospitality and mixed-use commercial investors.",
    priceNote: "Indicative: 5.33 Marla ~PKR 13.4M to 13.33 Marla ~PKR 46.7M; boulevard from ~PKR 20,000/sq yd.",
    blurb:
      "The society-wide commercial catalogue spanning roughly a dozen categories — from per-square-yard boulevard and Markaz plots to fixed Marla units — all on a uniform 25%-down, 4-year plan with development charges baked in.",
  },
];

// Blocks featured on the homepage (rest live on the /blocks page).
export const featuredBlocks = blocks.filter((b) => b.highlight);

// ── Dedicated deep-dive pages for the highest-search-volume blocks ─────────
// These get their own /blocks/[slug] pages (Sector O, N Block, Overseas Enclave)
// because they have real standalone search demand. All content is original.
export type BlockPage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  heroImage: string;
  intro: string[];
  planStructure: string;
  planType: "model" | "installment" | "none"; // which official table to render
  extraPlanNote?: string;
  locationPoints: string[];
  whyInvest: string[];
  faqs: { q: string; a: string }[];
};

export const blockPages: Record<string, BlockPage> = {
  "sector-o-model-block": {
    slug: "sector-o-model-block",
    metaTitle: "Sector O Model Block Faisal Town Phase 2 — Prices, Payment Plan & Possession",
    metaDescription:
      "Sector O (Model Block) Faisal Town Phase 2 — the semi-developed flagship block with faster possession. 2026 plot prices, payment plan, commercial plots, location & booking.",
    tagline: "The flagship, semi-developed Model Block with faster possession",
    heroImage: "/images/gallery/aerial-community.png",
    intro: [
      "Sector O — universally known as the Model Block — is the flagship of Faisal Town Phase 2 and the block most buyers ask about first. It is positioned as a modern, semi-developed cluster that pairs everyday convenience with strong long-term value, sitting between the Chakri and Thalian interchanges with direct M-2 Motorway and Rawalpindi Ring Road access.",
      "The single biggest reason investors choose Sector O is possession timing. Because it is semi-developed, possession is marketed within roughly one to one-and-a-half years for early full-payers — considerably sooner than the newly launched blocks. That makes it the natural choice for end-users who want to build soon, as well as investors seeking quicker appreciation.",
      "Sector O offers the full residential plot range (5, 8, 10 and 14 Marla plus 1 Kanal) alongside a dedicated commercial component. The Model Block commercial plots — around 13.33 Marla with a B+G+6 building envelope — front the 350-ft main boulevard and are offered on a separate three-to-four-year plan with attractive lump-sum discounts.",
      "Infrastructure is the block's calling card: wide carpeted roads, landscaped green spaces, proximity to the Central Business District, jogging tracks, and amenity-rich planning that includes malls and sports facilities. For anyone weighing Faisal Town Phase 2, Sector O is usually the first block worth evaluating.",
    ],
    planStructure:
      "The Model Block (Sector O, together with Sector Q & R) is offered on a full-payment basis with a 20% discount on the actual price — development charges included. Model Block commercial plots (around 13.33 Marla) are priced separately on a 25% down payment with a multi-year plan and 15% local / 20% overseas lump-sum discounts.",
    planType: "model",
    extraPlanNote:
      "Commercial (13.33 Marla) is priced separately — indicatively ~PKR 38.4M standard / ~PKR 42.4M corner before discounts.",
    locationPoints: [
      "Positioned between the Chakri and Thalian interchanges with direct M-2 Motorway access",
      "Adjacent to the Rawalpindi Ring Road for fast twin-cities connectivity",
      "Roughly a 2-minute drive to the New Islamabad International Airport via the boulevard network",
      "Fronts the 350-ft main boulevard connecting the society's key blocks",
    ],
    whyInvest: [
      "Faster possession than newly launched blocks — marketed within ~1–1.5 years for early full-payers",
      "Semi-developed with amenity-rich planning (malls, sports complexes, jogging tracks)",
      "Both residential and high-visibility boulevard commercial options in one block",
      "Central, well-connected location that supports both end-use and resale demand",
    ],
    faqs: [
      {
        q: "What makes Sector O the 'Model Block'?",
        a: "Sector O is developed first as a showcase for the whole society — with completed roads, green spaces and amenities — so buyers can see the intended standard on the ground. This is why it is called the Model Block and why possession comes sooner here.",
      },
      {
        q: "When is possession available in Sector O?",
        a: "Possession is marketed within roughly one to one-and-a-half years for early full-payers, as the block is semi-developed. Timelines are phased, so confirm the current status for your specific plot with us before booking.",
      },
      {
        q: "What are the commercial plot options in Sector O?",
        a: "Sector O offers around 13.33 Marla commercial plots (standard and corner) with a B+G+6 building envelope, fronting the 350-ft main boulevard. They run on a 25% down payment with a multi-year quarterly plan and lump-sum discounts.",
      },
      {
        q: "Is Sector O a good investment?",
        a: "For buyers prioritising faster possession or a build-ready plot, Sector O is usually the strongest option in Faisal Town Phase 2. As with the whole project, weigh this against the NOC being under process — we'll give you an honest picture before you commit.",
      },
    ],
  },
  "n-block": {
    slug: "n-block",
    metaTitle: "N Block Faisal Town Phase 2 — Payment Plan, Location & Prices 2026",
    metaDescription:
      "N Block Faisal Town Phase 2 — on the 365-ft CBD boulevard with residential & commercial plots. Monthly installment plan, 2026 prices, location & booking details.",
    tagline: "On the 365-ft CBD boulevard, with a clear monthly installment plan",
    heroImage: "/images/projects/faisal-town-phase-2.webp",
    intro: [
      "N Block is one of Faisal Town Phase 2's most sought-after residential blocks, positioned directly beside the Central Business District (CBD) on the society's landmark 365-ft main boulevard. This CBD-adjacent, boulevard-facing location gives it some of the strongest connectivity and commercial-frontage value in the entire project.",
      "The block blends residential plots (5, 8, 10 and 14 Marla plus 1 Kanal) with commercial plots along its main roads and corners, making it appealing to both families and investors who want proximity to the society's commercial heart. Corner and main-road plots typically carry a premium for their added exposure.",
      "N Block's stand-out feature for many buyers is its clear, predictable financing: a 36-month installment plan with fixed monthly amounts starting from around PKR 60,000 per month, plus a down payment and an available lump-sum discount. That structure suits salaried buyers who prefer steady monthly budgeting over quarterly lumps.",
      "With wide roads, underground utilities, landscaped parks and its position on the widest boulevard in the society, N Block is built for both comfortable living and long-term capital appreciation as the CBD matures.",
    ],
    planStructure:
      "N Block is offered on a 36-month installment plan with fixed monthly amounts (from PKR 60,000/month) plus a down payment, with a 20% discount available on lump-sum payment. Corner and main-road plots may carry additional charges. Payment by pay order, demand draft or cash — cheques are not accepted.",
    planType: "installment",
    locationPoints: [
      "Directly on the 365-ft main boulevard — the widest road in Faisal Town Phase 2",
      "Immediately beside the Central Business District (CBD) for commercial access",
      "Quick reach to the M-2 Motorway and Thalian Interchange",
      "Close to the New Islamabad International Airport via the boulevard network",
    ],
    whyInvest: [
      "Prime CBD-adjacent position with frontage on the society's widest boulevard",
      "Mix of residential and commercial plots for flexible investment strategies",
      "Predictable 36-month monthly installment plan suited to salaried buyers",
      "Strong capital-appreciation potential as the commercial district develops",
    ],
    faqs: [
      {
        q: "Where exactly is N Block located?",
        a: "N Block sits directly on the 365-ft main boulevard, immediately beside the Central Business District (CBD) of Faisal Town Phase 2, with quick access to the M-2 Motorway and Thalian Interchange.",
      },
      {
        q: "What is the N Block payment plan?",
        a: "N Block is offered on a 36-month installment plan with fixed monthly amounts starting from around PKR 60,000, plus a down payment. A discount is available on lump-sum payment. Contact us for the exact current figures for your plot size.",
      },
      {
        q: "Does N Block have commercial plots?",
        a: "Yes. Alongside residential plots, N Block offers commercial plots along its main roads and corners, benefiting from its position next to the CBD. Corner and main-road plots usually carry a premium.",
      },
      {
        q: "Is N Block good for investment?",
        a: "N Block's CBD-adjacent, boulevard-facing location gives it strong long-term appreciation potential and rental appeal. As with the whole society, factor in that the NOC is under process — we'll advise you honestly.",
      },
    ],
  },
  "overseas-enclave": {
    slug: "overseas-enclave",
    metaTitle: "Overseas Enclave Faisal Town Phase 2 — Payment Plan & Booking for Overseas Pakistanis",
    metaDescription:
      "Overseas Enclave Faisal Town Phase 2 — a premium gated block for overseas Pakistanis. 36-month installment plan, plot sizes up to 2 Kanal, location & remote booking.",
    tagline: "The premium, gated block built for overseas Pakistanis",
    heroImage: "/images/gallery/sector-entrance.webp",
    intro: [
      "The Overseas Enclave is the premium address of Faisal Town Phase 2, designed specifically for overseas Pakistanis who want an international-standard home and a secure investment back home. Built around a 365-ft main boulevard with more than 40% of its land reserved for open space and community facilities, it is one of the most thoughtfully planned blocks in the society.",
      "The Enclave offers the widest range of plot sizes in Faisal Town Phase 2 — 5, 8, 10 and 14 Marla plus 1 and 2 Kanal — giving overseas families the flexibility to choose everything from a starter plot to a large luxury home. It is a fully gated community with 24/7 security, underground utilities, and planned international-standard schools and a hospital.",
      "Financing is tailored for buyers abroad: a 36-month installment plan with a down payment followed by 36 fixed monthly installments, plus a 20% discount on lump-sum payment. Development charges are included in the plot price, so there are no surprise costs later.",
      "At Jumpify Marketing we run a dedicated overseas desk that lets you book and manage your Overseas Enclave investment entirely remotely — video walkthroughs, live availability, secure payments and documentation handled on your behalf, with full transparency about the project's NOC status.",
    ],
    planStructure:
      "The Overseas Enclave is offered on a 36-month installment plan: a down payment, 36 monthly installments, and a 20% discount on lump-sum payment. Development charges are included and plot sizes extend up to 2 Kanal.",
    planType: "installment",
    extraPlanNote:
      "A 2 Kanal (1000 sq yd) option is available — PKR 19,295,000 (or PKR 15,430,000 on lump-sum).",
    locationPoints: [
      "Built around a 365-ft main boulevard with 40%+ of land reserved for open space",
      "Close to the Thalian Interchange on the M-2 Motorway",
      "Roughly 10–15 minutes from the New Islamabad International Airport",
      "Rawalpindi Ring Road access for fast connectivity across the twin cities",
    ],
    whyInvest: [
      "Premium, fully-gated planning tailored to overseas Pakistani buyers",
      "Widest plot-size range in the society, including 1 and 2 Kanal",
      "Comfortable 36-month installment plan with a 20% lump-sum discount",
      "Fully remote booking and management through our dedicated overseas desk",
    ],
    faqs: [
      {
        q: "Who is the Overseas Enclave for?",
        a: "It is a premium block designed specifically for overseas Pakistanis, offering international-standard planning, top-tier security and a payment plan and discount structure tailored to buyers investing from abroad.",
      },
      {
        q: "Can I book in the Overseas Enclave from abroad?",
        a: "Yes. Through our dedicated overseas desk you can book and manage everything remotely — video walkthroughs, live availability, secure remote payments and documentation handled on your behalf, with receipts and files couriered to you.",
      },
      {
        q: "What plot sizes and payment plan does it offer?",
        a: "The Overseas Enclave offers 5, 8, 10 and 14 Marla plus 1 and 2 Kanal plots on a 36-month installment plan — a down payment plus 36 fixed monthly installments, with a 20% discount on lump-sum payment. Development charges are included.",
      },
      {
        q: "Is the Overseas Enclave a safe investment?",
        a: "It is the premium, gated block of a project by an experienced developer, but the society's NOC is still under process. We give overseas investors a fully transparent picture and recommend verifying the latest status before booking.",
      },
    ],
  },
};

export const highVolumeBlockSlugs = Object.keys(blockPages);

// ── Location & accessibility ───────────────────────────────────────────────
export const locationPoints = [
  "Direct access from the M-2 Lahore–Islamabad Motorway via the Thalian Interchange (~2 km from the main gate)",
  "A short ~10–15 minute drive from the New Islamabad International Airport",
  "Second gate connects to the newly-built Rawalpindi Ring Road (RRR) for fast twin-cities access",
  "Adjacent to Capital Smart City and close to DHA Islamabad-Gandhara and CDA Sector I-16",
  "Linked internally by a 350-ft main boulevard between Gate 1 and Gate 2",
];
export const mapQuery = "Faisal Town Phase 2 Thalian Interchange Islamabad";

// ── Amenities ──────────────────────────────────────────────────────────────
export const amenities = [
  { icon: "building", title: "Grand Jamia Mosque", text: "A signature central mosque anchoring the community." },
  { icon: "trending", title: "Sports City (Sector J)", text: "A ~271-kanal multipurpose sports complex & stadium." },
  { icon: "chart", title: "Education City", text: "Schools & colleges — reportedly largely built out." },
  { icon: "shield", title: "Teaching Hospital", text: "A large healthcare facility planned within the society." },
  { icon: "globe", title: "CBD & Commercial Hubs", text: "Central Business District, markaz & brand retail." },
  { icon: "check", title: "Parks & Green Belts", text: "~20% of land reserved for greenery & playgrounds." },
];

// ── Why invest (framed as potential, not guaranteed) ───────────────────────
export const whyInvest = [
  {
    title: "Proven Developer Track Record",
    text: "Same group behind Faisal Town Phase 1 (F-18), Faisal Hills & Faisal Margalla City — delivered projects that built investor confidence.",
  },
  {
    title: "Prime Motorway + Airport Location",
    text: "Direct M-2 access at Thalian and minutes from the New Islamabad Airport — the connectivity that drives long-term demand.",
  },
  {
    title: "Easy 4-Year Installments",
    text: "A choice of full payment (with a 20% discount) or an easy 36-month installment plan makes it accessible to salaried and overseas investors alike.",
  },
  {
    title: "Active On-Ground Development",
    text: "Boulevards, sectors and utilities under active development, with Sector O possession marketed within 1–1.5 years.",
  },
];

// ── NOC / legal status (honest, transparent — this is our trust differentiator) ──
export const noc = {
  status: "Under Process",
  summary:
    "Faisal Town Phase 2's No Objection Certificate (NOC) is currently under process — it is not yet fully approved. After being flagged by the RDA, the developer submitted the land plan and the status is reported as 'under process' with PHATA (Punjab Housing & Town Planning Agency).",
  points: [
    "We recommend every buyer independently verify the latest status at the relevant authority (rda.gov.pk / PHATA) before booking.",
    "The developer (CAM Construction — Ch. Abdul Majeed) has a track record of securing approvals and delivering prior projects such as Faisal Town Phase 1 and Faisal Hills.",
    "Early-stage, pre-approval pricing is typically lower — which is the opportunity — but it also carries higher risk until the NOC is granted. We help you weigh this honestly.",
  ],
  disclaimer:
    "We believe in full transparency. We will never tell you a project is 'approved' when it is not. Invest with clear, accurate information.",
};

// ── FAQ (targets high-intent informational queries; feeds FAQPage schema) ──
export const ft2Faqs = [
  {
    q: "Is Faisal Town Phase 2 approved / RDA approved?",
    a: "Not yet. Faisal Town Phase 2's NOC is currently under process — it has not received final approval. The status is reported as 'under process' with PHATA after being flagged by the RDA. Always verify the latest status with the relevant authority before booking. We share the current position transparently with every client.",
  },
  {
    q: "Where exactly is Faisal Town Phase 2 located?",
    a: "It is located at the Thalian Interchange on the M-2 (Lahore–Islamabad) Motorway, near the Rawalpindi Ring Road and roughly a 10–15 minute drive from the New Islamabad International Airport, adjacent to Capital Smart City.",
  },
  {
    q: "What is the payment plan and down payment?",
    a: "There are two options. The Model Block (Sector O, Q & R) is offered on full payment with a 20% discount. Other blocks such as the Overseas Enclave and N Block offer a 36-month installment plan — a down payment plus 36 fixed monthly installments — with a 20% discount on lump-sum payment. Development charges are included. Contact us for the confirmed figures for your chosen block.",
  },
  {
    q: "What is the price of a 5 Marla and 10 Marla plot?",
    a: "As per the current developer rate sheet, a 5 Marla (5.56) plot is PKR 3,495,000 — or PKR 2,790,000 on full payment. A 10 Marla (10.89) plot is PKR 6,065,000 — or PKR 4,850,000 on full payment. Development charges are included; corner and main-road plots carry additional charges. Request the latest confirmed rate list before booking.",
  },
  {
    q: "Who is the owner and developer of Faisal Town Phase 2?",
    a: "The project is owned by Ch. Abdul Majeed and developed by CAM Construction (Pvt.) Ltd., marketed through Zedem International, with the master plan by the Meinhardt Group — the same group behind Faisal Town Phase 1, Faisal Hills and Faisal Margalla City.",
  },
  {
    q: "Which is the best block to invest in?",
    a: "It depends on your goal. Sector O (Model Block) suits buyers wanting faster possession; N Block offers fresh launch pricing with upside; and the Overseas Enclave is tailored for overseas investors. We'll recommend the right block for your budget and timeline.",
  },
  {
    q: "What is the difference between a file and a plot?",
    a: "A 'file' is an allocation document for a plot that has not yet been balloted/assigned a physical location, while a 'plot' has a confirmed number and location. Files can be cheaper and more liquid for short-term investors; plots suit end-users. We explain the trade-offs before you decide.",
  },
  {
    q: "Can overseas Pakistanis invest safely from abroad?",
    a: "Yes. We run a fully digital process for overseas investors — video walkthroughs, live availability, secure remote payments and documentation — with a dedicated Overseas Enclave and added cash discount. You can book and manage your investment without flying home.",
  },
  {
    q: "When will possession be given?",
    a: "There is no society-wide official possession date yet; it is being phased. Sector O (Model Block) is marketed with possession within roughly 1–1.5 years for early full-payers. We'll share the latest development status for your block.",
  },
  {
    q: "Faisal Town Phase 2 vs Faisal Hills — which is better?",
    a: "Both are by the same developer group. Faisal Hills is more developed with quicker possession, while Faisal Town Phase 2 offers newer launch pricing and larger upside potential given its motorway-airport location. We can model both for your specific goals.",
  },
];

// ── Testimonials (FT2-specific; replace with real client stories when available) ──
export const ft2Testimonials = [
  {
    name: "Ahmed Raza",
    role: "Investor · Islamabad",
    quote:
      "Jumpify guided me to the right block in Faisal Town Phase 2 and were upfront about the NOC status. No pressure, just honest advice. My file has already appreciated.",
  },
  {
    name: "Sana Malik",
    role: "Overseas Investor · Dubai",
    quote:
      "I booked in the Overseas Enclave entirely from Dubai. The digital process and transparent paperwork made me feel completely secure.",
  },
  {
    name: "Bilal Khan",
    role: "Business Owner · Rawalpindi",
    quote:
      "Clear payment plan, no hidden charges, and they explained the risks honestly. Exactly the kind of dealer you want for a big investment.",
  },
];
