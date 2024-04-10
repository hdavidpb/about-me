import { ItemSquare } from "@/components";
import Image from "next/image";

const ProyectosPage = () => {
  return (
    <div className="w-full  flex flex-col justify-start items-center pt-28 bg-secondary pb-4">
      <div className="flex flex-col justify-start items-center lg:w-[48%] md:w-full p-2">
        <ItemSquare label="Proyectos" />

        
        <div className="md:h-[340px] w-[96%] md:w-[750px] bg-white flex md:flex-row flex-col justify-center items-center rounded-xl pb-8 mt-6">
          <div className="flex-1 flex flex-col justify-start items-start gap-6 h-full pt-16">
            <div className="w-full flex justify-start items-center h-[50px]">
              <div className="w-2 h-full bg-primary"></div>
              <div className="w-full flex flex-col justify-between items-start pl-7">
                <h1 className="text-primary font-semibold text-[22px]">
                  Simple CRUD de usuarios
                </h1>
                <span className="text-base font-semibold">React.js</span>
              </div>
            </div>
            <div className="flex-auto md:flex-1 h-[200px]  w-full overflow-y-auto p-7">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum distinctio velit maiores ducimus quos quas porro dolore laborum vel. Explicabo corporis sunt tenetur voluptate eveniet praesentium nihil id aspernatur molestias eaque commodi omnis, facilis deserunt ex quas, cumque accusamus officiis laudantium ipsum incidunt deleniti quis. Quam laboriosam voluptate doloribus. Id blanditiis, a fugit atque earum tenetur molestiae voluptatum suscipit non, nam molestias possimus? Quos ullam laborum laudantium quia cumque in suscipit, quod dolorum maiores, eos voluptatum odit soluta eius hic quidem iure tempora harum laboriosam commodi unde vel labore placeat. Quod in molestiae, architecto adipisci voluptatum cum quidem. Architecto, repellat.</p>
            </div>
          </div>
          <div className="w-full md:w-[340px] h-full">
            <Image width={340} height={400} src="/image-test.webp" alt="Proyecto" className="w-full h-full object-contain transition-all ease-in-out duration-300 hover:scale-105 hover:rotate-3 cursor-pointer"/>
          </div>
        </div>
   
    
      </div>
    </div>
  );
};

export default ProyectosPage;
