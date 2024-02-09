class Character {
  name: string;
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  attack():void {
    console.log(`Attack with ${this.stregth} points`)
  }
}

class Magician extends Character {
  magicPoints: number;

  constructor(name: string,
    stregth: number,
    skill: number,
    magicPoints: number
    ){
      super(name, stregth, skill);

      this.magicPoints = magicPoints; // Não precisa usar o "super" pois ele já sabe que os atrib
  }
}

const p1 = new Character ("Ryu", 10, 98);
const p2 = new Magician ("Mago", 9, 29, 100);
p1.attack();
console.log(Magician)
console.log(Character)