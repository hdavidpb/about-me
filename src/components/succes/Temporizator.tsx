'use client'

import { useTemporizator } from '@/hooks/useTemporizator'
import React from 'react';


interface Props{
    initialTime:number
    children : ({minutos,segundos}:{minutos:number,segundos:number})=>React.ReactNode
}

export const Temporizator = ({initialTime,children}:Props) => {
    const {minutos,segundos} = useTemporizator({initialTime})
  return (
    <div className='w-full flex flex-col justify-start items-center gap-3'>

      <h2 className='text-base text-center'>{`Tienes ${minutos.toString().padStart(2, "0")}:${segundos
        .toString()
        .padStart(2, "0")} minutos para agendar tu consulta.`}</h2>
       {children({minutos,segundos})} 
    </div>
  );
}
