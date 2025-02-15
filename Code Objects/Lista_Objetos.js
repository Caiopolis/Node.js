// Listas objetos

const estudante4 = {
  nome: "Jose Silva",
  idade: 32,
  cpf: "5453456787",
  turma: "JavaScrit",
  telefones: ["232654999", "2384639299"],
  notas: [4, 6.7, 3.5, 6.8],
  endereco: [
    {
      rua: "Pedro Leite",
      num: "185",
      complemento: "Ponto Final jardim Lidia",
    },
  ],
};

estudante4.endereco.push({
    rua: "Pedro augusto",
    num: "234",
    complemento: "Ponto Final jardim Lidia",

})


const listaDeEnderoçoComComplemtento = estudante4.endereco.filter((endereco) => {
  return endereco.complemento;
});

console.log(listaDeEnderoçoComComplemtento);
