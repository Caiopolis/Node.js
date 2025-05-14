let saldo = 5000
let deposito = 1003
let saque = 2345

let operacao = (saldo + deposito) - saque
console.log(saldo)
console.log(operacao)

let impar_par = deposito % 2 === 0 ? "Par" : "Impar"
console.log(impar_par)

let adm = true
let logado = false
if(!adm  ||  !logado ){
    console.log("Por favor entre no modo ADM")
}else{
    console.log("Seja bem-vindo ADM")
}