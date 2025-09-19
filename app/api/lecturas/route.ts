import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const body = await req.json();
    const lectura = await prisma.lectura.create({data:body})
    return NextResponse.json(lectura);
}

export async function GET(){
    const lecturas = prisma.lectura.findMany();
    return NextResponse.json(lecturas);
}