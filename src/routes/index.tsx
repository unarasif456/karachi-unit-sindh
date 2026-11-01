import { createFileRoute, Link } from "@tanstack/react-router";
import { Plane, ShieldCheck, Clock, Award } from "lucide-react";
import video from "@/assets/hero_video.mp4.asset.json";
import { AnimatedText, SiteLayout, services } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Air Karachi — A Diamond in the Sky" },
      { name: "description", content: "Air Karachi: domestic, international, cargo aur charter flights Karachi se." },
      { property: "og:title", content: "Air Karachi — A Diamond in the Sky" },
      { property: "og:description", content: "Karachi ki apni airline — aaraam, hifazat aur waqt ki pabandi." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: ShieldCheck, t: "Mehfooz Safar", d: "International safety standards" },
  { icon: Clock, t: "Waqt ki Pabandi", d: "On-time departures" },
  { icon: Award, t: "Verified Airline", d: "Licensed & certified" },
  { icon: Plane, t: "Modern Fleet", d: "Naye aur aaraam-deh jahaz" },
];

function Index() {
  return (
    <SiteLayout>
      <section className="relative mx-auto mt-6 h-[75vh] max-w-7xl overflow-hidden rounded-3xl px-4 sm:px-0">
        <video src={video.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full rounded-3xl object-cover" />
        <div className="bg-hero-overlay absolute inset-0 rounded-3xl" />
        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-on-overlay">
          <p className="animate-fade-up mb-4 tracking-[0.3em] text-gold uppercase text-sm">Welcome aboard</p>
          <h1 className="text-4xl leading-tight md:text-7xl">
            <AnimatedText text="Air Karachi" />
            <br />
            <span className="text-shimmer italic">A Diamond in the Sky</span>
          </h1>
          <p className="animate-fade-up mt-6 max-w-xl opacity-90" style={{ animationDelay: ".6s" }}>
            Karachi se poore Pakistan aur dunya tak — aaraam, hifazat aur behtareen service ke saath.
          </p>
          <div className="animate-fade-up mt-8 flex flex-wrap justify-center gap-4" style={{ animationDelay: ".9s" }}>
            <Link to="/services" className="rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:scale-105">Book Flight</Link>
            <Link to="/about" className="rounded-full border border-on-overlay/60 px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-on-overlay hover:text-overlay">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div key={f.t} className="card-hover animate-fade-up rounded-2xl border bg-card p-6" style={{ animationDelay: `${i * 0.15}s` }}>
            <f.icon className="animate-float h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl">{f.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4">
        <h2 className="text-center text-3xl md:text-5xl">Hamari <span className="text-shimmer">Services</span></h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} to="/services" hash={s.slug} className="card-hover group rounded-2xl border bg-card p-8">
              <h3 className="text-2xl transition-colors group-hover:text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-block font-semibold text-primary transition-transform group-hover:translate-x-2">Aur janiye →</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
