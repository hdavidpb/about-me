import { connectDB } from "@/libs/mongodb";
import Curriculum from "@/models/Curriculum";
import { NextResponse } from "next/server";

export async function GET (){
await connectDB()

const curriculum = await Curriculum.findById(process.env.AUTHOR_ID)

return NextResponse.json(curriculum)



}

export async function POST (request: Request){
    await connectDB()
    const _id =  process.env.AUTHOR_ID
    const body = await request.json()
    const curriculumById =await Curriculum.findById(_id)
   if(curriculumById !==null){
        await Curriculum.updateOne({_id},{$set:body})
       return NextResponse.json({message:"Curriculum actualizado de manera exitosa"})
   }else{
   const curriculum = await Curriculum.create(body)
   return NextResponse.json({message:"Curriculum creado de manera exitosa",curriculum})
   }

}


export async function PUT (request:Request){
    await connectDB()
    const body = await request.json()
    const _id =  process.env.AUTHOR_ID

    const updated = await Curriculum.updateOne({_id},{$set:body})
    const getCurriculum = await Curriculum.findById(_id)

if(updated.modifiedCount !==0){
    return NextResponse.json(getCurriculum,{status:200})
}else{
    return NextResponse.json({error:true,message:"Verifica que este correctamente escrito tu identificación"},{status:404})
}

}