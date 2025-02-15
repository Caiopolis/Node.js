const numeros = [1,2,3,4,5,6,7,8,9,10,-1,-3,-4,-5]
let soma = 0
function somarComFor(array){
    for(let i = 0; array.length > i; i++){
        soma = soma + array[i]
        console.log(soma)
    }
    let maiorNumero = Math.max(...array)
    console.log(maiorNumero)
}
somarComFor(numeros)

let numerosMegativos = 0
for(let i = 0; numeros.length > i; i++){
   if (numeros[i] < 0){
    numerosMegativos++
   }else{
   }
}
console.log(numerosMegativos)

let resultadoFatorial = 1
function fatorial(num){
    for(let i = 1; num >= i; i++){
        console.log(resultadoFatorial = resultadoFatorial * i)
    }
}
fatorial(5)

