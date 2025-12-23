import { NextResponse } from "next/server";
import { tickets } from "./data";

export async function GET() {
  return NextResponse.json(tickets);
}

export async function POST(request: Request) {
  const body = await request.json();

  const nuevoTicket = {
    id: tickets.length + 1,
    titulo: body.titulo,
    descripcion: body.descripcion,
    estado: body.estado,
  };

  tickets.push(nuevoTicket);

  return NextResponse.json(nuevoTicket, { status: 201 });
}
