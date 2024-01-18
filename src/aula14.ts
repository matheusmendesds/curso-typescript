const test=(txt:string="..."):void=>{
    console.log(txt)
}
const fsoma=(n:number[]):number=>{
    let s:number=0
    n.forEach((e)=>{
        s+=e;
    })
    return s;
}

test("CFB Cursos")
test('Javascript')
test('Html')
test('YOutube')

let numer:number[]=[10,20,30,40,50,60,70]
console.log(fsoma(numer))

