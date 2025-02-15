function somaPares(numeroRequerido) {
  let somaDosPares = 0;
  for (let i = 0; i <= numeroRequerido; i++) {
    if (i % 2 == 0) {
      somaDosPares += i;
    } else {
      console.log(`numero ímpar: ${i}`);
    }
    console.log(somaDosPares);
  }
}
somaPares(10);

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(`Você tem ${idade}, logo, você é maior de idade!`);
  } else {
    console.log(`Você tem ${idade}, logo, você é menor de idade!`);
  }
}
verificarIdade(18);

function fizzBuzz(){
    for(let i = 0; i<=100;i++){
        if(i % 3 === 0){
            console.log("Fizz")
        }else if (i % 5 === 0){
            console.log("Buzz")
        }else if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz()

function taboada(numeroTaboada){
    for(let i = 0; i <= 10; i++){
        console.log(`${i} x ${numeroTaboada} = ${i * numeroTaboada}`)
    }
}
taboada(3)

