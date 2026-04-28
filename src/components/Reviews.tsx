import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah M.", text: "Most thorough exam I've ever had. The team explained everything and I felt better within weeks.", initial: "S" },
  { name: "James L.", text: "After years of headaches, the Health Blueprint protocol uncovered the actual cause. Life-changing.", initial: "J" },
  { name: "Priya R.", text: "Professional, evidence-based, and genuinely caring. They don't push endless visits — they fix the issue.", initial: "P" },
  { name: "Connor W.", text: "I tried physio, massage, painkillers… this was the first place that actually got results.", initial: "C" },
  { name: "Emily D.", text: "Beautiful clinic and an incredible team. My sleep and energy are completely different now.", initial: "E" },
];

export const Reviews = () => (
  <section className="bg-soft py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container">
      <div className="mb-8 text-center sm:mb-10 md:mb-14">
        <div className="mb-2 flex items-center justify-center gap-0.5 sm:gap-1">
          {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-accent text-accent" />)}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-light text-foreground md:text-4xl lg:text-5xl">
          <span className="font-medium text-accent">500+</span> five-star Google reviews
        </h2>
        <p className="mx-auto mt-2 max-w-2xl px-4 text-xs sm:mt-3 sm:text-sm sm:px-0 md:mt-4 text-muted-foreground">
          Over 500 five-star reviews from real Sydneysiders. We're proud to be the chiropractic team trusted by families,
          professionals, athletes, and anyone serious about reclaiming their health.
        </p>
      </div>

      <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {reviews.map((r, i) => (
          <article key={r.name}
            className={`rounded-lg sm:rounded-2xl bg-card p-4 sm:p-6 shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-elev ${i === 2 ? 'lg:translate-y-4' : ''}`}>
            <div className="mb-2 sm:mb-3 flex gap-0.5">
              {[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-accent text-accent" />)}
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
            <div className="mt-3 sm:mt-5 flex items-center gap-2 sm:gap-3 border-t border-border pt-3 sm:pt-4">
              <div className="grid h-8 sm:h-9 w-8 sm:w-9 place-items-center rounded-full bg-amber-grad font-display text-xs sm:text-sm font-semibold text-accent-foreground flex-shrink-0">
                {r.initial}
              </div>
              <div className="text-xs">
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-muted-foreground">Verified Google review</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 md:mt-16 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between rounded-xl sm:rounded-2xl md:rounded-3xl bg-primary p-6 sm:p-8 md:p-10 text-primary-foreground">
        <div className="flex-1">
          <div className="font-display text-lg sm:text-2xl font-light md:text-3xl leading-tight">
            Book your first visit today — see if we can help you like we did for them.
          </div>
          <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-primary-foreground/70">
            <span className="line-through">$199</span> &nbsp;just <span className="font-semibold text-accent">$19</span>
          </div>
        </div>
        <a href="#book" className="rounded-lg sm:rounded-full bg-amber-grad px-4 sm:px-7 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-accent-foreground shadow-amber transition-transform hover:-translate-y-0.5 whitespace-nowrap text-center">
          Join 7,500+ who started here
        </a>
      </div>
    </div>
  </section>
);
