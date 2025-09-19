import {prisma} from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    const body = await req.json();
    const autor = await prisma.autor.create({data:body});
    return NextResponse.json(autor);
}

export async function GET(){
    const autores = await prisma.autor.findMany();
    return NextResponse.json(autores);
}