const pessoa = {
  nome: "Clara Silva",
  idade: 26,
  cpf: "6567895546",
  turma: "Node.js",
  bolsista: true,
  telefone: ["12345678", "12345678910"],
  endercos: [
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
for (chave in pessoa) {
    const tipo_variavel = typeof pessoa[chave]
    if(tipo_variavel !== "function" && tipo_variavel !== "object"){
        console.log(` a chave ${chave}, tema o valor de: ${pessoa[chave]}`);
    }}
