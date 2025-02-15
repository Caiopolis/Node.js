const numerosSoma = [1,2,3,4,5,6,7]
let soma = 0
function somaDeNumeros(array){
  for(let i = 0; i < array.length; i++){
     soma += array[i]
  }
  console.log(soma)
}
somaDeNumeros(numerosSoma)

const numerosMaiorMenor = [1,2,3,4,5,6,7]
function verificarMaiorMenor(array){
   let numeroMaior = Math.max(...array)
   let numeroMinimo = Math.min(...array)
   return console.log(`o menor numero é ${numeroMinimo}, já o maior é ${numeroMaior}`)
}
verificarMaiorMenor(numerosMaiorMenor)

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
function ImparParArray(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      console.log(array[i])
    }else{
      console.log(`Numero Impar: ${array[i]}`)
    }
  }
}
console.log(ImparParArray(numeros))

const notas = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]
function ImparParArray(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      console.log(array[i])
    }else{
      console.log(`Numero Impar: ${array[i]}`)
    }
  }
}
console.log(ImparParArray(numeros))