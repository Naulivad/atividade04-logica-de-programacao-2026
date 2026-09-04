import leia from "readline-sync"

var vetor = [];
var puru = 0;
var vendasmax = 0;
for(var i = 0; i < 5; i ++){
var vendas = leia.questionInt("Qual o valor de sua venda " + (i + 1) + "? ")
 puru += vendas
if (vendas > vendasmax){
    vendasmax = vendas
}
vetor.push(vendas)

}

var media = puru / 5

console.log("Todos os valores cadastrados: " + vetor)
console.log("O valor total das vendas: " + puru)
console.log("A média das vendas: " + media)
console.log("O maior valor registrado: " + vendasmax)
