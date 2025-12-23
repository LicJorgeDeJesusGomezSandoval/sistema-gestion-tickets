export type Ticket = {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
};

export let tickets: Ticket[] = [
  {
    id: 1,
    titulo: "Error al iniciar sesión",
    descripcion: "El usuario no puede entrar al sistema",
    estado: "Abierto",
  },
  {
    id: 2,
    titulo: "Pantalla en blanco",
    descripcion: "La página principal no carga",
    estado: "Cerrado",
  },
];
