type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export function PrimaryButton({
  children,
  onClick,
  type = "button",
  className
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-osa-accent px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-lg shadow-osa-accent/40 hover:bg-orange-400 hover:shadow-2xl hover:shadow-osa-accent/50 transition-colors transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-osa-accent-soft focus-visible:ring-offset-2 focus-visible:ring-offset-osa-bg active:scale-[0.98] ${className ?? ""}`}
    >
      {children}
    </button>
  );
}

