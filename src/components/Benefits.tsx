import { Brain, Moon, Battery, Shield } from "lucide-react";

const items = [
  { icon: Brain, title: "Relief from Back Pain, Neck Pain & Headaches", desc: "Address the root cause — not just the symptom." },
  { icon: Moon, title: "Improved Sleep & Recovery", desc: "Restful nights, faster recovery between days." },
  { icon: Battery, title: "Higher Energy Levels, Less Stress", desc: "Move better, breathe better, feel sharper." },
  { icon: Shield, title: "Safe & Evidence-Based Care", desc: "Modern, measured, and tailored to your body." },
];

export const Benefits = () => (
  <section className="container -mt-12 relative z-10 px-4 sm:px-6 md:-mt-24 md:px-0">
    <div className="rounded-xl sm:rounded-2xl md:rounded-[2rem] bg-card p-6 sm:p-8 md:p-12 shadow-elev ring-1 ring-border">
      <div className="mb-6 sm:mb-8 md:mb-10 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">We don't guess. We test.</span>
        <h2 className="mt-2 font-display text-2xl font-light leading-tight text-foreground sm:mt-3 sm:text-3xl md:mt-3 md:text-4xl">
          Outcomes our patients tell us they feel
        </h2>
      </div>
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-lg sm:rounded-2xl border border-border bg-background p-4 sm:p-6 transition-all hover:border-accent/40 hover:bg-accent-soft/40 hover:-translate-y-1">
            <div className="mb-3 sm:mb-4 grid h-10 sm:h-12 w-10 sm:w-12 place-items-center rounded-lg sm:rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <h3 className="font-display text-sm sm:text-lg font-medium leading-tight text-foreground">{title}</h3>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
