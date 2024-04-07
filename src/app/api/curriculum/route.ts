import { connectDB } from "@/libs/mongodb";
import Curriculum from "@/models/Curriculum";
import { NextResponse } from "next/server";

export async function GET (){
await connectDB()

const curriculum = await Curriculum.find()

return NextResponse.json(curriculum)



}

export async function POST (request: Request){
    await connectDB()
    const body = await request.json()

    const curriculum = await Curriculum.create(body)

    return NextResponse.json(curriculum,{status:200})

}