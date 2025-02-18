const pessoa = {
  nome: "Ricardo Silva",
  idade: 26,
  cpf: "6567895546",
  turma: "Node.js",
  bolsista: true,
  telefone: ["12345678", "12345678910"],
  enderecos: [
    {
      rua: "Pedro Leite",
      numero: "675",
      complemento: "apartamento 45",
    },
    {
      rua: "Santo Amaro",
      numero: "123",
      complemento: null,
    },
  ],
};

function exibirTelefones(tel1, tel2) {
  console.log(`ligar para ${tel1}`);
  console.log(`ligar para ${tel2}`);
}

//   exibirTelefones(pessoa.telefone[0], pessoa.telefone[1]);
//   Utilizando o método de espalhamento no objeto de array
//   ele irá espalhar os elementos do array dentro dos paramentros da função
exibirTelefones(...pessoa.telefone);

const dadosEnvio = {
    destinatario: pessoa.nome,
    ...pessoa.enderecos[0]
}
console.log(dadosEnvio)


const objetoOriginal = {
    nome: "GPT",
    linguagem: "JavaScript",
    framework: "Node.js",
    versao: "14.17.3"
  };
  
  const objetoNovo = {
    ...objetoOriginal,
    atualizacao: "15.0.0"
  }

  console.log(objetoNovo)