const Pessoa = require('./pessoa');
const Bola = require('./bola');
const Musica = require('./musica');
const ContaBancaria = require('./contaBancaria');

console.log('CLASSE PESSOA: INSTÂNCIA E USO DOS MÉTODOS');
console.log('--------------------------------------------');
p1 = new Pessoa();
p1.nome = 'Adriano';
p1.sobrenome = 'Baza';
p1.idade = 49;
console.log(p1);
p1.falar();
p1.chorar();
p1.andar();

p2 = new Pessoa();
p2.nome = 'Ana';
p2.sobrenome = 'Catarina';
p2.idade = 46;
console.log(p2);
p2.falar();
p2.chorar();
p2.andar();
console.log();
console.log();
console.log('CLASSE BOLA: INSTÂNCIA E USO DOS MÉTODOS');
console.log('--------------------------------------------');
b1 = new Bola;
b1.tipo = 'futebol';
b1.cheia = false;
b1.limpa = true;
console.log(b1);
b1.encher()
console.log(b1);
console.log();

b2 = new Bola;
b2.tipo = 'voleibol';
b2.cheia = true;
b2.limpa = false;
console.log(b2);
b2.secar();
console.log(b2);
b2.lavar();
console.log(b2);

console.log();
console.log();
console.log('CLASSE MUSICA: INSTÂNCIA E USO DOS MÉTODOS');
console.log('--------------------------------------------');
m1 = new Musica();
m1.nome = 'Faroeste Caboclo';
m1.autor = 'Legião Urbana';
m1.estado = 'parada';
console.log(m1);
m1.play();
console.log(m1);
m1.pause();
console.log(m1);
m1.stop();
console.log(m1); 

console.log();
console.log();
console.log('CLASSE CONTABANCARIA: INSTÂNCIA E USO DOS MÉTODOS');
console.log('--------------------------------------------');
c1 = new ContaBancaria(3190, 1, 0);
console.log(c1);
c1.depositar(500);
c1.consultarSaldo();
c1.sacar(200);
c1.consultarSaldo();
c1.sacar(1000);
c1.consultarSaldo();

c2 = new ContaBancaria(3190, 2, 0);
console.log(c2);
c2.sacar(10);