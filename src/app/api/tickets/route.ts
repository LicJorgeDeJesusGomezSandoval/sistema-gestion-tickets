import { NextResponse } from "next/server";

let tickets = [
  {
    id: 1,
    titulo: "Error al iniciar sesión",
    descripcion: "El usuario no puede entrar al sistema",
    estado: "Abierto",
  },
  {
    id: 2,
    titulo: "Pantalla en blanco",
    descripcion: "La página principal no carga",
    estado: "Cerrado",
  },
];

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
