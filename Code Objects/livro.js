const livro = {
    titulo: "Divina Comédia",
    autor: "Dante",
    ano_Publicado: 1990,
    genero: "Romance"
}
const anoAtual = new Date().getFullYear()
    
livro.anoAtual = anoAtual
livro.idadeLivro = anoAtual - 1990 
livro.avaliacao = null
livro.avaliacao = 5
console.log(livro["titulo"]);
console.log(livro.titulo);
console.log(livro);

if(livro.avaliacao === null){
    console.log("Sem avaliação")
}else{
    console.log("Já possui avaliação")
}

delete livro.avaliacao
console.log(livro)