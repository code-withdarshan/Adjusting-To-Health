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
    <header className={`sticky inset-x-0 top-0 z-50 border-b border-white/10 transition-colors ${
      open ? "bg-primary" : "bg-primary/95 backdrop-blur"
    }`}>
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
          type="button"
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center text-primary-foreground lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-tablet-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-tablet-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-primary text-primary-foreground sm:top-20 lg:hidden"
        >
          <div className="container py-6 sm:py-8">
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {links.map((l) => (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)}
                  className="border-b border-white/10 px-1 py-4 text-base font-medium text-primary-foreground transition-colors hover:text-accent active:text-accent">{l.label}</Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6">
              <a href="tel:+61000000000" className="flex items-center gap-2 text-sm font-medium text-primary-foreground/85 hover:text-primary-foreground">
                <Phone className="h-4 w-4" /> Call Us
              </a>
              <Button variant="hero" className="w-full" onClick={() => setOpen(false)}>Book Appointment</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
