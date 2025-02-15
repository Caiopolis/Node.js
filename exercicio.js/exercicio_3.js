// 1
const array1 = [3, 7, 2, 9, 1];
const array2 = [4, 10, 6, 8, 5];
const array3 = [1, 4, 7, 2, 10];
const arrayNumerosMultiplos = [3, 6, 1, 3, 2, 10, 15, 12, 20, 22, 25, 30];

function loucuraAjuntada(...array) {
  let novoarray = [].concat(...array);
  return novoarray;
}
console.log(loucuraAjuntada(array1, array2, array3));

// 2
const somaArray = loucuraAjuntada(array1, array2, array3).reduce(
  (agrupador, numeros) => agrupador + numeros,
  0
);
console.log(somaArray);

// 3
const coresLista1 = ["Vermelho", "Verde", "Azul", "Amarelo", "Vermelho"];
const coresLista2 = ["Laranja", "Verde", "Roxo", "Azul"];

let novaLista = [...new Set(coresLista1.concat(coresLista2))];
console.log(novaLista);

// 4
// Lembrete: filter retorna um array com base no valor boleano, por conta disso map() não funcionaria
let calcularPar = array3.filter((array) => {
  return array % 2 == 0;
});
console.log(calcularPar);

// 5
let multiplosTresCinco = arrayNumerosMultiplos.filter((numeros) => {
  if (numeros % 3 === 0) {
    return numeros;
  } else if (numeros % 5 === 0) {
    return numeros;
  } else {
  }
});
console.log(multiplosTresCinco);

// 6

let somaDeNumeros = arrayNumerosMultiplos.reduce(
  (agrupar, arrayNumeros) => agrupar + arrayNumeros,
  0
);
console.log(somaDeNumeros);
