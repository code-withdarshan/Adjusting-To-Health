import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import park from "@/assets/life-park.jpg";
import sleep from "@/assets/life-sleep.jpg";
import work from "@/assets/life-work.jpg";

const items = [
  { img: park, title: "Playing with your kids at the park" },
  { img: sleep, title: "Sleeping through the night" },
  { img: work, title: "Getting through a full workday" },
  { img: park, title: "Lifting your toddler" },
  { img: park, title: "Enjoying weekends pain-free" },
  { img: work, title: "Walking with your partner" },
];

export const MissingOut = () => (
  <section className="bg-primary py-24 text-primary-foreground">
    <div className="container">
      <div className="mb-14 grid items-end gap-6 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">The cost of waiting</span>
          <h2 className="mt-3 font-display text-4xl font-light leading-tight md:text-5xl">
            What are you missing out on?
          </h2>
        </div>
        <p className="text-primary-foreground/70 md:text-right">
          Most people live with pain longer than they need to. Here's what your body is keeping you from.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <img src={it.img} alt={it.title} loading="lazy" width={1024} height={1024}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <h3 className="font-display text-xl font-medium leading-tight">{it.title}</h3>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="hero" size="lg">Book My Pain Assessment</Button>
      </div>
    </div>
  </section>
);
