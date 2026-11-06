export function Index() {
  return (
    <main class="main-content">
      <div class="container panel-wrapper">
        <div class="form-panel b-card">
          <div class="card-header">
            <span class="tag tag-yellow">ACCESO PRINCIPAL</span>
            <span class="mono">MI CUENTA</span>
          </div>
          <div class="card-body">
            <div class="form-header-area">
              <span class="mono">BIENVENIDO DE NUEVO</span>
              <h1>Iniciar Sesión</h1>
              <p>
                Ingresa tus credenciales para acceder a tu catálogo de cosas y gestionar tus pedidos.
              </p>
            </div>
            <form>
              <div class="form-group">
                <label for="correo" class="form-label">Correo Electrónico</label>
                <input type="email" id="correo" name="correo" class="form-input" placeholder="tu.nombre@ejemplo.com"
                />
              </div>
              <div class="form-group">
                <div>
                  <label for="clave" class="form-label">Contraseña</label>
                  <a href="#">¿Olvidaste tu
                    contraseña?</a>
                </div>
                <input type="password" id="clave" name="clave" class="form-input" placeholder="••••••••••••" />
              </div>
              <button id="btn-login" type="button" class="btn btn-primary btn-block">
                Iniciar Sesión en KOSAS
              </button>
            </form>
            <div class="form-footer-nav">
              ¿Aún no tienes una cuenta?
              <a href="pages/registro.html">Crear cuenta nueva</a>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

