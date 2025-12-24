"use client";

import { useEffect, useState } from "react";
import { Ticket } from "@/types/ticket";
import styles from "./formularioTicket.module.css";

type PropsFormularioTicket = {
  ticketEditando: Ticket | null;
  onGuardar: (ticket: Omit<Ticket, "id">) => Promise<void>;
};

export default function FormularioTicket({
  ticketEditando,
  onGuardar,
}: PropsFormularioTicket) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("Abierto");

  // =========================
  // CARGAR DATOS AL EDITAR
  // =========================
  useEffect(() => {
    if (ticketEditando) {
      setTitulo(ticketEditando.titulo);
      setDescripcion(ticketEditando.descripcion);
      setEstado(ticketEditando.estado);
    } else {
      setTitulo("");
      setDescripcion("");
      setEstado("Abierto");
    }
  }, [ticketEditando]);

  // =========================
  // GUARDAR
  // =========================
  async function manejarEnvioFormulario(
    evento: React.FormEvent<HTMLFormElement>
  ) {
    evento.preventDefault();

    await onGuardar({
      titulo,
      descripcion,
      estado,
    });
  }

  return (
  <section className={styles.contenedor}>
    <h2 className={styles.titulo}>
      {ticketEditando ? "Editar Ticket" : "Nuevo Ticket"}
    </h2>

    <form className={styles.formulario} onSubmit={manejarEnvioFormulario}>
      <div className={styles.campo}>
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
      </div>

      <div className={styles.campo}>
        <label>Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
      </div>

      <div className={styles.campo}>
        <label>Estado</label>
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="Abierto">Abierto</option>
          <option value="En progreso">En progreso</option>
          <option value="Cerrado">Cerrado</option>
        </select>
      </div>

      <button className={styles.boton} type="submit">
        {ticketEditando ? "Actualizar" : "Guardar"}
      </button>
    </form>
  </section>
);

}
