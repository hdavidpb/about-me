import {v4} from "uuid"
import Orders from "@/models/Orders";
import { NextResponse } from "next/server";
import { generateHashOrderSignature } from "@/utils/generateHashOrder";
import { BoldStatusResponse } from "@/interfaces/boldstatusresponse.interface";

export async  function GET (request:Request){

    const orders =await Orders.find()
    return NextResponse.json(orders)

}

export async function POST (request:Request){
    const {price,documentType,documentNumber,consultType,name} = await request.json()
    const orderId = v4()

    const boldSecretKey = process.env.BOLD_SECRET_KEY
    const currency = process.env.BOLD_CURRENCY
    const encondedText = new TextEncoder().encode(`${orderId}${price}${currency}${boldSecretKey}`);
    const signature = await generateHashOrderSignature(encondedText)

    const order = await Orders.findOne({reference_id:orderId})
    if(order === null){
         await Orders.create({documentType,documentNumber,reference_id:orderId,consultType,name})
        return NextResponse.json({signature,COP:currency,orderId,price,apiKey:boldSecretKey})
    }
}

export async function PUT(request: Request) {
  const boldApiKey = process.env.NEXT_PUBLIC_BOLD_IDENTITY_KEY;

  try {
    const { orderId } = await request.json();

    const order = await Orders.findOne({ reference_id: orderId });

    if (order !== null) {
      const boldOrderStatus: BoldStatusResponse = await fetch(
        `https://payments.api.bold.co/v2/payment-voucher/${orderId}`,
        {
          headers: {
            Authorization: `x-api-key ${boldApiKey}`,
          },
        }
      ).then((res) => res.json());
      const {
        description,
        link_id,
        payment_status,
        subtotal,
        total,
        payer_email,
        payment_method,
        transaction_id,
        transaction_date,
      } = boldOrderStatus;

      if (!order.isUpdated) {
        await Orders.updateOne(
          { reference_id: orderId },
          {
            $set: {
              description,
              link_id,
              payment_status,
              subtotal,
              total,
              payer_email,
              payment_method,
              transaction_id,
              transaction_date,
              isUpdated: true,
            },
          }
        );
        const order = await Orders.findOne({ reference_id: orderId });
        return NextResponse.json(order);
      }

      return NextResponse.json(order)
    }
    return NextResponse.json({message:"La orden no existe",error:true})
  } catch (error) {
    return NextResponse.json({ error: true, message: JSON.stringify({error:true,message:error}) });
  }
}