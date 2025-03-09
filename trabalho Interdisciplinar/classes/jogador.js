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

    set camisa(numCamisa){
        if(isNaN(num)){
            return false;
        }else{
            this.#camisa = numCamisa;
            return true;
        }
    }

    get posicao() {
        return this.#posicao;
    }

    set posicao(posiJogo){
        this.#posicao = posiJogo;
    }

    get gols() {
        return this.#gols;
    }

    get assistencias() {
        return this.#assistencias;
    }

    addGol (gols){
        if(isNaN(gols)){
            return false;
        }else{
            this.#gols += gols;
            return true;
        }
    }

    addAssistencia(assis){
        if(isNaN(assis)){
            return false;
        }else{
            this.#assistencias += assis;
            return true;
        }
    }
}