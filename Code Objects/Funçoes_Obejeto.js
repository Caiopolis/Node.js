const estudante3 = {
    nome: "Jose Silva",
    idade: 32,
    cpf: "5453456787",
    turma: "JavaScrit",
    telefones: ["232654999", "2384639299"],
    bolsista: true,
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false
    }
  };

  console.log(estudante3.estaAprovado(7))   