document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario de contacto
    const form = document.getElementById('form-contacto');
    // Obtiene el elemento para mostrar mensajes
    const respuesta = document.getElementById('respuesta');

    // Agrega un evento de escucha al formulario para prevenir su envío predeterminado
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtiene los valores de los campos del formulario
        const nombre = form.nombre.value;
        const email = form.email.value;
        const mensaje = form.mensaje.value;

        // Aquí puedes agregar la lógica de validación para el formulario de contacto
        // Por ejemplo, verificar que el correo electrónico sea válido
        if (nombre.trim() === '') {
            respuesta.textContent = 'Por favor, ingresa tu nombre';
        } else if (email.trim() === '') {
            respuesta.textContent = 'Por favor, ingresa tu correo electrónico';
        } else if (mensaje.trim() === '') {
            respuesta.textContent = 'Por favor, ingresa tu mensaje';
        } else {
            // Aquí puedes agregar la lógica para enviar el mensaje de contacto a un servidor o almacenarlos localmente
            respuesta.textContent = 'Mensaje enviado';
            // Limpia los campos del formulario después de enviar el mensaje
            form.reset();
        }
    });
});
