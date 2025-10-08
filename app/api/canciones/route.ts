import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nombre, autor, letra, referencia } = await req.json();
  try {
    const cancion = await prisma.cancion.create({
      data: {
        nombre,
        letra,
        referencia,
        autor: {
          connect: {
            nombre: autor,
          },
        },
      },
    });
    return NextResponse.json(cancion, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Error creando la canción" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const canciones = await prisma.cancion.findMany();
  return NextResponse.json(canciones);
}
