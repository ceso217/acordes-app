import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
    const body = await req.json();
    const cancion = await prisma.cancion.create({data: body})
}

export async function GET() {
    const canciones = await prisma.cancion.findMany();
    return NextResponse.json(canciones);
}