let userName: string = "Jack";
let hasLoggedIn: boolean = true;

userName += "Herrington";
console.log(hasLoggedIn);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 34];

const myPerson: {
  first: string;
  last: string;
} = {
  first: "hje",
  last: "heasd",
};

// ! What is record ??
const ids: Record<string, string> = {
  10: "a",
  20: "b",
};
ids[30] = "ac";
ids["sada"] = "dollah"

console.log(`ids`, ids);

[1,2,3].forEach(v=> console.log(v))