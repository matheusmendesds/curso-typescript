let dados={
    nome:"Joao",
    idade:25,
    status:"A",
    ola:()=>{console.log("Oi")},
    info:(p:string)=>{console.log(p)},
}

console.log(typeof(dados));
console.log(dados.nome);

dados.ola();
dados.info(dados.nome);
