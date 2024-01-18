"use strict";
function cortar() {
    console.log("----------");
}
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
const comp1 = new Computador("PC1", 64, 10);
const comp2 = new Computador("PC2", 32, 8);
const comp3 = new Computador("PC3", 64, 12);
console.log(comp1.nome);
console.log(comp1.ram);
console.log(comp1.cpu);
cortar();
console.log(comp2.nome);
console.log(comp2.ram);
console.log(comp2.cpu);
cortar();
console.log(comp3.nome);
console.log(comp3.ram);
console.log(comp3.cpu);
