import { connectDB } from "@/libs/mongodb";
import AboutMe from "@/models/AboutMe";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const aboutMe = await AboutMe.findById(process.env.AUTHOR_ID);

  return NextResponse.json(aboutMe);
}

export async function POST(request: Request) {
  await connectDB();
  const _id = process.env.AUTHOR_ID;
  const body = await request.json();
  const collection = await AboutMe.findById(_id);
  if (collection === null) {
    const aboutMe = await AboutMe.create(body);
    return NextResponse.json(aboutMe);
  } else {
    await AboutMe.updateOne({ _id }, { $set: body });
    return NextResponse.json({ message: "Actilizaste tu sobre mí con extito" });
  }

}

export async function PUT(request: Request) {
  await connectDB();
  const body = await request.json();
  const _id = process.env.AUTHOR_ID;

  const updated = await AboutMe.updateOne({ _id }, { $set: body });
  const getAboutMe = await AboutMe.findById(_id);

  if (updated.modifiedCount !== 0) {
    return NextResponse.json(getAboutMe, { status: 200 });
  } else {
    return NextResponse.json(
      {
        error: true,
        message: "Verifica que este correctamente escrito tu identificación",
      },
      { status: 404 }
    );
  }
}
