import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout, services } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Mashhoor Muqamat — Karachi Unit" },
      { name: "description", content: "Mazar-e-Quaid, Mohatta Palace, Frere Hall, Clifton Beach, Empress Market aur Chaukhandi Tombs ki tafseel photos ke saath." },
      { property: "og:title", content: "Mashhoor Muqamat — Karachi Unit" },
      { property: "og:description", content: "Karachi ke tareekhi muqamat." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero title="Mashhoor Muqamat" sub="Karachi ke tareekhi aur khoobsurat muqamat." />
      <section className="mx-auto mt-16 max-w-6xl space-y-16 px-4">
        {services.map((s, i) => (
          <div id={s.slug} key={s.slug} className={`animate-fade-up grid scroll-mt-28 items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="card-hover overflow-hidden rounded-2xl">
              <img src={s.img} alt={s.title} width={1024} height={768} loading="lazy" className="w-full transition-transform duration-700 hover:scale-110" />
            </div>
            <div>
              <div className="text-shimmer font-display text-5xl font-bold">0{i + 1}</div>
              <h2 className="mt-2 text-3xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
