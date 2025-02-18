const pessoa = {
    nome: "Clara Silva",
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
  const valoresObjct = Object.values(pessoa)
  // cria um array com os valores (values) das chaves do objeto
  const InformaçãoObjct = Object.entries(pessoa)
  // cria um array com ambas as informações (keys e values) do objeto
  const chavesObjeto = Object.keys(pessoa) 
  //   Cria um Array das chaves(keys) do seu objeto
  console.log(chavesObjeto)

  if(!chavesObjeto.includes("enderecos")){
    console.error("Seu endereço não consta")
  }
  console.log(InformaçãoObjct)
  console.log(valoresObjct)