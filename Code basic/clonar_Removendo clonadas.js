const notas = [1,2,3,4]
// ... é um método que copia um array e cria um noov array sem modificar o original(spread operator)
const novasNotas = [...notas, 10]

console.log(notas)
console.log(novasNotas)


const arrayOriginal = [7, 7, 8, 9];
function alteraArray(...array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}
alteraArray(arrayOriginal);


// Set() remove elelemtos duplicados, Set() é uma array like (Parece um array, mas não é)
// por isso as funções de array não funcionam, transforme ele em array para manipula-lo

const nomesClonados = ["Caio", "Caio", "Andressa"]
const listaNomeAtt = [...new Set(nomesClonados)]
console.log(listaNomeAtt)