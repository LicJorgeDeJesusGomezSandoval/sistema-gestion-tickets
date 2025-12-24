"use client";

import { useEffect, useState } from "react";
import { Ticket } from "@/types/ticket";
import ListadoTickets from "@/components/listadoTickets/ListadoTickets";
import FormularioTicket from "@/components/formularioTicket/FormularioTicket";

export default function HomePage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [ticketEditando, setTicketEditando] = useState<Ticket | null>(null);

  // =========================
  // OBTENER TICKETS
  // =========================
  async function cargarTickets() {
    const respuesta = await fetch("/api/tickets");
    const datos = await respuesta.json();
    setTickets(datos);
  }

  useEffect(() => {
    cargarTickets();
  }, []);

  // =========================
  // CREAR O ACTUALIZAR
  // =========================
  async function guardarTicket(ticket: Omit<Ticket, "id">) {
    if (ticketEditando) {
      // EDITAR
      await fetch(`/api/tickets/${ticketEditando.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });
    } else {
      // CREAR
      await fetch("/api/tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
      });
    }

    setTicketEditando(null);
    await cargarTickets();
  }

  // =========================
  // ELIMINAR
  // =========================
  async function eliminarTicket(id: number) {
    await fetch(`/api/tickets/${id}`, {
      method: "DELETE",
    });

    await cargarTickets();
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Sistema de Gestión de Tickets</h1>

      <FormularioTicket
        ticketEditando={ticketEditando}
        onGuardar={guardarTicket}
      />

      <ListadoTickets
        tickets={tickets}
        onEditar={setTicketEditando}
        onEliminar={eliminarTicket}
      />
    </main>
  );
}
