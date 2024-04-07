import { ItemSquare } from "@/components";
import { AbilitiesAndLanguageSection } from "@/components/curriculum/AbilitiesAndLanguageSection";
import { Section } from "@/components/curriculum/Section";
import { ISection } from "@/interfaces/sections.interface";
import { Metadata } from "next";

export const metadata:Metadata ={
  title:"Hernán Plaza | Curriculum"
}

const CurriculemPage = () => {
  return (
    <div className="w-full  flex flex-col justify-start items-center pt-28 bg-secondary pb-4">
      <div className="flex flex-col justify-start items-center lg:w-[48%] md:w-full p-2">
        <ItemSquare label="Currículum" />
        <Section sections={experienceList} title="Experiencia" />
        <Section sections={educationList} title="Educación" />
        <AbilitiesAndLanguageSection />
      </div>
    </div>
  );
};

export default CurriculemPage;

const experienceList: ISection[] = [
  {
    title: "GRUPO MOK - Bogotá",
    subtitle: "Desarrollador Frontend Senior",
    place: "Bogotá - Colombia",
    date: "2023 - Actalmente",
    description:
      "Desarrollador frontend senior encargado de desarrollar y mantener proyectos de socios o clientes de Grupo mok.",
  },
  {
    title: "NEERO SAS",
    subtitle: "Desarrollador Frontend Senior",
    place: "Barranquilla - Colombia",
    date: "2022 - 2023",
    description:
      "Desarrollo frontend de aplicaciones web con React Js y aplicaciones móviles utilizando Flutter.",
  },
  {
    title: "LYA ELECTRONIC CORP ",
    subtitle: "Desarrollador Frontend React",
    place: "Barranquilla - Colombia",
    date: "2021 - 2022",
    description:
      "Desarrollé interfaces de usuario utilizando maquetación proporcionada por la empresa.Cree varias aplicaciones web fontend en React desde cero utilizando metodologías ágiles. construí y agregué aplicaciones web en una aplicación en producción usando módulos de micro-frontend Corrección de errores en aplicaciones web en producción.",
  },
  {
    title: "CLINICA OFTALMOLOGICA DEL CARIBE ",
    subtitle: "Coordinador de sistemas",
    place: "Barranquilla - Colombia",
    date: "2015 - 2021",
    description:
      "Coordinador del departamento de sistemas. soporte de hardware y software de la institución. Coordinación de mantenimiento de equipos de cómputo. Actualización de software institucional, creación de usuarios, asignación de tareas y roles. Cree algunas aplicaciones web internas en react y node js para la empresa.",
  },
];

const educationList:ISection[] = [
  {
    title:"POLITECNICO DE LA COSTA ATLANTICA",
    subtitle:"Ingeniero de sistemas",
    place:"Barranquilla - Colombia",
    date:"2012 - 2017",
    description:""
  },
  {
    title:"POLITECNICO DE LA COSTA ATLANTICA",
    subtitle:"Tecnólogo  de sistemas",
    place:"Barranquilla - Colombia",
    date:"2012 - 2015",
    description:""
  },
  {
    title:"UNIVERSIDAD SERGIO ARBOLEDA",
    subtitle:"Programa Misión TIC 2022",
    place:"Bogotá-Colombia",
    date:"2021",
    description:""
  }
]