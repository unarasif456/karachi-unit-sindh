import { createFileRoute, Link } from "@tanstack/react-router";
import { Landmark, Waves, Users, Sun } from "lucide-react";
import video from "@/assets/hero_video.mp4.asset.json";
import { AnimatedText, SiteLayout, services } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karachi Unit — Roshniyon ka Shehar" },
      { name: "description", content: "Karachi ke baare mein sab kuch: Mazar-e-Quaid, Mohatta Palace, Frere Hall aur bohat kuch." },
      { property: "og:title", content: "Karachi Unit — Roshniyon ka Shehar" },
      { property: "og:description", content: "Karachi ki tareekh, saqafat aur mashhoor muqamat photos ke saath." },
    ],
  }),
  component: Index,
});

const facts = [
  { icon: Users, t: "2 Crore+", d: "Pakistan ka sab se bara shehar" },
  { icon: Landmark, t: "Pehla Darul Hukumat", d: "1947 se 1959 tak capital" },
  { icon: Waves, t: "Arabian Sea", d: "Clifton aur Sea View ka sahil" },
  { icon: Sun, t: "City of Lights", d: "Kabhi na sone wala shehar" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative mx-auto mt-6 h-[75vh] max-w-7xl overflow-hidden rounded-3xl">
        <video src={video.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-on-overlay">
          <p className="animate-fade-up mb-4 text-sm tracking-[0.3em] text-gold uppercase">Khush Aamdeed</p>
          <h1 className="text-4xl leading-tight md:text-7xl">
            <AnimatedText text="Karachi Unit" />
            <br />
            <span className="text-shimmer italic">Roshniyon ka Shehar</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl opacity-90" style={{ animationDelay: ".6s" }}>
            Quaid-e-Azam ka shehar — tareekh, samandar aur dil wale logon ka ghar.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-4" style={{ animationDelay: ".9s" }}>
            <Link to="/services" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-105">Muqamat Dekhein</Link>
            <Link to="/about" className="rounded-full border border-on-overlay/60 px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-on-overlay hover:text-overlay">Tareekh Parhein</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f, i) => (
          <div key={f.t} className="card-hover animate-fade-up rounded-2xl border bg-card p-6" style={{ animationDelay: `${i * 0.15}s` }}>
            <f.icon className="animate-float h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl">{f.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-5xl">Mashhoor <span className="text-shimmer">Muqamat</span></h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to="/services" hash={s.slug} className="card-hover group overflow-hidden rounded-2xl border bg-card">
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl transition-colors group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-block font-semibold text-primary transition-transform group-hover:translate-x-2">Aur janiye →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
