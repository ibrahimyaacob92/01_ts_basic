interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

// * Class now will have the following functions
class InMemoryDatabase implements Database {
  // db:Record<string,string> = {}  //! this db is accessible for external objects
  // private db:Record<string, string> = {} //! this one only makes the db accessible within the class, class that extend from the db cannot use this
  protected db: Record<string, string> = {};

  // ? get and set is a Must Have Function
  get(id: string): string {
    return this.db[id];
  }

  set(id: string, value: string): void {
    this.db[id] = value;
  }

  printDB(): void {
    console.log(JSON.stringify(this.db));
  }
}

const myDB = new InMemoryDatabase();
myDB.set("foo", "bar");
console.log(myDB.get("foo"));
myDB.printDB();

// * Class Inheritance !!
interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

class PersistentMemoryDB extends InMemoryDatabase implements Persistable {
  saveToString(): string {
    return JSON.stringify(this.db);
  }

  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB2 =  new PersistentMemoryDB()
myDB2.restoreFromString('{"hdfs":"fd"}')
console.log(myDB2.saveToString())