type robot = {
  id: number /* | string */;
  name: string;
};

interface robot2 {
  id: number | string;
  name: string;
  sayHello(): string;
}

const bot/*2*/: robot ={
  id: 1,
  name: "megaman",
};

console.log(bot);

// Type é mais utilizade para tipar um objeto, e Interface é mais utilazado quando trabalhamos com classe
// Interface é um contrato, precisa seguir fielmente seus atributos.
// Multi Tipos são aceitados

class Pessoa implements robot2 {
  id: number | string;
  name: string;

  constructor(id: number | string , name: string) {
    this.id = id
    this.name = name
  }
  sayHello(): string {
    return "Hello";
  }
}

const p = new Pessoa(1, "Joao");
console.log(p.sayHello()); // Hello 