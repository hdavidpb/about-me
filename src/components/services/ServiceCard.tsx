'use client'

import Link from "next/link";


interface Props {
  consultType: string;
  price: number;
  description: string;
}

export const ServiceCard = ({ price, consultType, description }: Props) => {



  return (
    <div className="shadow-2xl w-[260px] md:w-[300px] flex flex-col justify-start items-center rounded-2xl pt-10 md:pt-14 pb-7 px-5  md:px-7 gap-3 md:gap-7 bg-white">
      <h2 className="text-base font-semibold text-center">
        {consultType}
      </h2>
      <h1 className="text-4xl text-primary">${new Intl.NumberFormat("co-CO").format(price)}</h1>
      <span className="text-base text-center">
    {description}
      </span>
      <Link  href={{pathname:"/checkout",query:{p:btoa(price.toString()),d:btoa(consultType)}}} className="mt-5 text-base bg-primary text-white py-3 px-5 rounded-full hover:scale-105 transition-all ease-in-out duration-300">
        Adquirir consulta
      </Link> 
    </div>
  );
};
