"use strict";
let av = [10, 20, 30, 40];
let [aa, bb, cc, dd] = av;
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
const obj = {
    cor11: "Verde",
    cor22: "Azul",
    cor33: "Vermelho",
    cor44: "Branco"
};
let { cor11, cor22, cor33, cor44 } = obj;
console.log(cor11);
console.log(cor22);
console.log(cor33);
console.log(cor44);
let [n1 = 0, n2 = 0, ...n3] = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(n1);
console.log(n2);
console.log(n3);
