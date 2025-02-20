// import estudante from "./estudante.json"

// require("caminho do se arquivo") serve para trazer informações typeScrit e trazelas para o arquivo atual.
const estudante = require("./estudante.json");
console.log(estudante);
console.log(typeof estudante);
const objectKeys = Object.keys(estudante);
console.log(objectKeys);
function filtroIdade(lista, chave){
    return lista.filter((estudante) => estudante[chave] ? estudante[chave] > 30 : null)
}
console.log(filtroIdade(estudante, "idade"))