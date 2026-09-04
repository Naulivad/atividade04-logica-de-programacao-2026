import leia from "readline-sync";

var dezoito = 0
var menosdezoito = 0
var idademax = 0
var funcio = leia.questionInt("Quantos funcionarios serão cadastrados? ")



var funcionarios = [

    {   nomes : " ",
        idade : " "
    }
]

for(var i = 0; i < funcio; i++){
    funcionarios.nomes = leia.question("Qual o nome do funcionario? ")
     
    var funidade = leia.questionInt("Quantos anos o funcionario tem? ")
    funcionarios.idade = funidade
    if(funidade > idademax){
        idademax = funidade
    }

if(funidade >= 18){
    dezoito++
}else{
    menosdezoito++
}
}
for(var i = 0; i < funcio; i++){
console.log("Nome dos funcionário: " + funcionarios.nomes)

console.log("Idade dos funcionario: " + funcionarios.idade)

console.log(" ")
}

console.log("Quantidade de funcionários com 18 anos ou mais: " + dezoito)
console.log("Quantidade de funcionários com menos de 18 anos: " + menosdezoito)
console.log("Nome do funcionário mais velho: " + idademax)