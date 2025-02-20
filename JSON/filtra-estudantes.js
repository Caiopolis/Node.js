const estudantes = require("./varios_estudantes.json")

function buscaInformação(lista, chave, value){
    return lista.find((estudante) => estudante[chave].includes(value))
}

console.log(buscaInformação(estudantes, "nome", "Oralle" ));


const telefoneEncontrado = buscaInformação(estudantes, "telefone", "19918820860")
console.log(telefoneEncontrado)