const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const message = document.getElementById('message');
let users = [];

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const registerUsername = document.getElementById('registerUsername').value;
    const registerPassword = document.getElementById('registerPassword').value;
    users.push({ username: registerUsername, password: registerPassword });
    message.textContent = 'Registration successful. You can now log in.';
    loginForm.reset();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
    if (user) {
        message.textContent = 'Login successful. Redirecting to the secured page...';
        // You can redirect to a secured page here
    } else {
        message.textContent = 'Login failed. Please check your username and password.';
    }
    loginForm.reset();
});
