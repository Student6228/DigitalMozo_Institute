type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ title, description, align = "center" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignment}>
      <h2 className="text-3xl font-bold text-[#2c3e50] sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 text-[#555] sm:text-lg ${
            align === "center" ? "mx-auto max-w-4xl" : "max-w-3xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
