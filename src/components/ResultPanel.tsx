"use client";

import { Heart, Lightbulb, ListOrdered } from "lucide-react";
import InsightCard from "./InsightCard";
import QuoteRow from "./QuoteRow";

export interface CoachingResponse {
  empathy: string;
  clarity: string;
  steps: string[];
  quote: string;
}

interface ResultPanelProps {
  response: CoachingResponse;
  className?: string;
}

export default function ResultPanel({ response, className = "" }: ResultPanelProps) {
  return (
    <div
      className={`animate-slide-up space-y-5 rounded-[32px] border border-osa-primary/10 bg-osa-card p-6 shadow-glass-lg backdrop-blur-xl sm:p-8 ${className}`}
      role="region"
      aria-live="polite"
      aria-label="Risposta di supporto"
    >
      <h2 className="font-serif text-2xl font-semibold text-osa-primary">
        Ecco un pensiero per te
      </h2>

      <InsightCard title="Un po' di empatia" icon={Heart}>
        <p className="leading-relaxed">{response.empathy}</p>
      </InsightCard>

      <InsightCard title="Chiarezza" icon={Lightbulb}>
        <p className="leading-relaxed">{response.clarity}</p>
      </InsightCard>

      <InsightCard title="Piccoli passi concreti" icon={ListOrdered}>
        <ol className="list-decimal space-y-2 pl-4">
          {response.steps.map((step, i) => (
            <li key={i} className="leading-relaxed">
              {step}
            </li>
          ))}
        </ol>
      </InsightCard>

      <QuoteRow>{response.quote}</QuoteRow>
    </div>
  );
}
