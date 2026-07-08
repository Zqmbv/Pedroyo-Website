export function SectionLabel({
  label,
  accent = "cyan",
}: {
  label: string;
  accent?: "cyan" | "magenta" | "green";
}) {
  const color =
    accent === "magenta"
      ? "pg-text-magenta"
      : accent === "green"
      ? "pg-text-green"
      : "pg-text-cyan";
  return (
    <div className={`font-display text-[12px] tracking-[0.34em] uppercase ${color}`}>
      // {label}
    </div>
  );
}
