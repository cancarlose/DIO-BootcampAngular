type heroi = {
  name: string;
  vulgo: string;
};

function printarObjetos(pessoa: heroi) {
  console.log(pessoa)
};

printarObjetos({
  name: "Bruce Wayne",
  vulgo: "Batman o Cavaleiro das Trevas"
});


let aniversario: Date = new Date("2002-22-06 12:10");
console.log(aniversario.toString());