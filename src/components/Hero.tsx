import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/site-image.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero pb-16 pt-24 sm:pb-24 sm:pt-28 md:pb-32 md:pt-32 lg:pb-40 lg:pt-36">
      <div className="absolute inset-0 grain" />
      <div className="absolute -right-40 -top-40 h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />
      <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-primary-glow/30 blur-3xl sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

      <div className="container relative">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/80 backdrop-blur sm:px-4 sm:py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Sydney · Est. Chiropractic
            </span>
            <h1 className="mt-6 font-display text-3xl font-light leading-[1.1] text-primary-foreground sm:text-4xl md:mt-8 md:text-5xl md:leading-[1.05]">
              Sydney's most <em className="font-medium not-italic text-accent">thorough</em>,
              <br /> evidence-based chiropractors.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/75 sm:text-lg md:mt-6">
              Using our exclusive <strong className="font-semibold text-primary-foreground">Health Blueprint™</strong> protocol,
              we look beyond symptoms to discover the underlying patterns so you can stop guessing
              and start healing.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-10">
              <Button variant="hero" size="default" className="group w-full sm:w-auto md:size-xl">
                Book Health Blueprint™
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="#approach" className="hidden text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground sm:block">
                Learn about our approach →
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:gap-6 md:mt-12 md:pt-8">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <div>
                <div className="font-display text-lg text-primary-foreground sm:text-xl">500+</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Five-star Google reviews</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
                <img src={bannerImage} alt="Adjusting to Health chiropractic team in Sydney" className="h-full w-full rounded-xl sm:rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
