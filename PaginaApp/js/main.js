$(document).ready(function(){
    // Cuando se hace clic en el botón
    $('.back-to-top').click(function(){
        // Hace un desplazamiento suave hacia arriba en 800 milisegundos
        $('html, body').animate({scrollTop : 0}, 800, function(){
            // Después de la animación, oculta el botón
            $('.back-to-top').fadeOut();
        });
        return false;
    });

    // Muestra u oculta el botón basado en el desplazamiento de la página
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            // Si el usuario ha bajado más de 100 píxeles, muestra el botón
            $('.back-to-top').fadeIn();
        } else {
            // Si el usuario está en la parte superior de la página, oculta el botón
            $('.back-to-top').fadeOut();
        }
    });
});