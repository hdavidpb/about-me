import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/localcontent";

export default function ServicesPage () {
    return (
        <section className="w-full h-[80dvh]  flex flex-col justify-center items-center  bg-secondary py-4">
            {services.map(service => (
                <ServiceCard key={service.consultType} consultType={service.consultType} description={service.description} price={service.price}/>
            ))}
        </section>
    )
}