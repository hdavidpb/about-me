'use client'

import { useState } from "react";
import { Spinner } from "./Spinner";

export const AgendarConsultaFrame = () => {
    const [loadingFrame,setLoadingFrame] = useState(true)
  return (
    <>
      {loadingFrame && (
        <div className="flex justify-center items-center w-full h-[calc(100vh-100px)]">
          <div className="flex justify-center items-center gap-1 flex-col">
            <span>Cargando agenda...</span>
            <Spinner/>
          </div>
        </div>
      )}
      <iframe className="w-full h-screen" src="https://calendly.com/claudia-arangonutricionista/consulta-1-vez" name="Consulta de primera vez con Claudia Arango - Nutricionista." onLoad={()=>setLoadingFrame(false)} />
    </>
  );
};
