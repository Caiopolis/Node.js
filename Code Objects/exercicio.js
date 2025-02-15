const pessoa = {
  nome: "Caio",
  idade: 19,
  solteiro: false,
  hobbies: ["Cozinhar", "Violão", "Programar", "Video-Game"],
};

function mostrarInfoPessoa(obeject) {
  console.log(obeject);
  console.log(typeof obeject.nome);
  console.log(typeof obeject.idade);
  console.log(typeof obeject.solteiro);
  console.log(typeof obeject.hobbies);
  console.log(typeof obeject.endereco);
}

pessoa.endereco = [
  {
    rua: "Pedro Leite",
    cidade: "São Paulo",
    estado: "São Paulo",
  },
];

mostrarInfoPessoa(pessoa);

const familia = [
  {
    nome: "Caio",
    idade: 19,
    cidade: "São Paulo",
  },
  {
    nome: "Andressa",
    idade: 47,
    cidade: "São Paulo",
  },
  {
    nome: "Fabio",
    idade: 17,
    cidade: "São Paulo",
  },
  {
    nome: "Daniel",
    idade: 58,
    cidade: "São Paulo",
  },
];

function mostrarListaPessoas(object) {
  object.forEach((lista) => {
    console.log(
      `Nome: ${lista.nome} Idade: ${lista.idade} Cidade: ${lista.cidade}`
    );
  });
}

familia.push({
  nome: "Clara",
  idade: 18,
  cidade: "Minas Gerais",
});

mostrarListaPessoas(familia);

function filtrarPorCidade(object, local) {
  return object.filter((pessoa) => pessoa.cidade === local);
}
const resultado = filtrarPorCidade(familia, "Minas Gerais");
console.log(resultado);

const calculadora = {
  soma: function (numero1, numero2) {
    let somaDosValores = numero1 + numero2;
    return console.log(somaDosValores);
  },
  subtracao: function (primeiroNum, segundoNum) {
    let subtracao = primeiroNum - segundoNum;
    return console.log(subtracao);
  },
  multiplicacao: function (num1, num2) {
    let resultadoMulti = num1 * num2;
    return console.log(resultadoMulti);
  },
  divicao: function (operador, divisor) {
    let resultadodiv = operador / divisor;
    if (divisor == 0) {
      console.log("Impossivel efetuar operações com divisor = 0");
    }
    return console.log(resultadodiv);
  },
};
calculadora.multiplicacao(100, 25);
calculadora.divicao(100, 25);
calculadora.soma(100, 25);
calculadora.subtracao(100, 25);

calculadora.media = {
  CalcularMedia: function (num1, num2, num3, num4, num5) {
    let notas = [num1, num2, num3, num4, num5];
    const somaNotas = notas.reduce(
      (acomulador, notas) => acomulador + notas,
      0
    );
    const valorFinal = somaNotas / notas.length;
    return valorFinal;
  },
};
console.log(calculadora.media.CalcularMedia(1, 2, 3, 4, 5));

const contaBancaria = {
  titular: "ITAU",
  saldo: 10000,
  depositor: function (valorDeposito) {
    return (this.saldo += valorDeposito);
  },
  sacar: function (valorSacado) {
    return (this.saldo -= valorSacado);
  },
};

console.log(contaBancaria.depositor(500));
console.log(contaBancaria.sacar(200));
console.log(contaBancaria);

contaBancaria.cliente = {
  nome: "Caio Henrique Arruda Moreira",
  conta: "ITAU",
};
function mostrarSaldo(cliente) {
  return console.log(
    `Olá ${contaBancaria.cliente.nome}!, Como está? Seu saldo atual na sua conta ${contaBancaria.cliente.conta} é de ${contaBancaria.saldo}`
  );
}
 
mostrarSaldo(contaBancaria.cliente)