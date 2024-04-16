import {v4} from "uuid"
import Orders from "@/models/Orders";
import { NextResponse } from "next/server";
import { generateHashOrderSignature } from "@/utils/generateHashOrder";

export async  function GET (request:Request){

    const orders =await Orders.find()
    return NextResponse.json(orders)

}

export async function POST (request:Request){
    const boldSecretKey = process.env.BOLD_SECRET_KEY
    const currency = process.env.BOLD_CURRENCY
    const orderId = v4()
    const {price,consultType} = await request.json()
    const encondedText = new TextEncoder().encode(`${orderId}${price}${currency}${boldSecretKey}`);
    const signature = await generateHashOrderSignature(encondedText)
    return NextResponse.json({signature,consultType,price,orderId})


}