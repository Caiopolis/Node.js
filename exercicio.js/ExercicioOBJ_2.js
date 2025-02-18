const pessoa = {
  nome: "Gilvando",
  notas: [2.7, 10, 10, 9, 8],
  calcularMédia: function () {
    let total = this.notas.reduce((acumulador, notas) => acumulador + notas, 0);
    const media = total / this.notas.length;
    return media;
  },
  classificarDesempenho: function () {

    if (this.calcularMédia() >= 9) {
      console.log(`desempenho excelente!!`) ;
    } else if (this.calcularMédia() >= 7.5) {
      console.log(`desempenho bom!!`) ;
    } else if (this.calcularMédia() >= 6) {
      console.log(`desempenho regular`) ;
    } else {
      console.log(`desempenho insuficiente`);
    }
  },
};
console.log(pessoa.calcularMédia());
pessoa.classificarDesempenho();


const carro = {
    marca: "Honda",
    modelo:"Civic",
    ano: 2018,
    cor: "Branco",
}
carro.Km_rodados = 20000
for(let infoCarro in carro){
    console.log(infoCarro,":", carro[infoCarro])
}