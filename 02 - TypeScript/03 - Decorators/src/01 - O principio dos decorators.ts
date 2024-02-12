// Decorators

function exibirNome(target: any) {
  console.log(target);
}


@exibirNome
class funcionario {}

@exibirNome
class padaria{}