const array1 = [3, 7, 2, 9, 1];
const array2 = [4, 10, 6, 8, 5];
const array3 = [1, 3, 7, 2, 10];


function somarArrays(array) {
    const somaArray = array.reduce((acumulador, numeros) => acumulador + numeros, 0);
    const media = somaArray / array.length
    return media
  }
  console.log(somarArrays(array1))
  console.log(somarArrays(array2))
  console.log(somarArrays(array3))
