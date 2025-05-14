// forEach percorre o array por cada elemento utilizando uma função callback
const notas = [1,2,3,4,5,6,7]

let somaDasNotas = 0

notas.forEach(function (nota){
    somaDasNotas += nota
})

const media = somaDasNotas / notas.length
console.log(media)

// Map() percorre o array guardando cada elemento e retornando uma modificação

const nota = [1,2,3,4,5,6,7]
const notasAtualizadas = nota.map(function(notass){
    return notass + 1
})
console.log(notasAtualizadas)

const nome = ["caio", "Leticia", "Jose"]
const nomesPadronizados = nome.map(function(nomes){
    return nomes.toUpperCase()
})
console.log(nomesPadronizados)
