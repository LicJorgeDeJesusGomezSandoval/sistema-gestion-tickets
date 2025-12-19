export default function EditarTicketPage() {
  return (
    <main style={{ maxWidth: "600px", margin: "80px auto" }}>
      <h1>Editar Ticket</h1>

      <form>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            defaultValue="Error en el sistema"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            defaultValue="El sistema falla al guardar información"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="estado">Estado</label>
          <select id="estado" defaultValue="Abierto" style={{ width: "100%", padding: "8px" }}>
            <option value="Abierto">Abierto</option>
            <option value="Cerrado">Cerrado</option>
          </select>
        </div>

        <button type="submit">Actualizar</button>
      </form>
    </main>
  );
}
