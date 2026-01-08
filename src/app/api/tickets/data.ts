import { Ticket } from "@/types/ticket";

export let tickets: Ticket[] = [
  {
    id: 1,
    titulo: "Error en login",
    descripcion: "No permite iniciar sesión",
    estado: "Abierto",
  },
  {
    id: 2,
    titulo: "Pantalla en blanco",
    descripcion: "No carga el dashboard",
    estado: "En progreso",
  },
];
