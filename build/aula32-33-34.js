"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores1;
    (function (Cores1) {
        Cores1[Cores1["Preto"] = 0] = "Preto";
        Cores1[Cores1["Branco"] = 1] = "Branco";
        Cores1[Cores1["Vermelho"] = 2] = "Vermelho";
        Cores1[Cores1["Amarelo"] = 3] = "Amarelo";
        Cores1[Cores1["Azul"] = 4] = "Azul";
        Cores1[Cores1["Prata"] = 5] = "Prata";
    })(Cores1 || (Cores1 = {}));
    class Carro {
        nome;
        motor;
        cor = String;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores1[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return (this.motor.liga ? "Sim" : "Não");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), 2);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 100), 0);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.potencia : 0);
        }
        set liga(ligado) {
            this.ligado = ligado;
        }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Rapido", 2);
const carro2 = new Veiculos.CarroPopular("Normal", 1);
carro1.ligar();
carro2.ligar();
console.log(`Nome......:${carro1.meuNome}`);
console.log(`Cor.......:${carro1.minhaCor}`);
console.log(`Potencia..:${carro1.minhaPotencia}`);
console.log(`Ligado...:${carro1.estouLigado}`);
console.log("------------------------------------");
console.log(`Nome......:${carro2.meuNome}`);
console.log(`Cor.......:${carro2.minhaCor}`);
console.log(`Potencia..:${carro2.minhaPotencia}`);
console.log(`Ligado...:${carro2.estouLigado}`);
console.log("------------------------------------");
