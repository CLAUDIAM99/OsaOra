type Props = {
  className?: string;
};

export function SafetyMessage({ className }: Props) {
  return (
    <div
      className={`glass-surface rounded-3xl p-4 sm:p-5 border-osa-warning/40 bg-yellow-950/60 ${className ?? ""}`}
    >
      <p className="text-sm font-semibold text-yellow-300 mb-1.5">
        Prima la tua sicurezza.
      </p>
      <p className="text-xs text-yellow-100/90">
        OsaOra non gestisce situazioni di emergenza. Se stai pensando di farti
        del male, senti di essere in pericolo o temi per la tua sicurezza,
        contatta subito una persona di fiducia o i servizi di emergenza del tuo
        paese. Non rimanere da solo con questo peso.
      </p>
    </div>
  );
}
