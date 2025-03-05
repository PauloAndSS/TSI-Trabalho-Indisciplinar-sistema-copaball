import { Colaborador } from "./colaborador";

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
}