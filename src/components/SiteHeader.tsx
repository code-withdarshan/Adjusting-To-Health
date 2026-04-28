import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/team", label: "Our Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-primary/95 backdrop-blur border-b border-white/10 transition-colors">
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link to="/" className="flex items-center shrink-0">
          <img src={logo} alt="Adjusting to Health Logo" className="h-8 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link key={l.href} to={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground lg:px-4">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex lg:gap-3">
          <a href="tel:+61000000000" className="flex items-center gap-1 text-xs font-medium text-primary-foreground/80 hover:text-primary-foreground lg:text-sm lg:gap-2">
            <Phone className="h-4 w-4" /> <span className="hidden lg:inline">Call Us</span>
          </a>
          <Button variant="hero" size="sm" className="lg:size-default">Book Appointment</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="p-1 text-primary-foreground lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-tablet-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-tablet-menu"
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close menu backdrop"
          className="absolute inset-0 bg-black/45"
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-primary p-4 shadow-2xl transition-transform duration-300 sm:p-5 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
              <img src={logo} alt="Adjusting to Health Logo" className="h-8 w-auto" />
            </Link>
            <button type="button" onClick={() => setOpen(false)} className="p-1 text-primary-foreground" aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.href} to={l.href} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-primary-foreground/90 hover:bg-white/5 active:bg-white/10">{l.label}</Link>
            ))}
            <a href="tel:+61000000000" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-primary-foreground/90 hover:bg-white/5">
              <Phone className="h-4 w-4" /> Call Us
            </a>
            <Button variant="hero" className="mt-2 w-full" onClick={() => setOpen(false)}>Book Appointment</Button>
          </div>
        </aside>
      </div>
    </header>
  );
};
