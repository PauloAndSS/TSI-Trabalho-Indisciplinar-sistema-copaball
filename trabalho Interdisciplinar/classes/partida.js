import { Time } from "./time.js";

class Jogo {
    constructor(dataPartida, timeA, timeB, golsA, golsB) {
        this.dataPartida = dataPartida;
        this.timeA = timeA;
        this.timeB = timeB;
        this.golsA = golsA;
        this.golsB = golsB;
    }
}

export class Partida extends Jogo {
    #serie;

    constructor(dataPartida, timeA, timeB, golsA, golsB, serie) {
        super(dataPartida, timeA, timeB, golsA, golsB);
        this.#serie = serie; // Serie A ou B
    }

    get serie() {
        return this.#serie;
    }

    toString() {
        return `Data: ${this.dataPartida}\nTime A: ${this.timeA.nomeTime()}\nGols A: ${this.golsA}\nTime B: ${this.timeB.nomeTime()}\nGols B: ${this.golsB}\nSérie: ${this.serie}`;
    }
}
