import img1 from "@/assets/memberships1.webp";
import img2 from "@/assets/memberships2.webp";
import img3 from "@/assets/memberships3.webp";
import img4 from "@/assets/memberships4.webp";

const items = [
  { name: "Spinal Research", src: img1 },
  { name: "ACA Member", src: img2 },
  { name: "AHPRA Registered", src: img3 },
  { name: "Local Business Awards", src: img4 }
];

export const Accreditations = () => (
  <section className="border-y border-border bg-card py-14">
    <div className="container">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Accreditations & Memberships
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-20">
        {items.map((i) => (
          <div key={i.name} className="flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <img 
              src={i.src} 
              alt={i.name} 
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
