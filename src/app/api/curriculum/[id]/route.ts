import { connectDB } from "@/libs/mongodb"
import Curriculum from "@/models/Curriculum"
import { NextResponse } from "next/server"

type Segments = {
    params :{
        id:string
    }
}

export async function PUT (request:Request,segments:Segments){
    await connectDB()
    const body = await request.json()
    const _id =  segments.params.id

    const updated = await Curriculum.updateOne({_id},{$set:body})
    const getCurriculum = await Curriculum.findById(_id)

if(updated.modifiedCount !==0){
    return NextResponse.json(getCurriculum,{status:200})
}else{
    return NextResponse.json({error:true,message:"Verifica que este correctamente escrito tu identificación"},{status:404})

}


}