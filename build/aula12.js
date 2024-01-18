"use strict";
function teste() {
    console.log("Teste");
}
teste();
function logar(User, pass) {
    console.log(`User: ${User}`);
    console.log(`Senha: ${pass}`);
}
logar('Mathues', '1234');
function soma2(n1, n2) {
    return n1 + n2;
}
let res = soma2(10, 5);
let sres = soma2(10, 4).toString();
console.log(sres);
console.log(typeof (sres));
console.log(res);
console.log(typeof (res));
