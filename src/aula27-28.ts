interface curso{
   titulo:string;
   des:string; 
   iniciarCurso?(teste:string):void;
}

interface cursoProg extends curso{
   aula:number;
   maxAlunos?:number;
}

interface cursoArtes extends curso{
   aula:number;
   maxAlunos?:number;
}

let curso1:cursoProg
let curso2:cursoProg
let curso3:cursoArtes

curso1={titulo:"TypeScript",des:"CUrso de TypeScript",aula:100,maxAlunos:50}
curso2={titulo:"Javascript",des:"CUrso de Javascript",aula:100,maxAlunos:50}
curso3={titulo:"C++",des:"Curso de C++",aula:100}
console.log(curso1)