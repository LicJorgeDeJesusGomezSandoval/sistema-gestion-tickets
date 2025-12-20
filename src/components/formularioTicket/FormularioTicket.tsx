"use client";

import { useState } from "react";
import styles from "./formularioTicket.module.css";

type PropsFormularioTicket = {
  tituloFormulario: string;
  textoBoton: string;
};

export default function FormularioTicket({
  tituloFormulario,
  textoBoton,
}: PropsFormularioTicket) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("Abierto");

  function manejarEnvioFormulario(evento: React.FormEvent) {
    evento.preventDefault();

    const ticket = {
      titulo,
      descripcion,
      estado,
    };

    console.log("Ticket enviado:", ticket);
    alert("Ticket enviado (revisa la consola)");
  }

  return (
    <main className={styles.contenedor}>
      <h1>{tituloFormulario}</h1>

      <form onSubmit={manejarEnvioFormulario}>
        <div className={styles.grupoCampo}>
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className={styles.grupoCampo}>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className={styles.grupoCampo}>
          <label htmlFor="estado">Estado</label>
          <select
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
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
