// Atribute Decorator

function minLength(length: number){
  return (target: any, key: string) => {
    let _value = target[key];

    // metodo de leitura do valor mimino do name
    const getter = () => _value;
    // metodo de escrita para o valor mimimo do name
    const setter = (value: string) => {
      if (value.length < length) {
          throw new Error(`Tamanho menor do que ${length}`);
      }else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });

  };
}

class Api {
  @minLength(3)
  name: string;

  constructor(name: string){
    this.name = name;
  }
}

const api = new Api("produtos");
console.log(api.name);