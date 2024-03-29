// Obtener el reproductor de audio
var audio = document.getElementById("audio");

// Verificar si ya hay un estado almacenado en el navegador
var audioState = localStorage.getItem("audioState");

// Si hay un estado almacenado, establecerlo en el reproductor de audio
if (audioState) {
  audio.currentTime = parseFloat(audioState);
}

// Escuchar el evento de cambio de página para guardar el estado del audio
window.addEventListener("beforeunload", function() {
  localStorage.setItem("audioState", audio.currentTime);
});
