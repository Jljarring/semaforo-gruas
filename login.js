// Configuración de Firebase (asegúrate de usar tu configuración)
var firebaseConfig = {
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
    console.log('Formulario enviado');
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email ingresado:', email);
    console.log('Contraseña ingresada:', password);

    database.ref('usuarios').once('value', (snapshot) => {
        let usuarioEncontrado = false;
        snapshot.forEach((childSnapshot) => {
            const usuario = childSnapshot.val();
            const nombreUsuario = childSnapshot.key;

            console.log('Usuario encontrado:', nombreUsuario);
            console.log('Datos del usuario:', usuario);

            if (usuario.email === email && usuario.contrasena === password) {
                usuarioEncontrado = true;
                console.log('Inicio de sesión exitoso');
                localStorage.setItem('usuario', nombreUsuario);
                window.location.href = 'index.html';
            }
        });

        if (!usuarioEncontrado) {
            errorMessage.textContent = 'Correo electrónico o contraseña incorrectos';
        }
    });
});
