'use client'
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useBoldCheckout } from "@/hooks/useBoldCheckout"
import { useSimpleForm } from "@/hooks/useSimpleForm"
import { SignatureResponse } from "@/interfaces/signature.response.interface"
import { Spinner } from "../Spinner"

const Checkout = () => {
    const {checkout} = useBoldCheckout()
    const router = useRouter()
    const {get} =useSearchParams()
    const {formValues,handleChange} = useSimpleForm({ documentType:{ value:"C.C", error:false }, documentNumber:{ value:"", error:false }, name:{ value:"", error:false } })
    const [loading,setLoading] = useState(false)
    const p = get("p")!
    const d = get("d")!


    useEffect(() =>{ if(isNaN(+atob(p))){ router.push("/servicios") } },[p,router])

        const handleCheckout = async ()=>{
            setLoading(true)
          
            const orderBody = {
              name:formValues.name.value,
              price: atob(p),
              documentType: formValues.documentType.value,
              documentNumber: formValues.documentNumber.value,
              consultType: atob(d),
            };
            
           const orderCheckout:SignatureResponse  = await fetch("/api/orders",{method:"POST",body:JSON.stringify(orderBody)}).then(res => res.json()).catch(err => ({error:true})).finally(()=>setLoading(false))
           //@ts-ignore
           if(orderCheckout.error ){
            window.alert("No podemos realizar el pago de tu consulta, intenta de nuevo dentro de unos minutos!")
            return;
           }

           const orderId = orderCheckout?.orderId!; 
           const amount = atob(p);
           const currency = orderCheckout?.COP!;
           const description = atob(d); 
           const integritySignature = orderCheckout?.signature!
            checkout({orderId,amount,currency,description,integritySignature}).open()
        }


  return (
    <div className="shadow-2xl w-[95%]  md:w-[300px] flex flex-col justify-start items-center rounded-2xl pt-5 px-3 md:px-7 gap-7 bg-white">
    <form className="w-full flex flex-col justify-start items-center">
      <h1 className="text-sm text-center font-semibold">{`Estas a punto de adquirir una consulta de "${atob(d)}".`}</h1>
      <span className="text-xs text-center my-3">Por favor diligencia los siguientes datos para generar tu orden:</span>
      <select name="documentType" defaultValue={formValues.documentType.value} className="w-full border h-[40px] text-sm outline-none rounded-lg mb-1" onChange={(e)=>handleChange(e,"documentType")}>
              <option value="C.C">Cédulda de ciudadania</option>
              <option value="T.I">Tarjeta de identidad</option>
              <option value="P.P">Pasaporte</option>
              <option value="P.E">Permiso especial</option>
          </select>
          <input min={1} type="number" onChange={(e)=>handleChange(e,"documentNumber")} name="documentNumber" placeholder="Número de identificación" className="w-full border h-[40px] px-2 text-sm outline-none rounded-lg"/>
    
      <input name="name" placeholder="Nombre completo" className="border h-[40px] pl-2 text-sm w-full outline-none my-4 rounded-lg" onChange={(e)=>handleChange(e,"name")}/>
     <button disabled={!formValues.documentNumber.value.trim() || !formValues.name.value.trim()} onClick={handleCheckout} type="button" className="w-[190px] h-[40px] flex justify-center items-center bg-primary text-white text-sm border  rounded-full px-3 py-2 mt-3 disabled:opacity-55 disabled:cursor-not-allowed">
          {!loading ?<span>Ir a pagar consulta</span> :<Spinner width="w-4" height="h-4"/>}
      </button>
  <span className="text-[10px] text-center mt-4">El pago sera realizado y gestionado através de Bold.</span>
      <Image src="/logo-bold.png" width={50} height={40} className="w-[50px] h-[40px] object-contain" alt="b o l d"/>
    </form>
    </div>
  )
}

export default Checkout