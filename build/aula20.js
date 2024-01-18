"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const cont1 = new ContaPF(120303040, "Bruno");
const cont2 = new ContaPJ(545344646, "CFB Cursos");
console.log(cont1.titular);
console.log(cont2.titular);
