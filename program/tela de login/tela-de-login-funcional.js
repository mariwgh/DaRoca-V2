function realizarLogin() {
    let usuarioRequerido = document.getElementById("input-usuario").value;
    let senhaRequerida = document.getElementById("input-senha").value;

    let espaco = document.getElementById("message");

    let dados = {
        "login": usuarioRequerido,
        "senha": senhaRequerida
    }

    fetch("https://cenoura.glitch.me/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.message === "Login bem sucedido!") {
            window.location.href = "../tela principal/tela-principal.html";
        } else {
            espaco.innerHTML = data.message;
        }
    })
    .catch(error => {
        console.log('Erro ao buscar os dados:', error);
        espaco.innerHTML = "Erro ao fazer login. Tente novamente.";
    });
}

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     realizarLogin();
// });

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('loginForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         realizarLogin();
//     });
// });
