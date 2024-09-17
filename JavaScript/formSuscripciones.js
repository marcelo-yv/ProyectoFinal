
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    let form = event.target;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let age = document.getElementById('age');
    let gender = document.getElementById('gender');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    
    // Validaciones
    let nameValid = name.value.trim() !== '';
    let emailValid = validateEmail(email.value);
    let ageValid = age.value >= 18;
    let genderValid = gender.value !== '';
    let passwordValid = validatePassword(password.value);
    let confirmPasswordValid = password.value === confirmPassword.value;
    
    // Actualizar la UI
    if (!nameValid) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
    }

    if (!emailValid) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    if (!ageValid) {
        age.classList.add('is-invalid');
    } else {
        age.classList.remove('is-invalid');
        age.classList.add('is-valid');
    }

    if (!genderValid) {
        gender.classList.add('is-invalid');
    } else {
        gender.classList.remove('is-invalid');
        gender.classList.add('is-valid');
    }

    if (!passwordValid) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }

    if (!confirmPasswordValid) {
        confirmPassword.classList.add('is-invalid');
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }

    // Si todos son válidos, se puede proceder
    if (nameValid && emailValid && ageValid && genderValid && passwordValid && confirmPasswordValid) {
        // Aquí puedes manejar el envío del formulario o redirigir
        alert('Suscripción exitosa!');
        // form.submit(); // Descomentar si quieres que se envíe el formulario
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
