// Escucha el evento 'DOMContentLoaded', que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el formulario con el ID 'form-login'
    const form = document.getElementById('form-login');
    
    // Obtiene el elemento con el ID 'mensaje'
    const mensaje = document.getElementById('mensaje');

    // Agrega un evento de escucha al formulario cuando se envía (submit)
    form.addEventListener('submit', (e) => {
        // Previene el comportamiento por defecto de enviar el formulario
        e.preventDefault();

        // Obtiene el valor de los campos de usuario y contraseña del formulario
        const usuario = form.usuario.value;
        const password = form.password.value;

        // Expresión regular para validar que el usuario contenga solo letras
        const patronUsuario = /^[a-zA-Z]+$/;

        // Validación del usuario con la expresión regular
        if (!patronUsuario.test(usuario)) {
            mensaje.textContent = 'El usuario solo puede contener letras';
            return; // Sale de la función si el usuario no es válido
        }

        // Aquí puedes agregar la lógica de validación del usuario y contraseña
        // Compara el usuario y la contraseña ingresados con valores fijos ('admin' y 'admin')
        if(usuario === 'admin' && password === 'admin') {
            // Si coinciden, muestra un mensaje de 'Inicio de sesión exitoso'
            mensaje.textContent = 'Inicio de sesión exitoso';
            // Aquí puedes redirigir al usuario a otra página
        } else {
            // Si no coinciden, muestra un mensaje de 'Usuario o contraseña incorrectos'
            mensaje.textContent = 'Usuario o contraseña incorrectos';
        }
    });
});
