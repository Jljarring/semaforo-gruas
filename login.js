// Configuración de Firebase (asegúrate de que sea la misma que en tu otro archivo)
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

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            const user = userCredential.user;
            console.log('Usuario ha iniciado sesión:', user);
            window.location.href = 'index.html'; // Redirige a tu página principal
        })
        .catch((error) => {
            // Manejo de errores
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error al iniciar sesión:', errorCode, errorMessage);
            alert('Error al iniciar sesión: ' + errorMessage);
        });
});
