const notas = [10, 2.4, 5, 6, 9];
notas.pop();
notas.push(10);
// Push adiciona um elemento no final do array
// pop retira o ultimo elemento de um array
const num = [2, 5, 6, 7];
num.push(10);
console.log(num);
console.log(`${num.length}`);
let novo_valor = num[0] * 2;
num.unshift(novo_valor);
console.log(num);

const veterinaria = ["Cachorro", "Gato", "Vaca"];
veterinaria.pop();
veterinaria.pop();
veterinaria.pop();
console.log(veterinaria);

let lista_nomes = [
  "Ana",
  "Carlos",
  "Beatriz",
  "Fernando",
  "Mariana",
  "Lucas",
  "Camila",
  "Rafael",
  "Júlia",
  "Gustavo",
];

const sala1 = lista_nomes.slice(lista_nomes.length / 2);
console.log(sala1);
const sala2 = lista_nomes.slice(0, lista_nomes.length / 2);
console.log(sala2);

const primeirosNomes = [
  "Pedro",
  "Larissa",
  "Gabriel",
  "Isabela",
  "Vinícius",
  "Sofia",
];
primeirosNomes.splice(1, 0, "Rodrigo");
console.log(primeirosNomes);

const animaisDoAquario = ["baleia", "polvo", "golfinho", "tubarão"];

animaisDoAquario.splice(1, 0, "sardinha");
animaisDoAquario.splice(3, 2, "atum");

console.log(animaisDoAquario);

let salaPython = [
  "Alice Mendes",
  "Bruno Ribeiro",
  "Clara Nascimento",
  "Diego Almeida",
  "Fernanda Barbosa",
];

let salaJs = [
  "Lucas Lima",
  "Mariana Costa",
  "Rafael Silva",
  "Sofia Oliveira",
  "Vinícius Pereira",
];

const unificarSala = salaPython.concat(salaJs);
console.log(unificarSala);

const numerros = [1, 2, 3, 4, 5, 6];
const nomes = ["Caio", "Hnerique"];
const listas = [numerros, nomes];

console.log(`asasasa é: ${listas[0][5]}`)
console.log(`asasasa é: ${listas[1][1]}`)