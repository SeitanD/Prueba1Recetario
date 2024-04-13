let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función para mostrar el modal
function mostrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Función para seleccionar
function seleccionar() {
    mostrarModal();
}

// Función para mostrar u ocultar el menú responsive
function mostrarOcultarMenu() {
    var nav = document.getElementById("nav");
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
}
