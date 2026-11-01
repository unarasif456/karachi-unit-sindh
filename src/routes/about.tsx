import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Air Karachi" },
      { name: "description", content: "Air Karachi ke baare mein — hamara mission aur vision." },
      { property: "og:title", content: "About — Air Karachi" },
      { property: "og:description", content: "Karachi ki apni airline ki kahani." },
    ],
  }),
  component: About,
});

const stats = [["50K+", "Musafir"], ["15+", "Destinations"], ["99%", "On-time"], ["24/7", "Support"]];

function About() {
  return (
    <SiteLayout>
      <PageHero title="About Us" sub="Air Karachi — Karachi ke logon ka khwab, ab aasmaan mein." />
      <section className="mx-auto mt-16 grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div className="animate-fade-up">
          <h2 className="text-3xl">Hamara Mission</h2>
          <p className="mt-4 text-muted-foreground">Har musafir ko mehfooz, aaraam-deh aur munasib qeemat par safar faraham karna. Hum Karachi ko Pakistan aur dunya se jodte hain.</p>
          <h2 className="mt-8 text-3xl">Hamara Vision</h2>
          <p className="mt-4 text-muted-foreground">Pakistan ki sab se bharosemand aur verified airline banna — A Diamond in the Sky.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(([n, l], i) => (
            <div key={l} className="card-hover animate-fade-up rounded-2xl border bg-card p-6 text-center" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-shimmer font-display text-4xl font-bold">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
