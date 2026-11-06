function Header() {
  return (
    <header class="navbar">
      <div class="container navbar-inner">
        <a href="index.html" class="nav-brand">
          <span>KOSAS</span>
          <span class="nav-brand-badge">STUDIO</span>
        </a>

        <nav aria-label="Navegación del sitio">
          <ul class="nav-links">
            <li>
              <a href="index.html" class="nav-link active">
                Iniciar Sesión
              </a>
            </li>
            <li>
              <a href="pages/catalogo.html" class="nav-link">
                Explorar Cosas
              </a>
            </li>
            <li>
              <a href="pages/agregar-cosa.html" class="nav-link highlight">
                + Publicar Cosa
              </a>
            </li>
            <li>
              <a href="pages/registro.html" class="nav-link">
                Crear Cuenta
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
