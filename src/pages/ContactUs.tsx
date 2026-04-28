import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Locations } from "@/components/Locations";
import { SiteFooter } from "@/components/SiteFooter";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us | Adjusting To Health";
  }, []);

  return (
    <main>
      <SiteHeader />
      <div className="pt-32 bg-soft pb-10">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-5xl font-light mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out to book your Health Blueprint™ at any of our three Sydney clinics: Bonnyrigg, Doonside, or Earlwood.
          </p>
        </div>
      </div>
      <Locations />
      <SiteFooter />
    </main>
  );
};
export default ContactUs;