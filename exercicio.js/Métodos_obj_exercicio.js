const carroVelho = {
    marca: "Honda",
    modelo:"Civic",
    ano: 2018,
    cor: "Branco",
    ligado: true,
    ligar: function(){
        if(this.ligado == true){
            console.log("o carro já está ligado")
        }else{
            this.ligado = true
        }
    },
    desligar: function(){
        if(this.ligado == false){
            console.log("O carro já está desligado")
        }else{
            this.ligado = false
        }
    },
    obterDetalhes: function(){
        for (let info in carroVelho){
            console.log(info, carroVelho[info])
        }
    },
}

Object.defineProperty(carroVelho, "placa",{
    value: 'ABC-3453',
    enumerable: false
})

// Percorrendo a propriedade apenas enumeraveis
carroVelho.obterDetalhes()
// ADD método keys apenas enumeraveis
let listaChave = Object.keys(carroVelho)
console.log(listaChave)
// Tente acessar a propriedade placa diretamente mesmo não enumerada
console.log(carroVelho.placa)

carroVelho.ligar()
carroVelho.desligar()
console.log(carroVelho)
carroVelho.obterDetalhes()



const carroNovo = {
    marca: "Mustang",
    modelo:"dogde challenger",
    ano: 2020,
    cor: "preto",
}
const carroComNovosDetalhesAntigo = {
    ...carroVelho,
    empreendimento: 12000,
    ...carroNovo,
    empreendimento: 12000,
}
console.log(carroComNovosDetalhesAntigo)