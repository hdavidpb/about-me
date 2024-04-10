import { connectDB } from "@/libs/mongodb";
import Projects from "@/models/Projects";
import { NextResponse } from "next/server";

export async function GET (){

    await connectDB()

    const projects =await Projects.findById(process.env.AUTHOR_ID )

    return NextResponse.json(projects)
}


export async function POST (request:Request){
    const _id = process.env.AUTHOR_ID;
    await connectDB()
    const body = await request.json()
    const projectsById =  await Projects.findById(_id)
    if(projectsById === null) {
     const  project =   await Projects.create(body)
        return NextResponse.json(project)
    }else{
        await Projects.updateOne({_id},{$set:body})
        return NextResponse.json({message:"Proyectos actualizados con exito."})
    }
}