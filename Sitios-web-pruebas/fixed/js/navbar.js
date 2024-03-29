// navbar.js

document.addEventListener("DOMContentLoaded", function() {
    // Cargar la barra de navegación
    var navbarDiv = document.getElementById("navbar");
    navbarDiv.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">Mi Sitio Web</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  });
  