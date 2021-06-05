type myFlexibleDogInfo = {
  name: string;
} & Record<string, string>;

type myFlexibleDogInfo2 = {
  name: string;
  [key: string]: string | number;
};

const dog: myFlexibleDogInfo = {
  name: "lG",
  breed: "Nutt",
};

// MAPPED TYPES
interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  //? this takes the key of all the props and assigned them as boolean type
  [Property in keyof Type]: boolean;
};

// check this dog info options
type DogInfoOptions = OptionsFlags<DogInfo>;

// LISTENER EXAMPLE
// * This is crazy
type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
    newValue: Type[Property]
  ) => void;
} &
  {
    [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (
      newValue: Type[Property]
    ) => void;
  };

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Ne3eds to be implemented";
}

const lg: DogInfo = {
  name: "LG",
  age: 13,
};

// * Hover on DogInfoListeners
type DogInfoListeners = Listeners<DogInfo>;

// using the function
listenToObject(lg, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onNameDelete: (v:string) => console.log("deleted"),
});
