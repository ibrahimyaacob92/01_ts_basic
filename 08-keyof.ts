function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "Mimi", age: 12 },
  { name: "LG", age: 13 },
];

// * The second argument will become a dropdown
console.log(pluck(dogs, "name"));

// * Nested Example on how to create a fool proof generics
interface BaseEvent {
  time: number;
  user: string;
}

interface EventMap {
  //? This is similar to restructurign the appo
  addToCart: BaseEvent & { quantity: number; productID: string };
  // ? checkout prop only have time and interface
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name] // * It only takes the key
): void {
  console.log([name, data]);
}

// auto suggest on autocart, for the second arguments,
// it only accepts the object defined in the addToCart
sendEvent("addToCart", {
  productID: "foo",
  user: "baz",
  quantity: 1,
  time: 10,
});

sendEvent("checkout", {
  time: 120,
  user:"ibraim"
});
