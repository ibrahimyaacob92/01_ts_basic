//* ENUMS
// in JavaScript
const beforeLoad = "beforeLoad";
const loading = "loading";
const loaded = "loaded";

// with TypeScript enum type
enum LoadingState {
  beforeLoad = "beforeLoad",
  loading = "loading",
  loaded = "loaded",
  loads = "loads",
}

// further simplified
enum LoadShortHand {
  beforeHand,
  laoding,
  loaded,
}

// alternatively you can also do this
type AnotherLoadingState = "beforeLoad" | "loading" | "loaded";

////
// const englishLoadingState = {
//   [LoadingState.beforeLoad]: "Before Load",
// };

const isLoading = (state: LoadingState) => state === LoadingState.loading;

// console.log(isLoading("something else")) // ! this returns error
console.log(isLoading(LoadingState.loaded));

//* LITERAL TYPES
function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 6 + 1);
  }
  return pip;
}

// console.log(rollDice(55)); //! ERROR because 55 is more not 1/2/3

// *OVERLOAD + String Literals
function sendEvent2(name: "addToCart", data: { productId: number }): void;
function sendEvent2(name: "checkout", data: { cartCount: number }): void;
function sendEvent2(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent2("checkout", { cartCount: 121234 });
 //! this will return error because checout doestn have cartCount
sendEvent2("checkout", { cartCount: 121234 });
