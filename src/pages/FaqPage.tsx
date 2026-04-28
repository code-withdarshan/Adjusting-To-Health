import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { FAQ } from "@/components/FAQ";
import { SiteFooter } from "@/components/SiteFooter";

const FaqPage = () => {
  useEffect(() => {
    document.title = "FAQ | Adjusting To Health";
  }, []);

  return (
    <main>
      <SiteHeader />
      <div className="pt-32 mb-10 text-center container mx-auto">
         <h1 className="font-display text-5xl font-light mb-6">Frequently Asked Questions</h1>
      </div>
      <FAQ />
      <SiteFooter />
    </main>
  );
};
export default FaqPage;