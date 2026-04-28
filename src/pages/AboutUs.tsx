import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Approach } from "@/components/Approach";
import { SiteFooter } from "@/components/SiteFooter";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | Adjusting To Health";
  }, []);

  return (
    <main>
      <SiteHeader />
      <div className="pt-32 pb-20 container mx-auto text-center">
        <h1 className="font-display text-5xl font-light mb-6">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We don't guess, we test. Adjusting to Health provides the most thorough, evidence-based chiropractic care across Sydney.
        </p>
      </div>
      <Approach />
      <SiteFooter />
    </main>
  );
};
export default AboutUs;