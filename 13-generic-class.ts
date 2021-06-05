interface Database2<T> {
  get(id: string): T;
  set(id: string, value: T): void;
}

// * Class now will have the following functions
class InMemoryDatabase2<T> implements Database2<T> {
  // db:Record<string,string> = {}  //! this db is accessible for external objects
  // private db:Record<string, string> = {} //! this one only makes the db accessible within the class, class that extend from the db cannot use this
  protected db: Record<string, T> = {};

  // ? get and set is a Must Have Function
  get(id: string): T {
    return this.db[id];
  }

  set(id: string, value: T): void {
    this.db[id] = value;
  }

  printDB(): void {
    console.log(JSON.stringify(this.db));
  }
}

const myDB3 = new InMemoryDatabase2();
myDB3.set("foo", "bar");
console.log(myDB3.get("foo"));
myDB3.printDB();

// * Class Inheritance !!
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class PersistentMemoryDB2<T>
  extends InMemoryDatabase2<T>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB4 = new PersistentMemoryDB2<number>(); // generics defined as number
// myDB4.set("key", "value"); // ! Error because "value" is not a number
myDB4.set("key", 43);
myDB4.restoreFromString('{"hdfs":"fd"}');
console.log(myDB4.saveToString());
