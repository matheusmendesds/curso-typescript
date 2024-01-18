function fsoma1(v1:number,v2:number){
    return v1+v2;
}
console.log(fsoma1(12,12))

function fsoma2(...n:number[]){
    let s:number=0;
    for(let en of n){
        s+=en
    }
    // n.forEach((en)=>{
    //     s+=en;
    // })
    return s
}
console.log(fsoma2(12,10,34,10,30,20,20,40))