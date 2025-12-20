"use client";

import { useEffect, useState } from "react";
import styles from "./listadoTickets.module.css";

type Ticket = {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
};

export default function ListadoTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function obtenerTickets() {
      const respuesta = await fetch("/api/tickets");
      const datos = await respuesta.json();
      setTickets(datos);
      setCargando(false);
    }

    obtenerTickets();
  }, []);

  if (cargando) {
    return <p>Cargando tickets...</p>;
  }

  return (
    <section className={styles.contenedor}>
      <h2>Listado de Tickets</h2>

      <ul className={styles.lista}>
        {tickets.map((ticket) => (
          <li key={ticket.id} className={styles.ticket}>
            <h3>{ticket.titulo}</h3>
            <p>{ticket.descripcion}</p>
            <span className={styles.estado}>{ticket.estado}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
