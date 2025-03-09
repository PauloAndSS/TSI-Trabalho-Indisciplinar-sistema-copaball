import { Time } from "./time.js";

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
        this.#serie = serie;//serie A ou B
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
}