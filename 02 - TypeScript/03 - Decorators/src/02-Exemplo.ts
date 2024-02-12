// Decorators

function apiVersion(version: string) {
  return(target: any) => {
    Object.assign(target.prototype, {__version: version})
  }
}
// "__" serve para delimitar "privacidade" da versão da classe, não se misturar com outra

// @apiVersion("1.10")
// class Api{}

// const apii = new Api();
// console.log(api.__version);