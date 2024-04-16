'use client'
import { Spinner } from "@/components/Spinner"
import { useBoldCheckout } from "@/hooks/useBoldCheckout"
import { useSimpleForm } from "@/hooks/useSimpleForm"
import { SignatureResponse } from "@/interfaces/signature.response.interface"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function CheckoutPage(){
    const {checkout} = useBoldCheckout()
    const router = useRouter()
    const {get} =useSearchParams()
    const {formValues,handleChange} = useSimpleForm({ documentType:{ value:"", error:false }, documentNumber:{ value:"", error:false }, name:{ value:"", error:false } })
    const [signature,setSignature] = useState<SignatureResponse|null>(null)
    const [loading,setLoading] = useState(false)
    const p = get("p")!
    const d = get("d")!

    const createOrder = async()=>{
         setLoading(true)
         const order:SignatureResponse = await fetch("/api/signature",{method:"POST",body:JSON.stringify({price:+atob(p)})}).then(resp=> resp.json()).finally(()=>setLoading(false))
         console.log(order)
         setSignature(order) 
    }

    useEffect(() =>{ if(isNaN(+atob(p))){ router.push("/servicios") } },[p])

        const handleCheckout = ()=>{
            const orderId = signature?.orderId!; 
            const amount = atob(p);
            const apiKey = signature?.apiKey!;
            const currency = signature?.COP!;
            const description = atob(d); 
            const integritySignature = signature?.signature!
            
            checkout({orderId,apiKey,amount,currency,description,integritySignature}).open()
        }

    return (
        <section className="w-full h-[80dvh]  flex flex-col justify-center items-center  bg-secondary py-4">
     <div className="shadow-2xl w-[300px] flex flex-col justify-start items-center rounded-2xl pt-5 px-7 gap-7 bg-white">
      <form className="w-full flex flex-col justify-start items-center">
        <h1 className="text-sm text-center font-semibold">Estas a punto de adquirir una consulta de "{atob(d)}".</h1>
        <span className="text-xs text-center my-3">Por favor diligencia los siguientes datos para generar tu orden:</span>
        <div className="w-full flex justify-start items-center   h-[40px] rounded-lg"> 
        <select name="documentType" defaultValue="C.C" className="border h-full text-sm outline-none rounded-tl-lg rounded-bl-lg" onChange={(e)=>handleChange(e,"documentType")}>
                <option value="C.C">C.C</option>
                <option value="T.I">T.I</option>
                <option value="P.P">P.P</option>
            </select>
            <input min={1} type="number" onChange={(e)=>handleChange(e,"documentNumber")} name="documentNumber" placeholder="Número de identificación" className="flex-1 border h-full pl-2 text-sm outline-none rounded-tr-lg rounded-br-lg"/>
        </div>
        <input name="name" placeholder="Nombre completo" className="border h-[40px] pl-2 text-sm w-full outline-none my-4 rounded-lg" onChange={(e)=>handleChange(e,"name")}/>
        {signature === null && (  <button disabled={!formValues.documentNumber.value.trim() || !formValues.name.value.trim()} onClick={createOrder} type="button" className="w-[130px] h-[40px] flex justify-center items-center bg-primary text-white text-sm border  rounded-full px-3 py-2 mt-3 disabled:opacity-55 disabled:cursor-not-allowed">
            {!loading ?<span>Continuar</span> :<Spinner width="w-4" height="h-4"/>}
        </button>)}
        {signature && ( <button onClick={handleCheckout} type="button" id="pay-button" className="bg-primary text-white text-sm border  rounded-full px-3 py-2 mt-3 disabled:opacity-55 disabled:cursor-not-allowed">Ir a Pagar consulta</button>)}      <span className="text-[10px] text-center mt-4">El pago sera realizado y gestionado através de Bold.</span>
        <Image src="/logo-bold.png" width={50} height={40} className="w-[50px] h-[40px] object-contain" alt="b o l d"/>
      </form>
      </div>
    </section>
    )
}