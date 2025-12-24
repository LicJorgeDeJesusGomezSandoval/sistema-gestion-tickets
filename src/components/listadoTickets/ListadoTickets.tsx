"use client";

import styles from "./listadoTickets.module.css";
import { Ticket } from "@/types/ticket";

type PropsListadoTickets = {
  tickets: Ticket[];
  onEditar: (ticket: Ticket) => void;
  onEliminar: (id: number) => Promise<void>;
};

export default function ListadoTickets({
  tickets,
  onEditar,
  onEliminar,
}: PropsListadoTickets) {
  if (tickets.length === 0) {
    return <p>No hay tickets registrados</p>;
  }

  return (
  <section className={styles.contenedor}>
    <h2>Listado de Tickets</h2>

    <ul className={styles.lista}>
      {tickets.map((ticket) => (
        <li key={ticket.id} className={styles.item}>
          <div className={styles.info}>
            <strong>{ticket.titulo}</strong>
            <p>{ticket.descripcion}</p>
            <span className={styles.estado}>{ticket.estado}</span>
          </div>

          <div className={styles.acciones}>
            <button
              className={styles.botonEditar}
              onClick={() => onEditar(ticket)}
            >
              Editar
            </button>

            <button
              className={styles.botonEliminar}
              onClick={() => onEliminar(ticket.id)}
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

}
