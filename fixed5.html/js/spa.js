$(document).ready(function() {
    // Manejar clics en los enlaces de navegación
    $("a").click(function(e) {
      e.preventDefault();
      var href = $(this).attr("href");
      loadPage(href);
    });
  
    // Cargar la página inicial al cargar el documento
    loadPage("index.html");
  
    // Función para cargar páginas
    function loadPage(page) {
      $("#content").fadeOut("fast", function() {
        $("#content").load(page + " #content>*", function() {
          $("#content").fadeIn("fast");
        });
      });
    }
  });
  