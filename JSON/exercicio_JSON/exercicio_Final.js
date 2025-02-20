// exercicio 1
const Bibliotecalivros = [
  {
    id: 123,
    titulo: "Os elefantes não se esquecem",
    autor: "Agatha",
    anoPublicado: "1990",
  },
  {
    id: 456,
    titulo: "Pai Rico Pai Pobre",
    autor: "John",
    anoPublicado: "2000",
  },
  {
    id: 789,
    titulo: "pequeno principe",
    autor: "juliet",
    anoPublicado: "2006",
  },
];

function encontrarLivroPorId(arrayObject, chave, value) {
  return arrayObject.find((livros) => livros[chave] === value);
}
console.log(encontrarLivroPorId(Bibliotecalivros, "id", 456));
console.log(encontrarLivroPorId(Bibliotecalivros, "id", 908)); // id inexistente = undefined

// exercicio 2

const BibliotecaFilmes = [
  {
    id: 1,
    titulo: "jurassic Park",
    diretor: "king",
    anoLançamento: "1990",
  },
  {
    id: 2,
    titulo: "Exterminador do futuro",
    diretor: "john",
    anoLançamento: "1991",
  },
  {
    id: 3,
    titulo: "circulo de fogo",
    diretor: "jennifer",
    anoLancamento: "2015",
  },
  {
    id: 4,
    titulo: "transformers",
    diretor: "maicom",
    anoLancamento: "2000",
  },
];

function filtrarFilmeAno(lista, propriedade, valor) {
  return lista.filter((filmes) => filmes[propriedade] === valor);
}
console.log(filtrarFilmeAno(BibliotecaFilmes, "anoLancamento", "2015"));
console.log(filtrarFilmeAno(BibliotecaFilmes, "anoLancamento", "2000"));

// exercicio 3

const listaProdutos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça Jeans", preco: 49.99 },
  { id: 3, nome: "Tênis", preco: 79.99 },
  { id: 4, nome: "Boné", preco: 15.99 },
];

function filtrarOrdenarProdutosPorPreco(lista, maxPreco) {
  return lista
    .filter((produto) => produto.preco <= maxPreco)
    .sort((a, b) => a.preco - b.preco);
}
console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 49.99));

// Exercicio 4

const animais = [
  { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
  { id: 4, nome: "Elefante", especie: "Mamífero", idade: 10 },
  { id: 2, nome: "Pinguim", especie: "Ave", idade: 3 },
];

function ordenarAnimaisCrescente(lista, propriedadeParaOrdenar) {
  return lista.sort((a, b) => {
    return a[propriedadeParaOrdenar] - b[propriedadeParaOrdenar];
  });
}
function ordenarAnimaisDecrescente(lista, propriedadeParaOrdenar) {
  return lista.sort((a, b) => {
    return b[propriedadeParaOrdenar] - a[propriedadeParaOrdenar];
  });
}
function ordenarNomeAnimais(lista) {
  return lista.sort((a, b) => a.nome.localeCompare(b.nome));
}

console.log(ordenarAnimaisCrescente(animais, "id"));
console.log(ordenarAnimaisDecrescente(animais, 'idade'));
console.log(ordenarNomeAnimais(animais));

// Exercicio 5

const departamentos = [
  {
    id: 1,
    nome: "Vendas",
    funcionarios: [
      { id: 101, nome: "Ana", cargo: "Vendedor" },
      { id: 102, nome: "Carlos", cargo: "Gerente de vendas" },
    ],
  },
  {
    id: 2,
    nome: "TI",
    funcionarios: [
      { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
      { id: 202, nome: "João", cargo: "Analista de sistemas" },
    ],
  },
];

function encontrarFuncionarioId(arrayObj, chave, propriedade) {
  for (const departamento of arrayObj) {
    const funcionario = departamento.funcionarios.find(
      (func) => func[chave] === propriedade
    );
    if (funcionario) {
      return funcionario;
    }
  }
  return null;
}

console.log(encontrarFuncionarioId(departamentos, "id", 202));

function encontrarDepartamentoPeloNome(departamento, chave, propriedade) {
  return departamento.find(
    (departamentos) => departamentos[chave] === propriedade
  );
}

console.log(encontrarDepartamentoPeloNome(departamentos, "nome", "TI"));
