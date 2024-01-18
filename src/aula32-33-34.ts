namespace Veiculos{
    enum Cores1{"Preto","Branco","Vermelho","Amarelo","Azul","Prata"}
    abstract class Carro{
        private nome:string
        private motor:Motores.Motor
        private cor=String
        constructor(nome:string,motor:Motores.Motor,cor:Cores1){
            this.nome=nome
            this.motor=motor
            this.cor=Cores1[cor] 
        }
        public ligar(){
            this.motor.liga=true
        }
        public desligar(){
            this.motor.liga=false
        }
        get minhaCor(){
            return this.cor
        }
        get meuNome(){
            return this.nome
        }
        get estouLigado(){
            return (this.motor.liga?"Sim":"Não")
        }
        get minhaPotencia(){
            return this.motor.potencia
        }
    }
    export class CarroEsportivo extends Carro{
       constructor(nome:string,cor:Cores1){
        super(nome,new Motores.Motor(6,300,new Motores.Turbo(100)),2)
       } 
    }
    export class CarroPopular extends Carro{
        constructor(nome:string,cor:Cores1){
         super(nome,new Motores.Motor(3,100),0)
        } 
     }

}

namespace Motores{
    export class Turbo{
        private pot:number
        constructor(pot:number) {
            this.pot=pot
        }
        get potencia(){
            return this.pot
        }
    }
    
    export class Motor{
        private ligado:boolean
        private cilindros:number
        private pot:number
        constructor(cilindros:number,pot:number,turbo?:Turbo) {
            this.ligado=false
            this.cilindros=cilindros
            this.pot=pot + (turbo?turbo.potencia:0)   
        }
        set liga(ligado:boolean){
            this.ligado=ligado
        }
        get liga(){
            return this.ligado
        }
        get potencia(){
            return this.pot
        }
       
    }
}    

const carro1=new Veiculos.CarroEsportivo("Rapido",2)
const carro2=new Veiculos.CarroPopular("Normal",1)

carro1.ligar()
carro2.ligar()

console.log(`Nome......:${carro1.meuNome}`)
console.log(`Cor.......:${carro1.minhaCor}`)
console.log(`Potencia..:${carro1.minhaPotencia}`)
console.log(`Ligado...:${carro1.estouLigado}`)
console.log("------------------------------------")
console.log(`Nome......:${carro2.meuNome}`)
console.log(`Cor.......:${carro2.minhaCor}`)
console.log(`Potencia..:${carro2.minhaPotencia}`)
console.log(`Ligado...:${carro2.estouLigado}`)
console.log("------------------------------------")