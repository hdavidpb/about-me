// import { ServiceCard } from "@/components/services/ServiceCard";
// import { ServicesResponse } from "@/interfaces/services.interface";


// async function getServices (){
//     const API_URL = process.env.BACKEND_URL
//     const services:ServicesResponse[] =  await fetch(`${API_URL}/api/services`,{next:{revalidate:60}}).then(response => response.json())

//     return services 
// }

export default async function ServicesPage () {
    // const services = await getServices()
    return (
        <section className="w-full h-[80dvh]  flex flex-col justify-center items-center  bg-secondary py-4">
            {/* {services.map(service => (
                <ServiceCard key={service.consultType} consultType={service.consultType} description={service.description} price={service.price}/>
            ))} */}
        </section>
    )
}