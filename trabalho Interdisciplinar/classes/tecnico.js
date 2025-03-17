import { Colaborador } from "./Colaborador.js";

export class Tecnico extends Colaborador {
    #formacao;
    #anoExp;

    constructor(nome, dataNasc, nacionalidade, salario, formacao, anoExp) {
        super(nome, dataNasc, nacionalidade, salario);
        this.#formacao = formacao;
        this.#anoExp = anoExp;
    }

    get formacao() {
        return this.#formacao;
    }

    get anoExp() {
        return this.#anoExp;
    }

    addAnoExp() {
        this.#anoExp += 1;
    }

    toString() {
        return `${super.toString()}\nFormação: ${this.#formacao}\nAnos de Experiência: ${this.#anoExp}`;
    }
}
