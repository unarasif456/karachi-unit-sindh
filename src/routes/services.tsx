import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout, services } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Air Karachi" },
      { name: "description", content: "Domestic, international, cargo aur charter flights." },
      { property: "og:title", content: "Services — Air Karachi" },
      { property: "og:description", content: "Air Karachi ki tamam services." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero title="Our Services" sub="Aap ki har zaroorat ke liye behtareen hawai service." />
      <section className="mx-auto mt-16 grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        {services.map((s, i) => (
          <div id={s.slug} key={s.slug} className="card-hover animate-fade-up scroll-mt-28 rounded-2xl border bg-card p-8" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="text-shimmer font-display text-5xl font-bold">0{i + 1}</div>
            <h2 className="mt-4 text-2xl">{s.title}</h2>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
