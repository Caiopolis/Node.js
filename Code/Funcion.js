function exibirNome(nome){
    return `Olá ${nome}, você é muito legal!!`
}

console.log(exibirNome('Daniel'))

function verificarIdade(idade){
    if(idade > 18){
        return `Tu tem ${idade} anos, é maior de idade, parceiro(a)!`
    }else{
        return `Você tem ${idade} aninhos, é menor de idade, parceiro(a)!`
    }
}
console.log(verificarIdade(15))

function maiorMenor(num1, num2, num3){
    let numeros = [num1, num2, num3]
    return Math.max(...numeros)
}
console.log(maiorMenor(4,10,17))

function potencia(base, expoente){
   return `O resultado de ${base}, elevado à ${expoente}, é igual a: ${Math.pow(base,expoente)}`
}
console.log(potencia(2,6)) 