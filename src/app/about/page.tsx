import { GenerateIcon } from "@/components";
import { AboutMeResponse, LinkData } from "@/interfaces/aboutme.response.interface";
import Image from "next/image";
import Link from "next/link";

async function getAboutMeData ():Promise<AboutMeResponse>{
  const API_URL = process.env.BACKEND_URL
  const data = await fetch(`${API_URL}/api/about`,{next:{revalidate:60}}).then(response => response.json())

  return data as AboutMeResponse
  

}

export default async function AboutPage() {

//   const aboutMeData = await getAboutMeData()
// console.log(aboutMeData)
   return (
    <section className="w-full md:h-[80vh] flex md:justify-center justify-end items-center relative md:flex-row flex-col-reverse">
   <h1>ABOUT</h1>
      {/* <div className="w-full md:w-[40%] md:h-full bg-secondary">
        <div className="mt-[200px] md:hidden">
        <RightCardInfo description={aboutMeData.description} />
        </div>
      </div>
      <div className="w-full md:flex-1 md:h-full h-[230px]"></div>
      <div className="absolute md:hidden block mt-7 w-[94%]">
        <LeftCardInfo name={aboutMeData.name} profetion={aboutMeData.profetion} profileImage={aboutMeData.profileImage} links={aboutMeData.links} />
      </div>
      <div className="hidden w-[750px] h-[500px] md:flex justify-center items-center absolute bg-white">
      <LeftCardInfo name={aboutMeData.name} profetion={aboutMeData.profetion} profileImage={aboutMeData.profileImage} links={aboutMeData.links} />
        <RightCardInfo description={aboutMeData.description} />
      </div> */}
    </section>
  );
};

interface LeftCardProps{
  profileImage:string,
  name:string,
  profetion:string,
  links:LinkData[]
}


function LeftCardInfo ({name,profetion,profileImage,links}:LeftCardProps){
  return (
    <div className="md:w-[40%] md:h-full h-auto flex flex-col justify-start items-center bg-[#F4ECE6] shadow-2xl ">
    <div className="w-full flex-1 flex flex-col justify-around items-center p-9">
      <Image
        width={150}
        height={150}
        src={profileImage}
        alt="Foto perfil"
        className="rounded-full w-[150px] h-[150px] object-cover"
        priority
      />
      <h1 className="text-4xl whitespace-break-spaces text-center">{name}</h1>
      <div className="w-[80px] h-[2px] bg-primary"></div>
      <h2 className="text-center tracking-[6px]">{profetion}</h2>
    </div>
    <div className="w-full h-[50px] flex justify-center items-center gap-3 bg-white">
      {links.map(link => (
        <a key={link._id} href={link.url} target="_blank">
          <GenerateIcon key={link._id} urlType={link.urlType}/>
        </a>
      ))}
      {/* <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "} <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />{" "} <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />{" "} <path d="M16.5 7.5l0 .01" />{" "} </svg>
      <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "} <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />{" "} <path d="M8 11l0 5" /> <path d="M8 8l0 .01" />{" "} <path d="M12 16l0 -5" /> <path d="M16 16v-3a2 2 0 0 0 -4 0" />{" "} </svg>
      <svg  width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg> */}
    </div>
  </div>
  )
}


interface RightCardProps{
  description:string  | null

}

function RightCardInfo({description}:RightCardProps) {
  return (
    <div className="flex-1 h-full flex flex-col justify-start items-start px-5 pt-7 pb-2">
      <h1 className="md:text-7xl text-4xl font-semibold">HOLA</h1>
      <h5 className="md:text-2xl text-base mt-7">
        Esto es lo que soy y lo que hago.
      </h5>
      <div className="flex justify-start items-center gap-2 mt-7 text-sm flex-wrap">
        <Link
          href="/curriculum"
          className="bg-primary text-white px-5 py-1 rounded-2xl border border-primary transition-colors ease-in-out duration-300 hover:bg-white hover:text-primary"
        >
          CURRICULUM
        </Link>
        <Link
          href="/curriculum"
          className="bg-white border border-black px-5 py-1 rounded-2xl transition-all ease-in-out duration-300 hover:text-primary hover:border-primary"
        >
          PROYECTOS
        </Link>
      </div>
      {description && (
        <p className="font-normal mt-10 text-pretty text-ellipsis overflow-y-auto">
          {description}
        </p>
      )}
    </div>
  );
}