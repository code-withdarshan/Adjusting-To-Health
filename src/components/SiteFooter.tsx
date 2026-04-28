import { MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.svg";

const locs = [
  { name: "Rosebery", addr: "Shop 4, 73 Lawrence St, Rosebery NSW 2018" },
  { name: "Redfern", addr: "Shop 2, 195 Botany Rd, Redfern NSW 2016" },
  { name: "Eastwood", addr: "Suite 3, 162 Rowe St, Eastwood NSW 2122" },
];

export const SiteFooter = () => (
  <footer className="bg-foreground py-8 text-background sm:py-12 md:py-16">
    <div className="container">
      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_2fr]">
        <div className="px-0">
          <img src={logo} alt="Adjusting to Health Logo" className="h-10 w-auto sm:h-12" />
          <p className="mt-3 max-w-sm text-xs sm:text-sm text-background/60 sm:mt-4">
            Adjusting Sydney to a healthier life. Evidence-based chiropractic care across three premium practice locations.
          </p>
          <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 sm:h-10 w-9 sm:w-10 place-items-center rounded-full border border-background/15 text-background/70 hover:border-accent hover:text-accent transition-colors">
                <Icon className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-3">
          {locs.map(l => (
            <div key={l.name} className="px-0">
              <div className="mb-2 flex items-center gap-2 text-accent">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">{l.name}</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-background/70">{l.addr}</p>
              <a href="#" className="mt-2 inline-block text-xs font-medium text-accent underline-offset-4 hover:underline">
                Get directions →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-background/10 pt-6 sm:gap-4 sm:flex-row sm:items-center sm:justify-between md:mt-14 md:pt-6 text-xs text-background/50">
        <div>© {new Date().getFullYear()} Adjusting To Health. All rights reserved.</div>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="hover:text-background transition-colors">Privacy</a>
          <a href="#" className="hover:text-background transition-colors">Terms</a>
          <a href="#" className="hover:text-background transition-colors">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);
