import { FeatureCard } from "@/sections/HeroSection/components/FeatureCard";

export const FeatureGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-12 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-12 text-center mt-20 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:mt-32">
      <FeatureCard
        iconUrl="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-2.svg"
        iconAlt="Icon"
        title="Top-Bewertungen auf Fiverr"
        description="4.8 Sterne bei über 100 Bestellungen – Ihre Zufriedenheit ist unser Antrieb."
        delay={0.1}
      />
      <FeatureCard
        iconUrl="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-3.svg"
        iconAlt="Icon"
        title="Schnell & Zuverlässig"
        description="Wir liefern präzise Lösungen termingerecht und in höchster Qualität."
        delay={0.2}
      />
      <FeatureCard
        iconUrl="https://c.animaapp.com/mlmelhdkAuv6uy/assets/icon-4.svg"
        iconAlt="Icon"
        title="Individuelle Lösungen"
        description="Keine Standardlösungen, sondern Software, die exakt auf Ihre Bedürfnisse zugeschnitten ist."
        delay={0.3}
      />
    </div>
  );
};
