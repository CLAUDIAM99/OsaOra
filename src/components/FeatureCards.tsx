import { Heart, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Empatico",
    description: "Risposte che ti fanno sentire capita, non giudicata. Un tono caldo e umano.",
  },
  {
    icon: Sparkles,
    title: "Personalizzato",
    description: "Il tipo di supporto si adatta a cosa stai vivendo: blocco, paura, sovraccarico o dubbio.",
  },
  {
    icon: Shield,
    title: "Sicuro",
    description: "Non è terapia. È un primo passo gentile. In emergenza ti indirizziamo a risorse serie.",
  },
];

export default function FeatureCards() {
  return (
    <section className="grid gap-5 sm:grid-cols-3">
      {features.map(({ icon: Icon, title, description }) => (
        <div
          key={title}
          className="rounded-3xl border border-osa-primary/10 bg-osa-card p-6 shadow-soft backdrop-blur-xl transition hover:border-osa-primary/15 hover:shadow-glass"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-osa-lavender/20">
            <Icon className="h-6 w-6 text-osa-primary" />
          </div>
          <h3 className="mt-4 font-semibold text-osa-text">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-osa-muted">{description}</p>
        </div>
      ))}
    </section>
  );
}
