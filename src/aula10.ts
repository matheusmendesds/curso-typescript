// NULL - UNDEFINED - UNKNOWN

// NULL - Tipo Nulo
// UNDEFINED - Indefinido
// UNKNOWN - Desconhecido
let nome1:string|null;
nome1=null;
console.log(nome1)

let nome2:any;
console.log(nome2);

let nome3:unknown=nome1; // unknown só pode ser atribuido em tipos unknown ou any
let vnum:any=nome3;
console.log(vnum)