import { Phone, ArrowUpRight } from "lucide-react";
import lifeWork from "@/assets/life-work.jpg";
import lifeSleep from "@/assets/life-sleep.jpg";
import lifePark from "@/assets/life-park.jpg";

const locations = [
  { 
    name: "Doonside", 
    addr: "Shop 2, 185 Knox Road, Doonside NSW 2767", 
    phone: "(02) 9138 9393", 
    mapUrl: "https://www.google.com/maps/place/Adjusting+to+Health+Chiropractic/@-33.7487582,150.8672661,17z/data=!3m1!4b1!4m6!3m5!1s0x6b1299f934d159e7:0xbde5da8db43f7ddc!8m2!3d-33.7487582!4d150.8672661!16s%2Fg%2F11y3kz6gk0?hl=en",
    image: lifeWork
  },
  { 
    name: "Earlwood", 
    addr: "222 Homer St, Earlwood NSW 2206", 
    phone: "(02) 8395 5555", 
    mapUrl: "https://www.google.com/maps/place/Adjusting+to+Health+Chiropractic/@-33.9268506,151.1273022,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12bbd98c38ac17:0x3cee1fc9c7fc5e60!8m2!3d-33.9268506!4d151.1273022!16s%2Fg%2F11yj5ckjww?hl=en",
    image: lifeSleep
  },
  { 
    name: "Bonnyrigg", 
    addr: "Shop 2/134 Edensor Rd, Bonnyrigg NSW 2177", 
    phone: "(02) 9822 0008", 
    mapUrl: "https://www.google.com/maps/place/Adjusting+To+Health+Chiropractic/@-33.8845193,150.8925933,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12969b815765e5:0xdf22a098b31caad0!8m2!3d-33.8845193!4d150.8925933!16s%2Fg%2F11byl0_llv?hl=en",
    image: lifePark
  },
];

export const Locations = () => (
  <section id="locations" className="bg-soft py-12 sm:py-16 md:py-20 lg:py-24">
    <div className="container">
      <div className="mb-8 text-center sm:mb-10 md:mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Visit us</span>
        <h2 className="mt-2 font-display text-3xl font-light text-foreground sm:mt-3 sm:text-4xl md:mt-3 md:text-5xl">
          Three premium practice locations
        </h2>
        <p className="mx-auto mt-3 max-w-2xl px-4 text-sm text-muted-foreground sm:mt-4 sm:px-0 sm:text-base md:mt-4">
          Adjusting To Health operates across Western Sydney. No matter how busy you are, there's a clinic conveniently
          near you to begin your Health Blueprint™.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <article key={loc.name} className="group overflow-hidden rounded-2xl sm:rounded-3xl bg-card shadow-soft ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-elev">
            <div className="relative h-40 sm:h-48 md:h-56 bg-primary/90 overflow-hidden">
              <img 
                src={loc.image} 
                alt={`${loc.name} location`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute left-3 top-3 rounded-full bg-card/95 px-2 py-1 text-xs font-medium text-foreground backdrop-blur sm:left-5 sm:top-5 sm:px-3">
                {loc.name}
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="font-display text-xl font-medium text-foreground sm:text-2xl">{loc.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">{loc.addr}</p>
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a href={`tel:${loc.phone.replace(/[\s()]/g, '')}`} className="flex items-center gap-2 text-xs font-medium text-foreground hover:text-accent transition-colors sm:text-sm">
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" /> <span>{loc.phone}</span>
                </a>
                <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs font-medium text-accent hover:gap-2 transition-all sm:text-sm">
                  Get directions <ArrowUpRight className="h-3.5 w-3.5 flex-shrink-0" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
