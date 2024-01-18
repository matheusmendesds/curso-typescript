function teste():void{
    console.log("Teste");
}
teste()

function logar(User:string,pass:string):void{
    console.log(`User: ${User}`);
    console.log(`Senha: ${pass}`);
}

logar('Mathues','1234')

function soma2(n1:number ,n2:number):number{
    return n1+n2;
}
let res:number=soma2(10,5)
let sres:string=soma2(10,4).toString();

console.log(sres);
console.log(typeof(sres))
console.log(res);
console.log(typeof(res))