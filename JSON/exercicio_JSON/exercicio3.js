const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

function copiarOBJ(object){
    const copiaObj_profunda = JSON.parse(JSON.stringify(object))
    copiaObj_profunda.id = 13
    return copiaObj_profunda
}
console.log(copiarOBJ(pessoaOriginal))
console.log(pessoaOriginal)