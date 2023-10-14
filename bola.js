class Bola {
    tipo;
    cheia;
    limpa;

    encher () {
        if (this.cheia == false) {
            console.log(`Enchendo a bola de ${this.tipo}`);
            this.cheia = true;            
        } else {
            console.log(`Operação inválida! A bola de ${this.tipo} está cheia`);
        }
    };
        
    secar () {
        if (this.cheia == true) {
            console.log(`Secando a bola de ${this.tipo}`);
            this.cheia = false;
        } else {
            console.log(`Operação inválida! A bola de ${this.tipo} já está seca`);
        }    
    };
    
    lavar () {
        if (this.limpa == false) {
            console.log(`Lavando a bola de ${this.tipo}`);
            this.limpa = true;
        } else {
            console.log(`Operação inválida! A bola de ${this.tipo} está limpa`);
        } 
    };
}

module.exports = Bola;