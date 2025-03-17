export class Partida {
    #dataPartida;
    #timeA;
    #timeB;
    #golsA;
    #golsB;
    #serie;

    constructor(dataPartida, timeA, timeB, golsA, golsB, serie) {
        this.#dataPartida = dataPartida;
        this.#timeA = timeA;
        this.#timeB = timeB;
        this.#golsA = golsA;
        this.#golsB = golsB;
        this.#serie = serie;
    }

    get dataPartida() {
        return this.#dataPartida;
    }

    get timeA() {
        return this.#timeA;
    }

    get timeB() {
        return this.#timeB;
    }

    get golsA() {
        return this.#golsA;
    }

    get golsB() {
        return this.#golsB;
    }

    get serie() {
        return this.#serie;
    }

    toString() {
        return `Data: ${this.dataPartida}\nTime A: ${this.timeA.nomeTime}\nGols A: ${this.golsA}\nTime B: ${this.timeB.nomeTime}\nGols B: ${this.golsB}\nSérie: ${this.serie}`;
    }
}
