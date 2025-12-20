import styles from "./formularioTicket.module.css";

type PropsFormularioTicket = {
  tituloFormulario: string;
  textoBoton: string;
};

export default function FormularioTicket({
  tituloFormulario,
  textoBoton,
}: PropsFormularioTicket) {
  return (
    <main className={styles.contenedor}>
      <h1>{tituloFormulario}</h1>

      <form>
        <div className={styles.grupoCampo}>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            placeholder="Describe el problema"
          />
        </div>

        <div className={styles.grupoCampo}>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            placeholder="Agrega más detalles"
          />
        </div>

        <div className={styles.grupoCampo}>
          <label htmlFor="estado">Estado</label>
          <select id="estado">
            <option value="Abierto">Abierto</option>
            <option value="Cerrado">Cerrado</option>
          </select>
        </div>

        <button className={styles.boton} type="submit">
          {textoBoton}
        </button>
      </form>
    </main>
  );
}
