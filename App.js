// instancio a classe de usuario e crio o objeto de usuario
const objetoUsuario = new User()

// instancio a classe CardUserInfo e crio o objeto dos CardUserInfo
const objetoCardUserInfo = new CardUserInfo()

// instancio a classe CardHeaderInfo e crio o objeto dos CardHeaderInfo
const objetoCardHeaderInfo = new CardHeaderInfo()

// instancio a classe CardTweets e crio o objeto dos CardTweets
const objetoCardTweets = new CardTweets()

// instancio a classe Tweets e crio o objeto dos Tweets
const objetoTweets = new Tweets()

// instancio a classe Followers e crio o objeto dos Followers
const objetoFollowers = new Followers()

// instancio a classe CardFollowers e crio o objeto dos CardFollowers
const objetoCardFollowers = new CardFollowers()

// aqui rola a ~mágica~ 
// uso meu objetoUsuario e chamo o método buscaUser que 
// existe dentro de usuario para dar o fetch
objetoUsuario.buscaUsuario()
objetoTweets.buscaTweets()
objetoFollowers.buscaFollowers()
  