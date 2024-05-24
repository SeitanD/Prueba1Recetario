$(document).ready(function() {
    // Función que oculta o muestra el menú
    function mostrarOcultarMenu() {
        var nav = $('#nav');
        if (nav.css('display') === 'none' || nav.css('display') === '') {
            nav.css('display', 'block');
        } else {
            nav.css('display', 'none');
        }
    }

    // Mostrar/Ocultar el menú en dispositivos móviles
    $('#bar').click(function() {
        mostrarOcultarMenu();
    });

    // Seleccionar una opción del menú
    function seleccionar() {
        $('#nav').css('display', 'none');
    }

    // Añadir efecto hover a las tarjetas
    $('.card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        }, function() {
            $(this).css('transform', 'scale(1)');
        }
    );
    
    // Ocultar el menú después de seleccionar una opción
    $('#nav a').click(function() {
        seleccionar();
    });
});
