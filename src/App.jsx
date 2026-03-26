import { useState, useRef, useEffect } from "react";

const Icon = {
  logo: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  car: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/><path d="M3 11h18"/></svg>,
  chat: () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  shield: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  star: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  dollar: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  fuel: () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V8l7-6 7 6v14"/><path d="M17 22V12h4v10"/><path d="M9 12h6v10H9z"/></svg>,
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
};

const CARS = [
  { id: 1, name: "Corolla Cross", brand: "Toyota", type: "SUV", price: 320000, year: 2024, fuel: "Hybrid", seats: 5, warranty: "3 years / 100,000 km", safety: "5-Star ANCAP", features: ["Backup Camera", "Lane Assist", "Apple CarPlay", "Android Auto", "Adaptive Cruise Control"], tags: ["fuel-efficient", "family", "safety", "tech"], ev: false, dealership: "Toyota Trinidad", desc: "Trinidad's best-selling hybrid SUV. Exceptional fuel economy delivers real monthly savings every time you pass a petrol station.", monthlyFuel: "~TT$800 / month", badge: "Best Seller", gradient: "linear-gradient(135deg, #DC2626, #F87171)", accent: "#DC2626" },
  { id: 2, name: "X-Trail", brand: "Nissan", type: "SUV", price: 295000, year: 2024, fuel: "Petrol", seats: 7, warranty: "3 years / unlimited km", safety: "5-Star ANCAP", features: ["7 Seats", "360° Camera", "Apple CarPlay", "Blind Spot Warning", "Intelligent AWD"], tags: ["family", "space", "safety", "offroad"], ev: false, dealership: "Nissan Motors TT", desc: "Seven-seat SUV built for Trinidad life. Maracas switchbacks, school runs, Beetham traffic — it handles all of it.", monthlyFuel: "~TT$1,200 / month", badge: "Family Pick", gradient: "linear-gradient(135deg, #7C3AED, #A78BFA)", accent: "#7C3AED" },
  { id: 3, name: "Civic", brand: "Honda", type: "Sedan", price: 210000, year: 2024, fuel: "Petrol", seats: 5, warranty: "3 years / 100,000 km", safety: "5-Star NHTSA", features: ["Honda Sensing Suite", "Apple CarPlay", "Wireless Charging", "LED Headlights", "Turbocharged Engine"], tags: ["fuel-efficient", "sporty", "tech", "affordable"], ev: false, dealership: "Honda TT", desc: "Sharp, refined and dependable. A Trinidad staple that navigates city traffic with confidence and looks great doing it.", monthlyFuel: "~TT$900 / month", badge: "Best Value", gradient: "linear-gradient(135deg, #1D4ED8, #60A5FA)", accent: "#1D4ED8" },
  { id: 4, name: "Outlander PHEV", brand: "Mitsubishi", type: "SUV", price: 430000, year: 2024, fuel: "Plug-in Hybrid", seats: 7, warranty: "5 years / 100,000 km", safety: "5-Star ANCAP", features: ["Plug-in Hybrid", "7 Seats", "Solar Charging Panel", "Mi-Pilot Assist", "Bose Premium Audio"], tags: ["fuel-efficient", "tech", "family", "luxury", "eco"], ev: true, evRange: 87, dealership: "Mitsubishi Motors TT", desc: "87 km electric range — enough to drive Port of Spain to San Fernando and back on a single charge. Charge at home for ~TT$60.", monthlyFuel: "~TT$300 / month", badge: "Eco Leader", gradient: "linear-gradient(135deg, #059669, #34D399)", accent: "#059669" },
  { id: 5, name: "Sportage", brand: "Kia", type: "SUV", price: 265000, year: 2024, fuel: "Petrol", seats: 5, warranty: "7 years / 150,000 km", safety: "5-Star Euro NCAP", features: ["Panoramic Sunroof", "Ventilated Seats", "Apple CarPlay", "360° Camera", "Highway Driving Assist"], tags: ["tech", "safety", "sporty", "affordable"], ev: false, dealership: "Kia TT", desc: "Industry-leading 7-year warranty. Premium technology at a price that makes sense — outstanding long-term value.", monthlyFuel: "~TT$1,100 / month", badge: "Best Warranty", gradient: "linear-gradient(135deg, #D97706, #FCD34D)", accent: "#D97706" },
  { id: 6, name: "Hilux", brand: "Toyota", type: "Pickup", price: 385000, year: 2024, fuel: "Diesel", seats: 5, warranty: "3 years / 100,000 km", safety: "5-Star ANCAP", features: ["4x4 Drive", "Tow Bar", "Bed Liner", "Apple CarPlay", "Multi-Terrain Select"], tags: ["offroad", "towing", "durable", "work"], ev: false, dealership: "Toyota Trinidad", desc: "Built for everything Trinidad throws at it. Construction sites, beach limes, mountain roads — the Hilux does not stop.", monthlyFuel: "~TT$1,400 / month", badge: "Most Durable", gradient: "linear-gradient(135deg, #B45309, #F59E0B)", accent: "#B45309" },
  { id: 7, name: "Tucson", brand: "Hyundai", type: "SUV", price: 275000, year: 2024, fuel: "Petrol", seats: 5, warranty: "5 years / 100,000 km", safety: "5-Star NHTSA", features: ["Panoramic Sunroof", "Heated Seats", "Apple CarPlay", "Safe Exit Assist", "Remote Start"], tags: ["tech", "safety", "style", "family", "affordable"], ev: false, dealership: "Hyundai TT", desc: "Award-winning design. Panoramic sunroof as standard. Premium technology usually found in vehicles at twice the price.", monthlyFuel: "~TT$1,100 / month", badge: "Editor's Choice", gradient: "linear-gradient(135deg, #0891B2, #67E8F9)", accent: "#0891B2" },
  { id: 8, name: "CX-5", brand: "Mazda", type: "SUV", price: 310000, year: 2024, fuel: "Petrol", seats: 5, warranty: "3 years / unlimited km", safety: "5-Star NHTSA", features: ["Leather Seats", "Bose Sound System", "Head-Up Display", "Apple CarPlay", "Radar Cruise Control"], tags: ["luxury", "style", "safety", "sporty", "tech"], ev: false, dealership: "Mazda TT", desc: "The most refined driving experience under TT$350,000. Premium leather, Bose audio, and a design that commands attention.", monthlyFuel: "~TT$1,150 / month", badge: "Most Premium", gradient: "linear-gradient(135deg, #374151, #9CA3AF)", accent: "#374151" },
];

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
  { label: "Most Popular", sub: "What Trinis are buying right now", cars: [1, 2, 3], icon: "trophy", from: "#6366F1", to: "#8B5CF6" },
  { label: "Best for Families", sub: "Space, safety & comfort for everyone", cars: [2, 4, 5], icon: "users", from: "#F59E0B", to: "#EF4444" },
  { label: "Save on Fuel", sub: "Spend far less every month", cars: [1, 4, 3], icon: "zap", from: "#10B981", to: "#06B6D4" },
  { label: "Best Value", sub: "Maximum car for your investment", cars: [3, 5, 7], icon: "dollar", from: "#3B82F6", to: "#6366F1" },
  { label: "Premium Range", sub: "When only the best will do", cars: [8, 4, 6], icon: "sparkle", from: "#EC4899", to: "#8B5CF6" },
  { label: "Eco Friendly", sub: "Lower emissions, lower running costs", cars: [4, 1], icon: "leaf", from: "#10B981", to: "#84CC16" },
];

const fmt = (n) => `TT$${n.toLocaleString()}`;

function filterCars(f) {
  if (f === "All") return CARS;
  if (f === "SUV") return CARS.filter(c => c.type === "SUV");
  if (f === "Sedan") return CARS.filter(c => c.type === "Sedan");
  if (f === "Pickup") return CARS.filter(c => c.type === "Pickup");
  if (f === "Hybrid / EV") return CARS.filter(c => c.fuel.toLowerCase().includes("hybrid") || c.ev);
  if (f === "Under TT$300k") return CARS.filter(c => c.price < 300000);
  if (f === "7 Seats") return CARS.filter(c => c.seats >= 7);
  return CARS;
}

const SYSTEM_PROMPT = `You are CarMatch AI, a professional and personable car advisor for Trinidad and Tobago. Help people find the right vehicle with clear, honest, engaging guidance — like a trusted expert who truly understands cars and life in TT.

Trinidad context to weave in naturally:
- Average daily commute: 20–40 km
- Port of Spain to San Fernando: ~58 km
- Port of Spain to Maracas Bay: ~25 km
- Petrol price: ~TT$6.97/litre (subsidised)
- Home electricity: ~TT$0.21/kWh
- Home EV charge: ~TT$50–80 for a full charge
- Full petrol tank: ~TT$300–500 depending on car

Car inventory:
${JSON.stringify(CARS.map(c => ({ id: c.id, name: `${c.brand} ${c.name}`, price: c.price, fuel: c.fuel, seats: c.seats, warranty: c.warranty, safety: c.safety, tags: c.tags, ev: c.ev, evRange: c.evRange || null, monthlyFuel: c.monthlyFuel })))}

Guidelines:
- Be warm, confident and clear — no jargon
- Ground EV/hybrid savings in real TT distances and dollar amounts
- Always lead recommendations with Price, Warranty and Safety
- Keep answers concise and scannable
- Guide interested buyers toward booking a test drive
- Only reference cars in the inventory — never invent specs
- Always quote prices in TT dollars`;

export default function CarMatchAI() {
  const [screen, setScreen] = useState("home");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Good day! I'm CarMatch AI — your personal car advisor for Trinidad & Tobago.\n\nWhether you know exactly what you want or have no idea where to start, I'm here to help. Tell me your budget, your lifestyle, or simply ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [matches, setMatches] = useState([]);
  const [activeTab, setActiveTab] = useState("chat");
  const [selectedCar, setSelectedCar] = useState(null);
  const [lead, setLead] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);
  const chatEndRef = useRef(null);

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
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: history.map(m => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.map(b => b.text || "").join("") || "I apologise — something went wrong. Please try again.";
      const updated = [...history, { role: "assistant", content: reply }];
      setMessages(updated);
      const mentioned = CARS.filter(c =>
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

  const openLead = (car) => { setSelectedCar(car); setLead({ name: "", email: "", phone: "" }); setScreen("lead"); };
  const submitLead = async () => {
    if (!lead.name || !lead.phone) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setScreen("thanks");
  };

  const filteredCars = filterCars(activeFilter);

  return (
    <div style={s.root}>
      <style>{css}</style>

      {/* ── NAV ── */}
      <nav style={s.nav}>
        <button style={s.logoBtn} onClick={() => setScreen("home")}>
          <div style={s.logoMark}><Icon.logo /></div>
          <div>
            <div style={s.logoName}>CarMatch<span style={s.logoAccent}>AI</span></div>
            <div style={s.logoSub}>Trinidad & Tobago</div>
          </div>
        </button>
        <div style={s.navRight}>
          {screen !== "home" && <button style={s.navGhost} onClick={() => setScreen("home")}>Home</button>}
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
                  Trinidad & Tobago's Car Matching Platform
                </div>
                <h1 style={s.heroTitle}>
                  The Smarter Way<br />
                  to Find Your<br />
                  <span style={s.heroGradText}>Next Car</span>
                </h1>
                <p style={s.heroBody}>
                  Not sure which car to buy? CarMatch AI compares price, warranty, safety and features across every major vehicle in TT — and guides you to the right choice.
                </p>
                <div style={s.heroButtons}>
                  <button style={s.heroCta} className="hero-cta" onClick={() => setScreen("chat")}>
                    Talk to CarMatch AI
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
                    { val: "8+", label: "Vehicles Listed" },
                    { val: "Free", label: "To Use" },
                    { val: "TT", label: "Market Focused" },
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
                      <div style={s.widgetName}>CarMatch AI</div>
                      <div style={s.widgetStatus}><span style={s.onlineDot} /> Available now</div>
                    </div>
                    <div style={s.widgetBadge}>AI</div>
                  </div>
                  <div style={s.widgetMsg}>
                    Good day! Tell me your budget and what you need the car for — I'll find your best matches across every major brand in TT.
                  </div>
                  <div style={s.widgetChips}>
                    {SUGGESTIONS.slice(0, 3).map((q, i) => (
                      <button key={i} style={s.widgetChip} className="w-chip" onClick={() => sendMessage(q)}>
                        {q}
                      </button>
                    ))}
                  </div>
                  <div style={s.widgetInput}>
                    <input style={s.widgetInputField} placeholder="Ask anything about cars in TT..."
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

          {/* TRUST STRIP */}
          <section style={s.trustStrip} className="fade-up-2">
            <div style={s.trustInner}>
              {[
                { Icon: Icon.dollar, label: "Transparent Pricing", sub: "Real TT prices, always" },
                { Icon: Icon.shield, label: "Warranty Info", sub: "Full coverage details" },
                { Icon: Icon.star, label: "Safety Ratings", sub: "Crash test results explained" },
                { Icon: Icon.zap, label: "AI Matching", sub: "Personalised guidance" },
                { Icon: Icon.car, label: "All Major Brands", sub: "Every TT dealership" },
              ].map(t => (
                <div key={t.label} style={s.trustItem}>
                  <div style={s.trustIcon}><t.Icon /></div>
                  <div>
                    <div style={s.trustLabel}>{t.label}</div>
                    <div style={s.trustSub}>{t.sub}</div>
                  </div>
                </div>
              ))}
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
                return (
                  <button key={g.label} style={s.groupCard} className="group-card"
                    onClick={() => sendMessage(`Show me the ${g.label} cars available in TT`)}>
                    <div style={{ ...s.groupIcon, background: `linear-gradient(135deg, ${g.from}, ${g.to})` }}>
                      <GIcon />
                    </div>
                    <div style={s.groupLabel}>{g.label}</div>
                    <div style={s.groupSub}>{g.sub}</div>
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
                Let AI Match Me <Icon.arrowRight />
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
              {filteredCars.map((car, idx) => (
                <div key={car.id} style={s.carCard} className="car-card">
                  {/* Gradient header */}
                  <div style={{ ...s.cardHeader, background: car.gradient }}>
                    <div style={s.cardHeaderTop}>
                      <div style={s.cardBrand}>{car.brand}</div>
                      {car.badge && <div style={s.cardBadge}>{car.badge}</div>}
                    </div>
                    <div style={s.cardName}>{car.year} {car.name}</div>
                    <div style={s.cardType}>{car.type} · {car.seats} Seats · {car.fuel}</div>
                    <div style={s.cardPrice}>{fmt(car.price)}</div>
                  </div>

                  {/* Key facts */}
                  <div style={s.cardBody}>
                    <div style={s.keyGrid}>
                      {[
                        { icon: <Icon.shield />, label: "Warranty", val: car.warranty },
                        { icon: <Icon.star />, label: "Safety", val: car.safety },
                        { icon: <Icon.fuel />, label: "Monthly Fuel", val: car.monthlyFuel },
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

                    {expandedCard === car.id && (
                      <div style={s.expandBox} className="fade-up">
                        <div style={s.expandTitle}>Key Features</div>
                        <div style={s.featTags}>
                          {car.features.map(f => (
                            <span key={f} style={{ ...s.featTag, background: car.accent + "15", color: car.accent, borderColor: car.accent + "30" }}>{f}</span>
                          ))}
                        </div>
                        <div style={s.expandDetails}>
                          <div style={s.expandRow}><span style={s.expandKey}>Dealership</span><span style={s.expandVal}>{car.dealership}</span></div>
                          {car.evRange && <div style={s.expandRow}><span style={s.expandKey}>Electric Range</span><span style={s.expandVal}>{car.evRange} km per charge</span></div>}
                        </div>
                      </div>
                    )}

                    <div style={s.cardActions}>
                      <button style={s.actionGhost} className="action-ghost"
                        onClick={() => setExpandedCard(expandedCard === car.id ? null : car.id)}>
                        {expandedCard === car.id ? <><Icon.chevUp /> Less</> : <><Icon.chevDown /> More</>}
                      </button>
                      <button style={{ ...s.actionAsk, color: car.accent, borderColor: car.accent + "40", background: car.accent + "10" }}
                        className="action-ask"
                        onClick={() => sendMessage(`Tell me about the ${car.year} ${car.brand} ${car.name} — is it a good choice in Trinidad?`)}>
                        Ask AI
                      </button>
                      <button style={{ ...s.actionBook, background: car.gradient }}
                        className="action-book"
                        onClick={() => openLead(car)}>
                        Book Test Drive
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer style={s.footer}>
            <div style={s.footerInner}>
              <div style={s.footerLogo}>
                <div style={s.logoMark}><Icon.logo /></div>
                <div>
                  <div style={s.logoName}>CarMatch<span style={s.logoAccent}>AI</span></div>
                  <div style={s.logoSub}>Trinidad & Tobago</div>
                </div>
              </div>
              <p style={s.footerText}>Free to use · Connecting car buyers with the right vehicle and dealership across Trinidad & Tobago.</p>
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
              <Icon.car /> My Matches {matches.length > 0 && <span style={s.badge}>{matches.length}</span>}
            </button>
          </div>

          {activeTab === "chat" && (
            <div style={s.chatWrap}>
              <div style={s.msgList}>
                {messages.map((m, i) => (
                  <div key={i} style={{ ...s.msgRow, ...(m.role === "user" ? s.msgRowUser : {}) }}>
                    {m.role === "assistant" && <div style={s.aiAvatar}><Icon.logo /></div>}
                    <div style={{ ...s.bubble, ...(m.role === "user" ? s.bubbleUser : s.bubbleAI) }}>
                      {m.content.split("\n").map((ln, j, arr) => (
                        <span key={j}>{ln}{j < arr.length - 1 && <br />}</span>
                      ))}
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

              {messages.length <= 2 && (
                <div style={s.chipsArea}>
                  <div style={s.chipsLabel}>Suggested questions</div>
                  <div style={s.chipsScroll}>
                    {SUGGESTIONS.map((q, i) => (
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
                  <p style={s.noMatchBody}>Chat with CarMatch AI and vehicles will appear here as you go.</p>
                  <button style={s.noMatchBtn} className="hero-cta" onClick={() => setActiveTab("chat")}>Start a Conversation</button>
                </div>
              ) : (
                <div style={s.matchList}>
                  {matches.map(car => (
                    <div key={car.id} style={s.carCard} className="car-card">
                      <div style={{ ...s.cardHeader, background: car.gradient }}>
                        <div style={s.cardHeaderTop}>
                          <div style={s.cardBrand}>{car.brand}</div>
                          {car.badge && <div style={s.cardBadge}>{car.badge}</div>}
                        </div>
                        <div style={s.cardName}>{car.year} {car.name}</div>
                        <div style={s.cardType}>{car.type} · {car.seats} Seats · {car.fuel}</div>
                        <div style={s.cardPrice}>{fmt(car.price)}</div>
                      </div>
                      <div style={s.cardBody}>
                        <div style={s.keyGrid}>
                          {[
                            { icon: <Icon.shield />, label: "Warranty", val: car.warranty },
                            { icon: <Icon.star />, label: "Safety", val: car.safety },
                            { icon: <Icon.fuel />, label: "Monthly Fuel", val: car.monthlyFuel },
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
                        <div style={s.cardActions}>
                          <button style={{ ...s.actionBook, background: car.gradient, flex: 1 }}
                            className="action-book" onClick={() => openLead(car)}>
                            Book a Test Drive
                          </button>
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
              <div style={s.formEyebrow}>Book a Test Drive</div>
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
              <p style={s.formNote}>A representative from <strong>{selectedCar.dealership}</strong> will contact you to arrange your viewing or test drive at a time that suits you.</p>
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
                {submitting ? "Sending Request..." : "Submit Test Drive Request"}
              </button>
              <button style={s.formBack} onClick={() => setScreen("chat")}>Go back</button>
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
              <p style={s.thanksSub}>Your test drive request for the <strong>{selectedCar.year} {selectedCar.brand} {selectedCar.name}</strong> has been submitted. A representative from <strong>{selectedCar.dealership}</strong> will be in contact shortly.</p>
              <button style={{ ...s.formSubmit, background: selectedCar.gradient, width: "100%" }}
                className="action-book" onClick={() => setScreen("home")}>
                Return to Home
              </button>
            </div>
          </div>
        </div>
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
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.85rem 1.5rem", background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${gray200}`, position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" },
  logoBtn: { background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.65rem", padding: 0 },
  logoMark: { width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(79,70,229,0.35)" },
  logoName: { fontSize: "1.05rem", fontWeight: 800, color: gray900, letterSpacing: "-0.02em", lineHeight: 1.2 },
  logoAccent: { background: "linear-gradient(90deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  logoSub: { fontSize: "0.62rem", color: gray400, fontWeight: 500, letterSpacing: "0.04em" },
  navRight: { display: "flex", gap: "0.5rem", alignItems: "center" },
  navGhost: { background: "none", border: `1px solid ${gray200}`, color: gray600, borderRadius: 8, padding: "0.45rem 0.9rem", cursor: "pointer", fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 500 },
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

  // TRUST
  trustStrip: { background: gray900, padding: "1.25rem 1.5rem" },
  trustInner: { maxWidth: 980, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.25rem 2.5rem" },
  trustItem: { display: "flex", alignItems: "center", gap: "0.65rem" },
  trustIcon: { width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: white, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  trustLabel: { fontSize: "0.83rem", fontWeight: 700, color: white, lineHeight: 1.2 },
  trustSub: { fontSize: "0.7rem", color: gray400, marginTop: 1 },

  // SECTIONS
  section: { padding: "2.5rem 1.5rem", maxWidth: 980, margin: "0 auto", width: "100%" },
  sectionHead: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1.5rem", gap: "1rem", flexWrap: "wrap" },
  eyebrow: { fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", background: "linear-gradient(90deg, #4F46E5, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textTransform: "uppercase", fontFamily: "monospace", marginBottom: "0.3rem" },
  sectionTitle: { fontSize: "1.5rem", fontWeight: 800, color: gray900, margin: 0, letterSpacing: "-0.025em" },
  sectionBtn: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, border: "none", borderRadius: 9, padding: "0.65rem 1.2rem", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: "0.4rem", boxShadow: "0 4px 12px rgba(79,70,229,0.25)", flexShrink: 0 },

  // GROUPS
  groupGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" },
  groupCard: { background: white, border: `1px solid ${gray200}`, borderRadius: 14, padding: "1.15rem", cursor: "pointer", textAlign: "left", display: "flex", flexDirection: "column", gap: "0.4rem", transition: "all 0.2s", fontFamily: "inherit", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" },
  groupIcon: { width: 36, height: 36, borderRadius: 9, color: white, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.2rem", boxShadow: "0 4px 10px rgba(0,0,0,0.15)" },
  groupLabel: { fontWeight: 700, fontSize: "0.92rem", color: gray900 },
  groupSub: { color: gray500, fontSize: "0.78rem", lineHeight: 1.5 },
  groupArrow: { marginTop: "0.4rem" },

  // FILTERS
  filterRow: { display: "flex", gap: "0.45rem", overflowX: "auto", paddingBottom: "0.5rem", marginBottom: "1.25rem" },
  filterPill: { borderRadius: 20, padding: "0.4rem 1rem", fontSize: "0.82rem", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, whiteSpace: "nowrap", border: "none", transition: "all 0.15s" },
  filterOn: { background: "linear-gradient(135deg, #4F46E5, #7C3AED)", color: white, boxShadow: "0 4px 10px rgba(79,70,229,0.3)" },
  filterOff: { background: gray100, color: gray600 },

  // CAR CARDS
  carGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: "1.1rem" },
  carCard: { background: white, border: `1px solid ${gray200}`, borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", transition: "all 0.22s" },
  cardHeader: { padding: "1.25rem 1.15rem 1.1rem", color: white, position: "relative" },
  cardHeaderTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" },
  cardBrand: { fontSize: "0.68rem", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.85 },
  cardBadge: { background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)", borderRadius: 20, padding: "0.18rem 0.6rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.04em" },
  cardName: { fontSize: "1.25rem", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.3rem" },
  cardType: { fontSize: "0.76rem", opacity: 0.8, fontWeight: 500 },
  cardPrice: { fontSize: "1.3rem", fontWeight: 900, letterSpacing: "-0.02em", marginTop: "0.6rem" },

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
  .hero-cta:hover   { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(79,70,229,0.4) !important; }
  .hero-sec:hover   { background: #F3F4F6 !important; }
  .w-chip:hover     { border-color: #4F46E5 !important; background: #EEF2FF !important; color: #4338CA !important; }
  .w-send:hover     { filter: brightness(1.15); }
  .group-card:hover { border-color: #A5B4FC !important; box-shadow: 0 8px 24px rgba(79,70,229,0.12) !important; transform: translateY(-3px); }
  .car-card:hover   { border-color: #A5B4FC !important; box-shadow: 0 10px 30px rgba(79,70,229,0.1) !important; transform: translateY(-3px); }
  .action-ghost:hover { border-color: #4F46E5 !important; color: #4F46E5 !important; }
  .action-ask:hover { filter: brightness(0.92); }
  .action-book:hover { filter: brightness(0.88); }
  .chip:hover { border-color: #4F46E5 !important; color: #4F46E5 !important; background: #EEF2FF !important; }
  .nudge:hover { background: linear-gradient(135deg, #E0E7FF, #EDE9FE) !important; }
  .send-btn:hover { filter: brightness(1.15); }
  input:focus { border-color: #4F46E5 !important; box-shadow: 0 0 0 3px rgba(79,70,229,0.12) !important; }

  .dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #4F46E5; animation: dotP 1.2s ease infinite; }
  @keyframes dotP { 0%,80%,100%{opacity:0.2;transform:scale(0.7)}40%{opacity:1;transform:scale(1)} }

  @media (max-width: 640px) {
    .carGrid { grid-template-columns: 1fr !important; }
    .groupGrid { grid-template-columns: 1fr 1fr !important; }
    .heroInner { flex-direction: column !important; }
  }
`;
