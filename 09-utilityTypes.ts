interface MyUser {
  name: string;
  id: string;
  email?: string;
}

// ! This method works but there's simpler way to tackle this
// interface MyUserOptionals {
//   name?: string;
//   id?: string;
//   email?: string;
// }

// * PARTIAL
// * This one is equivalent to above.. cleaner too
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Jack",
      id: "foo",
      email: "dontEmak@email.com",
    },
    {
      email: "supardupar@deas.com",
    }
  )
);

// * REQUIRED
// * Makes all they key required
type RequiredMyUser = Required<MyUser>;

// * PICK
// * Pick Either
type JustEmailAndName = Pick<MyUser, "name" | "email">;

// * OMIT
// * Removes field
type UserWithoutID  = Omit<MyUser,"id"|"name">

// * RECORD
// * https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype
type RecordMyUser = Record<string, MyUser>

const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

console.log(
  mapById([
    {
      id: "foo",
      name: "Mr Foo",
    },
    {
      id: "baz0",
      name: "m,rsm, bassz",
    },
  ])
);
