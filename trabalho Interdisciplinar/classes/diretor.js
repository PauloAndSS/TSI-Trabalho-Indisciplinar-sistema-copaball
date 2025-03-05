import { Colaborador } from "./colaborador";

export class Diretor extends Colaborador {

    #escola;

    constructor (nome, dataNasc, nacionalidade, salario, escola){
        super(nome, dataNasc, nacionalidade, salario);
        this.#escola = escola;
    }

    get escola(){
        return this.#escola;
    }
}