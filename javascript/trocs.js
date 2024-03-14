const estudante = {
    nome: "jose",
    idade: 32,
    cpf: '191191191191',
    turma: 'javascript'
}

estudante.nome

function exibeinfoestudante(objestudante, inforestudante) {
    return objestudante[inforestudante]
}

console.log(exibeinfoestudante(estudante, 'nome'))
console.log(exibeinfoestudante(estudante, 'cpf'))



function exibeinfo(objeto, inforestudante) {
    return objeto[inforestudante]

}

console.log(exibeinfo(estudante, 'nome'))
console.log(exibeinfo(estudante, 'cpf'))

