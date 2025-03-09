var firebaseConfig = {
    // ... tu configuración de Firebase ...
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    database.ref('usuarios').once('value', (snapshot) => {
        const usuarios = snapshot.val();
        let usuarioEncontrado = false;

        if (usuarios) {
            for (let i = 0; i < usuarios.length; i++) {
                if (usuarios[i].email === email && usuarios[i].contrasena === password) {
                    usuarioEncontrado = true;
                    localStorage.setItem('usuario', email); // Almacena el correo electrónico como nombre de usuario
                    window.location.href = 'index.html';
                    break;
                }
            }
        }

        if (!usuarioEncontrado) {
            errorMessage.textContent = 'Correo electrónico o contraseña incorrectos';
        }
    });
});
