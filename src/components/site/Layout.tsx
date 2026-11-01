import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { BadgeCheck, ChevronDown, Menu, Moon, Sun, X, Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const services = [
  { slug: "domestic", title: "Domestic Flights", desc: "Karachi, Lahore, Islamabad, Peshawar aur Quetta ke liye rozana flights." },
  { slug: "international", title: "International Flights", desc: "Gulf aur Middle East ke liye aaraam-deh safar." },
  { slug: "cargo", title: "Air Cargo", desc: "Tez aur mehfooz cargo delivery poore mulk mein." },
  { slug: "charter", title: "Charter Services", desc: "Corporate aur private groups ke liye khaas charter." },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const d = localStorage.getItem("theme") === "dark";
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
  }, []);
  const toggle = () => {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    localStorage.setItem("theme", d ? "dark" : "light");
  };
  return (
    <button onClick={toggle} aria-label="Dark mode" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border bg-card transition-all duration-300 hover:rotate-45 hover:bg-primary hover:text-primary-foreground">
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);
  const link = "nav-link font-semibold transition-colors hover:text-primary";
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center">
          <img src={logo} alt="Air Karachi" width={590} height={419} className="logo-hover h-12 w-auto dark:brightness-[1.8]" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className={link} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/about" className={link}>About</Link>
          <div className="group relative">
            <Link to="/services" className={`${link} flex items-center gap-1`}>Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" /></Link>
            <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-xl border bg-popover p-2 shadow-elegant">
                {services.map((s) => (
                  <Link key={s.slug} to="/services" hash={s.slug} className="block rounded-lg px-3 py-2 text-sm transition-all hover:translate-x-1 hover:bg-accent">{s.title}</Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/contact" className={link}>Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-full border md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="flex flex-col gap-1 px-4 pb-4">
          <Link to="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-accent">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-accent">About</Link>
          <button onClick={() => setSvc(!svc)} className="flex items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-accent">
            Services <ChevronDown className={`h-4 w-4 transition-transform ${svc ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden pl-4 transition-all duration-300 ${svc ? "max-h-60" : "max-h-0"}`}>
            {services.map((s) => (
              <Link key={s.slug} to="/services" hash={s.slug} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent">{s.title}</Link>
            ))}
          </div>
          <Link to="/contact" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 hover:bg-accent">Contact</Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Air Karachi" width={590} height={419} loading="lazy" className="logo-hover h-16 w-auto dark:brightness-[1.8]" />
          <p className="mt-4 text-sm text-muted-foreground">A Diamond in the Sky — Karachi ki apni airline.</p>
          <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground"><BadgeCheck className="h-4 w-4 text-primary" /> Verified Airline</span>
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg">Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/contact", "Contact"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="transition-colors hover:text-primary">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.map((s) => <li key={s.slug}><Link to="/services" hash={s.slug} className="transition-colors hover:text-primary">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-lg">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary" /> Jinnah International Airport, Karachi</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary" /> +92 21 000 0000</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary" /> info@airkarachi.com</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Twitter].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full border transition-all hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"><I className="h-4 w-4" /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Air Karachi. All rights reserved.</div>
    </footer>
  );
}

export function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((c, i) => (
        <span key={i} aria-hidden className="animate-letter" style={{ animationDelay: `${i * 0.04}s` }}>{c === " " ? "\u00A0" : c}</span>
      ))}
    </span>
  );
}

export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="bg-accent/50 py-20 text-center">
      <h1 className="text-4xl md:text-6xl"><AnimatedText text={title} /></h1>
      <p className="animate-fade-up mx-auto mt-4 max-w-xl px-4 text-muted-foreground" style={{ animationDelay: ".5s" }}>{sub}</p>
    </section>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
