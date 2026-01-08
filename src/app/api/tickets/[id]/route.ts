import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: Promise<{ id: string }>;
};

// =======================
// UPDATE (PUT)
// =======================
export async function PUT(request: Request, { params }: Params) {
  try {
    // 1️⃣ Resolver la Promise de params
    const { id } = await params;
    const idNumber = Number(id);

    // 2️⃣ Validar ID
    if (isNaN(idNumber)) {
      return NextResponse.json(
        { mensaje: "ID inválido" },
        { status: 400 }
      );
    }

    // 3️⃣ Leer body
    const body = await request.json();
    const { titulo, descripcion, estado } = body;

    // 4️⃣ Validar body
    if (!titulo || !descripcion || !estado) {
      return NextResponse.json(
        { mensaje: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // 5️⃣ Verificar existencia
    const existeTicket = await prisma.ticket.findUnique({
      where: { id: idNumber },
    });

    if (!existeTicket) {
      return NextResponse.json(
        { mensaje: "Ticket no encontrado" },
        { status: 404 }
      );
    }

    // 6️⃣ Actualizar
    const ticketActualizado = await prisma.ticket.update({
      where: { id: idNumber },
      data: { titulo, descripcion, estado },
    });

    return NextResponse.json(ticketActualizado);
  } catch (error) {
    return NextResponse.json(
      { mensaje: "Error interno del servidor" },
      { status: 500 }
    );
  }
}



// =======================
// DELETE
// =======================
export async function DELETE(request: Request, { params }: Params) {
  try {
    // 1️⃣ Resolver params
    const { id } = await params;
    const idNumber = Number(id);

    // 2️⃣ Validar ID
    if (isNaN(idNumber)) {
      return NextResponse.json(
        { mensaje: "ID inválido" },
        { status: 400 }
      );
    }

    // 3️⃣ Verificar existencia
    const ticket = await prisma.ticket.findUnique({
      where: { id: idNumber },
    });

    if (!ticket) {
      return NextResponse.json(
        { mensaje: "Ticket no encontrado" },
        { status: 404 }
      );
    }

    // 4️⃣ Eliminar
    await prisma.ticket.delete({
      where: { id: idNumber },
    });

    // 5️⃣ Respuesta correcta
    return NextResponse.json(
      { mensaje: "Ticket eliminado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { mensaje: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
