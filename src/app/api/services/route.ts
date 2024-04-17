import Services from "@/models/Services";
import { NextResponse } from "next/server";

export async function GET (){

    try {
        const services = await Services.find()
        return NextResponse.json(services)
    } catch (error) {
        return NextResponse.json([])
    }

}
export async function POST (request:Request){

    const body = await request.json()

    try {
        const services = await Services.create(body)
        return NextResponse.json(services)
    } catch (error) {
        return NextResponse.json([])
    }

}