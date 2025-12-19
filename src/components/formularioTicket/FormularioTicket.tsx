type PropsFormularioTicket = {
  tituloFormulario: string;
  textoBoton: string;
};

export default function FormularioTicket({
  tituloFormulario,
  textoBoton,
}: PropsFormularioTicket) {
  return (
    <main style={{ maxWidth: "600px", margin: "80px auto" }}>
      <h1>{tituloFormulario}</h1>

      <form>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            placeholder="Describe el problema"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            placeholder="Agrega más detalles"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="estado">Estado</label>
          <select id="estado" style={{ width: "100%", padding: "8px" }}>
            <option value="Abierto">Abierto</option>
            <option value="Cerrado">Cerrado</option>
          </select>
        </div>

        <button type="submit">{textoBoton}</button>
      </form>
    </main>
  );
}
