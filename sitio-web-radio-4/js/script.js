
        /* js Reproductor de audio */
        var audioPlayer = document.getElementById('audioPlayer');
        var audioPlayerContainer = document.getElementById('audioPlayerContainer');
        var playPauseIcon = document.getElementById('playPauseIcon');
        var audioThumbnail = document.getElementById('audioThumbnail');
        var audioName = document.getElementById('audioName');

        /* var progressBar = document.getElementById('progressBar'); */

        var progress = document.getElementById('progress');

        function showPlayer(audioSrc, imageSrc, name) {
            audioPlayer.src = audioSrc;
            audioPlayer.play();
            audioThumbnail.src = imageSrc;
            audioName.innerText = name;
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
            audioPlayerContainer.style.display = 'block';

        }

        function togglePlayPause() {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playPauseIcon.classList.remove('fa-play');
                playPauseIcon.classList.add('fa-pause');
            } else {
                audioPlayer.pause();
                playPauseIcon.classList.remove('fa-pause');
                playPauseIcon.classList.add('fa-play');
            }
        }

        audioPlayer.addEventListener('pause', function () {
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
        });


        // Script para desplazamiento suave al hacer clic en un enlace de anclaje
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Mostrar u ocultar botón de desplazamiento al inicio
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("btnScrollToTop").style.display = "block";
            } else {
                document.getElementById("btnScrollToTop").style.display = "none";
            }
        }

        // Desplazamiento suave al inicio al hacer clic en el botón flotante
        document.getElementById("btnScrollToTop").addEventListener("click", function() {
            document.body.scrollTop = 0; // Para navegadores Safari
            document.documentElement.scrollTop = 0; // Para otros navegadores
        });

        // Simula una carga artificialmente
       /*  setTimeout(function () {
            var preload = document.getElementById('preload');
            var mainContent = document.getElementById('main-content');
            preload.style.display = 'none'; // Oculta el preload después de 3 segundos
            //mainContent.style.display = 'block'; // Muestra el contenido principal
        }, 3000); // Tiempo de espera en milisegundos (en este caso, 3000ms = 3 segundos) */