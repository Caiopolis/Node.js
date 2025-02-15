// Alterando e adicionando informações

const estudante = {
    nome: "Jose Silva",
    idade: 32,
    cpf: "5453456787",
    turma: "JavaScrit"
}
// Atribuindo uma chave no objeto: adicionado uma nova chave no objeto
estudante.telefone = "94897-5255"
console.log(estudante.telefone)

// Alterando chave: atribua um bovo valor a uma chave existente
estudante.nome = "Caio Henrique"
console.log(estudante)

// Para deletar uma chave se utiliza delete

delete estudante.idade
console.log(estudante["idade"])