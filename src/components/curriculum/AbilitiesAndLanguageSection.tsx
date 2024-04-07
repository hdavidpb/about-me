import { ItemSquare } from "../ItemSquare"

export const AbilitiesAndLanguageSection = () => {
  return (
    <div className="w-full  bg-white flex flex-col justify-start items-start gap-24 py-11 px-14 mt-8 ">
        <div className="w-full flex flex-col justify-start items-start gap-6">
        <h2 className="text-3xl self-start font-semibold">Habilidades profesionales</h2>
        <div className="flex justify-start items-center gap-2 flex-wrap">
            <ItemSquare label="Comunicación asertiva." textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Trabajo en equipo." textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Continuo aprendizaje." textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Analítico." textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
        </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-6">
        <h2 className="text-3xl self-start font-semibold">Idiomas</h2>
        <div className="flex justify-start items-center gap-2 flex-wrap">
            <ItemSquare textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm" label="Español (nativo)" squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm" label="Inglés B1" squareHeight="md:h-3" squareWidth="md:w-3" />
        </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-6">
        <h2 className="text-3xl self-start font-semibold">Skills</h2>
        <div className="flex justify-start items-center gap-2 flex-wrap">
            <ItemSquare label="HTML5" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="CSS" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Javascript" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Astro" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="React.js" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Next.js" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Flutter" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Node.js" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
            <ItemSquare label="Docker" textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />


        </div>
        </div>

    </div>
  )
}
