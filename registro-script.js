// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario de registro
    const form = document.getElementById('form-registro');
    // Obtiene el elemento para mostrar mensajes
    const mensaje = document.getElementById('mensaje');

    // Agrega un evento de escucha al formulario para prevenir su envío predeterminado
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Previene el envío predeterminado del formulario

        // Obtiene los valores de los campos del formulario
        const nombre = form.nombre.value;
        const email = form.email.value;
        const password = form.password.value;

        // Expresión regular para validar que el nombre contenga solo letras
        const patronNombre = /^[a-zA-Z\s]+$/;

        // Validación del nombre con la expresión regular
        if (!patronNombre.test(nombre)) {
            mensaje.textContent = 'El nombre solo puede contener letras';
            return; // Sale de la función si el nombre no es válido
        }

        // Aquí puedes agregar la lógica de validación para el registro
        // Por ejemplo, verificar que el correo electrónico sea válido y la contraseña tenga una longitud mínima
        if (nombre.trim() === '') {
            mensaje.textContent = 'Por favor, ingresa tu nombre';
        } else if (email.trim() === '') {
            mensaje.textContent = 'Por favor, ingresa tu correo electrónico';
        } else if (password.trim() === '') {
            mensaje.textContent = 'Por favor, ingresa tu contraseña';
        } else {
            // Aquí puedes agregar la lógica para enviar los datos del registro a un servidor o almacenarlos localmente
            mensaje.textContent = 'Registro exitoso';
            // Limpia los campos del formulario después del registro exitoso
            form.reset();
        }
    });
});
