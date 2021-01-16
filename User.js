// cria classe User
class User {
    // cria método para buscar usuario no json
    buscaUsuario() {
        // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
        return fetch("./usuario.json")
            // fetch realizado, uso o then para pegar a resposta 
            .then(function (resposta) {
                // converto a resposta em json
                resposta.json()
                    // pego os dados convertidos em json  
                    .then(function (dados) {
                        console.log("nome-usuario", dados[0].nome)
                        localStorage.setItem("nome-usuario", dados[0].nome)
                        // envio para o método mostraUsuario dentro do meu objetoCardUserInfo
                        objetoCardUserInfo.mostraUserInfo(dados)
                        objetoCardHeaderInfo.mostraHeaderInfo(dados)
                    })
            })
    }
}