// Genéricos

function concatArray<T>(...itens: T[]):T[]{
  return new Array().concat(...itens);
};

/* numArray.push("Pedro") */

const numArray = concatArray(<number[]>[1, 5], [3])
const stgArray = concatArray(<string[]>["Carlos", "Eduardo"], ["Victor"])
console.log(numArray);
console.log(stgArray);