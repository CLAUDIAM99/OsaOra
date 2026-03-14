import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export default function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-osa-primary/10 bg-white/80 py-16 text-center backdrop-blur-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-osa-lavender/20">
        <Inbox className="h-8 w-8 text-osa-muted" />
      </div>
      <h3 className="mt-4 font-semibold text-osa-text">{title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-osa-muted">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
