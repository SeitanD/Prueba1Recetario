$(document).ready(function() {
    // Función para mostrar u ocultar el menú
    function mostrarOcultarMenu() {
        var nav = $('#nav');
        if (nav.css('display') === 'none' || nav.css('display') === '') {
            nav.css('display', 'block');
        } else {
            nav.css('display', 'none');
        }
    }

    // Mostrar/u ocultar el menú en dispositivos móviles
    $('#bar').click(function() {
        mostrarOcultarMenu();
    });

    // Seleccionar una opción del menú
    function seleccionar() {
        $('#nav').css('display', 'none');
    }

    // Obtener y mostrar recetas de bebidas saludables
    function getBebidasSaludables() {
        // URL de la API de The Cocktail DB para obtener bebidas no alcohólicas
        var apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

        // Realizar la solicitud a la API
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                if (data && data.drinks) {
                    mostrarBebidas(data.drinks);
                } else {
                    mostrarMensaje('No se encontraron recetas de bebidas saludables.');
                }
            })
            .catch(error => {
                console.error('Error al obtener las recetas de bebidas saludables:', error);
                mostrarMensaje('Ocurrió un error al obtener las recetas de bebidas saludables.');
            });
    }

    // Función para mostrar las recetas de bebidas en tarjetas HTML
    function mostrarBebidas(bebidas) {
        var bebidasHTML = '';
        for (var i = 0; i < 6; i++) {
            if (bebidas[i]) {
                bebidasHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <img src="${bebidas[i].strDrinkThumb}" class="card-img-top" alt="${bebidas[i].strDrink}">
                            <div class="card-body">
                                <h5 class="card-title">${bebidas[i].strDrink}</h5>
                                <a href="https://www.thecocktaildb.com/drink.php?c=${bebidas[i].idDrink}" target="_blank" rel="noopener noreferrer">Ver Receta</a>
                            </div>
                        </div>
                    </div>`;
            } else {
                bebidasHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Receta de bebida saludable ${i+1}</h5>
                                <p class="card-text">Aquí puedes agregar una descripción corta de la bebida.</p>
                            </div>
                        </div>
                    </div>`;
            }
        }
        // Agregar las tarjetas de recetas al contenedor en el HTML
        $('#Recetas .row').html(bebidasHTML);
    }

    // Función para mostrar mensajes de error o información en caso de problemas
    function mostrarMensaje(mensaje) {
        $('#Recetas .row').html(`<p>${mensaje}</p>`);
    }

    // Llamar a la función para obtener y mostrar las recetas de bebidas saludables al cargar la página
    getBebidasSaludables();

    // Ocultar el menú después de seleccionar una opción
    $('#nav a').click(function() {
        seleccionar();
    });
});
