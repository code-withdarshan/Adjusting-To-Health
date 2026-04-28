export const Team = () => (
  <section className="w-full bg-card py-8 sm:py-10 md:py-12 lg:py-16">
    <div className="container">
      <div className="mb-4 text-center sm:mb-5 md:mb-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Meet our team</span>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-light text-foreground md:mt-3 md:text-4xl lg:text-5xl">
          Get Adjusted
        </h2>
      </div>
      <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="/team.jpg" 
          alt="Adjusting To Health team" 
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  </section>
);
