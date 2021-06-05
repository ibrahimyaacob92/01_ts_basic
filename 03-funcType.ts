// function argument
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

// use type as variable
export type MutationFuntion = (v:number) => number  

export function arrayMutate(
  numbers: number[],
  mutate: MutationFuntion // much easier to read
): number[] {
  return numbers.map(mutate);
}

console.log(arrayMutate([1, 2, 3], (v) => v * 10));

// function that returns function
export type FunctionNumber = (v:number) => number
export function createAdder(num: number):FunctionNumber{
    return (val:number) => num + val
}

const addOne = createAdder(1)
console.log(addOne(55))


