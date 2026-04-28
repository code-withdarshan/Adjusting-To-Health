import { ClipboardList, FileSearch, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { n: "01", icon: ClipboardList, title: "Your First Visit",
    desc: "We start with a thorough consultation, assessment, and digital posture analysis. We listen first, examine carefully, and only proceed when we're certain we can help — and exactly how." },
  { n: "02", icon: FileSearch, title: "Report of Findings",
    desc: "Our Health Blueprint™ Report of Findings is the moment everything makes sense. We translate your scans, exam findings, and history into a clear plan tailored to you." },
  { n: "03", icon: TrendingUp, title: "Progress Exams",
    desc: "We re-test progress every six weeks. You'll see measurable improvements, refined protocols, and adjustments as your body changes — never guesswork." },
];

export const Approach = () => (
  <section id="approach" className="bg-card py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container">
      <div className="mb-10 text-center sm:mb-12 md:mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our 3-step protocol</span>
        <h2 className="mt-2 font-display text-3xl font-light text-foreground sm:mt-3 sm:text-4xl md:mt-3 md:text-5xl">
          We don't guess. We test.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-sm text-muted-foreground sm:mt-4 sm:px-0 sm:text-base md:mt-4">
          The Health Blueprint™ is our exclusive 3-stage protocol used to find the cause of your pain and dysfunction —
          and create a true, evidence-based roadmap.
        </p>
      </div>

      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        {steps.map(({ n, icon: Icon, title, desc }) => (
          <div key={n} className="relative rounded-2xl md:rounded-3xl border border-border bg-background p-6 sm:p-8 transition-all hover:border-accent/40 hover:shadow-elev">
            <div className="absolute -top-4 left-6 sm:left-8 grid h-8 sm:h-10 w-8 sm:w-10 place-items-center rounded-full bg-amber-grad font-display text-xs sm:text-sm font-semibold text-accent-foreground shadow-amber">
              {n}
            </div>
            <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-accent mt-2" />
            <h3 className="mt-4 font-display text-lg sm:text-2xl font-medium text-foreground sm:mt-6">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 sm:mt-12 md:mt-16 rounded-2xl md:rounded-3xl bg-hero p-6 sm:p-8 md:p-10 lg:p-14 text-primary-foreground relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl sm:h-60 sm:w-60 lg:h-72 lg:w-72" />
        <div className="relative grid items-center gap-6 sm:gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The Health Blueprint™ Protocol</span>
            <h3 className="mt-2 font-display text-2xl font-light leading-tight text-primary-foreground sm:mt-3 sm:text-3xl md:mt-3 md:text-4xl">
              Learn more about our approach
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-primary-foreground/75 sm:mt-4 md:mt-4 sm:text-base">
              Robust diagnostics, careful listening, evidence-based care — all the comfort and craft of a private practice,
              with the rigour of a research clinic.
            </p>
          </div>
          <Button variant="hero" size="default" className="w-full sm:w-auto md:size-lg">Health Blueprint™</Button>
        </div>
      </div>
    </div>
  </section>
);
