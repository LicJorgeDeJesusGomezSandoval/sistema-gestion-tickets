import { NextResponse } from "next/server";
import { tickets, Ticket } from "../../tickets/data";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const idTicket = Number(id);

  const indice = tickets.findIndex(
    (ticket: Ticket) => ticket.id === idTicket
  );

  if (indice === -1) {
    return NextResponse.json(
      { mensaje: "Ticket no encontrado" },
      { status: 404 }
    );
  }

  tickets.splice(indice, 1);

  return NextResponse.json(
    { mensaje: "Ticket eliminado correctamente" },
    { status: 200 }
  );
}

export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const idTicket = Number(id);

  const body = await request.json();

  const indice = tickets.findIndex(
    (ticket: Ticket) => ticket.id === idTicket
  );

  if (indice === -1) {
    return NextResponse.json(
      { mensaje: "Ticket no encontrado" },
      { status: 404 }
    );
  }

  tickets[indice] = {
    ...tickets[indice],
    titulo: body.titulo,
    descripcion: body.descripcion,
    estado: body.estado,
  };

  return NextResponse.json(
    { mensaje: "Ticket actualizado correctamente", ticket: tickets[indice] },
    { status: 200 }
  );
}
