import styles from "./tickets.module.css";

export default function TicketsPage() {
  const tickets = [
    { id: 1, titulo: "Error en el sistema", estado: "Abierto" },
    { id: 2, titulo: "Problema con el acceso", estado: "Cerrado" },
  ];

  return (
    <main className={styles.contenedor}>
      <header className={styles.encabezado}>
        <h1>Tickets</h1>
        <a href="/tickets/nuevo" className={styles.botonNuevo}>
          Nuevo ticket
        </a>
      </header>

      <ul className={styles.lista}>
        {tickets.map((ticket) => (
          <li key={ticket.id} className={styles.ticket}>
            <div>
              <h3>{ticket.titulo}</h3>
              <p>Estado: {ticket.estado}</p>
            </div>

            <div className={styles.acciones}>
              <a href={`/tickets/${ticket.id}`}>Editar</a>
              <button>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
