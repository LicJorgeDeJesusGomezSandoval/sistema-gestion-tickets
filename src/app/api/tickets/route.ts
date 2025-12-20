import { NextResponse } from "next/server";

export async function GET() {
  const tickets = [
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

  return NextResponse.json(tickets);
}
