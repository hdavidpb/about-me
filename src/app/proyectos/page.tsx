import { ItemSquare } from "@/components";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectsResponse } from "@/interfaces/projects.interface";


async function getProjects ():Promise<ProjectsResponse>{
  const API_URL = process.env.BACKEND_URL
  const data = await fetch(`${API_URL}/api/projects`,{next:{revalidate:60}}).then(response => response.json())

  return data as ProjectsResponse
}

export default async function ProyectosPage ()  {

  const projects = await getProjects()

  return (
    <div className="w-full  flex flex-col justify-start items-center pt-28 bg-secondary pb-4">
      <div className="flex flex-col justify-start items-center lg:w-[48%] md:w-full p-2">
        <ItemSquare label="Proyectos" />
        {projects.projectList.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

