import { ISection } from "@/interfaces/sections.interface";
import { SectionCard } from "./SectionCard";

interface Props {
  title: string;
  sections: ISection[];
}

export const Section = ({ title, sections }: Props) => {
  return (
    <section className="w-full mt-16 flex flex-col justify-start items-center gap-8">
      <h2 className="text-3xl self-start font-semibold">{title}</h2>
      {sections.map(({ title, subtitle, place, date, description }) => (
        <SectionCard key={title} title={title} subtitle={subtitle} place={place} date={date} description={description} />
      ))}
    </section>
  );
};
