"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function DocsPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Documentación API - Sistema de Tickets</h1>

      <SwaggerUI url="/api/docs" />
    </main>
  );
}
