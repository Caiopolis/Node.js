const array3 = [1, 3, 7, 2, 10];

function somarArrays(array) {
  const somaArray = array.reduce((acumulador, numeros) => {
    return acumulador + numeros;
  }, 0);
  console.log(somaArray)
}
somarArrays(array3)
