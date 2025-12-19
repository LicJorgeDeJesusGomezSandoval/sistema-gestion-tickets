export default function TicketsPage() {
  const tickets = [
    {
      id: 1,
      titulo: "Error en el sistema",
      estado: "Abierto",
    },
    {
      id: 2,
      titulo: "Problema con el acceso",
      estado: "Cerrado",
    },
  ];

  return (
    <main style={{ maxWidth: "800px", margin: "80px auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <h1>Tickets</h1>
        <a href="/tickets/nuevo">Nuevo ticket</a>
      </header>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tickets.map((ticket) => (
          <li
            key={ticket.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              marginBottom: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{ticket.titulo}</h3>
              <p>Estado: {ticket.estado}</p>
            </div>

            <div>
              <a href={`/tickets/${ticket.id}`} style={{ marginRight: "8px" }}>
                Editar
              </a>
              <button>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
