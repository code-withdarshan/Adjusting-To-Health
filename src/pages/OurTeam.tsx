import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Team } from "@/components/Team";
import { SiteFooter } from "@/components/SiteFooter";

const OurTeam = () => {
  useEffect(() => {
    document.title = "Our Team | Adjusting To Health";
  }, []);

  return (
    <main>
      <SiteHeader />
      <div className="pt-32 container mx-auto">
         <h1 className="font-display text-5xl font-light text-center mb-6">Meet the Team</h1>
         <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Our AHPRA registered professionals, including 2022 Chiropractor of the Year finalist Dr Robin Broff, provide safe, effective, and evidence-based care.
         </p>
      </div>
      <Team />
      <SiteFooter />
    </main>
  );
};
export default OurTeam;