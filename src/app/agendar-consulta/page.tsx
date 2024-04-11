import { AgendarConsultaFrame } from "@/components/AgendarConsultaFrame";
import { ISection } from "@/interfaces/sections.interface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claudia Arango | Agendar consulta",
};

export default async function CurriculemPage() {
  return (
    <div className="w-full  flex flex-col justify-start items-center  bg-[#fbfcfd] py-4">
      <AgendarConsultaFrame />
    </div>
  );
}
