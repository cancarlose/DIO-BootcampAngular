type heroi = {
  name: string;
  vulgo: string;
}

function printarObjetos(pessoa: heroi) {
  console.log(pessoa)
}

printarObjetos({
  name: "Bruce Wayne",
  vulgo: "Batman o Cavaleiro das Trevas"
})
