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
  // =========================
  // ESTADOS DEL FORMULARIO
  // =========================
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("Abierto");
  const [cargando, setCargando] = useState(false);

  // =========================
  // CARGAR DATOS AL EDITAR
  // =========================
  useEffect(() => {
    if (ticketEditando) {
      setTitulo(ticketEditando.titulo);
      setDescripcion(ticketEditando.descripcion);
      setEstado(ticketEditando.estado);
    } else {
      limpiarFormulario();
    }
  }, [ticketEditando]);

  // =========================
  // LIMPIAR FORMULARIO
  // =========================
  function limpiarFormulario() {
    setTitulo("");
    setDescripcion("");
    setEstado("Abierto");
  }

  // =========================
  // GUARDAR
  // =========================
  async function manejarEnvioFormulario(
    evento: React.FormEvent<HTMLFormElement>
  ) {
    evento.preventDefault();

    // VALIDACIONES CON ALERT
    if (!titulo.trim()) {
      alert("El título es obligatorio");
      return;
    }

    if (!descripcion.trim()) {
      alert("La descripción es obligatoria");
      return;
    }

    setCargando(true);

    try {
      await onGuardar({
        titulo,
        descripcion,
        estado,
      });

      // SOLO LIMPIA SI ESTÁ CREANDO
      if (!ticketEditando) {
        limpiarFormulario();
      }
    } catch (error) {
      alert("Ocurrió un error al guardar el ticket");
    } finally {
      setCargando(false);
    }
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
          />
        </div>

        <div className={styles.campo}>
          <label>Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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

        <button
          className={styles.boton}
          type="submit"
          disabled={cargando}
        >
          {cargando
            ? "Guardando..."
            : ticketEditando
            ? "Actualizar"
            : "Guardar"}
        </button>
      </form>
    </section>
  );
}
