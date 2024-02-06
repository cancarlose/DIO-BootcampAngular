type robot = {
  id: number /* | string */;
  name: string;
};

interface robot2 {
  id: number;
  name: string;
}

const bot/*2*/: robot ={
  id: 1,
  name: "megaman",
};

// Type é mais utilizade para tipar um objeto, e Interface é mais utilazado quando trabalhamos com classe
// Interface é um contrato, precisa seguir fielmente seus atributos.
// Multi Tipos são aceitados