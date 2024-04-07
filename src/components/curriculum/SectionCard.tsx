interface Props{
    title:string,
    subtitle:string,
    place:string,
    date:string,
    description:string
}

export const SectionCard = ({title,subtitle,place,date,description}:Props) => {
  return (
    <div className="w-full md:h-[280px] bg-white flex justify-around flex-col md:flex-row items-start gap-8 py-11 px-9">
    <div className=" flex flex-col justify-start items-start gap-1 max-w-[200px]">
      <h1 className="text-2xl text-primary">{title}</h1>
      <span className="text-base">{subtitle}</span>
      <span className="text-sm">{place}</span>
      <span className="font-semibold text-sm">{date}</span>
    </div>
    <div className="flex-1 h-full overflow-y-auto">
      <p className="text-base">{description}</p>
    </div>
  </div>
  )
}
