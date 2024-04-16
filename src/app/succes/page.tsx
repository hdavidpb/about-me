"use client"
import { useSearchParams } from "next/navigation";

export default function SuccesPage (){

    const {get} = useSearchParams()
console.log(get("bold-order-id"),get("bold-tx-status"))
  return (
    <section className="w-full h-[80vh] flex justify-center items-center">
      <h1>Pago exitoso</h1>
    </section>
  );
}