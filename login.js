var firebaseConfig = {
    // ... tu configuración de Firebase ...
    apiKey: "AIzaSyArPPyaX0NoU2Gkax8bpj5MkWTLMsyZmYQ",
            authDomain: "estado-de-equipos-rtgs.firebaseapp.com",
            databaseURL: "https://estado-de-equipos-rtgs-default-rtdb.firebaseio.com",
            projectId: "estado-de-equipos-rtgs",
            storageBucket: "estado-de-equipos-rtgs.appspot.com",
            messagingSenderId: "927929035915",
            appId: "1:927929035915:web:7c7a5e265d8130e0ac788e"
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
