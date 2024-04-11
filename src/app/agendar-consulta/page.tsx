
import { ISection } from "@/interfaces/sections.interface";
import { Metadata } from "next";

export const metadata:Metadata ={
  title:"Claudia Arango | Agendar consulta"
}



export default async function CurriculemPage  ()  {
  return (
    <div className="w-full  flex flex-col justify-start items-center  bg-[#fbfcfd] py-4">
           <iframe className="w-full h-screen" src="https://calendly.com/claudia-arangonutricionista/consulta-1-vez" name="Consulta de primera vez con Claudia Arango - Nutricionista." />

    </div>
  );
};