import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, AlertTriangle, ArrowUpRight, Bell, Brain, Briefcase, CheckCircle2,
  ChevronRight, Compass, Download, FileText, Filter, LineChart, MapPin,
  Network, Radar, Send, Sparkles, Target, TrendingUp, Zap, Search, Layers,
  GitBranch, ShieldAlert, Clock, Eye,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategic Intelligence OS — Whitespace Discovery" },
      { name: "description", content: "Agentic strategic intelligence operating system for consumer signals, competitive intelligence, and whitespace opportunity discovery." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col text-foreground">
      <TopNav />
      <div className="flex-1 grid grid-cols-[320px_1fr_360px] gap-px bg-border/60 min-h-0">
        <LeftPanel />
        <CenterCanvas />
        <RightPanel />
      </div>
      <BottomPanel />
    </div>
  );
}

/* ----------------------------- TOP NAV ----------------------------- */
function TopNav() {
  return (
    <header className="h-14 border-b border-border bg-card/40 backdrop-blur-xl flex items-center px-4 gap-4 shrink-0">
      <div className="flex items-center gap-2.5">
        <div className="size-7 rounded-md bg-gradient-to-br from-primary to-accent grid place-items-center glow-primary">
          <Sparkles className="size-3.5 text-primary-foreground" />
        </div>
        <div className="leading-tight">
          <div className="text-[13px] font-semibold tracking-tight">SIGNAL/OS</div>
          <div className="text-[10px] text-muted-foreground mono uppercase tracking-widest">Strategic Intelligence</div>
        </div>
      </div>
      <div className="h-6 w-px bg-border mx-1" />
      <Nav label="Workspace" value="Indulgence FMCG" />
      <Nav label="Category" value="Confectionery" />
      <Nav label="Geography" value="India · Tier 1–2" />
      <Nav label="Window" value="L90D · Forecast 24M" />
      <div className="ml-auto flex items-center gap-2">
        <IconBtn icon={Bell} badge="7" />
        <IconBtn icon={FileText} />
        <IconBtn icon={Download} />
        <div className="h-6 w-px bg-border mx-1" />
        <div className="flex items-center gap-2 pl-1">
          <div className="size-7 rounded-full bg-gradient-to-br from-accent to-primary grid place-items-center text-[11px] font-semibold text-primary-foreground">AM</div>
          <div className="text-[11px] leading-tight">
            <div className="font-medium">Aarav M.</div>
            <div className="text-muted-foreground">Strategy Lead</div>
          </div>
        </div>
      </div>
    </header>
  );
}
function Nav({ label, value }: { label: string; value: string }) {
  return (
    <button className="group flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-secondary transition text-left">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mono">{label}</span>
      <span className="text-[12px] font-medium">{value}</span>
      <ChevronRight className="size-3 text-muted-foreground group-hover:text-foreground transition" />
    </button>
  );
}
function IconBtn({ icon: Icon, badge }: { icon: React.ComponentType<{ className?: string }>; badge?: string }) {
  return (
    <button className="relative size-8 rounded-md hover:bg-secondary grid place-items-center transition">
      <Icon className="size-4 text-muted-foreground" />
      {badge && (
        <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-primary text-primary-foreground text-[9px] font-bold grid place-items-center">
          {badge}
        </span>
      )}
    </button>
  );
}

/* ----------------------------- LEFT PANEL ----------------------------- */
function LeftPanel() {
  const reasoning = [
    { t: "Search acceleration detected", sub: "“low sugar dessert” +312% MoM", ok: true },
    { t: "Social signal convergence confirmed", sub: "TikTok ↔ Instagram ↔ YT Shorts", ok: true },
    { t: "Competitive response remains fragmented", sub: "2 of 7 incumbents reacting", ok: true },
    { t: "Opportunity score increased to 82", sub: "+9 pts vs last sweep", ok: true },
    { t: "Whitespace window estimated at 18 months", sub: "Decay risk: low", ok: true },
  ];
  const agents = [
    { name: "Trend Discovery", status: "Active", color: "text-primary", dot: "bg-primary" },
    { name: "Competitive Intel", status: "Running", color: "text-chart-5", dot: "bg-chart-5" },
    { name: "Whitespace Scoring", status: "Complete", color: "text-muted-foreground", dot: "bg-muted-foreground" },
    { name: "Forecasting", status: "Updating", color: "text-warning", dot: "bg-warning" },
    { name: "Strategy", status: "Generating", color: "text-accent", dot: "bg-accent" },
  ];
  const investigations = [
    "Emerging whitespace", "Competitive escalation", "Weak incumbent response",
    "New consumer behaviors", "24-month forecast", "Innovation gaps",
  ];
  return (
    <aside className="bg-sidebar/60 backdrop-blur-xl flex flex-col min-h-0">
      <SectionHead icon={Brain} title="Strategic Agent" sub="Conversational intelligence" />
      <div className="px-3 pb-3">
        <div className="rounded-lg border border-border bg-card/60 p-3 space-y-2">
          <div className="flex items-center gap-2 text-[10px] mono uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary pulse-dot" /> Agent ready
          </div>
          <p className="text-[12px] text-foreground/90 leading-relaxed">
            Ask about whitespace, competitive moves, accelerating trends, or strategic next steps.
          </p>
          <div className="flex items-center gap-2 rounded-md bg-background/60 border border-border px-2 py-1.5">
            <Search className="size-3.5 text-muted-foreground" />
            <input
              placeholder="What whitespace is emerging?"
              className="bg-transparent outline-none text-[12px] flex-1 placeholder:text-muted-foreground"
            />
            <button className="size-6 rounded grid place-items-center bg-primary text-primary-foreground">
              <Send className="size-3" />
            </button>
          </div>
        </div>
      </div>

      <SectionHead icon={Compass} title="Suggested Investigations" />
      <div className="px-3 flex flex-wrap gap-1.5 pb-3">
        {investigations.map((i) => (
          <button key={i} className="text-[11px] px-2 py-1 rounded-md border border-border bg-card/40 hover:bg-secondary hover:border-primary/40 transition">
            {i}
          </button>
        ))}
      </div>

      <SectionHead icon={Network} title="Multi-Agent Orchestration" />
      <div className="px-3 pb-3 space-y-1.5">
        {agents.map((a) => (
          <div key={a.name} className="flex items-center justify-between text-[12px] px-2.5 py-1.5 rounded-md bg-card/40 border border-border">
            <div className="flex items-center gap-2">
              <span className={`size-1.5 rounded-full ${a.dot} pulse-dot`} />
              <span>{a.name}</span>
            </div>
            <span className={`text-[10px] mono uppercase tracking-widest ${a.color}`}>{a.status}</span>
          </div>
        ))}
      </div>

      <SectionHead icon={Activity} title="Agentic Reasoning Feed" />
      <div className="px-3 pb-4 space-y-2 overflow-y-auto scrollbar-thin">
        {reasoning.map((r, i) => (
          <div key={i} className="flex gap-2 text-[12px] ticker-in" style={{ animationDelay: `${i * 80}ms` }}>
            <CheckCircle2 className="size-3.5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="leading-snug">{r.t}</div>
              <div className="text-[11px] text-muted-foreground mono">{r.sub}</div>
            </div>
          </div>
        ))}
        <div className="flex gap-2 text-[12px] text-muted-foreground">
          <span className="size-3.5 rounded-full border border-primary border-t-transparent animate-spin mt-0.5" />
          <div>Cross-checking patent activity…</div>
        </div>
      </div>
    </aside>
  );
}

function SectionHead({ icon: Icon, title, sub }: { icon: React.ComponentType<{ className?: string }>; title: string; sub?: string }) {
  return (
    <div className="px-3 pt-4 pb-2 flex items-center gap-2">
      <Icon className="size-3.5 text-primary" />
      <div className="text-[11px] font-semibold uppercase tracking-widest">{title}</div>
      {sub && <span className="text-[10px] text-muted-foreground ml-auto">{sub}</span>}
    </div>
  );
}

/* ----------------------------- CENTER CANVAS ----------------------------- */
function CenterCanvas() {
  return (
    <main className="bg-background/30 overflow-y-auto scrollbar-thin">
      <div className="p-5 space-y-5">
        <CanvasHeader />
        <ExecutiveOverview />
        <Heatmap />
        <div className="grid grid-cols-2 gap-5">
          <TrendIntelligence />
          <CompetitiveRadar />
        </div>
        <OpportunityCards />
      </div>
    </main>
  );
}

function CanvasHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2 text-[10px] mono uppercase tracking-widest text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary pulse-dot" />
          Live intelligence canvas · synced 14s ago
        </div>
        <h1 className="text-[22px] font-semibold tracking-tight mt-1">
          Whitespace Discovery — <span className="text-gradient">Indulgence × Functional</span>
        </h1>
      </div>
      <div className="flex items-center gap-1.5">
        <ChipBtn icon={Filter} label="Filters · 3" />
        <ChipBtn icon={Layers} label="Layers" />
        <ChipBtn icon={Eye} label="View: Strategic" active />
      </div>
    </div>
  );
}
function ChipBtn({ icon: Icon, label, active }: { icon: React.ComponentType<{ className?: string }>; label: string; active?: boolean }) {
  return (
    <button className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1.5 rounded-md border transition ${active ? "bg-primary/15 border-primary/40 text-primary" : "bg-card/40 border-border hover:border-primary/40"}`}>
      <Icon className="size-3.5" /> {label}
    </button>
  );
}

/* ------------ EXECUTIVE OVERVIEW (KPI + Summary combined) ------------ */
function ExecutiveOverview() {
  const summary = [
    { k: "Emerging Opportunities", v: "7" },
    { k: "Fastest Growing Trend", v: "Functional indulgence" },
    { k: "Largest TAM", v: "Gut-friendly desserts" },
    { k: "Biggest Threat", v: "Pepsi health expansion" },
    { k: "Avg Whitespace Window", v: "16 months" },
  ];
  return (
    <section className="relative rounded-2xl border border-border bg-card/50 overflow-hidden glow-primary">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)" }} />
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background/30">
        <div className="flex items-center gap-2">
          <Briefcase className="size-3.5 text-primary" />
          <div className="text-[11px] font-semibold uppercase tracking-widest">Executive Overview</div>
          <span className="text-[10px] mono uppercase tracking-widest text-muted-foreground ml-2">KPIs · Summary</span>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] mono uppercase tracking-widest text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary pulse-dot" /> Live · synced 14s ago
        </span>
      </div>
      <div className="p-4">
        <KpiCards />
        <div className="mt-4 pt-4 border-t border-border/70">
          <div className="flex items-center gap-2 mb-2.5">
            <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground">Executive Summary</div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-5 gap-3">
            {summary.map((s) => (
              <div key={s.k} className="rounded-lg border border-border bg-background/40 px-3 py-2.5">
                <div className="text-[9.5px] mono uppercase tracking-widest text-muted-foreground leading-tight">{s.k}</div>
                <div className="text-[13px] font-medium mt-1 leading-snug">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ KPI CARDS ------------ */
function KpiCards() {
  const cards = [
    { label: "Total Opportunity Size", value: "$4.82B", delta: "+18.4%", sub: "Addressable whitespace · 24mo", trend: "up", accent: "var(--primary)", icon: Target, spark: [12, 18, 16, 24, 22, 30, 34, 42, 48, 56, 62, 71] },
    { label: "Category Growth", value: "+34.2%", delta: "+6.1 pts", sub: "YoY momentum vs. category", trend: "up", accent: "var(--accent)", icon: TrendingUp, spark: [20, 22, 21, 28, 32, 30, 38, 44, 41, 52, 58, 64] },
    { label: "Active Signals", value: "12,847", delta: "+2,193", sub: "TikTok · Amazon · Patents · 7d", trend: "up", accent: "var(--chart-5)", icon: Activity, spark: [40, 38, 46, 44, 52, 50, 60, 58, 66, 70, 78, 84] },
    { label: "Whitespace Score", value: "91 / 100", delta: "+9", sub: "Gut-friendly indulgence cluster", trend: "up", accent: "var(--warning)", icon: Sparkles, spark: [50, 54, 52, 60, 64, 62, 70, 74, 78, 82, 88, 91] },
  ];
  return (
    <section className="grid grid-cols-4 gap-3">
      {cards.map((c) => {
        const Icon = c.icon;
        const max = Math.max(...c.spark);
        const min = Math.min(...c.spark);
        const pts = c.spark.map((v, i) => {
          const x = (i / (c.spark.length - 1)) * 100;
          const y = 28 - ((v - min) / (max - min || 1)) * 24 - 2;
          return `${x},${y}`;
        }).join(" ");
        return (
          <div key={c.label} className="relative rounded-xl border border-border bg-card/50 p-4 overflow-hidden group hover:border-primary/40 transition">
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }} />
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-md grid place-items-center" style={{ background: `color-mix(in oklab, ${c.accent} 18%, transparent)`, color: c.accent }}>
                  <Icon className="size-3.5" />
                </div>
                <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground">{c.label}</div>
              </div>
              <span className="flex items-center gap-0.5 text-[10px] mono px-1.5 py-0.5 rounded" style={{ background: `color-mix(in oklab, ${c.accent} 14%, transparent)`, color: c.accent }}>
                <ArrowUpRight className="size-3" /> {c.delta}
              </span>
            </div>
            <div className="mt-3 flex items-end justify-between gap-2">
              <div>
                <div className="text-[26px] font-semibold tracking-tight leading-none" style={{ textShadow: `0 0 24px color-mix(in oklab, ${c.accent} 30%, transparent)` }}>{c.value}</div>
                <div className="text-[10.5px] text-muted-foreground mt-1.5">{c.sub}</div>
              </div>
              <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="w-20 h-8 shrink-0">
                <defs>
                  <linearGradient id={`g-${c.label}`} x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor={c.accent} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={c.accent} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline points={pts} fill="none" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <polygon points={`0,28 ${pts} 100,28`} fill={`url(#g-${c.label})`} />
              </svg>
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ------------ HEATMAP ------------ */
function Heatmap() {
  const opps = [
    { x: 18, y: 78, r: 26, label: "Functional indulgence", score: 88, color: "var(--primary)" },
    { x: 32, y: 64, r: 22, label: "Protein desserts", score: 82, color: "var(--accent)" },
    { x: 58, y: 70, r: 18, label: "Mood-enhancing foods", score: 71, color: "var(--chart-5)" },
    { x: 72, y: 38, r: 14, label: "Clean-label sweeteners", score: 64, color: "var(--warning)" },
    { x: 44, y: 84, r: 30, label: "Gut-friendly indulgence", score: 91, color: "var(--primary)" },
    { x: 82, y: 22, r: 10, label: "Adaptogenic snacks", score: 52, color: "var(--chart-5)" },
    { x: 25, y: 32, r: 12, label: "Sugar-free classics", score: 48, color: "var(--muted-foreground)" },
  ];
  return (
    <section className="rounded-xl border border-border bg-card/40 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <Target className="size-4 text-primary" />
          <div className="text-[13px] font-semibold">Opportunity Heatmap</div>
          <span className="text-[10px] mono uppercase tracking-widest text-muted-foreground ml-2">Momentum × Saturation</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <LegendDot color="var(--primary)" label="High whitespace" />
          <LegendDot color="var(--accent)" label="Emerging" />
          <LegendDot color="var(--warning)" label="At risk" />
        </div>
      </div>
      <div className="relative h-[340px] grid-bg">
        {/* axes */}
        <div className="absolute inset-0 p-6">
          <div className="absolute left-2 top-1/2 -rotate-90 -translate-x-1/2 -translate-y-1/2 text-[10px] mono uppercase tracking-widest text-muted-foreground">Consumer momentum →</div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] mono uppercase tracking-widest text-muted-foreground">Competitive saturation →</div>
          {/* quadrant labels */}
          <div className="absolute top-3 left-8 text-[10px] mono uppercase tracking-widest text-primary/70">Whitespace</div>
          <div className="absolute top-3 right-4 text-[10px] mono uppercase tracking-widest text-warning/70">Crowded growth</div>
          <div className="absolute bottom-6 left-8 text-[10px] mono uppercase tracking-widest text-muted-foreground">Dormant</div>
          <div className="absolute bottom-6 right-4 text-[10px] mono uppercase tracking-widest text-muted-foreground">Mature</div>
          {/* diagonal divider */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            <line x1="0" y1="100" x2="100" y2="0" stroke="oklch(1 0 0 / 0.06)" strokeDasharray="2 3" strokeWidth="0.3" />
          </svg>
          {/* bubbles */}
          {opps.map((o, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{ left: `${o.x}%`, top: `${100 - o.y}%` }}
            >
              <div
                className="rounded-full transition-transform group-hover:scale-110"
                style={{
                  width: o.r * 2,
                  height: o.r * 2,
                  background: `radial-gradient(circle at 30% 30%, color-mix(in oklab, ${o.color} 80%, white), color-mix(in oklab, ${o.color} 30%, transparent))`,
                  boxShadow: `0 0 24px color-mix(in oklab, ${o.color} 35%, transparent)`,
                }}
              />
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 text-[10px] whitespace-nowrap text-foreground/80 group-hover:text-foreground">
                {o.label} · <span className="mono text-primary">{o.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="size-2 rounded-full" style={{ background: color }} />
      {label}
    </div>
  );
}

/* ------------ TREND CARDS ------------ */
function TrendIntelligence() {
  const trends = [
    { name: "Functional indulgence", mom: "+42%", stage: "Emerging", conf: 84, drivers: ["Healthy indulgence", "Protein seeking", "Sugar fatigue"] },
    { name: "Gut-friendly snacks", mom: "+38%", stage: "Acceleration", conf: 79, drivers: ["Microbiome awareness", "Fiber focus", "Prebiotic claims"] },
    { name: "Mood-enhancing foods", mom: "+27%", stage: "Early", conf: 66, drivers: ["Adaptogens", "Stress eating", "Calm claims"] },
  ];
  return (
    <section className="rounded-xl border border-border bg-card/40 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="size-4 text-primary" />
          <div className="text-[13px] font-semibold">Consumer Trend Intelligence</div>
        </div>
        <button className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1">All clusters <ArrowUpRight className="size-3" /></button>
      </div>
      <div className="space-y-2">
        {trends.map((t) => (
          <div key={t.name} className="rounded-lg border border-border bg-background/40 p-3 hover:border-primary/40 transition cursor-pointer">
            <div className="flex items-baseline justify-between">
              <div className="text-[13px] font-medium">{t.name}</div>
              <div className="mono text-[12px] text-primary">{t.mom}</div>
            </div>
            <div className="mt-1 flex items-center gap-3 text-[10px] mono uppercase tracking-widest text-muted-foreground">
              <span>Stage · {t.stage}</span>
              <span>Confidence · {t.conf}%</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {t.drivers.map((d) => (
                <span key={d} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground">{d}</span>
              ))}
            </div>
            <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: `${t.conf}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------ COMPETITIVE RADAR ------------ */
function CompetitiveRadar() {
  const players = [
    { n: "Pepsi", angle: 20, r: 80, threat: 82, level: 3 },
    { n: "Nestlé", angle: 80, r: 60, threat: 74, level: 2 },
    { n: "ITC", angle: 150, r: 45, threat: 58, level: 1 },
    { n: "Hershey", angle: 220, r: 70, threat: 61, level: 2 },
    { n: "Regional", angle: 290, r: 85, threat: 70, level: 3 },
    { n: "Startups", angle: 340, r: 92, threat: 77, level: 3 },
  ];
  return (
    <section className="rounded-xl border border-border bg-card/40 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Radar className="size-4 text-primary" />
          <div className="text-[13px] font-semibold">Competitive Radar</div>
        </div>
        <span className="text-[10px] mono uppercase tracking-widest text-muted-foreground">Escalation velocity</span>
      </div>
      <div className="grid grid-cols-[200px_1fr] gap-4 items-center">
        <div className="relative size-[200px] mx-auto">
          <svg viewBox="-100 -100 200 200" className="absolute inset-0">
            {[30, 55, 80, 95].map((r) => (
              <circle key={r} r={r} fill="none" stroke="oklch(1 0 0 / 0.08)" />
            ))}
            {[0, 60, 120].map((a) => (
              <line key={a} x1={-100} y1={0} x2={100} y2={0} transform={`rotate(${a})`} stroke="oklch(1 0 0 / 0.06)" />
            ))}
            <defs>
              <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.78 0.18 160 / 0.5)" />
                <stop offset="100%" stopColor="oklch(0.78 0.18 160 / 0)" />
              </linearGradient>
            </defs>
            <g className="radar-sweep">
              <path d="M0,0 L95,0 A95,95 0 0,1 47,82 Z" fill="url(#sweep)" />
            </g>
            {players.map((p) => {
              const rad = (p.angle * Math.PI) / 180;
              const x = Math.cos(rad) * p.r;
              const y = Math.sin(rad) * p.r;
              return (
                <g key={p.n}>
                  <circle cx={x} cy={y} r={4 + p.level} fill="oklch(0.78 0.18 160)" opacity={0.85} />
                  <text x={x + 6} y={y + 3} fontSize="7" fill="oklch(0.96 0.01 250)">{p.n}</text>
                </g>
              );
            })}
          </svg>
        </div>
        <div className="space-y-1.5">
          {players.sort((a, b) => b.threat - a.threat).map((p) => (
            <div key={p.n} className="flex items-center gap-2 text-[12px]">
              <span className="w-16 text-foreground/80">{p.n}</span>
              <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: `${p.threat}%` }} />
              </div>
              <span className="mono text-[11px] text-muted-foreground w-6 text-right">{p.threat}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-border space-y-1.5">
        <div className="text-[10px] mono uppercase tracking-widest text-muted-foreground">Priority Threat Feed</div>
        {[
          { t: "Pepsi launches low-sugar variant", i: 82 },
          { t: "Nestlé expands modern trade", i: 74 },
          { t: "Hershey increases influencer spend", i: 61 },
        ].map((x) => (
          <div key={x.t} className="flex items-center gap-2 text-[12px]">
            <AlertTriangle className="size-3.5 text-warning shrink-0" />
            <span className="flex-1">{x.t}</span>
            <span className="mono text-[11px] text-warning">Impact {x.i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------ OPPORTUNITY CARDS ------------ */
function OpportunityCards() {
  const cards = [
    {
      title: "Gut-Friendly Low-Sugar Indulgence", score: 88, tam: "$140M", yoy: "+39%",
      mom: "Very high", sat: "Low", window: "18–24 mo", risk: "Medium",
      why: "Consumers seek indulgence without guilt.",
      ws: "Major incumbents lack functional positioning.",
      move: "Accelerate functional premium SKU.",
    },
    {
      title: "Protein-Dense Dessert Bars", score: 82, tam: "$96M", yoy: "+31%",
      mom: "High", sat: "Medium", window: "12–18 mo", risk: "Medium",
      why: "Protein-aware audiences expanding beyond fitness.",
      ws: "Mainstream brands still focused on candy formats.",
      move: "Co-brand with athlete-led IP for trial.",
    },
    {
      title: "Mood-Adaptive Snacking", score: 71, tam: "$58M", yoy: "+24%",
      mom: "High", sat: "Low", window: "24+ mo", risk: "Low",
      why: "Adaptogens entering mainstream beverage occasions.",
      ws: "No FMCG incumbent owns calm-snacking narrative.",
      move: "Pilot SKU + influencer ladder.",
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-primary" />
          <div className="text-[13px] font-semibold">Opportunity Cards</div>
          <span className="text-[10px] mono uppercase tracking-widest text-muted-foreground ml-2">Executive decision layer</span>
        </div>
        <button className="text-[11px] text-muted-foreground hover:text-foreground flex items-center gap-1">7 opportunities <ChevronRight className="size-3" /></button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {cards.map((c) => (
          <article key={c.title} className="rounded-xl border border-border bg-card/50 p-4 hover:border-primary/40 transition group">
            <div className="flex items-start justify-between">
              <div className="text-[13px] font-semibold leading-tight pr-2">{c.title}</div>
              <div className="size-11 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground glow-primary">
                <div className="text-center leading-none">
                  <div className="text-[14px] font-bold">{c.score}</div>
                  <div className="text-[8px] mono uppercase tracking-widest opacity-80">score</div>
                </div>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-y-1.5 gap-x-3 text-[11px]">
              <Stat k="TAM" v={c.tam} />
              <Stat k="YoY" v={c.yoy} accent />
              <Stat k="Momentum" v={c.mom} />
              <Stat k="Saturation" v={c.sat} />
              <Stat k="Window" v={c.window} />
              <Stat k="Risk" v={c.risk} />
            </div>
            <div className="mt-3 space-y-2 text-[11px] text-foreground/80">
              <Reason label="Why trending" text={c.why} />
              <Reason label="Why whitespace" text={c.ws} />
              <Reason label="Recommended" text={c.move} accent />
            </div>
            <button className="mt-3 w-full text-[11px] py-1.5 rounded-md border border-border bg-background/40 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition flex items-center justify-center gap-1">
              Deep dive <ArrowUpRight className="size-3" />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
function Stat({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[9px] mono uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className={`text-[12px] font-medium ${accent ? "text-primary" : ""}`}>{v}</div>
    </div>
  );
}
function Reason({ label, text, accent }: { label: string; text: string; accent?: boolean }) {
  return (
    <div className={`pl-2 border-l-2 ${accent ? "border-primary" : "border-border"}`}>
      <div className="text-[9px] mono uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="leading-snug">{text}</div>
    </div>
  );
}

/* ----------------------------- RIGHT PANEL ----------------------------- */
function RightPanel() {
  return (
    <aside className="bg-sidebar/60 backdrop-blur-xl overflow-y-auto scrollbar-thin">
      <SectionHead icon={Briefcase} title="Executive Summary" />
      <div className="px-3 pb-3 space-y-1.5">
        <Kv k="Emerging Opportunities" v="7" />
        <Kv k="Fastest Growing Trend" v="Functional indulgence" />
        <Kv k="Largest TAM" v="Gut-friendly desserts" />
        <Kv k="Biggest Threat" v="Pepsi health expansion" />
        <Kv k="Avg Whitespace Window" v="16 months" />
      </div>

      <SectionHead icon={ShieldAlert} title="Threat Assessment" />
      <div className="px-3 pb-3">
        <div className="rounded-lg border border-warning/30 bg-warning/5 p-3">
          <div className="flex items-center gap-2 text-[12px] font-medium">
            <AlertTriangle className="size-3.5 text-warning" /> Elevated
          </div>
          <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
            Pepsi reformulation + 2 startup launches concentrated in T1 metros may compress whitespace window by 4 months.
          </p>
        </div>
      </div>

      <SectionHead icon={LineChart} title="Why This Is Trending" />
      <div className="px-3 pb-3 text-[12px] leading-relaxed text-foreground/85 space-y-1.5">
        <p>Acceleration driven by sugar-reduction behavior, protein awareness, guilt-free indulgence demand.</p>
        <div className="flex flex-wrap gap-1">
          {["Search +312%", "TikTok recipes", "Amazon reviews", "Retail assortment"].map((c) => (
            <span key={c} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary">{c}</span>
          ))}
        </div>
      </div>

      <SectionHead icon={Target} title="Why This Is Whitespace" />
      <div className="px-3 pb-3 text-[12px] leading-relaxed text-foreground/85">
        Despite strong momentum, incumbent participation is fragmented, reformulation is complex, and retailers are early-stage.
        <span className="block mt-1 text-[11px] text-muted-foreground mono">Only 2 scaled brands currently active.</span>
      </div>

      <SectionHead icon={Zap} title="Strategic Recommendations" />
      <div className="px-3 pb-3 space-y-1.5">
        {[
          "Accelerate low-sugar premium SKU",
          "Increase natural ingredient messaging",
          "Expand protein-based positioning",
          "Secure premium retail visibility",
        ].map((r, i) => (
          <div key={r} className="flex gap-2 text-[12px]">
            <div className="size-5 rounded-md bg-primary/20 text-primary grid place-items-center mono text-[10px] shrink-0">{i + 1}</div>
            <div className="leading-snug">{r}</div>
          </div>
        ))}
      </div>

      <SectionHead icon={Clock} title="Action Plan · 30/60/90" />
      <div className="px-3 pb-3 space-y-2">
        {[
          { d: "30 days", items: ["Messaging refresh", "Competitive response plan"] },
          { d: "60 days", items: ["Promotion testing", "Retail expansion"] },
          { d: "90 days", items: ["Product reformulation launch"] },
        ].map((p) => (
          <div key={p.d} className="rounded-lg border border-border bg-card/40 p-2.5">
            <div className="text-[10px] mono uppercase tracking-widest text-primary">{p.d}</div>
            {p.items.map((i) => (
              <div key={i} className="text-[12px] flex items-center gap-1.5 mt-1">
                <span className="size-1 rounded-full bg-primary" /> {i}
              </div>
            ))}
          </div>
        ))}
      </div>

      <SectionHead icon={GitBranch} title="Forecast & Risk" />
      <div className="px-3 pb-4 grid grid-cols-3 gap-2">
        <Mini k="Forecast" v="+38%" sub="YoY" />
        <Mini k="Mainstream" v="24mo" sub="ETA" />
        <Mini k="Decay" v="Low" sub="12mo" />
      </div>
    </aside>
  );
}
function Kv({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between text-[12px] px-2.5 py-1.5 rounded-md bg-card/40 border border-border">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}
function Mini({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/40 p-2 text-center">
      <div className="text-[9px] mono uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="text-[14px] font-semibold text-primary">{v}</div>
      <div className="text-[9px] text-muted-foreground mono">{sub}</div>
    </div>
  );
}

/* ----------------------------- BOTTOM PANEL ----------------------------- */
function BottomPanel() {
  return (
    <footer className="border-t border-border bg-card/40 backdrop-blur-xl shrink-0">
      <div className="grid grid-cols-[1.1fr_1.4fr_1.1fr] gap-px bg-border">
        <LiveSignalFeed />
        <CausalGraph />
        <EscalationTimeline />
      </div>
    </footer>
  );
}

function LiveSignalFeed() {
  const sigs = [
    { src: "TikTok", t: "“Healthy dessert recipes” accelerating", v: "+312%", c: "text-primary" },
    { src: "Amazon", t: "“Too much sugar” complaints increasing", v: "+47%", c: "text-warning" },
    { src: "USPTO", t: "Natural sweetener combinations filed", v: "12 patents", c: "text-accent" },
    { src: "Reddit", t: "r/HealthyFood gut-friendly threads up", v: "+88%", c: "text-primary" },
  ];
  return (
    <div className="bg-background/30 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Activity className="size-3.5 text-primary" />
        <div className="text-[11px] font-semibold uppercase tracking-widest">Live Signal Feed</div>
        <span className="ml-auto size-1.5 rounded-full bg-primary pulse-dot" />
      </div>
      <div className="space-y-1.5">
        {sigs.map((s, i) => (
          <div key={i} className="flex items-center gap-2 text-[12px] ticker-in" style={{ animationDelay: `${i * 60}ms` }}>
            <span className="text-[9px] mono uppercase tracking-widest text-muted-foreground w-12">{s.src}</span>
            <span className="flex-1 truncate">{s.t}</span>
            <span className={`mono text-[11px] ${s.c}`}>{s.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CausalGraph() {
  const nodes = [
    { id: "sugar", x: 8, y: 50, label: "Sugar fatigue ↑" },
    { id: "demand", x: 32, y: 25, label: "Healthy indulgence ↑" },
    { id: "innov", x: 56, y: 60, label: "Low-sugar innovation ↑" },
    { id: "comp", x: 80, y: 30, label: "Competitor reformulation ↑" },
    { id: "ws", x: 92, y: 75, label: "Whitespace detected" },
  ];
  const edges: [string, string][] = [["sugar", "demand"], ["demand", "innov"], ["innov", "comp"], ["innov", "ws"], ["comp", "ws"]];
  const pos = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="bg-background/30 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Network className="size-3.5 text-primary" />
        <div className="text-[11px] font-semibold uppercase tracking-widest">Causal Intelligence Graph</div>
        <span className="text-[10px] text-muted-foreground ml-auto mono">why opportunities exist</span>
      </div>
      <div className="relative h-[140px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.78 0.18 160 / 0.7)" />
            </marker>
          </defs>
          {edges.map(([a, b], i) => (
            <line key={i} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y}
              stroke="oklch(0.78 0.18 160 / 0.5)" strokeWidth="0.4" markerEnd="url(#arr)" />
          ))}
        </svg>
        {nodes.map((n) => (
          <div key={n.id} className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}>
            <div className="px-2 py-1 rounded-md border border-primary/40 bg-card/80 text-[10px] whitespace-nowrap backdrop-blur">
              {n.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EscalationTimeline() {
  const events = [
    { m: "Jan", t: "Search acceleration", c: "bg-primary" },
    { m: "Feb", t: "TikTok momentum", c: "bg-accent" },
    { m: "Mar", t: "Retail launches", c: "bg-chart-5" },
    { m: "Apr", t: "Competitor reformulation", c: "bg-warning" },
    { m: "May", t: "Patent activity spike", c: "bg-primary" },
    { m: "Now", t: "Whitespace window open", c: "bg-primary glow-primary" },
  ];
  return (
    <div className="bg-background/30 p-4">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="size-3.5 text-primary" />
        <div className="text-[11px] font-semibold uppercase tracking-widest">Strategic Escalation Timeline</div>
      </div>
      <div className="relative pl-3">
        <div className="absolute left-1 top-1 bottom-1 w-px bg-border" />
        <div className="space-y-2">
          {events.map((e, i) => (
            <div key={i} className="flex items-center gap-2 text-[12px]">
              <span className={`size-2 rounded-full ${e.c} -ml-[14px] ring-2 ring-background`} />
              <span className="w-10 text-[10px] mono uppercase tracking-widest text-muted-foreground">{e.m}</span>
              <span className="flex-1">{e.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
