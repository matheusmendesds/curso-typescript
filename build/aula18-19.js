"use strict";
class Computador2 {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome..:${this.nome}`);
        console.log(`Ram...:${this.ram}`);
        console.log(`Cpu...:${this.cpu}`);
        console.log(`Ligado:${this.ligado ? "Sim" : "Não"}`);
        console.log("----------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else
            console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitido`);
    }
}
const comp11 = new Computador2("PC1", 64, 10);
const comp22 = new Computador2("PC2", 32, 8);
const comp33 = new Computador2("PC3", 64, 12);
comp11.desligar();
comp22.ligar();
comp33.upRam(-100);
comp11.info();
comp22.info();
comp33.info();
