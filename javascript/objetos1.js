// const carro = {}

// carro.ligar = "start"
// carro.desligar = "botão"
// carro.acelerar = "pisar fundo"
// carro.frear = "soltar"

// console.log(carro.frear)






// const livro = {
//     titulo: "a vida de G",
//     autor: "GBALA",
//     anoPublicacao: 2000,
//     genero: "storytelling",
// }

// livro.avaliacao = null
// livro.titulo = "aventura"

// let anoAtual = new Date().getFullYear()
// livro.idadedePublicacao = anoAtual - livro.anoPublicacao

// delete livro.avaliacao

// console.log(livro)


const estudante = {

    nome: "jose aldo",
    profissao: "lutador",
    numero: ["21971599518", "21 80028922"],
    lutas: ["71 vitorias", "10 derrotas"],
    endereco: [{ // da pra adicionar um objeto dentro de outro colocando os atributos dentro dele em uma lista 
        rua: "diniz raffet",
        numero: "quadra 4, numero 505",
        complemento: "apt 4"
    }]
}

estudante.endereco.push({ // da pra usar metodos de array para editar a lista de objetos que você quer adicionar ou remover

    rua: "jose de souza porto",
    numero: "quadra 5, numero 505",
    complemento: ""
}) // adicioando essas propriedades e atributos 

// console.log(estudante.endereco[0]) //exemplo de obj dentro de obj 

const ListaEnderecoscomComplementos = estudante.endereco.filter((endereco) => endereco.complemento) //filter é um metodo que sempre retorna um array com resultados e se n acha nada ele retorna um array vazio

console.log(ListaEnderecoscomComplementos)

