import * as Dados from "./copaballDados.js";
import { Jogador } from "./classes/jogador.js";
import { Tecnico } from "./classes/tecnico.js";
import { Diretor } from "./classes/diretor.js";

function filtrarTimesNome(nome) {
    var result = null
    for (let i = 0; i < Dados.vetTimes.length; i++) {
        if (Dados.vetTimes[i].nomeTime == nome) {
            result = Dados.vetTimes[i].toString();
        }
    }

    return result;
}


function mostrarColabTimes(time) {
    var vetFiltrado = [];
    for (let i = 0; i < Dados.vetTimes.length; i++) {
        if (Dados.vetTimes[i].nomeTime == time) {
            vetFiltrado = Dados.vetTimes[i].colaboradores;
        }
    }

    var stringResult = "";
    for(let i = 0; i < vetFiltrado.length; i++){
        stringResult += "Colaborador " + (i+1) + "\n"+vetFiltrado[i] + "\n\n";
    }

    return stringResult;
}


function nomeColab(nome) {
    var vetFiltrado = [];
    var nomeAlto = nome.toUpperCase();
    for (let i = 0; i < Dados.vetColaboradores.length; i++) {
        let nomeColab = Dados.vetColaboradores[i].nome.toUpperCase();
        if (nomeColab.includes(nomeAlto)) {
            vetFiltrado.push(Dados.vetColaboradores[i]);
        }
    }

    var stringResult = "";
    for(let i = 0; i < vetFiltrado.length; i++){
        stringResult += "Colaborador " + (i+1) + "\n"+vetFiltrado[i] + "\n\n";
    }

    return stringResult;
}

function filtrarCargos(cargo) {
    var vetFiltrado = [];

    switch (cargo) {
        case "Jogador":
            for (let i = 0; i < Dados.vetColaboradores.length; i++) {
                if (Dados.vetColaboradores[i] instanceof Jogador) {
                    vetFiltrado.push(Dados.vetColaboradores[i]);
                }
            }
            break;
        case "Técnico":
            for (let i = 0; i < Dados.vetColaboradores.length; i++) {
                if (Dados.vetColaboradores[i] instanceof Tecnico) {
                    vetFiltrado.push(Dados.vetColaboradores[i]);
                }
            }
            break;
        case "Diretor":
            for (let i = 0; i < Dados.vetColaboradores.length; i++) {
                if (Dados.vetColaboradores[i] instanceof Diretor) {
                    vetFiltrado.push(Dados.vetColaboradores[i]);
                }
            }
            break;
    }

    var stringResult = "";
    for(let i = 0; i < vetFiltrado.length; i++){
        stringResult += "Colaborador " + (i+1) + "\n"+vetFiltrado[i] + "\n\n";
    }

    return stringResult;
}

function filtrarTecnicosTime (time) {
    var result = null;
    for (let i = 0; i < Dados.vetTimes.length; i++) {
        if (Dados.vetTimes[i].nomeTime == time) {
            for(let j = 0; j < Dados.vetTimes[i].colaboradores.length; j++) {
                if (Dados.vetTimes[i].colaboradores[j] instanceof Tecnico) {
                    result = Dados.vetTimes[i].colaboradores[j];
                }
            }
        }
    }

    return "Técnico do " + time + "\n \n" + result.toString();
}

function filtrarPartidasData(data) {
    var vetFiltrado = [];  
    for (let i = 0; i < Dados.vetPartidas.length; i++) {
        if (Dados.vetPartidas[i].dataPartida.includes(data)) {
            vetFiltrado.push(Dados.vetPartidas[i])
        }
    }

    var stringResult = "";
    for(let i = 0; i < vetFiltrado.length; i++){
        stringResult += vetFiltrado[i] + "\n\n";
    }

    return stringResult;
}

function filtrarPartidasTime(time) {
    var vetFiltrado = [];
    for (let i = 0; i < Dados.vetPartidas.length; i++) {
        if (Dados.vetPartidas[i].timeA.nomeTime == time || Dados.vetPartidas[i].timeB.nomeTime == time) {
            vetFiltrado.push(Dados.vetPartidas[i]);
        }
    }

    var stringResult = "";
    for(let i = 0; i < vetFiltrado.length; i++){
        stringResult += "Partida " + (i+1) + "\n \n" +vetFiltrado[i] + "\n\n";
    }

    return stringResult;
}

export {filtrarTimesNome, mostrarColabTimes, nomeColab, filtrarCargos, filtrarTecnicosTime, filtrarPartidasData, filtrarPartidasTime};