const listaNumeros = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
for (let i = 0; i < listaNumeros.length; i++) {
  somaDasNotas += listaNumeros[i];
}
let mediaFinal = somaDasNotas / listaNumeros.length;
console.log(mediaFinal);

// Utilizando for...of.  O for...of captura os elementos do array, não seus indices, facilitando o processo em casos especificos.

const listaNumeros2 = [10, 6.5, 8, 7.5];
let somaDasNotas2 = 0;
for (let notas of listaNumeros2) {
  somaDasNotas += notas;
}
let mediaFinal2 = somaDasNotas / listaNumeros.length;
console.log(mediaFinal);

// Exercicios
// 1
const lista = [1,2,3,4,5,6]
for(let i of lista){
    console.log(i)
}

// 2
const numero = [1,2,3,4]
function listagemDeArray(array){
   for(let i = 0; i < array.length; i++){
    console.log(i)
    console.log(array[i])
   }
}
console.log(listagemDeArray(numero))

// 3

const numerosSoma = [1,2,3,4,5,6,7]
function somaDeNumeros(array){
  for(let i = 0; i < array.length; i++)
    console.log(array)
}
