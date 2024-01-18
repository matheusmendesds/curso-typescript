"use strict";
const test = (txt = "...") => {
    console.log(txt);
};
const fsoma = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
test("CFB Cursos");
test('Javascript');
test('Html');
test('YOutube');
let numer = [10, 20, 30, 40, 50, 60, 70];
console.log(fsoma(numer));
