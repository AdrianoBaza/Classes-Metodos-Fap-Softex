class Musica {
    nome;
    autor;
    estado;

    play () {
        if (this.estado == 'parada' || this.estado == 'pausada') {
            console.log(`Tocando a música ${this.nome}`);
            this.estado = 'tocando';            
        } else {
            console.log(`Operação inválida! A música ${this.nome} já está tocando`);
        }
    };     
    pause () {
        if (this.estado == 'tocando') {
            console.log(`Pausando a música ${this.nome}`);
            this.estado = 'pausada';            
        } else {
            console.log(`Operação inválida! A música ${this.nome} já está pausada`);
        }    
    };    
    stop () {
        if (this.estado == 'tocando' || this.estado == 'pausada') {
            console.log(`Parando a execução da música ${this.nome}`);
            this.estado = 'parada';            
        } else {
            console.log(`Operação inválida! A música ${this.nome} já está parada`);
        } 
    };
}

module.exports = Musica;