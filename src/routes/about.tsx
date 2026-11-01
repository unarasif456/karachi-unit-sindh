import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/Layout";
import mazar from "@/assets/mazar-quaid.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Karachi ki Tareekh — Karachi Unit" },
      { name: "description", content: "Karachi aur Quaid-e-Azam ki tareekh." },
      { property: "og:title", content: "Karachi ki Tareekh — Karachi Unit" },
      { property: "og:description", content: "Machhero ki basti se mega city tak." },
    ],
  }),
  component: About,
});

const stats = [["2 Crore+", "Abadi"], ["1729", "Bunyad"], ["1876", "Quaid ki Paidaish"], ["7", "Districts"]];

function About() {
  return (
    <SiteLayout>
      <PageHero title="Karachi ki Kahani" sub="Machhero ki chhoti si basti se Pakistan ke sab se bare shehar tak." />
      <section className="mx-auto mt-16 grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <img src={mazar} alt="Mazar-e-Quaid" width={1024} height={768} loading="lazy" className="card-hover animate-fade-up rounded-2xl" />
        <div className="animate-fade-up">
          <h2 className="text-3xl">Tareekh</h2>
          <p className="mt-4 text-muted-foreground">Karachi pehle "Kolachi" naam ki machhero ki basti thi. British daur mein yeh bara bandargah bana, aur 1947 mein Pakistan ka pehla darul hukumat bana.</p>
          <h2 className="mt-8 text-3xl">Quaid-e-Azam</h2>
          <p className="mt-4 text-muted-foreground">Bani-e-Pakistan Muhammad Ali Jinnah 25 December 1876 ko Karachi ke Wazir Mansion mein paida huay aur 11 September 1948 ko isi shehar mein wafat payi. Un ka maqbara Mazar-e-Quaid aaj shehar ka dil hai.</p>
        </div>
      </section>
      <section className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
        {stats.map(([n, l], i) => (
          <div key={l} className="card-hover animate-fade-up rounded-2xl border bg-card p-6 text-center" style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="text-shimmer font-display text-3xl font-bold">{n}</div>
            <div className="mt-2 text-sm text-muted-foreground">{l}</div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
