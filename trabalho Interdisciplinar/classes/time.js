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
}