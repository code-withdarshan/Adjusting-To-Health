import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Does it hurt?", a: "Most adjustments feel like gentle pressure or a mild release. We tailor every technique to your comfort and never proceed with anything that doesn't feel right for you. You're in control the entire time." },
  { q: "Is Chiropractic Safe?", a: "Yes. Chiropractic is a well-researched, regulated profession. Our team is fully AHPRA-registered and trained in evidence-based techniques. We screen every patient thoroughly before treatment to ensure care is appropriate and safe." },
  { q: "Is it Effective?", a: "High-quality studies show chiropractic care is effective for back pain, neck pain, headaches, and many musculoskeletal issues. Our Health Blueprint™ protocol layers diagnostics, hands-on care, and lifestyle guidance for measurable, lasting results." },
  { q: "Is it Evidence Based?", a: "Absolutely. We follow the latest research, only use techniques shown to help, and continuously update our protocols. If chiropractic isn't right for your case, we'll tell you and refer you to the right specialist." },
];

export const FAQ = () => (
  <section id="faq" className="bg-soft py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container max-w-5xl">
      <div className="mb-8 text-center sm:mb-10 md:mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQs</span>
        <h2 className="mt-2 font-display text-2xl sm:text-3xl font-light text-foreground md:mt-3 md:text-4xl lg:text-5xl">
          Common questions new patients ask
        </h2>
      </div>

      <Accordion type="single" collapsible className="grid gap-3 sm:gap-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-lg sm:rounded-2xl border border-border bg-card px-4 sm:px-6 shadow-soft">
            <AccordionTrigger className="py-4 sm:py-6 text-left font-display text-base sm:text-xl font-medium text-foreground hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
