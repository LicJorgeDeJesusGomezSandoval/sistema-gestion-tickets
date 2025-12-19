export default function LoginPage() {
  return (
    <main style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h1>Iniciar sesión</h1>

      <form>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            placeholder="correo@ejemplo.com"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="contrasena">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            placeholder="********"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </main>
  );
}
