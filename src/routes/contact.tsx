import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Air Karachi" },
      { name: "description", content: "Air Karachi se rabta karein." },
      { property: "og:title", content: "Contact — Air Karachi" },
      { property: "og:description", content: "Sawal ya booking ke liye hum se rabta karein." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-xl border bg-background px-4 py-3 outline-none transition-all focus:border-primary focus:shadow-elegant";
  return (
    <SiteLayout>
      <PageHero title="Contact Us" sub="Hum aap ki madad ke liye hamesha haazir hain." />
      <section className="mx-auto mt-16 max-w-2xl px-4">
        {sent ? (
          <p className="animate-fade-up rounded-2xl border bg-card p-8 text-center text-lg">Shukriya! Hum jald rabta karenge.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="animate-fade-up space-y-4 rounded-2xl border bg-card p-8">
            <input required placeholder="Naam" className={input} />
            <input required type="email" placeholder="Email" className={input} />
            <textarea required rows={5} placeholder="Paigham" className={input} />
            <button className="w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-elegant">Bhejein</button>
          </form>
        )}
      </section>
    </SiteLayout>
  );
}
