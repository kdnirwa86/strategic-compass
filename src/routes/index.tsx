import { createFileRoute } from "@tanstack/react-router";
import {
  TopNav, CanvasHeader, KpiCards, Heatmap, TrendIntelligence,
  CompetitiveRadar, OpportunityCards, CausalGraph,
} from "@/components/signal-os";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategic Intelligence OS — Whitespace Discovery" },
      { name: "description", content: "AI-native strategic intelligence: consumer signals, competitive intelligence, and whitespace opportunity discovery." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col text-foreground">
      <TopNav />
      <main className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="max-w-[1400px] mx-auto p-6 space-y-5">
          <CanvasHeader />
          <KpiCards />
          <Heatmap />
          <div className="grid grid-cols-2 gap-5">
            <TrendIntelligence />
            <CompetitiveRadar />
          </div>
          <OpportunityCards />
          <CausalGraph />
        </div>
      </main>
    </div>
  );
}
