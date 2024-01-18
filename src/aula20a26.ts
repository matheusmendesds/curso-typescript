abstract class Conta{
    private readonly numero:number
    protected titular:string
    private saldoconta:number
    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
        this.saldoconta=0
    }
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*100000)+1
    }
    info(){
        console.log(`Titular:${this.titular}`)
        console.log(`Numero:${this.numero}`)
    }
    get saldo():number{
        return this.saldoconta
    }
    set saldo(saldoconta:number){
        this.saldoconta=saldoconta
    }
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor Inválido")
            return
        }
        this.saldoconta+=valor
    }
    protected saque(valor:number){
        if(valor < 0){
            console.log("Valor Inválido")
            return
        }
        if(valor <= this.saldoconta){
        this.saldoconta-=valor
        }else{
        console.log("Saldo Insuficiente")
        }
    }
}

//Public: Pode ser acessado de qualquer lugar
//Private: Pode ser acessado somente na classe pai
//Protected: Pode ser acessado pela classe pai e pela classe filho
interface Tributos{
    taxaCalculo:number;
    CalcularTrib(valor:number):number;
}
class ContaPF extends Conta implements Tributos{
    taxaCalculo: 10;
    cpf:number
    constructor(cpf:number,titular:string){
        super(titular)
        this.cpf=cpf
    }
    CalcularTrib(valor:number):number {
        return valor*this.taxaCalculo
    }
    info(){
        console.log("Tipo:PF")
        super.info()
        console.log(`CPF:${this.cpf}`)
        console.log("-------------------------")
    }
    public deposito(valor: number){
       if(valor >1000){
            console.log("Valor de deposito muito grande para este tipo de conta")
       }else{
            super.deposito(valor)
       }
    }
    public saque(valor: number){
        if(valor > 1000){
            console.log("valor de saque muito grande para este tipo de conta")
        }else{
            super.saque(valor)
        }
        }
    }
class ContaPJ extends Conta{
    cnpj:number
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj=cnpj
        }
        info(){
            console.log("Tipo:PJ")
            super.info()
            console.log(`Cnpj:${this.cnpj}`)
            console.log("-------------------------")
    }
    public deposito(valor: number){
        if(valor >15000){
             console.log("Valor de deposito muito grande para este tipo de conta")
        }else{
             super.deposito(valor)
        }
    }
    public saque(valor: number){
        if(valor > 10000){
            console.log("valor de saque muito grande para este tipo de conta")
        }else{
            super.saque(valor)
        }
        }
}

const cont1=new ContaPF(11,"Bruno")
const cont2=new ContaPJ(4343 ,"CFB Cursos")

cont1.deposito(999)
cont1.deposito(999)
cont1.deposito(999)
// cont1.saque(1000)
// cont1.saque(1000)
// cont1.saque(1000)
cont1.saldo=200
console.log(cont1.saldo)

cont2.deposito(10999)
// cont2.deposito(10999)
// cont2.deposito(10999)
cont2.saque(10000)
console.log(cont2.saldo)


// cont1.info()
// cont2.info()
