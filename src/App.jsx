import { useState, useRef, useEffect } from "react";

const Icon = {
  logo: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 20 L12 8 L21 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 20 L12 11 L17 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55"/><circle cx="12" cy="6.5" r="1.8" fill="currentColor"/></svg>,
  car: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M3 11h18"/></svg>,
  chat: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  shield: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  star: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  dollar: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  fuel: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22h12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v17z"/><path d="M15 8h2a2 2 0 0 1 2 2v6a1 1 0 0 0 2 0V9l-3-3"/><line x1="3" y1="11" x2="15" y2="11"/></svg>,
  send: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  chevDown: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  chevUp: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>,
  check: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  arrowRight: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  zap: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  users: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  leaf: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  trophy: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="8 11 12 15 16 11"/><path d="M3 7h3v10H3z"/><path d="M18 7h3v10h-3z"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 7V3h10v4"/></svg>,
  sparkle: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-1 3-3.5 5-6 6 2.5 1 5 3 6 6 1-3 3.5-5 6-6-2.5-1-5-3-6-6z"/></svg>,
  bookmark: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  grid: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>,
};

// ─── GOOGLE SHEETS CONFIG ─────────────────────────────────────────────────────
// 👇 PASTE YOUR PUBLISHED GOOGLE SHEET CSV URL HERE
const SHEET_URL = "YOUR_GOOGLE_SHEET_CSV_URL_HERE";
// How to get this URL:
// 1. Open your Google Sheet
// 2. File → Share → Publish to web
// 3. Select "Comma-separated values (.csv)"
// 4. Click Publish and copy the URL
// 5. Paste it above, replacing YOUR_GOOGLE_SHEET_CSV_URL_HERE

const CACHE_KEY = "carla_ai_cars_cache";
const CACHE_TS_KEY = "carla_ai_cars_timestamp";

// Parse a CSV row respecting quoted fields with commas inside
function parseCSVRow(row) {
  const result = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < row.length; i++) {
    const ch = row[i];
    if (ch === '"') { inQuotes = !inQuotes; }
    else if (ch === "," && !inQuotes) { result.push(current.trim()); current = ""; }
    else { current += ch; }
  }
  result.push(current.trim());
  return result;
}

// Convert a CSV row array into a car object matching the app's data shape
function rowToCar(headers, values) {
  const get = (key) => (values[headers.indexOf(key)] || "").replace(/^"|"$/g, "").trim();
  const features = get("features").split("|").map(f => f.trim()).filter(Boolean);
  const tags = get("tags").split("|").map(t => t.trim()).filter(Boolean);
  const brand = get("brand");
  const auto = brandGradient(brand);
  const gradient = get("gradient") || auto.gradient;
  const accent   = get("accent")   || auto.accent;
  return {
    id:         parseInt(get("id")) || Math.random(),
    name:       get("name"),
    image:      get("image"),
    image2:     get("image2") || null,
    image3:     get("image3") || null,
    image4:     get("image4") || null,
    brand,
    type:       get("type"),
    price:      parseInt(get("price")) || 0,
    year:       parseInt(get("year")) || 2024,
    fuel:       get("fuel"),
    seats:      parseInt(get("seats")) || 5,
    warranty:   get("warranty"),
    safety:     get("safety"),
    features,
    tags,
    ev:         get("ev") === "true",
    evRange:    get("evRange") ? parseInt(get("evRange")) : null,
    dealership: get("dealership"),
    desc:       get("desc"),
    monthlyFuel:get("monthlyFuel"),
    badge:      get("badge"),
    gradient,
    accent,
  };
}

async function fetchCarsFromSheet() {
  const url = SHEET_URL + "&t=" + Date.now(); // cache-bust
  const res = await fetch(url);
  if (!res.ok) throw new Error("Sheet fetch failed: " + res.status);
  const csv = await res.text();
  const rows = csv.trim().split("\n");
  const headers = parseCSVRow(rows[0]);
  const cars = rows.slice(1).filter(r => r.trim()).map(r => rowToCar(headers, parseCSVRow(r)));
  return cars;
}

// ─── GRADIENT GENERATOR ──────────────────────────────────────────────────────
// Generates a consistent gradient from a string (brand name)
// Same brand = same colour every time. No manual colour picking needed.
function brandGradient(str = "") {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Map hash to a curated set of rich, automotive-appropriate hues
  const palettes = [
    { from: "#DC2626", to: "#F87171", accent: "#DC2626" }, // red
    { from: "#7C3AED", to: "#A78BFA", accent: "#7C3AED" }, // violet
    { from: "#1D4ED8", to: "#60A5FA", accent: "#1D4ED8" }, // blue
    { from: "#059669", to: "#34D399", accent: "#059669" }, // green
    { from: "#D97706", to: "#FCD34D", accent: "#D97706" }, // amber
    { from: "#B45309", to: "#F59E0B", accent: "#B45309" }, // orange
    { from: "#0891B2", to: "#67E8F9", accent: "#0891B2" }, // cyan
    { from: "#374151", to: "#9CA3AF", accent: "#374151" }, // slate
    { from: "#BE185D", to: "#F472B6", accent: "#BE185D" }, // pink
    { from: "#1E40AF", to: "#93C5FD", accent: "#1E40AF" }, // indigo
    { from: "#065F46", to: "#6EE7B7", accent: "#065F46" }, // emerald
    { from: "#92400E", to: "#D97706", accent: "#92400E" }, // brown
  ];
  const idx = Math.abs(hash) % palettes.length;
  const p = palettes[idx];
  return {
    gradient: `linear-gradient(135deg, ${p.from}, ${p.to})`,
    accent: p.accent,
  };
}

// ─── FALLBACK CAR DATA (used when sheet unavailable & cache empty) ────────────
const FALLBACK_CARS = [

  { id: 1, name: "Corolla Cross", image: "https://placehold.co/800x400/DC2626/ffffff?text=Toyota+Corolla+Cross", brand: "Toyota", type: "SUV", price: 320000, year: 2024, fuel: "Hybrid", seats: 5, warranty: "3 years / 100,000 km", safety: "5-Star ANCAP", features: ["Backup Camera", "Lane Assist", "Apple CarPlay", "Android Auto", "Adaptive Cruise Control"], tags: ["fuel-efficient", "family", "safety", "tech"], ev: false, dealership: "Toyota Trinidad", desc: "Trinidad's best-selling hybrid SUV. Exceptional fuel economy delivers real monthly savings every time you pass a petrol station.", monthlyFuel: "TT$5,800", badge: "Best Seller", gradient: "linear-gradient(135deg, #DC2626, #F87171)", accent: "#DC2626" },
  { id: 2, name: "X-Trail", image: "https://www-asia.nissan-cdn.net/content/dam/Nissan/AU/Images/about-nissan/news/2024/09/X-Trail_24_ST-L_R_Front34_ChampagneSilver_RGB-20240904-021901.jpg.ximg.l_8_h.smart.jpg", brand: "Nissan", type: "SUV", price: 295000, year: 2024, fuel: "Petrol", seats: 7, warranty: "3 years / unlimited km", safety: "5-Star ANCAP", features: ["7 Seats", "360° Camera", "Apple CarPlay", "Blind Spot Warning", "Intelligent AWD"], tags: ["family", "space", "safety", "offroad"], ev: false, dealership: "Nissan Motors TT", desc: "Seven-seat SUV built for Trinidad life. Maracas switchbacks, school runs, Beetham traffic. It handles all of it.", monthlyFuel: "TT$5,350", badge: "Family Pick", gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)", accent: "#7C3AED" },
  { id: 3, name: "Civic", image: "https://placehold.co/800x400/1D4ED8/ffffff?text=Honda+Civic", brand: "Honda", type: "Sedan", price: 210000, year: 2024, fuel: "Petrol", seats: 5, warranty: "3 years / 100,000 km", safety: "5-Star NHTSA", features: ["Honda Sensing Suite", "Apple CarPlay", "Wireless Charging", "LED Headlights", "Turbocharged Engine"], tags: ["fuel-efficient", "sporty", "tech", "affordable"], ev: false, dealership: "Honda TT", desc: "Sharp, refined and dependable. A Trinidad staple that navigates city traffic with confidence and looks great doing it.", monthlyFuel: "TT$3,800", badge: "Best Value", gradient: "linear-gradient(135deg, #1D4ED8, #60A5FA)", accent: "#1D4ED8" },
  { id: 4, name: "Outlander PHEV", image: "https://placehold.co/800x400/059669/ffffff?text=Mitsubishi+Outlander+PHEV", brand: "Mitsubishi", type: "SUV", price: 430000, year: 2024, fuel: "Plug-in Hybrid", seats: 7, warranty: "5 years / 100,000 km", safety: "5-Star ANCAP", features: ["Plug-in Hybrid", "7 Seats", "Solar Charging Panel", "Mi-Pilot Assist", "Bose Premium Audio"], tags: ["fuel-efficient", "tech", "family", "luxury", "eco"], ev: true, evRange: 87, dealership: "Mitsubishi Motors TT", desc: "87 km electric range. Drive Port of Spain to San Fernando and back on a single charge. Charge at home for approximately TT$60.", monthlyFuel: "TT$7,800", badge: "Eco Leader", gradient: "linear-gradient(135deg, #059669, #34D399)", accent: "#059669" },
  { id: 5, name: "Sportage", image: "https://placehold.co/800x400/D97706/ffffff?text=Kia+Sportage", brand: "Kia", type: "SUV", price: 265000, year: 2024, fuel: "Petrol", seats: 5, warranty: "7 years / 150,000 km", safety: "5-Star Euro NCAP", features: ["Panoramic Sunroof", "Ventilated Seats", "Apple CarPlay", "360° Camera", "Highway Driving Assist"], tags: ["tech", "safety", "sporty", "affordable"], ev: false, dealership: "Kia TT", desc: "Industry-leading 7-year warranty. Premium technology at a price that makes sense — outstanding long-term value.", monthlyFuel: "TT$4,800", badge: "Best Warranty", gradient: "linear-gradient(135deg, #D97706, #FCD34D)", accent: "#D97706" },
  { id: 6, name: "Hilux", image: "https://placehold.co/800x400/B45309/ffffff?text=Toyota+Hilux", brand: "Toyota", type: "Pickup", price: 385000, year: 2024, fuel: "Diesel", seats: 5, warranty: "3 years / 100,000 km", safety: "5-Star ANCAP", features: ["4x4 Drive", "Tow Bar", "Bed Liner", "Apple CarPlay", "Multi-Terrain Select"], tags: ["offroad", "towing", "durable", "work"], ev: false, dealership: "Toyota Trinidad", desc: "Built for everything Trinidad throws at it. Construction sites, beach limes, mountain roads. The Hilux does not stop.", monthlyFuel: "TT$6,980", badge: "Most Durable", gradient: "linear-gradient(135deg, #B45309, #F59E0B)", accent: "#B45309" },
  { id: 7, name: "Tucson", image: "https://placehold.co/800x400/0891B2/ffffff?text=Hyundai+Tucson", brand: "Hyundai", type: "SUV", price: 275000, year: 2024, fuel: "Petrol", seats: 5, warranty: "5 years / 100,000 km", safety: "5-Star NHTSA", features: ["Panoramic Sunroof", "Heated Seats", "Apple CarPlay", "Safe Exit Assist", "Remote Start"], tags: ["tech", "safety", "style", "family", "affordable"], ev: false, dealership: "Hyundai TT", desc: "Award-winning design. Panoramic sunroof as standard. Premium technology usually found in vehicles at twice the price.", monthlyFuel: "TT$4,800", badge: "Editor's Choice", gradient: "linear-gradient(135deg, #0891B2, #67E8F9)", accent: "#0891B2" },
  { id: 8, name: "CX-5", image: "https://placehold.co/800x400/374151/ffffff?text=Mazda+CX-5", brand: "Mazda", type: "SUV", price: 310000, year: 2024, fuel: "Petrol", seats: 5, warranty: "3 years / unlimited km", safety: "5-Star NHTSA", features: ["Leather Seats", "Bose Sound System", "Head-Up Display", "Apple CarPlay", "Radar Cruise Control"], tags: ["luxury", "style", "safety", "sporty", "tech"], ev: false, dealership: "Mazda TT", desc: "The most refined driving experience under TT$350,000. Premium leather, Bose audio and a design that commands attention.", monthlyFuel: "TT$5,620", badge: "Most Premium", gradient: "linear-gradient(135deg, #374151, #9CA3AF)", accent: "#374151" },
];

// ─── FILTER FUNCTION (works with any cars array) ──────────────────────────────
const FILTERS = ["All", "SUV", "Sedan", "Pickup", "Hybrid / EV", "Under TT$300k", "7 Seats"];

const SUGGESTIONS = [
  "What is the best family car under TT$300,000?",
  "How far can a hybrid travel in Trinidad on one tank?",
  "Is charging an EV cheaper than petrol in TT?",
  "Which car has the longest warranty?",
  "Best vehicle for the Maracas road?",
  "What does a 5-star safety rating mean?",
  "Most value for money SUV right now?",
  "What car suits a first-time buyer in TT?",
];

const SMART_GROUPS = [
  {
    label: "Best for Families",
    sub: "Space, safety and comfort for everyone",
    icon: "users", from: "#F59E0B", to: "#EF4444",
    match: c => c.seats >= 7 || (c.tags && c.tags.includes("family")),
  },
  {
    label: "First-Time Buyers",
    sub: "Smart choices for your first brand-new car",
    icon: "star", from: "#6366F1", to: "#8B5CF6",
    match: c => (c.tags && c.tags.includes("affordable")) || c.price < 250000,
  },
  {
    label: "Save on Fuel",
    sub: "Spend less every time you fill up",
    icon: "zap", from: "#10B981", to: "#06B6D4",
    match: c => c.tags && c.tags.includes("fuel-efficient"),
  },
  {
    label: "Going Electric",
    sub: "EVs and hybrids available in T&T now",
    icon: "leaf", from: "#059669", to: "#34D399",
    match: c => c.ev === true || (c.fuel && c.fuel.toLowerCase().includes("hybrid")),
  },
  {
    label: "Best Value Under TT$300k",
    sub: "Maximum car for your money",
    icon: "dollar", from: "#3B82F6", to: "#6366F1",
    match: c => c.price < 300000,
  },
  {
    label: "Safety First",
    sub: "Top crash test ratings across the board",
    icon: "shield", from: "#DC2626", to: "#F87171",
    match: c => c.safety && c.safety.includes("5-Star"),
  },
  {
    label: "Work & Commercial",
    sub: "Built tough for the job",
    icon: "trophy", from: "#B45309", to: "#F59E0B",
    match: c => c.type === "Pickup" || (c.tags && c.tags.includes("work")),
  },
];

// Returns up to 3 matching cars from the live inventory for a group
function getGroupCars(allCars, group) {
  return allCars.filter(group.match).slice(0, 3);
}

const fmt = (n) => `TT$${n.toLocaleString()}`;

function filterCars(cars, f) {
  if (f === "All") return cars;
  if (f === "SUV") return cars.filter(c => c.type === "SUV");
  if (f === "Sedan") return cars.filter(c => c.type === "Sedan");
  if (f === "Pickup") return cars.filter(c => c.type === "Pickup");
  if (f === "Hybrid / EV") return cars.filter(c => c.fuel.toLowerCase().includes("hybrid") || c.ev);
  if (f === "Under TT$300k") return cars.filter(c => c.price < 300000);
  if (f === "7 Seats") return cars.filter(c => c.seats >= 7);
  return cars;
}

function buildSystemPrompt(carsData) { return `You are Carla AI, Trinidad and Tobago's AI car advisor. You are friendly, knowledgeable and genuinely helpful. Your personality is warm, casual and genuinely helpful — like a trusted friend who happens to know everything about cars in T&T.

CONVERSATION APPROACH:
- Start by understanding the user's situation before recommending. Ask ONE focused follow-up question at a time if you need more info.
- If a user picks a quick-start option (like "Family car" or "Best value"), acknowledge it warmly then ask one clarifying question (e.g. "Nice! How many seats do you typically need?") before recommending.
- Always make the user feel like they can ask ANYTHING — even things they think are off-topic. Remind them you can answer questions about financing, road conditions, fuel costs, insurance, EV charging, or anything car-related in T&T.
- Never make the user feel like they are filling out a form. Keep it conversational and light.

Trinidad context to weave in naturally:
- Average daily commute: 20-40 km
- Port of Spain to San Fernando: ~58 km
- Port of Spain to Maracas Bay: ~25 km
- Petrol price: ~TT$6.97/litre (subsidised)
- Home electricity: ~TT$0.21/kWh
- Home EV charge: ~TT$50-80 for a full charge
- Full petrol tank: ~TT$300-500 depending on car

Car inventory:
${JSON.stringify(carsData.map(c => ({ id: c.id, name: c.brand + " " + c.name, price: c.price, fuel: c.fuel, seats: c.seats, warranty: c.warranty, safety: c.safety, tags: c.tags, ev: c.ev, evRange: c.evRange || null, monthlyFuel: c.monthlyFuel })))}

Guidelines:
- Be warm, casual and clear — no jargon
- Ground EV/hybrid savings in real TT distances and dollar amounts
- Always lead recommendations with Price, Warranty and Safety
- Keep answers concise and scannable
- Remind users you can answer broader questions about financing, road suitability, insurance, import info
- Guide interested buyers toward booking a test drive
- Only reference cars in the inventory — never invent specs
- Always quote prices in T&T dollars`; }


function renderMarkdown(text) {
  const lines = text.split("\n");
  const elements = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Empty line = spacer
    if (line.trim() === "") {
      elements.push(<div key={key++} style={{ height: "0.5rem" }} />);
      continue;
    }

    // Heading ## or ###
    if (line.startsWith("### ")) {
      elements.push(<div key={key++} style={{ fontWeight: 800, fontSize: "0.95rem", marginTop: "0.75rem", marginBottom: "0.25rem" }}>{formatInline(line.slice(4))}</div>);
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<div key={key++} style={{ fontWeight: 800, fontSize: "1rem", marginTop: "0.75rem", marginBottom: "0.25rem" }}>{formatInline(line.slice(3))}</div>);
      continue;
    }
    if (line.startsWith("# ")) {
      elements.push(<div key={key++} style={{ fontWeight: 900, fontSize: "1.05rem", marginTop: "0.75rem", marginBottom: "0.25rem" }}>{formatInline(line.slice(2))}</div>);
      continue;
    }

    // Bullet - or *
    if (line.match(/^[-*] /)) {
      elements.push(
        <div key={key++} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.2rem" }}>
          <span style={{ color: "#4F46E5", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>•</span>
          <span>{formatInline(line.slice(2))}</span>
        </div>
      );
      continue;
    }

    // Numbered list
    const numMatch = line.match(/^(\d+)\. (.+)/);
    if (numMatch) {
      elements.push(
        <div key={key++} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", marginBottom: "0.2rem" }}>
          <span style={{ color: "#4F46E5", fontWeight: 700, flexShrink: 0, minWidth: "1.2rem" }}>{numMatch[1]}.</span>
          <span>{formatInline(numMatch[2])}</span>
        </div>
      );
      continue;
    }

    // Normal paragraph line
    elements.push(<div key={key++} style={{ marginBottom: "0.1rem" }}>{formatInline(line)}</div>);
  }

  return <div style={{ display: "flex", flexDirection: "column" }}>{elements}</div>;
}

function formatInline(text) {
  // Handle **bold** and *italic*
  const parts = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`/g;
  let last = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(<span key={key++}>{text.slice(last, match.index)}</span>);
    }
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else if (match[2] !== undefined) {
      parts.push(<em key={key++}>{match[2]}</em>);
    } else if (match[3] !== undefined) {
      parts.push(<code key={key++} style={{ background: "#F3F4F6", padding: "0.1rem 0.3rem", borderRadius: 4, fontSize: "0.85em" }}>{match[3]}</code>);
    }
    last = regex.lastIndex;
  }

  if (last < text.length) {
    parts.push(<span key={key++}>{text.slice(last)}</span>);
  }

  return parts.length > 0 ? parts : text;
}

export default function CarlaAI() {
  const WIZARD_OPTIONS = [
    { label: "First-time buyer", prompt: "I am buying my first brand-new car in Trinidad. Help me figure out what to get from a certified dealer." },
    { label: "Need a family car", prompt: "I need a brand-new family car from a certified dealer in Trinidad. Space, safety and value matter most." },
    { label: "I have a budget in mind", prompt: "I want to find the best brand-new car for my budget from a certified T&T dealership." },
    { label: "Curious about EVs / Hybrids", prompt: "Tell me about new electric and hybrid cars available from certified dealers in Trinidad — are they worth it?" },
    { label: "Upgrading my current car", prompt: "I am looking to upgrade to a brand-new car in Trinidad. What are my options from certified dealerships?" },
    { label: "Just browsing", prompt: "I'm exploring what brand-new cars are available from certified dealers in Trinidad. Help me understand my options." },
  ];

  // ── CAR DATA STATE ──────────────────────────────────────────────────────────
  const [cars, setCars] = useState(() => {
    // Layer 2: try localStorage cache first for instant render
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) return JSON.parse(cached);
    } catch {}
    // Layer 3: fall back to hardcoded data
    return FALLBACK_CARS;
  });
  const [dataSource, setDataSource] = useState("loading"); // "sheet" | "cache" | "fallback" | "loading"
  const [lastUpdated, setLastUpdated] = useState(null);

  const [screen, setScreen] = useState("home");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi there! I'm Carla, your automotive AI companion.\n\nI can help you compare models, explore features, understand financing and warranty options — all for brand-new cars from certified dealerships across T&T.\n\n**Tell me, how can I help you find the right car?**" },
  ]);
  const [wizardDone, setWizardDone] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [showMatchesFloat, setShowMatchesFloat] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingIntent, setBookingIntent] = useState("Test Drive");
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [cardImageIndex, setCardImageIndex] = useState({});
  const toggleCard = (id) => setExpandedCards(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next; });
  const chatEndRef = useRef(null);

  const extractChatContext = (msgs) => {
    const userMsgs = msgs.filter(m => m.role === "user").map(m => m.content).join(" ");
    const context = [];
    const budgetMatch = userMsgs.match(/(?:budget|afford|spend|under|around|up to)[^\d]*(\d[\d,]*)/i);
    if (budgetMatch) context.push(`Budget: TT$${budgetMatch[1]}`);
    if (/family|kids|children|seats/i.test(userMsgs)) context.push("Needs: Family car");
    if (/hybrid|ev|electric|fuel.efficien/i.test(userMsgs)) context.push("Interest: Fuel efficiency / EV");
    if (/offroad|maracas|mountain|4x4/i.test(userMsgs)) context.push("Use case: Off-road / rugged terrain");
    if (/first.time|new driver/i.test(userMsgs)) context.push("Profile: First-time buyer");
    if (/luxury|premium|high.end/i.test(userMsgs)) context.push("Preference: Premium / luxury");
    if (/work|business|commercial/i.test(userMsgs)) context.push("Use case: Work / commercial");
    return context.length > 0 ? context.join(" | ") : null;
  };

  const handleWizard = (opt) => {
    setWizardDone(true);
    sendMessage(opt.prompt);
  };

  // ── FETCH FROM GOOGLE SHEET ─────────────────────────────────────────────────
  useEffect(() => {
    if (!SHEET_URL || SHEET_URL === "YOUR_GOOGLE_SHEET_CSV_URL_HERE") {
      // No sheet configured — use cache or fallback
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        const ts = localStorage.getItem(CACHE_TS_KEY);
        if (cached) { setDataSource("cache"); setLastUpdated(ts ? new Date(parseInt(ts)) : null); }
        else setDataSource("fallback");
      } catch { setDataSource("fallback"); }
      return;
    }
    fetchCarsFromSheet()
      .then(fetchedCars => {
        if (fetchedCars && fetchedCars.length > 0) {
          setCars(fetchedCars);
          setDataSource("sheet");
          const now = Date.now();
          setLastUpdated(new Date(now));
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(fetchedCars));
            localStorage.setItem(CACHE_TS_KEY, String(now));
          } catch {}
        }
      })
      .catch(() => {
        // Fetch failed — check if we already have cache or fallback loaded
        try {
          const cached = localStorage.getItem(CACHE_KEY);
          const ts = localStorage.getItem(CACHE_TS_KEY);
          if (cached) { setDataSource("cache"); setLastUpdated(ts ? new Date(parseInt(ts)) : null); }
          else setDataSource("fallback");
        } catch { setDataSource("fallback"); }
      });
  }, []);

  useEffect(() => {
    if (screen === "chat") chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    setLoading(true);
    if (screen !== "chat") { setScreen("chat"); setActiveTab("chat"); }
    const history = [...messages, { role: "user", content: msg }];
    setMessages(history);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: buildSystemPrompt(cars),
          messages: history.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.map(b => b.text || "").join("") || "I apologise — something went wrong. Please try again.";
      const updated = [...history, { role: "assistant", content: reply }];
      setMessages(updated);
      const mentioned = cars.filter(c =>
        reply.toLowerCase().includes(c.name.toLowerCase()) ||
        reply.toLowerCase().includes(c.brand.toLowerCase())
      );
      if (mentioned.length > 0)
        setMatches(prev => [...new Map([...prev, ...mentioned].map(c => [c.id, c])).values()]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Connection issue — please try again." }]);
    }
    setLoading(false);
  };

  const openLead = (car, intent = "Test Drive") => {
    setSelectedCar(car);
    setBookingIntent(intent);
    setLead({ name: "", email: "", phone: "" });
    setScreen("lead");
  };

  const submitLead = async () => {
    if (!lead.name || !lead.phone) return;
    setSubmitting(true);
    const chatContext = extractChatContext(messages);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          car: `${selectedCar.year} ${selectedCar.brand} ${selectedCar.name}`,
          dealership: selectedCar.dealership,
          price: fmt(selectedCar.price),
          intent: bookingIntent,
          context: chatContext,
        }),
      });
    } catch (err) {
      console.error("Lead submission error:", err);
    }
    setSubmitting(false);
    setScreen("thanks");
  };

  const filteredCars = filterCars(cars, activeFilter);

  return (
    <div style={s.root}>
      <style>{css}</style>

      {/* ── NAV ── */}
      <nav style={s.nav}>
        <button style={s.logoBtn} onClick={() => setScreen("home")}>
          <div style={s.logoMark}><Icon.logo /></div>
          <div>
            <div style={s.logoName}>Carla<span style={s.logoAccent}> AI</span></div>
            <div style={s.logoSub}>Trinidad & Tobago's AI Car Advisor</div>
          </div>
        </button>
        <div style={s.navRight}>
          {dataSource === "cache" && SHEET_URL !== "YOUR_GOOGLE_SHEET_CSV_URL_HERE" && <div style={s.dataTag} title={lastUpdated ? "Last synced: " + lastUpdated.toLocaleString() : "Cached data"}>Cached</div>}
          {dataSource === "fallback" && SHEET_URL !== "YOUR_GOOGLE_SHEET_CSV_URL_HERE" && <div style={{ ...s.dataTag, background: "#FEF3C7", color: "#92400E" }}>Offline mode</div>}
          {screen !== "home" && <button style={s.navGhost} onClick={() => setScreen("home")}>Home</button>}
          <button style={s.navGhost} className="nav-browse" onClick={() => { setScreen("home"); setTimeout(() => document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" }), 100); }}>
            <Icon.grid /> Browse Vehicles
          </button>
          <button style={s.navPrimary} className="nav-cta" onClick={() => setScreen("chat")}>Start Matching</button>
        </div>
      </nav>

      {/* ══════════════════════════════
          HOME
      ══════════════════════════════ */}
      {screen === "home" && (
        <div style={s.homePage}>

          {/* HERO */}
          <section style={s.heroSection}>
            {/* Background blobs */}
            <div style={s.blob1} />
            <div style={s.blob2} />
            <div style={s.blob3} />

            <div style={s.heroInner} className="fade-up">
              {/* Left */}
              <div style={s.heroLeft}>
                <div style={s.heroPill}>
                  <span style={s.pillDot} />
                  The Only AI Car Advisor in Trinidad and Tobago
                </div>
                <h1 style={s.heroTitle}>
                  Find Your New Car<br />
                  <span style={s.heroGradText}>in Trinidad & Tobago</span>
                </h1>
                <p style={s.heroBody}>
                  Tell Carla your preferences — budget, lifestyle and family size. Our AI finds the best brand-new car from certified dealerships across Trinidad and Tobago. Free to use, zero pressure.
                </p>
                <div style={s.heroCapabilities}>
                  {[
                    "Brand-new cars only",
                    "Authorized dealers",
                    "Real prices and financing estimates",
                    "Safety & warranty guidance",
                  ].map(text => (
                    <div key={text} style={s.heroCap}>
                      <svg style={s.heroCapCheck} viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7.5" stroke="#4F46E5" strokeOpacity="0.25"/><path d="M5 8l2.2 2.2L11 5.8" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span style={s.heroCapText}>{text}</span>
                    </div>
                  ))}
                </div>
                <div style={s.heroButtons}>
                  <button style={s.heroCta} className="hero-cta" onClick={() => setScreen("chat")}>
                    Talk to Carla AI
                    <Icon.arrowRight />
                  </button>
                  <button style={s.heroSecondary} className="hero-sec"
                    onClick={() => document.getElementById("browse")?.scrollIntoView({ behavior: "smooth" })}>
                    Browse Cars
                  </button>
                </div>

                {/* Stats row */}
                <div style={s.statsRow}>
                  {[
                    { val: "8+", label: "New Vehicles" },
                    { val: "Free", label: "To Use" },
                    { val: "100%", label: "Certified Dealers" },
                  ].map(st => (
                    <div key={st.label} style={s.statItem}>
                      <div style={s.statVal}>{st.val}</div>
                      <div style={s.statLabel}>{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Widget */}
              <div style={s.widgetWrap} className="fade-up-2">
                <div style={s.widget}>
                  <div style={s.widgetGlow} />
                  <div style={s.widgetHeader}>
                    <div style={s.widgetAvatar}><Icon.logo /></div>
                    <div>
                      <div style={s.widgetName}>Carla AI</div>
                      <div style={s.widgetStatus}><span style={s.onlineDot} /> Available now</div>
                    </div>
                    <div style={s.widgetBadge}>AI</div>
                  </div>
                  <div style={s.widgetMsg}>
                    Hi, I'm Carla! Your automotive AI companion. Tell me your preferences: budget, lifestyle, family size. I'll match you to the perfect brand-new car that suits your needs.
                  </div>
                  <div style={s.widgetHint}>
                    Ask me anything: features, financing, which cars suit T&T roads, EV charging, warranty comparisons...
                  </div>
                  <div style={s.widgetChips}>
                    {SUGGESTIONS.slice(0, 3).map((q, i) => (
                      <button key={i} style={s.widgetChip} className="w-chip" onClick={() => sendMessage(q)}>
                        {q}
                      </button>
                    ))}
                  </div>
                  <div style={s.widgetInput}>
                    <input style={s.widgetInputField} placeholder="Ask anything about cars in T&T..."
                      onKeyDown={e => { if (e.key === "Enter" && e.target.value.trim()) { sendMessage(e.target.value); e.target.value = ""; } }} />
                    <button style={s.widgetSend} className="w-send"
                      onClick={e => { const i = e.currentTarget.previousSibling; if (i.value.trim()) { sendMessage(i.value); i.value = ""; } }}>
                      <Icon.send />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section style={s.howSection} className="fade-up-2">
            <div style={s.howInner}>
              <div style={s.eyebrow}>How Carla AI Works</div>
              <h2 style={s.sectionTitle}>Three steps to your next car</h2>
              <div style={s.howGrid}>
                {[
                  { step: "01", title: "Tell us your preferences", desc: "Share your budget, lifestyle and what matters most — or just describe what you need in plain English. No forms, just a conversation." },
                  { step: "02", title: "AI finds your best match", desc: "Carla AI compares every brand-new car available from certified T&T dealerships — price, warranty, fuel costs, safety — and surfaces the ones that fit your life." },
                  { step: "03", title: "Connect with a certified dealer", desc: "Found the one? Request a test drive directly from the app. A certified TT dealer rep will reach out to confirm at a time that suits you." },
                ].map(h => (
                  <div key={h.step} style={s.howCard}>
                    <div style={s.howStep}>{h.step}</div>
                    <div style={s.howTitle}>{h.title}</div>
                    <div style={s.howDesc}>{h.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SMART GROUPS */}
          <section style={s.section} className="fade-up-2">
            <div style={s.sectionHead}>
              <div>
                <div style={s.eyebrow}>Browse by Category</div>
                <h2 style={s.sectionTitle}>Find What Fits Your Life</h2>
              </div>
            </div>
            <div style={s.groupGrid}>
              {SMART_GROUPS.map(g => {
                const GIcon = Icon[g.icon] || Icon.car;
                const groupCars = getGroupCars(cars, g);
                if (groupCars.length === 0) return null;
                return (
                  <button key={g.label} style={s.groupCard} className="group-card"
                    onClick={() => sendMessage(`Show me the ${g.label} cars available in T&T`)}>
                    <div style={{ ...s.groupIcon, background: `linear-gradient(135deg, ${g.from}, ${g.to})` }}>
                      <GIcon />
                    </div>
                    <div style={s.groupLabel}>{g.label}</div>
                    <div style={s.groupSub}>{g.sub}</div>
                    <div style={s.groupCount}>{groupCars.length} vehicle{groupCars.length !== 1 ? "s" : ""}</div>
                    <div style={{ ...s.groupArrow, color: g.from }}><Icon.arrowRight /></div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* CAR GRID */}
          <section id="browse" style={s.section} className="fade-up-3">
            <div style={s.sectionHead}>
              <div>
                <div style={s.eyebrow}>Full Inventory</div>
                <h2 style={s.sectionTitle}>Browse & Compare</h2>
              </div>
              <button style={s.sectionBtn} className="hero-cta" onClick={() => setScreen("chat")}>
                Let Carla Match Me <Icon.arrowRight />
              </button>
            </div>

            <div style={s.filterRow}>
              {FILTERS.map(f => (
                <button key={f}
                  style={{ ...s.filterPill, ...(activeFilter === f ? s.filterOn : s.filterOff) }}
                  onClick={() => setActiveFilter(f)}>
                  {f}
                </button>
              ))}
            </div>

            <div style={s.carGrid}>
              {filteredCars.map((car, idx) => {
                const carImages = [car.image, car.image2, car.image3, car.image4].filter(Boolean);
                const imgIdx = cardImageIndex[car.id] || 0;
                const currentImg = carImages[imgIdx] || car.image;
                return (
                <div key={car.id} style={s.carCard} className="car-card">
                  {/* Full bleed image header with gallery */}
                  <div style={s.cardImageWrap}>
                    <img src={currentImg} alt={car.name} style={s.cardImage} onError={e => { e.target.style.display="none"; e.target.parentNode.style.background=car.gradient; }} />
                    <div style={{ ...s.cardImageOverlay, background: `linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.08) 100%)` }} />
                    <div style={s.cardHeaderTop}>
                      <div style={s.cardBrand}>{car.brand}</div>
                      {car.badge && <div style={s.cardBadge}>{car.badge}</div>}
                    </div>
                    {/* Gallery dots + arrows */}
                    {carImages.length > 1 && (
                      <>
                        <button style={s.imgArrowL} onClick={e => { e.stopPropagation(); setCardImageIndex(prev => ({ ...prev, [car.id]: (imgIdx - 1 + carImages.length) % carImages.length })); }}>&#8249;</button>
                        <button style={s.imgArrowR} onClick={e => { e.stopPropagation(); setCardImageIndex(prev => ({ ...prev, [car.id]: (imgIdx + 1) % carImages.length })); }}>&#8250;</button>
                        <div style={s.imgDots}>
                          {carImages.map((_, di) => (
                            <span key={di} style={{ ...s.imgDot, opacity: di === imgIdx ? 1 : 0.4, transform: di === imgIdx ? "scale(1.3)" : "scale(1)" }}
                              onClick={e => { e.stopPropagation(); setCardImageIndex(prev => ({ ...prev, [car.id]: di })); }} />
                          ))}
                        </div>
                        <div style={s.imgCounter}>{imgIdx + 1} / {carImages.length}</div>
                      </>
                    )}
                    <div style={s.cardOverlayContent}>
                      <div style={s.cardName}>{car.year} {car.name}</div>
                      <div style={s.cardType}>{car.type} · {car.seats} Seats · {car.fuel}</div>
                      <div style={s.cardPriceRow}>
                        <div style={s.cardPrice}>{fmt(car.price)}</div>
                        <div style={s.cardMonthly}>{car.monthlyFuel} /mo est.</div>
                      </div>
                    </div>
                  </div>

                  {/* Key facts */}
                  <div style={s.cardBody}>
                    <div style={s.keyGrid}>
                      {[
                        { icon: <Icon.shield />, label: "Warranty", val: car.warranty },
                        { icon: <Icon.star />, label: "Safety", val: car.safety },
                        { icon: <Icon.fuel />, label: "Fuel Type", val: car.fuel },
                        { icon: <Icon.users />, label: "Seats", val: `${car.seats} passengers` },
                      ].map(k => (
                        <div key={k.label} style={s.keyBox}>
                          <div style={{ ...s.keyIconBox, color: car.accent }}>{k.icon}</div>
                          <div style={s.keyLabel}>{k.label}</div>
                          <div style={s.keyVal}>{k.val}</div>
                        </div>
                      ))}
                    </div>

                    <p style={s.cardDesc}>{car.desc}</p>

                    {expandedCards.has(car.id) && (
                      <div style={s.expandBox} className="fade-up">
                        <div style={s.expandTitle}>Key Features</div>
                        <div style={s.featTags}>
                          {car.features.map(f => (
                            <span key={f} style={{ ...s.featTag, background: car.accent + "15", color: car.accent, borderColor: car.accent + "30" }}>{f}</span>
                          ))}
                        </div>
                        <div style={s.expandDetails}>
                          <div style={s.expandRow}><span style={s.expandKey}>Certified Dealer</span><span style={s.expandVal}>{car.dealership}</span></div>
                          {car.evRange && <div style={s.expandRow}><span style={s.expandKey}>Electric Range</span><span style={s.expandVal}>{car.evRange} km per charge</span></div>}
                        </div>
                      </div>
                    )}

                    <div style={s.cardActions}>
                      <button style={s.actionGhost} className="action-ghost"
                        onClick={() => toggleCard(car.id)}>
                        {expandedCards.has(car.id) ? <><Icon.chevUp /> Less</> : <><Icon.chevDown /> Features</>}
                      </button>
                      <button style={{ ...s.actionAsk, color: car.accent, borderColor: car.accent + "40", background: car.accent + "10" }}
                        className="action-ask"
                        onClick={() => sendMessage(`Tell me about the ${car.year} ${car.brand} ${car.name}.`)}>
                        Ask Carla
                      </button>
                    </div>
                    {/* Booking intent buttons */}
                    <div style={s.intentRow}>
                      {["Test Drive", "View This Car", "Contact Me"].map(intent => (
                        <button key={intent}
                          style={{ ...s.intentBtn, background: car.gradient }}
                          className="action-book"
                          onClick={() => openLead(car, intent)}>
                          {intent}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                );
              })}
            </div>
          </section>

          {/* FOOTER */}
          <footer style={s.footer}>
            <div style={s.footerInner}>
              <div style={s.footerLogo}>
                <div style={s.logoMark}><Icon.logo /></div>
                <div>
                  <div style={s.logoName}>Carla<span style={s.logoAccent}> AI</span></div>
                  <div style={s.logoSub}>Trinidad & Tobago's AI Car Advisor</div>
                </div>
              </div>
              <p style={s.footerText}>Free to use. Helping car buyers find brand-new vehicles from certified dealerships across Trinidad and Tobago.</p>
            </div>
          </footer>
        </div>
      )}

      {/* ══════════════════════════════
          CHAT
      ══════════════════════════════ */}
      {screen === "chat" && (
        <div style={s.chatPage}>
          <div style={s.tabs}>
            <button style={{ ...s.tabBtn, ...(activeTab === "chat" ? s.tabOn : s.tabOff) }} onClick={() => setActiveTab("chat")}>
              <Icon.chat /> Chat
            </button>
            <button style={{ ...s.tabBtn, ...(activeTab === "matches" ? s.tabOn : s.tabOff) }} onClick={() => setActiveTab("matches")}>
              <Icon.bookmark /> My Matches {matches.length > 0 && <span style={s.badge}>{matches.length}</span>}
            </button>

          </div>

          {activeTab === "chat" && (
            <div style={s.chatWrap}>
              <div style={s.msgList}>
                {messages.map((m, i) => (
                  <div key={i} style={{ ...s.msgRow, ...(m.role === "user" ? s.msgRowUser : {}) }}>
                    {m.role === "assistant" && <div style={s.aiAvatar}><Icon.logo /></div>}
                    <div style={{ ...s.bubble, ...(m.role === "user" ? s.bubbleUser : s.bubbleAI) }}>
                      {renderMarkdown(m.content)}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div style={s.msgRow}>
                    <div style={s.aiAvatar}><Icon.logo /></div>
                    <div style={{ ...s.bubble, ...s.bubbleAI, padding: "0.75rem 1rem" }}>
                      <span className="dot" />&ensp;<span className="dot" style={{ animationDelay: "0.2s" }} />&ensp;<span className="dot" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* WIZARD — shown until user picks an option or types freely */}
              {!wizardDone && messages.length <= 2 && !loading && (
                <div style={s.wizardArea}>
                  <div style={s.wizardGrid}>
                    {WIZARD_OPTIONS.map((opt, i) => (
                      <button key={i} style={s.wizardBtn} className="wizard-btn" onClick={() => handleWizard(opt)}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  <div style={s.wizardOr}>
                    <span style={s.wizardOrLine} />
                    <span style={s.wizardOrText}>or just type your question below</span>
                    <span style={s.wizardOrLine} />
                  </div>
                </div>
              )}

              {/* After wizard — show quick suggestions as compact chips */}
              {wizardDone && messages.length <= 4 && (
                <div style={s.chipsArea}>
                  <div style={s.chipsLabel}>You can also ask me about →</div>
                  <div style={s.chipsScroll}>
                    {["Financing options in T&T", "Insurance tips", "Best car for Maracas road", "EV charging costs", "Import duties explained"].map((q, i) => (
                      <button key={i} style={s.chip} className="chip" onClick={() => sendMessage(q)}>{q}</button>
                    ))}
                  </div>
                </div>
              )}

              {matches.length > 0 && (
                <button style={s.nudge} className="nudge" onClick={() => setActiveTab("matches")}>
                  <Icon.car />
                  <span>{matches.length} vehicle{matches.length > 1 ? "s" : ""} matched — view now</span>
                  <Icon.arrowRight />
                </button>
              )}

              <div style={s.inputBar}>
                <input style={s.chatInput} placeholder="Ask anything about cars in Trinidad & Tobago..."
                  value={input} onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && sendMessage()} disabled={loading} />
                <button style={{ ...s.sendBtn, opacity: !input.trim() || loading ? 0.4 : 1 }}
                  className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading}>
                  <Icon.send />
                </button>
              </div>
            </div>
          )}

          {activeTab === "matches" && (
            <div style={s.matchesWrap}>
              {matches.length === 0 ? (
                <div style={s.noMatch}>
                  <div style={s.noMatchIcon}><Icon.car /></div>
                  <h3 style={s.noMatchTitle}>No vehicles matched yet</h3>
                  <p style={s.noMatchBody}>Chat with Carla AI and vehicles will appear here as you go.</p>
                  <button style={s.noMatchBtn} className="hero-cta" onClick={() => setActiveTab("chat")}>Start a Conversation</button>
                </div>
              ) : (
                <div style={s.matchList}>
                  {matches.map(car => (
                    <div key={car.id} style={s.carCard} className="car-card">
                      <div style={s.cardImageWrap}>
                        <img src={car.image} alt={car.name} style={s.cardImage} onError={e => { e.target.style.display="none"; e.target.parentNode.style.background=car.gradient; }} />
                        <div style={{ ...s.cardImageOverlay, background: `linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.08) 100%)` }} />
                        <div style={s.cardHeaderTop}>
                          <div style={s.cardBrand}>{car.brand}</div>
                          {car.badge && <div style={s.cardBadge}>{car.badge}</div>}
                        </div>
                        <div style={s.cardOverlayContent}>
                          <div style={s.cardName}>{car.year} {car.name}</div>
                          <div style={s.cardType}>{car.type} · {car.seats} Seats · {car.fuel}</div>
                          <div style={s.cardPriceRow}>
                            <div style={s.cardPrice}>{fmt(car.price)}</div>
                            <div style={s.cardMonthly}>{car.monthlyFuel} /mo est.</div>
                          </div>
                        </div>
                      </div>
                      <div style={s.cardBody}>
                        <div style={s.keyGrid}>
                          {[
                            { icon: <Icon.shield />, label: "Warranty", val: car.warranty },
                            { icon: <Icon.star />, label: "Safety", val: car.safety },
                            { icon: <Icon.fuel />, label: "Fuel Type", val: car.fuel },
                            { icon: <Icon.users />, label: "Seats", val: `${car.seats} passengers` },
                          ].map(k => (
                            <div key={k.label} style={s.keyBox}>
                              <div style={{ ...s.keyIconBox, color: car.accent }}>{k.icon}</div>
                              <div style={s.keyLabel}>{k.label}</div>
                              <div style={s.keyVal}>{k.val}</div>
                            </div>
                          ))}
                        </div>
                        <p style={s.cardDesc}>{car.desc}</p>
                        <div style={s.intentRow}>
                          {["Test Drive", "View This Car", "Contact Me"].map(intent => (
                            <button key={intent}
                              style={{ ...s.intentBtn, background: car.gradient }}
                              className="action-book"
                              onClick={() => openLead(car, intent)}>
                              {intent}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── LEAD FORM ── */}
      {screen === "lead" && selectedCar && (
        <div style={s.formPage} className="fade-up">
          <div style={s.formCard}>
            <div style={{ ...s.cardHeader, background: selectedCar.gradient, borderRadius: "14px 14px 0 0", marginBottom: "1.25rem" }}>
              <div style={s.cardBrand}>{selectedCar.brand}</div>
              <div style={s.cardName}>{selectedCar.year} {selectedCar.name}</div>
              <div style={s.cardPrice}>{fmt(selectedCar.price)}</div>
            </div>
            <div style={s.formInner}>
              {/* Intent badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <div style={s.formEyebrow}>{bookingIntent === "Test Drive" ? "Book a Test Drive" : bookingIntent === "View This Car" ? "Book a Viewing" : "Request Contact"}</div>
                <div style={{ ...s.intentBadge, background: selectedCar.accent + "18", color: selectedCar.accent, borderColor: selectedCar.accent + "35" }}>{bookingIntent}</div>
              </div>
              <div style={s.formFacts}>
                {[
                  { icon: <Icon.shield />, val: selectedCar.warranty },
                  { icon: <Icon.star />, val: selectedCar.safety },
                  { icon: <Icon.fuel />, val: selectedCar.fuel + " · " + selectedCar.monthlyFuel },
                ].map((f, i) => (
                  <div key={i} style={s.formFact}>
                    <span style={{ color: selectedCar.accent }}>{f.icon}</span>
                    <span style={s.formFactVal}>{f.val}</span>
                  </div>
                ))}
              </div>
              <p style={s.formNote}>
                {bookingIntent === "Test Drive" && <>A representative from <strong>{selectedCar.dealership}</strong> will contact you to arrange your test drive at a time that suits you.</>}
                {bookingIntent === "View This Car" && <>A representative from <strong>{selectedCar.dealership}</strong> will reach out to schedule a viewing at their showroom.</>}
                {bookingIntent === "Contact Me" && <>A representative from <strong>{selectedCar.dealership}</strong> will call you directly to discuss this vehicle and answer any questions.</>}
              </p>
              <div style={s.formFields}>
                {[
                  { key: "name", label: "Full Name", req: true, placeholder: "Your full name", type: "text" },
                  { key: "phone", label: "WhatsApp / Phone", req: true, placeholder: "868-xxx-xxxx", type: "tel" },
                  { key: "email", label: "Email Address", req: false, placeholder: "Optional", type: "email" },
                ].map(({ key, label, req, placeholder, type }) => (
                  <div key={key} style={s.formField}>
                    <label style={s.formLabel}>{label}{req && <span style={{ color: selectedCar.accent }}> *</span>}</label>
                    <input type={type} style={{ ...s.formInput, ...(lead[key] ? { borderColor: selectedCar.accent + "60" } : {}) }}
                      placeholder={placeholder} value={lead[key]} onChange={e => setLead({ ...lead, [key]: e.target.value })} />
                  </div>
                ))}
              </div>
              <button style={{ ...s.formSubmit, background: selectedCar.gradient, opacity: !lead.name || !lead.phone ? 0.4 : 1 }}
                className="action-book" disabled={!lead.name || !lead.phone || submitting} onClick={submitLead}>
                {submitting ? "Sending Request..." : bookingIntent === "Test Drive" ? "Submit Test Drive Request" : bookingIntent === "View This Car" ? "Submit Viewing Request" : "Request Contact"}
              </button>
              <button style={s.formBack} onClick={() => setScreen(selectedCar ? "home" : "chat")}>Go back</button>
            </div>
          </div>
        </div>
      )}

      {/* ── THANKS ── */}
      {screen === "thanks" && selectedCar && (
        <div style={s.thanksPage} className="fade-up">
          <div style={s.thanksCard}>
            <div style={{ ...s.cardHeader, background: selectedCar.gradient, borderRadius: "16px 16px 0 0", marginBottom: "1.5rem" }}>
              <div style={s.cardBrand}>{selectedCar.brand}</div>
              <div style={s.cardName}>{selectedCar.year} {selectedCar.name}</div>
              <div style={s.cardPrice}>{fmt(selectedCar.price)}</div>
            </div>
            <div style={s.thanksInner}>
              <div style={{ ...s.thanksCheck, background: selectedCar.accent + "20", color: selectedCar.accent }}>
                <Icon.check />
              </div>
              <h2 style={s.thanksTitle}>Request Received!</h2>
              <p style={s.thanksSub}>
                {bookingIntent === "Test Drive" && <>Your test drive request for the <strong>{selectedCar.year} {selectedCar.brand} {selectedCar.name}</strong> has been submitted.</>}
                {bookingIntent === "View This Car" && <>Your viewing request for the <strong>{selectedCar.year} {selectedCar.brand} {selectedCar.name}</strong> has been submitted.</>}
                {bookingIntent === "Contact Me" && <>Your contact request for the <strong>{selectedCar.year} {selectedCar.brand} {selectedCar.name}</strong> has been submitted.</>}
                {" "}A representative from <strong>{selectedCar.dealership}</strong> will be in contact shortly.
              </p>
              <button style={{ ...s.formSubmit, background: selectedCar.gradient, width: "100%" }}
                className="action-book" onClick={() => setScreen("home")}>
                Return to Home
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ── FLOATING MATCHES BUTTON ── */}
      {matches.length > 0 && screen !== "chat" && (
        <button
          style={s.floatMatches}
          className="float-matches"
          onClick={() => { setScreen("chat"); setActiveTab("matches"); }}
        >
          <Icon.bookmark />
          <span>{matches.length} Match{matches.length > 1 ? "es" : ""}</span>
        </button>
      )}
    </div>
  );
}

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const blue = "#4F46E5";
const indigo = "#6366F1";
const gray50 = "#F9FAFB";
const gray100 = "#F3F4F6";
const gray200 = "#E5E7EB";
const gray300 = "#D1D5DB";
const gray400 = "#9CA3AF";
const gray500 = "#6B7280";
const gray600 = "#4B5563";
const gray700 = "#374151";
const gray900 = "#111827";
const white = "#FFFFFF";

const s = {
  root: { minHeight: "100vh", background: white, color: gray900, fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" },

  // NAV
  nav: { display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0", padding: "0.85rem 1.5rem", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${gray200}`, position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  logoBtn: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.65rem", padding: 0 },
  logoMark: { width: 38, height: 38, borderRadius: 10, background: "#0F172A", color: white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 14px rgba(15,23,42,0.22)" },
  logoName: { fontSize: "1.1rem", fontWeight: 800, color: gray900, letterSpacing: "-0.025em", lineHeight: 1.15, textAlign: "left" },
  logoAccent: { background: "linear-gradient(90deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  logoSub: { fontSize: "0.62rem", color: gray400, fontWeight: 500, letterSpacing: "0.04em", textAlign: "left" },
  navRight: { display: "flex", gap: "0.5rem", alignItems: "center", marginLeft: "auto" },
  navGhost: { background: "none", border: `1px solid ${gray200}`, color: gray600, borderRadius: 8, padding: "0.45rem 0.9rem", cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.35rem" },
  dataTag: { fontSize: "0.65rem", fontWeight: 700, background: "#DCFCE7", color: "#166534", borderRadius: 20, padding: "0.2rem 0.65rem", letterSpacing: "0.04em" },
  navPrimary: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, border: "none", borderRadius: 8, padding: "0.5rem 1.1rem", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 12px rgba(79,70,229,0.3)" },

  // HOME
  homePage: { flex: 1, display: "flex", flexDirection: "column" },

  // HERO
  heroSection: { position: "relative", overflow: "hidden", padding: "3.5rem 1.5rem 3rem", background: "#FAFAFA" },
  blob1: { position: "absolute", top: -120, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", pointerEvents: "none" },
  blob2: { position: "absolute", bottom: -100, left: -100, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)", pointerEvents: "none" },
  blob3: { position: "absolute", top: "40%", left: "40%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", pointerEvents: "none" },

  heroInner: { maxWidth: 980, margin: "0 auto", display: "flex", gap: "3rem", alignItems: "flex-start", flexWrap: "wrap", position: "relative", zIndex: 1 },
  heroLeft: { flex: 1, minWidth: 280, display: "flex", flexDirection: "column", gap: "1.2rem" },
  heroPill: { display: "inline-flex", alignItems: "center", gap: "0.5rem", background: white, border: `1px solid ${gray200}`, color: gray600, fontSize: "0.74rem", fontWeight: 600, padding: "0.35rem 0.9rem", borderRadius: 20, alignSelf: "flex-start", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" },
  pillDot: { width: 7, height: 7, borderRadius: "50%", background: "#10B981", flexShrink: 0 },
  heroTitle: { fontSize: "clamp(2.1rem, 6vw, 3.4rem)", fontWeight: 900, margin: 0, lineHeight: 1.07, letterSpacing: "-0.035em", color: gray900 },
  heroGradText: { background: "linear-gradient(90deg, #4F46E5, #EC4899, #F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "gradShift 4s ease infinite" },
  heroBody: { color: gray500, fontSize: "1rem", lineHeight: 1.75, margin: 0, maxWidth: 420 },
  heroButtons: { display: "flex", gap: "0.75rem", flexWrap: "wrap" },
  heroCta: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, border: "none", borderRadius: 10, padding: "0.85rem 1.5rem", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 6px 20px rgba(79,70,229,0.3)" },
  heroSecondary: { background: white, color: gray700, border: `1.5px solid ${gray200}`, borderRadius: 10, padding: "0.85rem 1.5rem", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit" },

  statsRow: { display: "flex", gap: "1.5rem", paddingTop: "0.5rem" },
  statItem: { display: "flex", flexDirection: "column", gap: 2 },
  statVal: { fontSize: "1.5rem", fontWeight: 900, color: gray900, letterSpacing: "-0.03em" },
  statLabel: { fontSize: "0.72rem", color: gray400, fontWeight: 500 },

  widgetWrap: { flex: 1, minWidth: 280, maxWidth: 420 },
  widget: { background: white, border: `1px solid ${gray200}`, borderRadius: 18, padding: "1.35rem", boxShadow: "0 20px 60px rgba(79,70,229,0.12), 0 4px 16px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: "1rem", position: "relative", overflow: "hidden" },
  widgetGlow: { position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #4F46E5, #EC4899, #F59E0B)", borderRadius: "18px 18px 0 0" },
  widgetHeader: { display: "flex", gap: "0.75rem", alignItems: "center" },
  widgetAvatar: { width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  widgetName: { fontWeight: 700, fontSize: "0.95rem", color: gray900 },
  widgetStatus: { display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.74rem", color: "#059669", fontWeight: 500 },
  onlineDot: { display: "inline-block", width: 7, height: 7, borderRadius: "50%", background: "#059669", animation: "blink 2s ease infinite" },
  widgetBadge: { marginLeft: "auto", background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, borderRadius: 6, padding: "0.2rem 0.55rem", fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.05em" },
  widgetMsg: { background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", border: `1px solid rgba(79,70,229,0.15)`, borderRadius: 12, borderTopLeftRadius: 3, padding: "0.85rem 1rem", color: "#3730A3", fontSize: "0.9rem", lineHeight: 1.65 },
  widgetChips: { display: "flex", flexDirection: "column", gap: "0.4rem" },
  widgetChip: { background: gray50, border: `1px solid ${gray200}`, color: gray700, borderRadius: 8, padding: "0.5rem 0.85rem", fontSize: "0.8rem", cursor: "pointer", fontFamily: "inherit", textAlign: "left", fontWeight: 500, transition: "all 0.15s" },
  widgetInput: { display: "flex", gap: "0.5rem" },
  widgetInputField: { flex: 1, background: gray50, border: `1.5px solid ${gray200}`, borderRadius: 10, padding: "0.68rem 0.9rem", color: gray900, fontSize: "0.88rem", fontFamily: "inherit", outline: "none" },
  widgetSend: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, border: "none", borderRadius: 10, padding: "0.68rem 0.9rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(79,70,229,0.3)" },



  // SECTIONS
  section: { padding: "2.5rem 1.5rem", maxWidth: 980, margin: "0 auto", width: "100%" },
  sectionHead: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", gap: "1rem", flexWrap: "wrap" },
  eyebrow: { fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", color: gray500, textTransform: "uppercase", marginBottom: "0.4rem" },
  sectionTitle: { fontSize: "1.5rem", fontWeight: 800, color: gray900, margin: 0, letterSpacing: "-0.025em" },
  sectionBtn: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, border: "none", borderRadius: 9, padding: "0.65rem 1.2rem", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "0.4rem", boxShadow: "0 4px 12px rgba(79,70,229,0.25)", flexShrink: 0 },

  // GROUPS
  groupGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" },
  groupCard: { background: white, border: `1px solid ${gray200}`, borderRadius: 14, padding: "1.15rem", cursor: "pointer", textAlign: "left", display: "flex", flexDirection: "column", gap: "0.4rem", transition: "all 0.2s", fontFamily: "inherit", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" },
  groupIcon: { width: 36, height: 36, borderRadius: 9, color: white, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.2rem", boxShadow: "0 4px 10px rgba(0,0,0,0.15)" },
  groupLabel: { fontWeight: 700, fontSize: "0.92rem", color: gray900 },
  groupSub: { color: gray500, fontSize: "0.78rem", lineHeight: 1.5 },
  groupCount: { fontSize: "0.68rem", fontWeight: 700, color: gray400, marginTop: "0.1rem" },
  groupArrow: { marginTop: "0.4rem" },

  // FILTERS
  filterRow: { display: "flex", gap: "0.45rem", overflowX: "auto", paddingBottom: "0.5rem", marginBottom: "1.25rem" },
  filterPill: { borderRadius: 20, padding: "0.4rem 1rem", fontSize: "0.82rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, whiteSpace: "nowrap", border: "none", transition: "all 0.15s" },
  filterOn: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, boxShadow: "0 4px 10px rgba(79,70,229,0.3)" },
  filterOff: { background: gray100, color: gray600 },

  // CAR CARDS
  carGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1.1rem", alignItems: "start" },
  carCard: { background: white, border: `1px solid ${gray200}`, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", transition: "all 0.22s", alignSelf: "start" },
  cardImageWrap: { position: "relative", height: 200, overflow: "hidden", background: "#1a1a2e", flexShrink: 0 },
  cardImage: { width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.4s ease" },
  cardImageOverlay: { position: "absolute", inset: 0, pointerEvents: "none" },
  cardOverlayContent: { position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem 1.15rem 1rem", color: white },
  cardHeader: { padding: "1.25rem 1.15rem 1.1rem", color: white, position: "relative" },
  cardHeaderTop: { position: "absolute", top: 0, left: 0, right: 0, display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "1rem 1.15rem", zIndex: 1 },
  cardBrand: { fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: white, textShadow: "0 1px 4px rgba(0,0,0,0.5)" },
  cardBadge: { background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "0.18rem 0.6rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.04em" },
  cardName: { fontSize: "1.25rem", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.3rem" },
  cardType: { fontSize: "0.76rem", opacity: 0.8, fontWeight: 500 },
  cardPriceRow: { display: "flex", alignItems: "baseline", gap: "0.65rem", marginTop: "0.6rem", flexWrap: "wrap" },
  cardPrice: { fontSize: "1.3rem", fontWeight: 900, letterSpacing: "-0.02em" },
  cardMonthly: { fontSize: "0.78rem", fontWeight: 700, opacity: 0.88, letterSpacing: "0.01em" },

  cardBody: { padding: "1rem 1.1rem 1.1rem", display: "flex", flexDirection: "column", gap: "0.85rem", flex: 1 },
  keyGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" },
  keyBox: { background: gray50, border: `1px solid ${gray100}`, borderRadius: 10, padding: "0.6rem 0.7rem" },
  keyIconBox: { display: "flex", marginBottom: 3 },
  keyLabel: { fontSize: "0.6rem", color: gray400, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "monospace", fontWeight: 600, marginBottom: 3 },
  keyVal: { fontSize: "0.8rem", fontWeight: 700, color: gray900, lineHeight: 1.3 },

  cardDesc: { color: gray500, fontSize: "0.85rem", lineHeight: 1.65, margin: 0 },

  expandBox: { background: gray50, border: `1px solid ${gray200}`, borderRadius: 10, padding: "0.9rem", display: "flex", flexDirection: "column", gap: "0.75rem" },
  expandTitle: { fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.15em", color: gray400, textTransform: "uppercase", fontFamily: "monospace" },
  featTags: { display: "flex", flexWrap: "wrap", gap: "0.35rem" },
  featTag: { border: "1px solid", borderRadius: 20, padding: "0.2rem 0.65rem", fontSize: "0.74rem", fontWeight: 600 },
  expandDetails: { display: "flex", flexDirection: "column", gap: "0.35rem", borderTop: `1px solid ${gray200}`, paddingTop: "0.6rem" },
  expandRow: { display: "flex", justifyContent: "space-between", fontSize: "0.82rem" },
  expandKey: { color: gray400 },
  expandVal: { color: gray900, fontWeight: 600 },

  cardActions: { display: "flex", gap: "0.5rem", marginTop: "auto" },
  actionGhost: { background: "none", border: `1px solid ${gray200}`, color: gray500, borderRadius: 8, padding: "0.55rem 0.7rem", fontSize: "0.78rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem", flexShrink: 0, transition: "all 0.15s" },
  actionAsk: { border: "1px solid", borderRadius: 8, padding: "0.55rem 0.7rem", fontSize: "0.78rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 700, flexShrink: 0, transition: "all 0.15s" },
  actionBook: { flex: 1, color: white, border: "none", borderRadius: 8, padding: "0.6rem 0.7rem", fontSize: "0.82rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "filter 0.15s" },

  footer: { background: gray900, padding: "2rem 1.5rem", marginTop: "auto" },
  footerInner: { maxWidth: 980, margin: "0 auto", display: "flex", flexDirection: "column", gap: "0.75rem" },
  footerLogo: { display: "flex", alignItems: "center", gap: "0.65rem" },
  footerText: { color: gray500, fontSize: "0.82rem", lineHeight: 1.6, maxWidth: 500 },

  // CHAT
  chatPage: { flex: 1, display: "flex", flexDirection: "column", height: "calc(100vh - 57px)", overflow: "hidden" },
  tabs: { display: "flex", borderBottom: `1px solid ${gray200}`, background: white, flexShrink: 0 },
  tabBtn: { flex: 1, padding: "0.8rem", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", borderBottom: "2px solid transparent", transition: "all 0.15s" },
  tabOn: { color: blue, borderBottomColor: blue },
  tabSpacer: { flex: 1 },
  tabBrowseBtn: { background: "none", border: `1px solid ${gray200}`, color: gray600, borderRadius: 7, padding: "0.4rem 0.9rem", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "0.4rem", margin: "0.55rem 1rem 0.55rem 0", transition: "all 0.15s" },
  tabOff: { color: gray400 },
  badge: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, borderRadius: 20, padding: "0.1rem 0.45rem", fontSize: "0.68rem", fontWeight: 700, fontFamily: "monospace" },

  chatWrap: { flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: gray50 },
  msgList: { flex: 1, overflowY: "auto", padding: "1.25rem 1rem", display: "flex", flexDirection: "column", gap: "1rem" },
  msgRow: { display: "flex", gap: "0.6rem", alignItems: "flex-start" },
  msgRowUser: { flexDirection: "row-reverse" },
  aiAvatar: { width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, boxShadow: "0 4px 10px rgba(79,70,229,0.3)" },
  bubble: { maxWidth: "82%", padding: "0.8rem 1rem", borderRadius: 14, fontSize: "0.93rem", lineHeight: 1.7, wordBreak: "break-word" },
  bubbleAI: { background: white, border: `1px solid ${gray200}`, color: gray900, borderTopLeftRadius: 4, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" },
  bubbleUser: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, borderTopRightRadius: 4, fontWeight: 500 },

  chipsArea: { padding: "0 1rem 0.5rem", flexShrink: 0 },
  chipsLabel: { fontSize: "0.62rem", fontWeight: 700, color: gray400, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem", fontFamily: "monospace" },
  chipsScroll: { display: "flex", gap: "0.4rem", overflowX: "auto", paddingBottom: 4 },
  chip: { background: white, border: `1px solid ${gray200}`, color: gray700, borderRadius: 8, padding: "0.45rem 0.85rem", fontSize: "0.78rem", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit", fontWeight: 500, flexShrink: 0, transition: "all 0.15s" },

  nudge: { margin: "0 1rem 0.5rem", background: "linear-gradient(135deg, #EEF2FF, #F5F3FF)", border: `1px solid rgba(79,70,229,0.2)`, color: "#4338CA", borderRadius: 10, padding: "0.7rem 1rem", fontSize: "0.84rem", cursor: "pointer", fontFamily: "inherit", textAlign: "left", fontWeight: 700, flexShrink: 0, display: "flex", alignItems: "center", gap: "0.6rem" },

  inputBar: { display: "flex", gap: "0.5rem", padding: "0.75rem 1rem", borderTop: `1px solid ${gray200}`, background: white, flexShrink: 0 },
  chatInput: { flex: 1, background: gray50, border: `1.5px solid ${gray200}`, borderRadius: 10, padding: "0.75rem 1rem", color: gray900, fontSize: "0.93rem", fontFamily: "inherit", outline: "none" },
  sendBtn: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, border: "none", borderRadius: 10, padding: "0.75rem 1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 10px rgba(79,70,229,0.3)" },

  matchesWrap: { flex: 1, overflowY: "auto", padding: "1rem", background: gray50 },
  noMatch: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 2rem", gap: "0.75rem", textAlign: "center" },
  noMatchIcon: { width: 60, height: 60, borderRadius: 16, background: gray100, color: gray400, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.25rem" },
  noMatchTitle: { fontWeight: 800, fontSize: "1.15rem", color: gray900, margin: 0 },
  noMatchBody: { color: gray500, fontSize: "0.88rem", lineHeight: 1.7, maxWidth: 280, margin: 0 },
  noMatchBtn: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, border: "none", borderRadius: 9, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem", boxShadow: "0 4px 12px rgba(79,70,229,0.3)" },
  matchList: { display: "flex", flexDirection: "column", gap: "1rem" },

  // FORM
  formPage: { flex: 1, padding: "2rem 1.25rem", overflowY: "auto", background: gray50 },
  formCard: { background: white, border: `1px solid ${gray200}`, borderRadius: 16, overflow: "hidden", maxWidth: 480, margin: "0 auto", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" },
  formInner: { padding: "0 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" },
  formEyebrow: { fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.18em", background: "linear-gradient(90deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textTransform: "uppercase", fontFamily: "monospace" },
  formFacts: { display: "flex", flexDirection: "column", gap: "0.4rem", background: gray50, border: `1px solid ${gray200}`, borderRadius: 10, padding: "0.9rem" },
  formFact: { display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: gray600 },
  formFactVal: { flex: 1 },
  formNote: { color: gray500, fontSize: "0.87rem", lineHeight: 1.65, margin: 0 },
  formFields: { display: "flex", flexDirection: "column", gap: "0.85rem" },
  formField: { display: "flex", flexDirection: "column", gap: 4 },
  formLabel: { fontSize: "0.8rem", fontWeight: 700, color: gray700 },
  formInput: { background: gray50, border: `1.5px solid ${gray200}`, borderRadius: 9, padding: "0.8rem 1rem", color: gray900, fontSize: "0.93rem", fontFamily: "inherit", outline: "none", transition: "border-color 0.15s" },
  formSubmit: { color: white, border: "none", borderRadius: 10, padding: "1rem", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "filter 0.15s" },
  formBack: { background: "none", border: "none", color: gray400, cursor: "pointer", fontFamily: "inherit", fontSize: "0.83rem", padding: 0, alignSelf: "flex-start", textDecoration: "underline" },


  // HERO CAPABILITIES
  heroCapabilities: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginTop: "0.25rem" },
  heroCap: { display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.88rem", fontWeight: 500, color: gray700 },
  heroCapCheck: { width: 16, height: 16, flexShrink: 0 },
  heroCapText: { lineHeight: 1.4 },

  // WIDGET HINT
  widgetHint: { background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 8, padding: "0.6rem 0.85rem", fontSize: "0.77rem", color: "#92400E", lineHeight: 1.55 },

  // HOW IT WORKS
  howSection: { background: gray50, borderTop: `1px solid ${gray200}`, borderBottom: `1px solid ${gray200}`, padding: "2.5rem 1.5rem" },
  howInner: { maxWidth: 980, margin: "0 auto" },
  howGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1rem", marginTop: "1.5rem" },
  howCard: { background: white, border: `1px solid ${gray200}`, borderRadius: 14, padding: "1.4rem", display: "flex", flexDirection: "column", gap: "0.6rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" },
  howStep: { fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", color: gray400 },
  howTitle: { fontSize: "1rem", fontWeight: 800, color: gray900, letterSpacing: "-0.015em" },
  howDesc: { fontSize: "0.85rem", color: gray500, lineHeight: 1.7 },

  // WIZARD
  wizardArea: { padding: "0 1rem 0.75rem", flexShrink: 0 },
  wizardGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.45rem", marginBottom: "0.75rem" },
  wizardBtn: { background: white, border: `1.5px solid ${gray200}`, color: gray700, borderRadius: 10, padding: "0.65rem 0.75rem", fontSize: "0.82rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, textAlign: "left", lineHeight: 1.4, transition: "all 0.15s" },
  wizardOr: { display: "flex", alignItems: "center", gap: "0.75rem", margin: "0.25rem 0" },
  wizardOrLine: { flex: 1, height: 1, background: gray200 },
  wizardOrText: { fontSize: "0.72rem", color: gray400, fontWeight: 500, whiteSpace: "nowrap" },
  // GALLERY
  imgArrowL: { position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.45)", color: "white", border: "none", borderRadius: "50%", width: 30, height: 30, fontSize: "1.2rem", lineHeight: "1", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, transition: "background 0.15s" },
  imgArrowR: { position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.45)", color: "white", border: "none", borderRadius: "50%", width: 30, height: 30, fontSize: "1.2rem", lineHeight: "1", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2, transition: "background 0.15s" },
  imgDots: { position: "absolute", bottom: 56, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 5, zIndex: 2 },
  imgDot: { width: 6, height: 6, borderRadius: "50%", background: "white", cursor: "pointer", transition: "all 0.2s" },
  imgCounter: { position: "absolute", top: 44, right: 10, background: "rgba(0,0,0,0.5)", color: "white", fontSize: "0.65rem", fontWeight: 700, borderRadius: 10, padding: "0.15rem 0.5rem", zIndex: 2 },

  // INTENT BUTTONS
  intentRow: { display: "flex", gap: "0.4rem" },
  intentBtn: { flex: 1, color: "white", border: "none", borderRadius: 8, padding: "0.6rem 0.4rem", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit", transition: "filter 0.15s", textAlign: "center" },
  intentBadge: { fontSize: "0.7rem", fontWeight: 700, border: "1px solid", borderRadius: 20, padding: "0.15rem 0.6rem", flexShrink: 0 },

  // FLOATING MATCHES
  floatMatches: { position: "fixed", bottom: "1.5rem", right: "1.5rem", background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: "white", border: "none", borderRadius: 50, padding: "0.75rem 1.25rem", fontWeight: 700, fontSize: "0.88rem", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "0.5rem", boxShadow: "0 8px 24px rgba(79,70,229,0.4)", zIndex: 100, transition: "all 0.2s" },

  // THANKS
  thanksPage: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1.25rem", background: gray50 },
  thanksCard: { background: white, border: `1px solid ${gray200}`, borderRadius: 18, overflow: "hidden", maxWidth: 440, width: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" },
  thanksInner: { padding: "0 1.5rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", textAlign: "center" },
  thanksCheck: { width: 56, height: 56, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.5rem" },
  thanksTitle: { fontWeight: 900, fontSize: "1.7rem", margin: 0, letterSpacing: "-0.025em" },
  thanksSub: { color: gray500, fontSize: "0.92rem", lineHeight: 1.7, margin: 0 },
};

const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #F9FAFB; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-thumb { background: #D1D5DB; border-radius: 4px; }

  .fade-up   { animation: fu 0.55s ease forwards; }
  .fade-up-2 { animation: fu 0.55s ease 0.12s both; }
  .fade-up-3 { animation: fu 0.55s ease 0.24s both; }
  @keyframes fu { from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)} }

  @keyframes gradShift { 0%{background-position:0%}50%{background-position:100%}100%{background-position:0%} }
  @keyframes blink { 0%,100%{opacity:1}50%{opacity:0.4} }

  .nav-cta:hover    { filter: brightness(1.1); transform: translateY(-1px); }
  .nav-browse:hover { background: #EEF2FF !important; border-color: #4F46E5 !important; color: #4F46E5 !important; }
  .hero-cta:hover   { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(79,70,229,0.4) !important; }
  .hero-sec:hover   { background: #F3F4F6 !important; }
  .w-chip:hover     { border-color: #4F46E5 !important; background: #EEF2FF !important; color: #4338CA !important; }
  .w-send:hover     { filter: brightness(1.15); }
  .group-card:hover { border-color: #A5B4FC !important; box-shadow: 0 8px 24px rgba(79,70,229,0.12) !important; transform: translateY(-3px); }
  .car-card:hover   { border-color: #A5B4FC !important; box-shadow: 0 10px 30px rgba(79,70,229,0.1) !important; transform: translateY(-3px); }
  .car-card:hover img { transform: scale(1.04); }
  .action-ghost:hover { border-color: #4F46E5 !important; color: #4F46E5 !important; }
  .action-ask:hover { filter: brightness(0.92); }
  .action-book:hover { filter: brightness(0.88); }
  .chip:hover { border-color: #4F46E5 !important; color: #4F46E5 !important; background: #EEF2FF !important; }
  .nudge:hover { background: linear-gradient(135deg, #E0E7FF, #EDE9FE) !important; }
  .send-btn:hover { filter: brightness(1.15); }
  .tab-browse-btn:hover { background: #EEF2FF !important; border-color: #4F46E5 !important; color: #4F46E5 !important; }
  .wizard-btn:hover { border-color: #4F46E5 !important; background: #EEF2FF !important; color: #4338CA !important; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(79,70,229,0.1) !important; }
  .float-matches:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 12px 28px rgba(79,70,229,0.5) !important; }
  input:focus { border-color: #4F46E5 !important; box-shadow: 0 0 0 3px rgba(79,70,229,0.12) !important; }

  .dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #4F46E5; animation: dotP 1.2s ease infinite; }
  @keyframes dotP { 0%,80%,100%{opacity:0.2;transform:scale(0.7)}40%{opacity:1;transform:scale(1)} }

  @media (max-width: 640px) {
    .carGrid { grid-template-columns: 1fr !important; }
    .groupGrid { grid-template-columns: 1fr 1fr !important; }
    .heroInner { flex-direction: column !important; }
    .wizardGrid { grid-template-columns: 1fr !important; }
    .heroCapabilities { grid-template-columns: 1fr !important; }
  }
`;
