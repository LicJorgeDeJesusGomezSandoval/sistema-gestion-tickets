import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const tickets = await prisma.ticket.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { titulo, descripcion, estado } = body;

    // 1️⃣ Validar campos obligatorios
    if (!titulo || !descripcion || !estado) {
      return NextResponse.json(
        { mensaje: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // 2️⃣ Crear ticket
    const nuevoTicket = await prisma.ticket.create({
      data: { titulo, descripcion, estado },
    });

    return NextResponse.json(nuevoTicket, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { mensaje: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

