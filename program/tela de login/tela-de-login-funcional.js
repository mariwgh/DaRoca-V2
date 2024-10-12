function realizarLogin() {
    let usuarioRequerido = document.getElementById("Usuario").value;
    let senhaRequerida = document.getElementById("Senha").value;
    let espaco = document.getElementById("message");
    espaco.innerHTML = ""; 

    // API não está funcionando //
    fetch("https://cenoura.glitch.me/usuarios")
        .then(response => response.json())
        .then(data => {
            if (usuarioRequerido && senhaRequerida) {
                let usuarioEncontrado = data.find(user => user.username === usuarioRequerido && user.password === senhaRequerida);

                if (usuarioEncontrado) {
                    window.location.href = "../tela principal/tela-principal.html";
                } else {
                    espaco.innerHTML = "Usuário ou senha incorretos.";
                }
            } else {
                espaco.innerHTML = "Preencha todos os campos.";
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            espaco.innerHTML = "Erro ao fazer login. Tente novamente.";
        });
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    realizarLogin();
});