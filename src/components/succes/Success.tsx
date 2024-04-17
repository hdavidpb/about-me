'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { BoldStatusResponse } from "@/interfaces/boldstatusresponse.interface"
import { PaymentStatus } from "@/interfaces/transactions.interface"
import { useSearchParams, redirect } from "next/navigation"
import { AgendarConsultaFrame } from "../AgendarConsultaFrame"
import { Spinner } from "../Spinner"
import { StatusIcon } from "./Icon"

export default function Succes () {
    const [orderData,setOrderData] = useState<BoldStatusResponse | null>(null)

    const {get} = useSearchParams()
    const orderId = get("bold-order-id")!

    useEffect(()=>{
      if(orderId === null){
        redirect("/about")
      }
    },[orderId])

    useEffect(()=>{
        fetch("/api/orders",{method:"PUT",body:JSON.stringify({orderId})})
        .then(res => res.json())
        .then(res => setOrderData(res))
    },[orderId])
return (
    <>
      {orderData === null && <Spinner width="w-10" height="h-10"/>}
      {orderData?.message &&  <div className="w-full flex justify-start items-center gap-2">
        <span>{orderData.message}. </span>
        <Link href="/about" className="underline text-primary">Regresar</Link>

      </div> }
      {orderData && !orderData?.error && <>
        <StatusIcon status={orderData?.payment_status}/>
        <h1 className="text-2xl">{generateText(orderData.payment_status)}</h1>
        {(orderData.payment_status === PaymentStatus.FAILED || orderData.payment_status === PaymentStatus.REJECTED) && ( 
        <Link href="/about" className="underline text-primary">Regresar</Link>)}
        {(orderData.payment_status === PaymentStatus.APPROVED || orderData.payment_status === PaymentStatus.PENDING || orderData.payment_status === PaymentStatus.PROCESSING) && (<AgendarConsultaFrame/>)}
      </>}
    </>
)
}

const generateText = (status: PaymentStatus) => {
    switch (status) {
      case PaymentStatus.APPROVED:
        return "Transacción aprobada.";
      case PaymentStatus.FAILED:
        return "Transacción fallida.";
      case PaymentStatus.REJECTED:
        return "Transacción rechazada.";
      case PaymentStatus.PENDING:
        return "Transacción en proceso.";
      case PaymentStatus.PROCESSING:
        return "Transacción en proceso.";
      default:
        return "Transacción no encontrada.";
    }
  };