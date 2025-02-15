const nomes = ["Caio", "Fabio", "Lara", "Laisa"]
const notas = [6,9,8,10]
const lista = [nomes, notas]

function exibirNomeENota(nome){
    if(lista[0].includes(nome)){     //    Includes verifica os elementos de acordo com a variavel de comparação
        const indice = lista[0].indexOf(nome) //  indexOf verifica a posição do elemento que está sendo verificado 
        return console.log(`Seu nome consta em nossos dados! Seu nome é ${nome} e sua média foi ${lista[1][indice]}`)
    }else{
        return console.log("Não encontramos seu nome em nossas listas!")
    }
}
exibirNomeENota('Caio')

function exibirNomeENota(nome){
    if(lista[0].includes(nome)){     //    Includes verifica os elementos de acordo com a variavel de comparação
        const [nomes,notas] = lista  //     Utilizando uma utilidade nova, repartindo a varivael array lista em variaveis separadas
        const indice = nomes.indexOf(nome)
        return console.log(`Seu nome consta em nossos dados! Seu nome é ${nome} e sua média foi ${notas[indice]}`)
    }else{
        return console.log("Não encontramos seu nome em nossas listas!")
    }
}
exibirNomeENota('Daniel')