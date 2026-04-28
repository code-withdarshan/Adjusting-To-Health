import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import headache from "@/assets/blog-headache.jpg";
import back from "@/assets/blog-back.jpg";

const posts = [
  { img: headache, date: "Apr 28, 2026", title: "Neck Pain and Headaches: What May Be Causing Both",
    excerpt: "Tension headaches and neck pain often share the same root cause. Here's what the latest research tells us — and what you can do about it from home today." },
  { img: back, date: "Apr 14, 2026", title: "Still Living With That ‘Why’ Doesn't Get Better Lower Back Pain?",
    excerpt: "If you've tried physio, painkillers and rest with no lasting result, it might be time for a different approach. Here's what we look for during a Health Blueprint™." },
];

export const Blog = () => (
  <section id="blog" className="bg-primary py-24 text-primary-foreground">
    <div className="container">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">From the journal</span>
          <h2 className="mt-3 font-display text-4xl font-light md:text-5xl">Explore recent articles</h2>
        </div>
        <a href="#" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground">
          View all <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p, i) => (
          <article key={i} className="group overflow-hidden rounded-3xl bg-primary-glow/30 ring-1 ring-white/10 transition-all hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <img src={p.img} alt="" loading="lazy" width={1024} height={700}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-7">
              <div className="text-xs uppercase tracking-wider text-accent">{p.date}</div>
              <h3 className="mt-3 font-display text-2xl font-medium leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-primary-foreground/70">{p.excerpt}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
                Read more <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" size="lg" className="border-white/30 text-primary-foreground hover:bg-white hover:text-primary">
          View all articles
        </Button>
      </div>
    </div>
  </section>
);
