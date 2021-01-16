// cria classe User
class Tweets {
    // cria método para buscar usuario no json
    buscaTweets() {
        // retorna o fetch com a promisse e APENAS A PROMISSE SEM TRATAMENTO
        return fetch("./tweets.json")
            // fetch realizado, uso o then para pegar a resposta 
            .then(function (resposta) {
                // converto a resposta em json
                resposta.json()
                    // pego os dados convertidos em json  
                    .then(function (dados) {
                        console.log("tweets", dados)
                        objetoCardTweets.mostraTweets(dados)
                    })
            })
    }
}