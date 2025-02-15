const estudante = {
  nome: "Jose Silva",
  idade: 32,
  cpf: "5453456787",
  turma: "JavaScrit",
  telefone: "232654999",
  telefone2: "232654459",
  // Não é pratico. Utilize Array
};

const estudante2 = {
  nome: "Jose Silva",
  idade: 32,
  cpf: "5453456787",
  turma: "JavaScrit",
  telefones: ["232654999", "2384639299"],
  notas: [4, 6.7, 3.5, 6.8],
  //    Jeito mais pratico
};
let final = 0;
console.log(estudante2.telefones[0]);

// Objetos dentro de objetos

const estudante3 = {
  nome: "Jose Silva",
  idade: 32,
  cpf: "5453456787",
  turma: "JavaScrit",
  telefones: ["232654999", "2384639299"],
  notas: [4, 6.7, 3.5, 6.8],
  //    Jeito mais pratico
};

estudante3.endereco = {
  rua: "Pedro Leite",
  num: "185",
  complemento: "Ponto Final jardim Lidia",
};
console.log(estudante3);
console.log(estudante3.endereco.rua);


