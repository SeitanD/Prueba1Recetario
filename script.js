let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    // Verifica si el menú está visible
    if (menuVisible) {
        // Oculta el menú
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        // Muestra el menú en modo responsive
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función para seleccionar una opción del menú
function seleccionar() {
    // Oculta el menú después de seleccionar una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función para mostrar el modal
function mostrarModal() {
    // Obtiene el modal por su ID
    var modal = document.getElementById("myModal");
    // Muestra el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    // Obtiene el modal por su ID
    var modal = document.getElementById("myModal");
    // Oculta el modal
    modal.style.display = "none";
}

// Función para mostrar u ocultar el menú responsive
function mostrarOcultarMenu() {
    // Obtiene el elemento del menú por su ID
    var nav = document.getElementById("nav");
    // Verifica si el menú está visible
    if (nav.style.display === "none" || nav.style.display === "") {
        // Muestra el menú
        nav.style.display = "block";
    } else {
        // Oculta el menú
        nav.style.display = "none";
    }
}
