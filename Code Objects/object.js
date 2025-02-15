//Objetos tem como função guardar informações variadas, diferente do array que na maioria das vezes 
// guarda somente um tipo de informação.
const objPessoas = {
    nome: "Jose Silva",
    idade: 32,
    cpf: "5453456787",
    turma: "JavaScrit"
}

// Estrutura OBJ

const estudante = {
    nome: "Jose Silva",
    idade: 32,
    cpf: "5453456787",
    turma: "JavaScrit"
}
// Quando uma varivel for um objeto, utilize o ponto para chamar uma chave em especifico. ou []
console.log(estudante.nome)
console.log(estudante["nome"])
// substring recolhe o numero do indice da string do começo e do fim que desejar.
console.log(`Os primeiros numeros do cpf são: ${estudante.cpf.substring(0,3)}`)

const estudante2 = {
    nome: "Jose Silva",
    idade: 32,
    cpf: "5453456787",
    turma: "JavaScrit"
}
// Para chamar uma chave especifica de um objeto em uma function, se utiliza [], 
// E como paramentros o nome do obj e a chave em especifico.
function exibirinfoestudante(objEstudantem, infoEstudante){
    return objEstudantem[infoEstudante]
}
console.log(exibirinfoestudante(estudante2, "cpf"))

// Se uma chave não existir no objeto e você tentar chamar a mesma, irá retornar undefined
console.log(estudante.rg);

