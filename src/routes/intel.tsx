import { createFileRoute } from "@tanstack/react-router";
import { TopNav, LeftPanel, RightPanel, LiveSignalFeed, EscalationTimeline } from "@/components/signal-os";

export const Route = createFileRoute("/intel")({
  head: () => ({
    meta: [
      { title: "Agent & Evidence — Strategic Intelligence OS" },
      { name: "description", content: "Strategic agent, executive summary, live signals, and escalation timeline." },
    ],
  }),
  component: IntelPage,
});

function IntelPage() {
  return (
    <div className="min-h-screen flex flex-col text-foreground">
      <TopNav />
      <div className="flex-1 grid grid-cols-[320px_1fr_360px] gap-px bg-border/60 min-h-0">
        <LeftPanel />
        <main className="bg-background overflow-y-auto scrollbar-thin">
          <div className="p-5 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-[10px] mono uppercase tracking-widest text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary pulse-dot" />
                Evidence layer · streaming
              </div>
              <h1 className="text-[22px] font-semibold tracking-tight mt-1">
                Agent Workspace & <span className="text-gradient">Live Evidence</span>
              </h1>
              <p className="text-[12px] text-muted-foreground mt-1">
                Conversational reasoning, strategic recommendations, real-time signals, and escalation history.
              </p>
            </div>
            <LiveSignalFeed />
            <EscalationTimeline />
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  );
}
