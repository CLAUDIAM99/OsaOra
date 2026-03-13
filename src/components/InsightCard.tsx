import { LucideIcon } from "lucide-react";

interface InsightCardProps {
  title: string;
  children: React.ReactNode;
  icon?: LucideIcon;
}

export default function InsightCard({ title, children, icon: Icon }: InsightCardProps) {
  return (
    <div className="rounded-3xl border border-osa-primary/10 bg-osa-card p-5 shadow-glass backdrop-blur-xl sm:p-6">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-osa-accent/20">
            <Icon className="h-5 w-5 text-osa-primary" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-osa-secondary">
            {title}
          </h3>
          <div className="mt-2 text-osa-muted">{children}</div>
        </div>
      </div>
    </div>
  );
}
