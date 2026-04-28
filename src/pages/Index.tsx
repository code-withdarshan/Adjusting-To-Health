import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Reviews } from "@/components/Reviews";
import { Accreditations } from "@/components/Accreditations";
import { MissingOut } from "@/components/MissingOut";
import { FAQ } from "@/components/FAQ";
import { TriedList } from "@/components/TriedList";
import { Approach } from "@/components/Approach";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Locations } from "@/components/Locations";
import { Team } from "@/components/Team";
import { Blog } from "@/components/Blog";
import { SiteFooter } from "@/components/SiteFooter";

const Index = () => {
  useEffect(() => {
    document.title = "Adjusting To Health — Sydney's Most Thorough Chiropractors";
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', "Sydney's evidence-based chiropractic team. The Health Blueprint™ protocol uncovers the cause of your pain — relief from back, neck and headaches.");
    if (!meta.parentNode) document.head.appendChild(meta);
  }, []);

  return (
    <main>
      <SiteHeader />
      <Hero />
      <Benefits />
      <Reviews />
      <Accreditations />
      <WhyChooseUs />
      <MissingOut />
      <FAQ />
      <TriedList />
      <Approach />
      <Locations />
      <Team />
      <Blog />
      <SiteFooter />
    </main>
  );
};

export default Index;
