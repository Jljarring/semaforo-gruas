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
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    database.ref('usuarios').once('value', (snapshot) => {
        let usuarioEncontrado = false;
        snapshot.forEach((childSnapshot) => {
            const usuario = childSnapshot.val();
            if (usuario.email === email && usuario.contrasena === password) {
                usuarioEncontrado = true;
                console.log('Inicio de sesión exitoso');
                // Almacena el nombre de usuario en el almacenamiento local o en una cookie
                localStorage.setItem('usuario', childSnapshot.key);
                window.location.href = 'index.html'; // Redirige a tu página principal
            }
        });

        if (!usuarioEncontrado) {
            errorMessage.textContent = 'Correo electrónico o contraseña incorrectos';
        }
    });
});
