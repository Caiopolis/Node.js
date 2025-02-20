const estudantes = require("./varios_estudantes.json");

function verificandoCEP(lista, propriedade) {
  return lista.filter((estudante) => {
    // hasOwnProperty verifica se dentro do objeto possui uma certa propriedade.
    return !estudante.endereco.hasOwnProperty(propriedade);
  });
}

console.log(verificandoCEP(estudantes, "cep"));
