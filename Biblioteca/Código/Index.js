const fs = require("fs");

const caminhaArquivo = process.argv;
const link = caminhaArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  quebraParagrafos(texto);
});

function quebraParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n" && "\r");
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
     return verificarPalavrasDuplicadas(paragrafo);
    }
  );
  console.log(contagem);
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

function verificarPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      const palavraLimpa = limpaPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
