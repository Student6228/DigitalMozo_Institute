type SectionHeadingProps = {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignment} max-w-3xl ${className}`}>
      {badge ? (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/60 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
          {badge}
        </span>
      ) : null}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
