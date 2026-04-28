import { Button } from "@/components/ui/button";
import awardsImage from "@/assets/award.png";

export const WhyChooseUs = () => {
  return (
    <section className="bg-[#f0f4f8] py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background decoration to match the screenshot vibe */}
      <div className="absolute top-0 right-0 -m-20 h-[250px] w-[250px] rounded-full bg-white/40 blur-3xl sm:-m-24 sm:h-[350px] sm:w-[350px] lg:-m-32 lg:h-[500px] lg:w-[500px]" />
      <div className="absolute bottom-0 left-0 -m-20 h-[250px] w-[250px] rounded-full bg-white/40 blur-3xl sm:-m-24 sm:h-[350px] sm:w-[350px] lg:-m-32 lg:h-[500px] lg:w-[500px]" />

      <div className="container relative z-10 grid items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image Container */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md md:order-2 lg:mr-0 lg:max-w-none">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl ring-1 ring-black/5">
            <img
              src={awardsImage}
              alt="2022 Chiropractor of the Year Finalists - Allied Health Awards"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-start text-left px-0 sm:px-2 md:px-0 md:order-1">
          <h2 className="text-2xl font-light text-[#2c3e50] sm:text-3xl md:text-4xl">
            Recognised at the Highest Level
          </h2>
          
          <p className="mt-4 text-sm leading-relaxed text-[#4a5568] sm:mt-5 sm:text-base md:mt-6">
            Our commitment to evidence-based, ethical Chiropractic care has been recognised at a national level.
          </p>

          <ul className="mt-4 space-y-2 text-sm text-[#2d3748] sm:mt-5 sm:text-base md:mt-6">
            <li className="font-medium">• Lead by 2022 Australian Chiropractor of the Year finalist - Dr Robin Broff.</li>
            <li className="font-medium">• 2026 & 2024 Local Business Awards finalist</li>
            <li className="font-medium">• 600+ verified 5-star Google reviews across our clinics</li>
          </ul>

          <p className="mt-5 text-sm leading-relaxed text-[#4a5568] sm:text-base md:mt-8">
            These acknowledgements reflect consistency, clinical standards, and trust, not marketing claims.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#4a5568] sm:text-base md:mt-6">
            Since 2015, over 7,000 people have trusted Adjusting to Health with their spinal and nervous system health.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[#4a5568] sm:text-base md:mt-6">
            They didn't come to us for guesswork. They came for clarity, professionalism, and an approach that made sense.
          </p>

          <div className="mt-6 w-full sm:mt-8 md:mt-10">
            <Button 
              size="default"
              className="w-full bg-[#2D4542] hover:bg-[#1a2b29] text-white rounded-lg sm:rounded-full px-6 sm:px-8 py-3 sm:py-6 text-sm sm:text-base font-semibold shadow-md transition-all hover:scale-105 md:size-lg"
            >
              Book My Pain Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
