
'use client'

import { useEffect, useState } from "react";
import { hashBuffer } from "../../../text";
const encondedText = new TextEncoder().encode("ABCDE200039000COPAygdsVLMObYOQgmBGjxh8w");

export default function PagosPage (){
const [signature,setSignature] = useState<string | null>(null)

    useEffect(() => {
      hashBuffer(encondedText).then((response) => {
        console.log(response)
        setSignature(response);
      });
    }, []);
    useEffect(()=>{
        const scriptElement = document.getElementById("bold-button-id")
            scriptElement?.setAttribute("data-bold-button","")
            scriptElement?.setAttribute("data-order-id","ABCDE2000")
            scriptElement?.setAttribute("data-currency","COP")
            scriptElement?.setAttribute("data-amount","39000")
            scriptElement?.setAttribute("data-api-key","ya2XufW38IViBJmHKWkAMTCFayeuPhwsJQ1FCiI5pMo")
            scriptElement?.setAttribute("data-description","Compra de pruebas")
            scriptElement?.setAttribute("data-integrity-signature",signature ?? "")
            scriptElement?.setAttribute("data-redirection-url","https://claudiaarango.vercel.app/")
        

    },[signature])

    return (
      <section className="w-full h-[80vh] flex  flex-col gap-3 justify-center items-center">
        <h1>Pagos</h1>
        <script id="bold-button-id"></script>
      </section>
    );
}