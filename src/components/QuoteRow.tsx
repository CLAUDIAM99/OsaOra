import { Quote } from "lucide-react";

interface QuoteRowProps {
  children: React.ReactNode;
}

export default function QuoteRow({ children }: QuoteRowProps) {
  return (
    <blockquote className="flex gap-3 rounded-2xl border-l-4 border-osa-accent bg-osa-bg-cream/80 py-4 pl-5 pr-5">
      <Quote className="h-6 w-6 shrink-0 text-osa-accent/80" />
      <p className="font-serif text-lg italic leading-relaxed text-osa-primary">
        {children}
      </p>
    </blockquote>
  );
}
