import { ItemSquare } from "../ItemSquare"

interface Props{
  abilities :string[],
  skills:string[],
  laguages:string[]
}

export const AbilitiesAndLanguageSection = ({abilities,laguages,skills}:Props) => {
  console.log("HABILIDADES: ",abilities)
  return (
    <div className="w-full  bg-white flex flex-col justify-start items-start gap-24 py-11 px-14 mt-8 ">
        <div className="w-full flex flex-col justify-start items-start gap-6">
        <h2 className="text-3xl self-start font-semibold">Habilidades profesionales</h2>
        <div className="flex justify-start items-center gap-2 flex-wrap">
          {abilities.map(ability => (
            <ItemSquare key={ability} label={ability} textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
          ))}
        </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-6">
        <h2 className="text-3xl self-start font-semibold">Idiomas</h2>
        <div className="flex justify-start items-center gap-2 flex-wrap">
          {laguages.map(language => (
            <ItemSquare key={language} label={language} textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
          ))}
        </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-6">
        <h2 className="text-3xl self-start font-semibold">Skills</h2>
        <div className="flex justify-start items-center gap-2 flex-wrap">
          {skills.map(skill => (
            <ItemSquare key={skill} label={skill} textFont="font-normal" textWidthMd="md:text-base" textWidthSm="text-sm"  squareHeight="md:h-3" squareWidth="md:w-3" />
          ))}
        </div>
        </div>

    </div>
  )
}
