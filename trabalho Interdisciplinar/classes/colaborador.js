export class Colaborador {
    #nome;
    #dataNasc;
    #nacionalidade;
    #salario;

    constructor(nome, dataNasc, nacionalidade, salario) {
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

    set reajustSalario(valor) {
        if (isNaN(valor)) {
            return false;
        } else {
            this.#salario = valor;
            return true;
        }
    }

    bonificacao() {
        let percent = 5 / 100;
        let resultvalor = this.salario + (this.salario * percent);
        return resultvalor;
    }

    toString() {
        return `Nome: ${this.#nome}\nData de Nascimento: ${this.#dataNasc}\nNacionalidade: ${this.#nacionalidade}\nSalário: R$ ${this.#salario.toFixed(2)}`;
    }
}
