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

          <audio controls loop>
          <source src="https://stream-155.zeno.fm/dxkpx08drchvv?zs=FVP876-oRPe98yFo8u50Yg&rj-ttl=5&rj-tok=AAABfn8DV_4AVq_g5wUvdVvtMQ" type="audio/mp3">
          Tu navegador no soporta el elemento de audio.
        </audio>
        </div>
      </nav>
    `;
  });
  