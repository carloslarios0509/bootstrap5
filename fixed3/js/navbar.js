// navbar.js

document.addEventListener("DOMContentLoaded", function () {
  // Cargar la barra de navegación
  var navbarDiv = document.getElementById("audio-player");
  navbarDiv.innerHTML = `
    <audio controls loop>
    <source src="https://stream-155.zeno.fm/dxkpx08drchvv?zs=FVP876-oRPe98yFo8u50Yg&rj-ttl=5&rj-tok=AAABfn8DV_4AVq_g5wUvdVvtMQ" type="audio/mp3">
    Tu navegador no soporta el elemento de audio.
  </audio>
    `;
});
