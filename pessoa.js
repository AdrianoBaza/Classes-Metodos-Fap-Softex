class Pessoa {
    nome;
    sobrenome;
    idade;

    falar () {
        console.log(`${this.nome} ${this.sobrenome} está falando`);
    }
    chorar () {
        console.log(`${this.nome} ${this.sobrenome} está chorando`);
    }
    andar () {
        console.log(`${this.nome} ${this.sobrenome} está andando`);
    }
}

module.exports = Pessoa;