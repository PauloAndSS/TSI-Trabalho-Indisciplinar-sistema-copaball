import { Colaborador } from "./colaborador";

export class Time {
    #nomeTime;
    #fundacao;
    #numMundiais;
    #numVitorias;
    #estadio;
    #colaboradores = [];

    constructor(nomeTime, fundacao, numMundiais, numVitorias, estadio) {
        this.#nomeTime = nomeTime;
        this.#fundacao = fundacao;
        this.#numMundiais = numMundiais;
        this.#numVitorias = numVitorias;
        this.#estadio = estadio;
    }

    get nomeTime() {
        return this.#nomeTime;
    }

    get fundacao() {
        return this.#fundacao;
    }

    get numMundiais() {
        return this.#numMundiais;
    }

    get numVitorias() {
        return this.#numVitorias;
    }

    get estadio() {
        return this.#estadio;
    }

    get colaboradores() {
        return this.#colaboradores;
    }

    addMundial(){
        this.#numMundiais += 1;
    }

    addVitoria(){
        this.#numVitorias += 1;
    }

    contratar(colaborador){
        if(colaborador instanceof Colaborador){
            var index = -1;

            for(let i = 0; i < this.#colaboradores.length; i++){
                if( colaborador == this.#colaboradores[i]){
                    index = i;
                }
            }

            if(index > -1){
                return false;
            }else{
                this.#colaboradores.push(colaborador);
                return true;
            }
        }else{
            return false;
        }
    }

    demitir(colaborador){
        if(colaborador instanceof Colaborador){
            var index = -1;

            for(let i = 0; i < this.#colaboradores.length; i++){
                if( colaborador == this.#colaboradores[i]){
                    index = i;
                }
            }

            if(index > -1){
                this.#colaboradores.splice(index, 1);
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }

    toString() {
        return `Time: ${this.#nomeTime}\nFundação: ${this.#fundacao}\nMundiais: ${this.#numMundiais}\nVitórias: ${this.#numVitorias}\nEstádio: ${this.#estadio}\nColaboradores: ${this.#colaboradores.map}`;  /* Fazer o for */
    }
}
