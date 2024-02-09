"use strict";
// Genéricos
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Carlos", "Eduardo"], ["Victor"]);
console.log(numArray);
console.log(stgArray);
