import * as Model from "./copaballModel.js";


const timeEscolhido = "Flamengo";

console.log("|| Colaboradores do Time Flamengo ||");
console.log(Model.mostrarColabTimes(timeEscolhido));

const nome = "Santos";
console.log("|| Colaboradores que tenham 'Santos' no nome ||");
console.log(Model.nomeColab(nome));

const cargo = "Jogador";
console.log("|| Mostrando os jogadores da temporada ||");
console.log(Model.filtrarCargos(cargo));

const time = "Palmeiras";
console.log("|| Mostrando técnicos do time Palmeiras ||");
console.log(Model.filtrarTecnicosTime (time));

const data = "10/02";
console.log("|| Mostrando as partidas que aconteceram no dia 10 de fevereiro ||");
console.log(Model.filtrarPartidasData(data));

const timePart = "Flamengo";
console.log("|| Mostrando as partidas do Flamengo ||");
console.log(Model.filtrarPartidasTime(timePart));
