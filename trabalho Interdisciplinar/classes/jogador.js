import { Colaborador } from "./colaborador";

export class Jogador extends Colaborador {
    #camisa;
    #posicao;
    #gols;
    #assistencias;

    constructor(nome, dataNasc, nacionalidade, salario, camisa, posicao, gols, assistencias) {
        super(nome, dataNasc, nacionalidade, salario);
        this.#camisa = camisa;
        this.#posicao = posicao;
        this.#gols = gols;
        this.#assistencias = assistencias;
    }

    get camisa() {
        return this.#camisa;
    }

    get posicao() {
        return this.#posicao;
    }

    get gols() {
        return this.#gols;
    }

    get assistencias() {
        return this.#assistencias;
    }
}