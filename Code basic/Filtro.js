const nomes = ["Caio", "Andressa", "Ana", "Bia"]
const nota = [10,8,3,9,6]
// A função callback Filter irá sempre retornar uma array com base em sua comparação em relação ao elemento boleano (true e false)
let reprovados = nomes.filter((n,i) => {
    return nota[i] < 4;
})
console.log(reprovados)