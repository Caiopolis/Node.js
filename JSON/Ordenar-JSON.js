const estudantes = require("./varios_estudantes.json");

function ordenandoJson(lista, propriedade) {
  return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1;
    if (a[propriedade] > b[propriedade]) return 1;
    return 0;
  });
}
console.log(ordenandoJson(estudantes, "nome"));
