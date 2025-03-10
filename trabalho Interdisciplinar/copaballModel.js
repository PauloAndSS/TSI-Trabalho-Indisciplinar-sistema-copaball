import * as Dados from "./copaballDados.js";
import { Jogador } from "./classes/jogador.js";
import { Tecnico } from "./classes/tecnico.js";
import { Diretor } from "./classes/diretor.js";

function filtrarTimesNome(nome) {
    for (i = 0; i < Dados.vetTimes.lenght; i++) {
        if (Dados.vetTimes[i].nomeTime == nome) {
            return Dados.vetTimes[i];
        } else {
            return null;
        }
    }
}

function mostrarColabTimes(time) {
    for (let i = 0; i < Dados.vetTimes.lenght; i++) {
        if (Dados.vetTimes[i].nomeTime.toUpperCase() == time.toUpperCase()) {
            return Dados.vetTimes[i].colaboradores;
        } else {
            return null;
        }
    }
}

function nomeColab(nome) {
    var vetFiltrado = [];
    for (let i = 0; i < Dados.vetColaboradores.lenght; i++) {
        if (Dados.vetColaboradores[i].nome.includes(nome)) {
            vetFiltrado.push(Dados.vetColaboradores[i]);
        }
    }
}

function filtrarCargos(cargo) {
    var vetFiltrado = [];

    switch (cargo) {
        case "Jogador":
            for (let i = 0; i < Dados.vetColaboradores.lenght; i++) {
                if (Dados.vetColaboradores[i] instanceof Jogador) {
                    vetFiltrado.push(Dados.vetColaboradores[i]);
                }
            }
            break;
        case "Tecnico":
            for (let i = 0; i < Dados.vetColaboradores.lenght; i++) {
                if (Dados.vetColaboradores[i] instanceof Tecnico) {
                    vetFiltrado.push(Dados.vetColaboradores[i]);
                }
            }
            break;
        case "Diretor":
            for (let i = 0; i < Dados.vetColaboradores.lenght; i++) {
                if (Dados.vetColaboradores[i] instanceof Diretor) {
                    vetFiltrado.push(Dados.vetColaboradores[i]);
                }
            }
            break;
    }

    return vetFiltrado;
}

function filtrarTecnicosTime (time) {
    for (let i = 0; i < Dados.vetTimes.lenght; i++) {
        if (Dados.vetTimes[i].nome == time) {
            for(let j = 0; j < Dados.vetTimes[i].colaboradores.lenght; j++) {
                if (Dados.vetTimes[i].colaboradores[j] instanceof Tecnico) {
                    return Dados.vetTimes[i].colaboradores[j];
                }
            }
        } else {
            return null;
        }
    }
}

function filtrarPartidasData(data) {  
    for (let i = 0; i < Dados.vetPartidas.lenght; i++) {
        if (Dados.vetPartidas[i].dataPartida.includes(data)) {
            return Dados.vetPartidas[i];
        } else {
            return null;
        }
    }
}

function filtrarPartidasTime(time) {
    for (let i = 0; i < Dados.vetPartidas.lenght; i++) {
        if (Dados.vetPartidas[i].timeA == time || Dados.vetPartidas[i].timeB == time) {
            return Dados.vetPartidas[i];
        } else {
            return null;
        }
    }
}

export {filtrarTimesNome, mostrarColabTimes, nomeColab, filtrarCargos, filtrarTecnicosTime, filtrarPartidasData, filtrarPartidasTime};