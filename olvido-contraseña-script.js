// Espera a que el contenido HTML de la página esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario y el elemento donde se mostrará el mensaje
    const form = document.getElementById('form-olvido');
    const mensaje = document.getElementById('mensaje');

    // Agrega un evento de escucha para el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que el formulario se envíe por defecto

        const email = form.email.value; // Obtiene el valor del campo de correo electrónico

        // Lógica de validación del correo electrónico
        if(validarEmail(email)) { // Si el correo es válido
            mensaje.textContent = 'Se ha enviado un correo para restablecer tu contraseña';
            // Aquí puedes agregar el código para enviar un correo real al usuario
        } else {
            mensaje.textContent = 'Por favor, introduce un correo electrónico válido';
        }
    });

    // Función para validar el correo electrónico utilizando una expresión regular
    function validarEmail(email) {
        const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return patronEmail.test(email); // Devuelve true si el correo es válido, de lo contrario false
    }
});
