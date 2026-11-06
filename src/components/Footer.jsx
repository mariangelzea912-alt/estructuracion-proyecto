function Footer() {
  return (
<footer class="footer">
            <div class="container">
                <div class="footer-columns">
                    <div class="footer-col">
                        <h4>KOSAS STUDIO</h4>
                        <p>
                            Diseño, producción y catálogo curado de objetos para espacios contemporáneos. Estructura honesta y
                            materiales de larga durabilidad.
                        </p>
                    </div>

                    <div class="footer-col">
                        <h4>NAVEGACIÓN</h4>
                        <ul class="footer-links">
                            <li><a href="pages/catalogo.html" class="footer-link">Explorar Catálogo</a></li>
                            <li><a href="pages/agregar-cosa.html" class="footer-link">Publicar una Cosa</a></li>
                            <li><a href="index.html" class="footer-link">Acceso de Clientes</a></li>
                            <li><a href="pages/registro.html" class="footer-link">Crear Cuenta Nueva</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>ATENCIÓN</h4>
                        <ul class="footer-links">
                            <li><a href="pages/faq.html" class="footer-link">Preguntas Frecuentes</a></li>
                            <li><a href="pages/envios-devoluciones.html" class="footer-link">Guía de Envíos y Devoluciones</a></li>
                            <li><a href="pages/garantia.html" class="footer-link">Garantía de Productos</a></li>
                            <li><a href="pages/contacto.html" class="footer-link">Contacto y Ubicación</a></li>
                        </ul>
                    </div>

                    <div class="footer-col">
                        <h4>BOLETÍN</h4>
                        <p>
                            Recibe avisos directos cuando agregamos nuevas piezas al catálogo.
                        </p>
                        <div>
                            <input type="email" placeholder="tu@correo.com" class="form-input" />
                            <button class="btn btn-primary btn-sm" type="button">OK</button>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <span>© 2026 KOSAS STUDIO. TODOS LOS DERECHOS RESERVADOS.</span>
                    <span>ACCESO PRINCIPAL</span>
                </div>
            </div>
        </footer>
  )
}

export default Footer
