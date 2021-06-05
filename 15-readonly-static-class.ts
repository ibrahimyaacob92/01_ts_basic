class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const lgg = new Doggy("LG", 123);
// lgg.name = "foo"; //! Cannot be overriddedn because its readonly
lgg.age = 44; //! Can be overidden
console.log(lgg.name);

class DogList {
  private doggies: Doggy[] = [];
  private constructor() {}
  // The class itself holds the object this is singleton pattern
  static instance: DogList = new DogList();
  public addDogPublicly(dog: Doggy) {
    this.doggies.push(dog);
  }
  static addDogStatically(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs(){
    return this.doggies
  }
}

DogList.addDogStatically(lgg);
console.log(DogList.instance.getDogs())