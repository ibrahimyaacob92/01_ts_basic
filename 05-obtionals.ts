function printIngredient(
  quantitiy: string,
  ingredient: string,
  extra?: string // * Optional Argument
) {
  console.log(`${quantitiy} ${ingredient} ${extra ? `${extra}` : ""}`);
}

printIngredient("1 cup", "flour");
printIngredient("1 cup", "flour", "extra optional sugar");

// info is optional type and the email is also an optional
interface User {
  id: string;
  info?: {
    email?: string; // this may return undefined/null
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; // this is a non null assertion operator
    // compiles fine because we tell compiler that null | undefined are excluded
  }
  return "";
}

function getEmailLeaner(user: User): string {
  return user?.info?.email ?? ""; //* if null or undefined
  // return user?.info?.email ||  "" //* if falsy
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x,y])
  callback?.() // awesome
}
