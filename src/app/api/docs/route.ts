import { NextResponse } from "next/server";

export async function GET() {
  const swagger = {
    openapi: "3.0.0",
    info: {
      title: "API de Gestión de Tickets",
      description: "Documentación de la API para el sistema de tickets",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    paths: {
      "/api/tickets": {
        get: {
          summary: "Obtener todos los tickets",
          responses: {
            200: {
              description: "Lista de tickets",
            },
          },
        },
        post: {
          summary: "Crear un nuevo ticket",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TicketSinId",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Ticket creado correctamente",
            },
          },
        },
      },
      "/api/tickets/{id}": {
        put: {
          summary: "Actualizar un ticket",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer",
              },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TicketSinId",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ticket actualizado",
            },
            404: {
              description: "Ticket no encontrado",
            },
          },
        },
        delete: {
          summary: "Eliminar un ticket",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "integer",
              },
            },
          ],
          responses: {
            200: {
              description: "Ticket eliminado",
            },
            404: {
              description: "Ticket no encontrado",
            },
          },
        },
      },
    },
    components: {
      schemas: {
        Ticket: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            titulo: {
              type: "string",
            },
            descripcion: {
              type: "string",
            },
            estado: {
              type: "string",
            },
          },
        },
        TicketSinId: {
          type: "object",
          properties: {
            titulo: {
              type: "string",
            },
            descripcion: {
              type: "string",
            },
            estado: {
              type: "string",
            },
          },
        },
      },
    },
  };

  return NextResponse.json(swagger);
}
