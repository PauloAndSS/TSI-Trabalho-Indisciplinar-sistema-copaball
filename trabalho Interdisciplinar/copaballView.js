import * as Dados from "./copaballDados.js";

const timeEscolhido = "Flamengo";

console.log("|| Colaboradores do Time ||");
console.log(filtrarColaboradoresPorTime(Dados.colaboradores, timeEscolhido));

console.log("|| Colaboradores que tenham 'silva' no nome ||");
console.log(filtrarColaboradoresPorNome(Dados.colaboradores, "silva"));

console.log("|| Mostrando os jogadores da temporada ||");
console.log(filtrarJogadores(Dados.colaboradores));

console.log("|| Mostrando técnicos dos times ||");
console.log(filtrarTecnicos(Dados.colaboradores));

console.log("|| Mostrando as partidas que aconteceram no dia 10 de abril ||");
console.log(filtrarPartidasPorData(Dados.partidas, "10 de abril"));

console.log("|| Mostrando as partidas do time ||");
console.log(filtrarPartidasPorTime(Dados.partidas, timeEscolhido));
