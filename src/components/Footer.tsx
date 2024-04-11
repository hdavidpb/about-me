import { LinkData } from "@/interfaces/aboutme.response.interface"
import { GenerateIcon } from "./GenerateIcon"
import Image from "next/image";

interface Props{
  links : LinkData[]
}

export const Footer = ({links}:Props) => {
  return (
    <footer className="w-full h-auto md:h-[80px] flex justify-center items-center px-8 py-6 md:py-0 gap-3 md:gap-7 md:flex-row flex-col">
      <div className=" flex md:justify-start justify-end items-center order-2 md:order-1 ">
        <span className="text-xs">© Todos los derechos reservados 2024.</span>
      </div>
      <div className=" flex-1 flex justify-end md:items-center gap-6 text-xs md:text-sm flex-col items-center md:flex-row order-1 md:order-2 w-full">
        {links.map((link) => (
          <div key={link._id} className="flex justify-center items-center gap-1">
            <GenerateIcon urlType={link.urlType} />
            <span> {link.url}</span>
          </div>
        ))}
      </div>
      <Image src="/logo.webp" width={200} height={60} alt="Claudia Arango" className="rounded-sm w-[200px] h-[60px] object-contain"/>
    </footer>
  );
}
