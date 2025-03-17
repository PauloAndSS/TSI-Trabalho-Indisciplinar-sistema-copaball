import { Colaborador } from "./Colaborador.js";

export class Diretor extends Colaborador {

    #escola;

    constructor (nome, dataNasc, nacionalidade, salario, escola){
        super(nome, dataNasc, nacionalidade, salario);
        this.#escola = escola;
    }

    get escola(){
        return this.#escola;
    }

    set escola(escola){
        this.#escola = escola;
    }

    bonificacao(){
        let percent = 15/100;
        let resultvalor = this.salario + (this.salario * percent);
        return resultvalor;
    }

    toString() {
        return `${super.toString()}\nEscola: ${this.#escola}`;
    }
}
