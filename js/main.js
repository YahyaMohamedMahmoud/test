// This code for form validation is part of the main.js file
// i will but span under input for error messages

const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('btn');
  const eyeIcon = document.querySelector('.eye-icon');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.querySelectorAll('.text-danger').forEach(span => span.textContent = '');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        const nameError = document.createElement('span');
        nameError.className = 'text-danger';
        nameError.textContent = 'Please enter your name';
        nameInput.parentNode.appendChild(nameError);
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        const emailError = document.createElement('span');
        emailError.className = 'text-danger';
        emailError.textContent = 'Please enter your email true';
        emailInput.parentNode.appendChild(emailError);
        isValid = false;
    }

    if (passwordInput.value.trim() === '') {
        const passwordError = document.createElement('span');
        passwordError.className = 'text-danger';
        passwordError.textContent = 'Please enter your password';
        passwordInput.parentNode.appendChild(passwordError);
        isValid = false;
        eyeIcon.classList.replace('translate-middle-y', 'translate-middle-y2');
    }

    if (isValid) {
        alert('Form submitted successfully!');
        console.log({
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        });
        form.reset();
        
    }
 
});

nameInput.addEventListener('change',function(){
    const nameError = nameInput.nextElementSibling;
    if (nameError && nameInput.value.trim() !== '') {
        nameError.textContent = '';
    }
})

emailInput.addEventListener('change',function(){
    const emailError = emailInput.nextElementSibling;
    if (emailError && emailInput.value.trim() !== '') {
        emailError.textContent = '';
    }
})
passwordInput.addEventListener('change',function(){
    const passwordError = passwordInput.nextElementSibling;
    if (passwordError && passwordInput.value.trim() !== '') {
        passwordError.textContent = '';
    }
})



// this code for eye icon toggle password visibility

  eyeIcon.addEventListener('click', function () {
    const isPassword = passwordInput.type === 'password';

    passwordInput.type = isPassword ? 'text' : 'password';

    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
  });


