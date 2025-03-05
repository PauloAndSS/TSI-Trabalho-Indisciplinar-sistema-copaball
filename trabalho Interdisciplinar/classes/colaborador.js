import { Time } from "./time.js";

export class Colaborador {
    #nome;
    #dataNasc;
    #nacionalidade;
    #salario;

    constructor(nome, dataNasc, nacionalidade, salario) {
        super();
        this.#nome = nome;
        this.#dataNasc = dataNasc;
        this.#nacionalidade = nacionalidade;
        this.#salario = salario;
    }

    get nome() {
        return this.#nome;
    }

    get dataNasc() {
        return this.#dataNasc;
    }

    get nacionalidade() {
        return this.#nacionalidade;
    }

    get salario() {
        return this.#salario;
    }
}