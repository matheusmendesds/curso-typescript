class Computador2{
    public nome:string="";
    private ram:number=0;
    private cpu:number=0;
    private ligado:boolean;

    constructor(nome:string,ram:number,cpu:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false;
    }

    info():void{
        console.log(`Nome..:${this.nome}`);
        console.log(`Ram...:${this.ram}`);
        console.log(`Cpu...:${this.cpu}`);
        console.log(`Ligado:${this.ligado?"Sim":"Não"}`);
        console.log("----------------------------");
    }

    ligar():void{
        this.ligado=true
    }
    desligar():void{
        this.ligado=false
    }
    upRam(qtde:number):void{
        if(qtde >= 0 && qtde <= 1000){
        this.ram=qtde
        } else 
        console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitido`);
    }
}

//Instanciar = Criar classe, criar objetos da classe
const comp11=new Computador2("PC1",64,10);
const comp22=new Computador2("PC2",32,8);
const comp33=new Computador2("PC3",64,12);

comp11.desligar();
comp22.ligar();
comp33.upRam(-100)
comp11.info();
comp22.info();
comp33.info();

