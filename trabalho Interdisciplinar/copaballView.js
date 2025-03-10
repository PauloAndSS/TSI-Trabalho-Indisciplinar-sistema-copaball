import * as Model from "./copaballModel.js";

const timeEscolhido = "Flamengo";

console.log("|| Colaboradores do Time Flamengo ||");
console.log(Model.mostrarColabTimes(timeEscolhido));

const nome = "Luiz";
console.log("|| Colaboradores que tenham 'silva' no nome ||");
console.log(Model.nomeColab(nome));

console.log("|| Mostrando os jogadores da temporada ||");
console.log(Model.filtrarCargos(cargo));

console.log("|| Mostrando técnicos dos times ||");
console.log(Model.filtrarTecnicosTime (time));

const data = "10/02";
console.log("|| Mostrando as partidas que aconteceram no dia 10 de abril ||");
console.log(Model.filtrarPartidasData(data));

const time = "Flamengo";
console.log("|| Mostrando as partidas do time ||");
console.log(Model.filtrarPartidasTime(time));
