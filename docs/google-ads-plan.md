# Google Ads Lead-Gen Plan — Faisal Town Phase 2 (Islamabad & Rawalpindi)

A complete, beginner-friendly plan to generate leads from this website using Google Ads,
targeting Islamabad + Rawalpindi. Ad copy below is ready to paste. Currency: PKR.

---

## PART 0 — Before you spend a single rupee (do these first)

Running ads without this = burning money. In order:

1. [ ] **Deploy the site to a live domain** and set `site.url` in `lib/site.ts`. Ads can't run to localhost.
2. [ ] **Conversion tracking (already coded — you just activate it):**
   - In Google Ads: **Tools → Conversions → New conversion action → Website**.
   - Create **3 conversion actions**: `Lead Form Submit` (Primary), `WhatsApp Click` (Primary), `Call Click` (Secondary).
   - Each gives a snippet with a label after the slash, e.g. `AW-17999922348/AbC-D_efGh`.
   - Paste the 3 labels into `lib/gtag.ts` → `CONVERSION_LABELS` (`lead`, `whatsapp`, `call`). Redeploy.
   - The tag `AW-17999922348` is already installed; the form + every Call/WhatsApp button already fire on click.
   - Verify with the **Google Tag Assistant** Chrome extension before launching.
3. [ ] **Google Ads account** — create at ads.google.com, add billing. Switch to **Expert mode** (not "Smart" campaigns).
4. [ ] **Link accounts:** Google Ads ↔ Google Business Profile (for location ext.) ↔ GA4 (if added) ↔ Google Search Console.
5. [ ] **Fast lead response plan** — decide who answers the WhatsApp/calls and how fast (see Part 7). Speed = 80% of results.

---

## PART 1 — Account structure

Start simple. One Search campaign, a few tightly-themed ad groups. Add more later.

```
Account
└── Campaign 1: Search — "Faisal Town Phase 2" (Islamabad + Rawalpindi)
    ├── Ad Group 1: FT2 — General / Booking
    ├── Ad Group 2: FT2 — Payment Plan & Prices
    ├── Ad Group 3: FT2 — Sector O (Model Block)
    ├── Ad Group 4: FT2 — Overseas Enclave
    └── Ad Group 5: FT2 — 5 / 10 Marla plots
(Later) Campaign 2: Remarketing (Display) — people who visited but didn't convert
(Later) Campaign 3: Call-only — for pure phone leads on mobile
```

Why this structure: each ad group has one theme → tightly matched keyword + ad + landing page = higher
**Quality Score** = lower cost per click and better positions.

---

## PART 2 — Targeting (Islamabad + Rawalpindi)

- **Campaign type:** Search. (Turn OFF "Search Network partners" and "Display Network" at first — they waste budget.)
- **Locations:** Add **Islamabad** and **Rawalpindi** (cities). Optionally add a **radius** (e.g. 30 km around the twin cities).
  - **Location option (IMPORTANT):** set to **"Presence: People in or regularly in your targeted locations"** — NOT "presence or interest." This stops paying for clicks from other cities.
  - *(Optional later:* add **UAE / UK / Saudi** as a separate campaign for the Overseas Enclave, with overseas-specific ads.)*
- **Language:** English **and** Urdu (many users have Urdu interface).
- **Networks:** Google Search only (to start).
- **Devices:** All, but expect **70–85% mobile** — your site + WhatsApp are mobile-first, good.
- **Ad schedule:** Start all-day. After 2 weeks, bid up during the hours your leads actually reply (usually 10am–11pm).

---

## PART 3 — Keywords

Use mostly **Phrase match** ("...") and a few **Exact** ([...]). Avoid broad match until you have data.

### Ad Group 1 — General / Booking
```
"faisal town phase 2"
[faisal town phase 2]
"faisal town phase 2 islamabad"
"faisal town phase 2 booking"
"faisal town phase 2 plots"
"faisal town phase 2 dealer"
"faisal town phase 2 plot for sale"
```

### Ad Group 2 — Payment Plan & Prices
```
"faisal town phase 2 payment plan"
"faisal town phase 2 payment plan 2026"
"faisal town phase 2 price"
"faisal town phase 2 plot prices"
"faisal town phase 2 installment plan"
```

### Ad Group 3 — Sector O (Model Block)
```
"faisal town phase 2 sector o"
"faisal town phase 2 model block"
"sector o model block price"
```

### Ad Group 4 — Overseas Enclave
```
"faisal town phase 2 overseas enclave"
"faisal town phase 2 overseas block"
"faisal town phase 2 for overseas"
```

### Ad Group 5 — 5 / 10 Marla
```
"faisal town phase 2 5 marla"
"faisal town phase 2 5 marla price"
"faisal town phase 2 10 marla"
"faisal town phase 2 10 marla price"
```

### Negative keywords (add at CAMPAIGN level — stop wasted spend)
```
job        jobs       salary     career     rent       rental
map pdf    free download          wikipedia  news
scam       fraud      fir        nab        case       illegal    complaint
phase 1    f-18       bahria     dha        blue world city        capital smart city
```
*(Keep competitor/other-society names as negatives for pure FT2 lead-gen. If you later run a comparison
campaign, move them out.)*

---

## PART 4 — Budget & bidding

**Starting daily budget:** PKR **2,000–4,000/day** (≈ PKR 60,000–120,000/month). Enough to gather data.

**Bidding (staged):**
1. **Weeks 1–2:** **Maximize Clicks** with a **max CPC cap of ~PKR 60** — gather clicks + let conversions accumulate.
2. **From ~15–30 conversions:** switch to **Maximize Conversions** (or **Target CPA** once you know your cost per lead).
3. Let Google's smart bidding optimise once tracking has real conversion data.

**Rough economics (illustrative — your numbers will vary):**
| Metric | Conservative | Good |
|---|---|---|
| Avg. CPC | PKR 55 | PKR 30 |
| CTR | 4% | 8% |
| Landing → lead rate | 5% | 12% |
| **Cost per lead** | ~PKR 1,100 | ~PKR 250 |
| Leads on PKR 3,000/day | ~3/day | ~10/day |

Real estate is high-value, so even PKR 1,000/lead is cheap if you close a plot. Track **cost per lead**, then **cost per booked deal**.

---

## PART 5 — Ad creatives (ready to paste)

### 5.1 Responsive Search Ads (RSA)
Each ad group gets 1–2 RSAs. Rules: **Headlines ≤ 30 characters**, **Descriptions ≤ 90 characters**.
Paste 8–15 headlines + 4 descriptions; Google mixes them. **Pin** Headline 1 to your main keyword for relevance.

#### Ad Group 1 — General / Booking
**Headlines:**
```
Faisal Town Phase 2 Plots
Faisal Town Phase 2 – 2026
Book Your Plot Today
Easy 4-Year Installments
On M-2 Motorway, Thalian
Mins From Islamabad Airport
Authorized Sales Partner
Free Investment Guidance
Honest Advice on NOC Status
5, 8, 10 Marla & 1 Kanal
Plots in Islamabad on Plan
WhatsApp for Plot Details
Call for Today's Rates
Overseas Investors Welcome
No Hidden Charges
```
**Descriptions:**
```
Faisal Town Phase 2 on easy 4-year installments. Get the 2026 plan on WhatsApp.
Prime M-2 motorway location, minutes from Islamabad Airport. Book your plot today.
Honest guidance including NOC status. Free consultation. Call or WhatsApp us now.
5, 8, 10, 14 Marla & 1 Kanal plots. Transparent pricing, no hidden charges.
```

#### Ad Group 2 — Payment Plan & Prices
**Headlines:**
```
FT2 Payment Plan 2026
5 Marla From 39.75 Lac*
10 Marla From 72.6 Lac*
Easy 4-Year Installments
Get the Full Payment Plan
Faisal Town Phase 2 Prices
~20% Down, 16 Installments
Transparent, No Hidden Cost
Plan Sent on WhatsApp
Book on Easy Installments
Islamabad Plots on Plan
Free, No-Obligation Quote
```
**Descriptions:**
```
Get the complete Faisal Town Phase 2 2026 payment plan on WhatsApp in minutes.
5 Marla from 39.75 Lac* on an easy 4-year installment plan. Book your plot now.
Transparent pricing, no hidden charges. Free guidance from an authorized partner.
Prices revised 2026 — lock in today's rate. Call or WhatsApp for the full plan.
```

#### Ad Group 3 — Sector O (Model Block)
**Headlines:**
```
Sector O Model Block FT2
Faster Possession Block
Semi-Developed, Ready Soon
Sector O – 2026 Prices
Model Block Plots & Rates
Book Sector O Today
Residential & Commercial
Get Sector O Payment Plan
```
**Descriptions:**
```
Sector O (Model Block) – faster possession, semi-developed. Get 2026 rates now.
The flagship block of Faisal Town Phase 2. Residential & commercial plots available.
Book Sector O on an easy plan. Free guidance from an authorized sales partner.
Possession marketed within ~1–1.5 years. Call or WhatsApp for availability.
```

#### Ad Group 4 — Overseas Enclave
**Headlines:**
```
FT2 Overseas Enclave
Invest From Abroad, Safely
Overseas Enclave Plots
Remote Booking Available
Extra Overseas Discount
Plots Up to 2 Kanal
Book From Dubai, UK, KSA
Get the Overseas Plan
```
**Descriptions:**
```
Overseas Enclave – a premium gated block for overseas Pakistanis. Book remotely.
Invest in Faisal Town Phase 2 from abroad. Secure, fully digital, transparent.
Video walkthroughs, remote payments & documentation. Extra overseas discount.
5 Marla to 2 Kanal on a 4.5-year plan. WhatsApp our overseas desk today.
```

#### Ad Group 5 — 5 / 10 Marla
**Headlines:**
```
FT2 5 Marla Plots
FT2 10 Marla Plots
5 Marla From 39.75 Lac*
10 Marla From 72.6 Lac*
Easy Installment Plan
Most Popular Plot Size
Book on Installments
Get Today's 5 Marla Rate
```
**Descriptions:**
```
5 Marla plots in Faisal Town Phase 2 on easy installments. Get 2026 rates now.
10 Marla plots – strong appreciation potential. Transparent, no hidden charges.
The most in-demand size, highest resale liquidity. Free guidance, book today.
Call or WhatsApp for the latest confirmed 5 & 10 Marla prices and availability.
```

### 5.2 Ad extensions (assets) — add ALL of these, they boost CTR & Quality Score

**Sitelinks** (with descriptions):
```
Payment Plan 2026   → /#payment-plan   | Full 2026 plan & prices
Sector O Model Block→ /blocks/sector-o-model-block | Faster possession block
Overseas Enclave    → /blocks/overseas-enclave | For overseas Pakistanis
All Blocks & Sectors→ /blocks          | Compare all 14 blocks
NOC Status (Honest) → /#noc            | The real approval status
Contact / Book Now  → /contact         | Free consultation
```

**Callouts:**
```
NOC – Honest Advice   Easy 4-Year Installments   Overseas Friendly
Free Consultation     Authorized Sales Partner   After-Sales Support
Transparent Pricing   No Hidden Charges
```

**Structured snippets:**
```
Header "Amenities": Grand Jamia Mosque, Sports City, Education City, CBD, Parks
Header "Types":     5 Marla, 8 Marla, 10 Marla, 14 Marla, 1 Kanal, Commercial
```

**Call extension:** +92 340 8988872 (turn on call reporting to track calls as conversions).
**Lead form extension:** add if eligible (Name + Phone) — captures leads even without a site visit.
**Location extension:** link Google Business Profile (shows your Rawalpindi office).
**Image extensions:** upload 3–5 real project photos (1200×1200 & 1200×628).

### 5.3 Creative do's & don'ts
- ✅ Match the ad to the landing page (payment-plan ad → payment-plan section).
- ✅ Keep the `*` on prices + "indicative" on the page (you already do). Don't state a price you can't honour.
- ✅ Be honest about NOC — it's a *differentiator*, and false "approved" claims can get ads disapproved.
- ❌ Don't guarantee returns/appreciation ("100% profit") — Google may disapprove and it's non-compliant.

---

## PART 6 — Landing pages (message match = cheaper clicks)

- **Ad Group 1 (general):** → homepage `/`
- **Ad Group 2 (payment plan):** → `/#payment-plan`
- **Ad Group 3 (Sector O):** → `/blocks/sector-o-model-block`
- **Ad Group 4 (Overseas):** → `/blocks/overseas-enclave`
- **Ad Group 5 (5/10 Marla):** → homepage `/#payment-plan`
- **Add UTM tags** to every final URL, e.g.
  `?utm_source=google&utm_medium=cpc&utm_campaign=ft2_search&utm_content=payment_plan`
- The lead form, sticky mobile Call/WhatsApp bar, and price hook are already built for conversion. ✅
- *(Optional upgrade: a distraction-free `/lp` landing page with no top nav — often lifts conversion 10–30%. Ask and I'll build it.)*

---

## PART 7 — Lead handling (this decides your ROI, not the ads)

1. **Speed to lead:** reply within **5 minutes**. Response inside 5 min vs 30 min can multiply conversions.
2. **Channel:** WhatsApp first (they chose it), then call. Save every number.
3. **First message template:**
   > "Assalam o Alaikum [Name], thank you for your interest in Faisal Town Phase 2. I'm [Agent] from Jumpify
   > Marketing. Here's the latest 2026 payment plan for [size]. May I call you to explain the best options?"
4. **Qualify:** budget, plot size, purpose (investment vs build), timeline, local vs overseas.
5. **Log every lead** in your Google Sheet (already wired) with the UTM/source so you know which ad group works.
6. **Follow up** 3–5 times over 2 weeks — most deals close on follow-up, not first contact.

---

## PART 8 — Weekly optimisation routine

**Daily (5 min):** check spend isn't runaway; skim Search Terms for junk → add negatives.
**Weekly (30 min):**
- **Search terms report** → add irrelevant terms as negatives; add good new terms as keywords.
- Pause keywords with high spend + zero conversions.
- Pause the worst ad; write a new variant to test against the best.
- Shift budget toward the ad groups with the lowest cost per lead.
**Monthly:**
- Review cost per lead by ad group; scale winners, cut losers.
- Add the remarketing campaign once you have site traffic.
- Refresh ad copy; test new headlines.

---

## PART 9 — KPIs to watch

| KPI | What good looks like (real estate PK) |
|---|---|
| CTR (search) | 4–8%+ |
| Avg. CPC | PKR 25–60 |
| Landing → lead conversion | 5–12% |
| Cost per lead (CPL) | PKR 250–1,200 |
| Lead → site visit | 15–30% |
| Impression share | grow over time |
| **North-star:** cost per **booked deal** | track this above all |

---

## PART 10 — 2-week launch checklist

- [ ] Site deployed to live domain; `site.url` updated
- [ ] 3 conversion actions created; labels pasted in `lib/gtag.ts`; verified with Tag Assistant
- [ ] Google Ads account in Expert mode; billing added; GBP + GA4 linked
- [ ] 1 Search campaign, Islamabad + Rawalpindi, "Presence" location setting, English + Urdu
- [ ] 5 ad groups with keywords (phrase/exact) + campaign negative keywords
- [ ] 1–2 RSAs per ad group (copy above) + ALL extensions
- [ ] Final URLs set per ad group + UTM tags
- [ ] Budget PKR 2–4k/day; Maximize Clicks + CPC cap to start
- [ ] Lead-response process live (who replies, how fast, templates)
- [ ] Launch → monitor daily for week 1 → first optimisation at day 7
```
