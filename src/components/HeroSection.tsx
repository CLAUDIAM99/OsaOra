import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative text-center">
      <div className="inline-flex items-center gap-2 rounded-2xl bg-osa-lavender/15 px-4 py-2 text-sm font-medium text-osa-primary">
        <Sparkles className="h-4 w-4" />
        Supporto motivazionale
      </div>
      <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-osa-text sm:text-5xl md:text-display">
        Un momento di
        <br />
        <span className="text-osa-primary">chiarezza</span>
      </h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-osa-muted sm:max-w-lg sm:text-xl">
        Quando ti senti bloccata, impaurita o sopraffatta, scrivi qui. 
        Riceverai una risposta personalizzata, empatica e con piccoli passi concreti.
      </p>
    </section>
  );
}
