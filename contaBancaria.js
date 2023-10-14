class ContaBancaria {  
    constructor(agencia, numeroDaConta, saldo) {
        this.agencia = agencia;
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo; 
    };

    consultarSaldo () {
        console.log(`Saldo: R$ ${this.saldo}`);
    };       
    depositar (valor) {
        console.log(`Depósito realizado com sucesso no valor de R$ ${valor}`); 
        this.saldo += valor; 
    };   
    sacar(valor) {
        if (this.saldo >= valor) {
            console.log(`Saque realizado com sucesso no valor de R$ ${valor}`);
            this.saldo -= valor; 
        } else {
            console.log(`Saque no valor de R$ ${valor} não realizado. Saldo insuficiente!`);
        }         
    };
};

module.exports = ContaBancaria;