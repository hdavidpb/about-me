import { Spinner } from "@/components/Spinner";
import Succes from "@/components/succes/Success";
import { Suspense } from "react";


export default function SuccesPage (){

  return (
    <section className="w-full min-h-[80vh] flex flex-col justify-start items-center p-4 overflow-y-auto bg-[#fbfcfd]">
      <Suspense fallback={<Spinner/>}>
      <Succes />
      </Suspense>
    </section>
  );
}


