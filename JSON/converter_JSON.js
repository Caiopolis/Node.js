const estudante = require("./estudante.json");
// stringify() transforma uma estrutura JSON em uma grande string para envia-los
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);
// parse() Transforma uma grande string em JSON novamente
const obj = JSON.parse(stringEstudante);
console.log(obj);

// Clonagem Profunda transforma o objeto em string guardando está variavel e depois volta a mesma para um objeto
// Fazendo assim haver 2 objects diferentes e um não interfere o outro.
const objetoOriginal = { chave: "valor" };
const copiaReferencial = objetoOriginal
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

// copiaReferencial.chave = "novoValor"
copiaProfunda.chave = "novoValor";
console.log(objetoOriginal.chave);  // Já Aqui o original não se altera
console.log(objetoOriginal.chave); // Aqui vemos que a copia interferiu no objetoOriginal  
//  (se a copiaReferencial deixar de ser um comentario)