document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-olvido');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = form.email.value;

        // Aquí puedes agregar la lógica para enviar un correo de restablecimiento de contraseña
        // Por ejemplo:
        if(validarEmail(email)) {
            mensaje.textContent = 'Se ha enviado un correo para restablecer tu contraseña';
            // Aquí puedes enviar un correo real al usuario
        } else {
            mensaje.textContent = 'Por favor, introduce un correo electrónico válido';
        }
    });

    // Función para validar el correo electrónico
    function validarEmail(email) {
        const patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return patronEmail.test(email);
    }
});
