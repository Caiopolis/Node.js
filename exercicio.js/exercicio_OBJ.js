const carro = {
    marca: "BMW",
    modelo: "320i",
    ano: 2022,
    ligado: false,
    ligar_desligar: function(){
       this.ligado === false ? this.ligado = true : this.ligado = false
    }
}
carro.ligar_desligar()
console.log(carro);

const pessoas = [{
    pessoa1: {
    nome:"Caio Henrique",
    idade: 19,
    },
    pessoa2: {
    nome:"Henrique",
    idade: 28,
    },
    falar: function(object){
       const mensagem = object.foreach(element => {
        console.log(element)
       });
       }
}]
pessoas.falar(pessoas)