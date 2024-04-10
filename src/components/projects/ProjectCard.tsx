import { ProjectList } from "@/interfaces/projects.interface"
import Image from "next/image"

interface Props{
    project:ProjectList
}

export const ProjectCard = ({project}:Props) => {
  return (
    <div className="shadow-xl md:h-[340px] w-[96%] md:w-[750px] bg-white flex md:flex-row flex-col justify-center items-center rounded-xl  mt-6 gap-3">
    <div className="flex-1 flex flex-col justify-start items-start gap-6 h-full pt-16 w-full ">
      <div className="w-full flex justify-start items-center h-[50px]">
        <div className="w-2 h-full bg-primary"></div>
        <div className="w-full flex flex-col justify-between items-start pl-7">
          <h1 className="text-primary font-semibold text-[22px]">
            {project.title}
          </h1>
          <span className="text-base font-semibold">{project.subtitle}</span>
        </div>
      </div>
      <div className="flex-auto md:flex-1 max-h-[200px]  w-full overflow-y-auto p-7">
        <p>{project.description}</p>
      </div>
    </div>
    <a href={project.linkUrl} target="_blank" className="w-full md:w-[340px] h-full bg-gradient-to-r from-white from-10% via-secondary via-50% to-primary to-100% p-2 md:rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-bl-none" >
      <Image width={340} height={400} src={project.image} alt={`Imagen proyecto - ${project.title}`} className="w-full h-full object-contain transition-all ease-in-out duration-300 hover:scale-105 hover:rotate-3 cursor-pointer rounded-xl"/>
    </a>
  </div>
  )
}
