import leia from "readline-sync"

var maiorsete = 0;
var menorsete = 0;
var tres = 3
var alunos = [
    {   nome: "",
        nota: 0,
     },
       
     {   nome: "",
        nota: 0,
     },
       
     {   nome: "",
        nota: 0,
     }
]


for(var i = 0; i < tres; i ++){

 alunos[i].nome = leia.question("Qual o nome do aluno " + (i+1) + "? ")



 }

for(var i = 0; i < tres; i ++){

 alunos[i].nota = leia.questionInt("Qual a nota do aluno " + (i+1) + "? ")

 if( alunos[i].nota >= 7){
    maiorsete ++
 }else{
    menorsete ++
 }

 if( alunos[i].nota < 0){
        menorsete --
        tres ++
            console.log("nota invalida!!!")

 }else if( alunos[i].nota > 10){

        maiorsete --
        tres ++
            console.log("nota invalida!!!")
 }



}

for(var i = 0; i < 3; i ++){
console.log("ALUNO: " + alunos[i].nome)
console.log("NOTA: " + alunos[i].nota)
}

console.log("Quantidade de estudantes com nota maior ou igual a 7: " + maiorsete)
console.log("Quantidade de estudantes com nota menor a 7: " + menorsete)