let numeros:number[]=[20,30,40];
//let numeros:Array<number>=[20,30,40];
//let numeros:(number|string)[]=[20,30,40,"Bruno"];

numeros.push(50);
numeros.unshift(23);

numeros.pop();
numeros.shift();

console.log(numeros);

let numeros_ro:ReadonlyArray<number>=[100,200,300]; //Metodo que deixa
// o array apenas de modo Leitura , sem poder modificar seus elementos