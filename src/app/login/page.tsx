import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.contenedor}>
      <h1>Iniciar sesión</h1>

      <form>
        <div className={styles.grupoCampo}>
          <label htmlFor="correo">Correo electrónico</label>
          <input id="correo" type="email" />
        </div>

        <div className={styles.grupoCampo}>
          <label htmlFor="contrasena">Contraseña</label>
          <input id="contrasena" type="password" />
        </div>

        <button className={styles.boton} type="submit">
          Iniciar sesión
        </button>
      </form>
    </main>
  );
}
