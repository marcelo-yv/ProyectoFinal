document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailValid = validateEmail(email.value);
    let passwordValid = validatePassword(password.value);
    
    if (!emailValid) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    if (!passwordValid) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }

    // Si ambos son válidos, podemos permitir el envío
    if (emailValid && passwordValid) {
        // Aquí puedes manejar el envío del formulario o redirigir
        alert('Login exitoso!');
        // this.submit(); // Descomentar si quieres que se envíe el formulario
    }
});

// Función para validar correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Función para validar contraseña
function validatePassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
}
