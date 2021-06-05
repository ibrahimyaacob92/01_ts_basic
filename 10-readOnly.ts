interface Cat {
  name: string;
  breed: string;
}

type ReadOnlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  };
}

function makeCatReadOnly(name: string, breed: string): ReadOnlyCat {
  return {
    name,
    breed,
  };
}

const usul = makeCat("Usul", "Tabbuy");
usul.name = "Peter";

// this cat is only read only
const roberto = makeCatReadOnly("Hello", "World");
// roberto.name = "get error here"


// Its not coordiante
function makeCoordinate(
  x: number,
  y: number,
  z: number
): readonly [number, number, number] {
  return [x, y, z];
}

// make array immuatable

const reallyConst = [1,3,45] as const
// reallyConst[4] = 22  //! THis is error