const notas = [1,2,3,4,5,6,7]

notas.forEach(function(nota,elemnto_index){
    console.log(`O elemento é: ${nota} \ne a sua posição é: ${elemnto_index}\n`)
})

let somaDasNotas2 = 0
const somaDasNotas = notas.map(function (soma){
    somaDasNotas2 = somaDasNotas2 + soma
    console.log(somaDasNotas2)
})

function verificador(num){
    if(notas.includes(num)){
        let indice = notas.indexOf(num)
        console.log("Seu numero consta e está na posição", indice)
    }else{
        console.log("-1")
    }
}
verificador(3)

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  let salaUnidas = nomesTurmaA.concat(nomesTurmaB)
  console.log(salaUnidas)

  const numeros = [6, 9, 12, 15, 18, 21];

  numeros.forEach(function (multiplicação){
    multiplicação = multiplicação * 3
    console.log(multiplicação)
  })
  let indice = numeros.indexOf(18)
  console.log("A posição original do numero 18 é", indice )