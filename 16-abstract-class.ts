abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;
  abstract get name():string
}

// const ryu = new StreetFighter() //! error becuase its abstract classes

class Ryu extends StreetFighter {
  get name(): string {
    return "Ryu";
  }
  getSpecialAttack(): string {
    return "Hadoken";
  }
}

const ryu = new Ryu();
console.log(ryu.getSpecialAttack());
console.log(ryu.fight());
