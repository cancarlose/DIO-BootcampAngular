type robot1 = {
  id: number /* | string */;
  name: string;
};

interface robot2 {
  id: number | string;
  name: string;
  sayHello(): string;
}

const bot/*2*/: robot1 ={
  id: 1,
  name: "megaman",
};

console.log(bot);

// Type é mais utilizade para tipar um objeto,
//e Interface é mais utilazado quando trabalhamos com classe.
// Interface é um contrato, precisa seguir fielmente seus atributos.
// Multi Tipos são aceitados.


// Criando classe com exemplo de interface.

class Pessoa implements robot2 {
  id: number | string;
  name: string;

  constructor(id: number | string , name: string) {
    this.id = id
    this.name = name
  }
  sayHello(): string {
    return `Hello, eu sou ${this.name}`;
  } // Necessário seguir todas as regras da interface.
}

const p = new Pessoa(1, "Gustavo");
console.log(p.sayHello()); // Hello