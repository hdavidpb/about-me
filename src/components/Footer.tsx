import { LinkData } from "@/interfaces/aboutme.response.interface"
import { GenerateIcon } from "./GenerateIcon"

interface Props{
  links : LinkData[]
}

export const Footer = ({links}:Props) => {
  return (
    <footer className="w-full h-auto md:h-[80px] flex justify-center items-center px-8 py-6 md:py-0 gap-7 md:flex-row flex-col">
      <div className="flex md:justify-start justify-end items-center order-2 md:order-1 self-end md:self-auto">
        <span className="text-xs">Creado con amor en Next.js ❤️</span>
      </div>
      <div className=" flex-1 flex justify-end items-center gap-6 text-xs md:text-sm flex-col md:flex-row order-1 md:order-2">
        {links.map((link) => (
          <div className="flex justify-center items-center gap-1">
            <GenerateIcon urlType={link.urlType} />
            <span> {link.url}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
