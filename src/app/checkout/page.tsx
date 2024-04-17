

import { Spinner } from "@/components/Spinner"
import Checkout from "@/components/checkout/Checkout"
import { Suspense } from "react"

export default function CheckoutPage(){


    return (
        
    <section className="w-full h-[80dvh]  flex flex-col justify-center items-center  bg-secondary py-4">
        <Suspense fallback={<Spinner/>}>
         <Checkout/>
        </Suspense>
    </section>
    )
}