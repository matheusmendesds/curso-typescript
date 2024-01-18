"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Numero:${this.numero}`);
    }
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoconta) {
            this.saldoconta -= valor;
        }
        console.log("Saldo Insuficiente");
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log("Tipo:PF");
        super.info();
        console.log(`CPF:${this.cpf}`);
        console.log("-------------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor de deposito muito grande para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log("Tipo:PJ");
        super.info();
        console.log(`Cnpj:${this.cnpj}`);
        console.log("-------------------------");
    }
    deposito(valor) {
        if (valor > 15000) {
            console.log("Valor de deposito muito grande para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
const cont1 = new ContaPF(11, "Bruno");
const cont2 = new ContaPJ(4343, "CFB Cursos");
cont1.deposito(999);
cont1.deposito(999);
cont1.deposito(999);
console.log(cont1.saldo());
cont2.deposito(10999);
cont2.deposito(10999);
cont2.deposito(10999);
console.log(cont2.saldo());
