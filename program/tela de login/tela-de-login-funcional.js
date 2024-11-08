function realizarLogin(event) {
    event.preventDefault();

    let usuarioRequerido = document.getElementById("input-usuario").value;
    let senhaRequerida = document.getElementById("input-senha").value;

    let espaco = document.getElementById("message");

    let dados = {
        login: usuarioRequerido,
        senha: senhaRequerida
    }

    fetch("https://cenoura.glitch.me/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(data => {
        if (data.ok) {
            location.replace("../tela principal/tela-principal.html")
            return true
        } 
        else {
            espaco.innerHTML = "Erro ao fazer login. Tente novamente.";
            return false
        }
    })
}