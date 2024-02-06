// Objeto sem previsibilidade
let produtor: object = {
  name: "Felipe",
  cidade: "São Paulo",
  uf: "SP",
  idade: 30
}

// Objeto com previsibilidade

type produtoLoja = {
  nome: string;
  preco : number;
  unidades: number;
}

let meuProduto: produtoLoja ={
  nome: "Tênis",
  preco: 88.99,
  unidades: 5,
}