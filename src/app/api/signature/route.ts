import { generateHashOrderSignature } from "@/utils/generateHashOrder";
import { NextResponse } from "next/server";
import { v4 } from "uuid";

export async function POST (request:Request){
    const boldSecretKey = process.env.BOLD_SECRET_KEY
    const currency = process.env.BOLD_CURRENCY
    const orderId = v4()
    const {price} = await request.json()
    const encondedText = new TextEncoder().encode(`${orderId}${price}${currency}${boldSecretKey}`);
    const signature = await generateHashOrderSignature(encondedText)
    return NextResponse.json({signature,COP:currency,orderId,price,apiKey:boldSecretKey})


}
