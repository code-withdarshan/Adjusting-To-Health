// icons not used in this section's design
const items = [
  { num: "01", title: "Panadol Osteo or Voltaren", desc: "Take these and hope they'll continue to give relief." },
  { num: "02", title: "Codeine or Panadeine Forte", desc: "Deep down you know it's not a real solution." },
  { num: "03", title: "Stronger painkillers", desc: "Side effects, dependence, and rebound pain." },
  { num: "04", title: "Discussing surgery", desc: "Drastic, expensive, and not always required." },
  { num: "05", title: "Cortisone injections", desc: "Masks the symptom but doesn't solve the cause." },
  { num: "06", title: "MRI scans", desc: "Findings that don't always match your symptoms." },
  { num: "07", title: "8+ months of appointments", desc: "Only to be told it's another lifetime visit plan." },
  { num: "08", title: "Plain generic exercises", desc: "Generic protocols that aren't built for your body." },
  { num: "09", title: "Muscle relaxants", desc: "Drowsy, foggy, and the cause is still there." },
];

export const TriedList = () => (
  <section className="bg-background py-24">
    <div className="container">
      <div className="mb-12 max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">When you've likely already been through</span>
        <h2 className="mt-3 font-display text-4xl font-light leading-tight text-foreground md:text-5xl">
          Chances are, you've already tried…
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
        {items.map((it) => (
          <div key={it.num} className="group bg-card p-8 transition-colors hover:bg-accent-soft/50">
            <div className="mb-6 flex items-baseline justify-between">
              <span className="font-display text-sm text-muted-foreground tracking-widest">{it.num}</span>
              <span className="h-px flex-1 mx-4 bg-border" />
              <span className="text-xs uppercase tracking-wider text-accent opacity-0 transition-opacity group-hover:opacity-100">Tried it?</span>
            </div>
            <h3 className="font-display text-2xl font-light text-foreground">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
        While all of these may seem to work in the moment, they often leave the underlying problem unsolved.
        The Health Blueprint™ pairs a thorough diagnostic with care designed for <em>your</em> body — so the results last.
      </p>
    </div>
  </section>
);
