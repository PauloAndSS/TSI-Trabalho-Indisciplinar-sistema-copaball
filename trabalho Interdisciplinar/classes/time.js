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

    contratar(colaborador){
        if(colaborador instanceof Colaborador){
            var index = -1;

            for(i = 0; i < this.#colaboradores.length; i++){
                if( colaborador == this.#colaboradores[i]){
                    index = i;
                }
            }

            if(index > -1){
                return false
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

            for(i = 0; i < this.#colaboradores.length; i++){
                if( colaborador == this.#colaboradores[i]){
                    index = i;
                }
            }

            if(index > -1){
                this.#colaboradores.splice(index);
                return true;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }
}