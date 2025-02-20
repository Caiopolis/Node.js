
// exercicio 2-A
const produt0 = {
    id: 123456,
    nome: "celular",
    preco: 1000.00
}

const stringJASON = JSON.stringify(produt0)
console.log(stringJASON)

// exercicio 2-B

const objectAnimais = require("./animais.json")
objectAnimais.animais.push({
    id: 14,
    nome: "Gorila",
    tipo: "mamifero",
    habitat: "florestas",
}
)
objectAnimais.animais[2].habitat = "Floresta Amazonica"
objectAnimais.animais.splice(1,1)
// console.log(objectAnimais.animais)

const stringJASON_animais = JSON.stringify(objectAnimais)
console.log(stringJASON_animais)