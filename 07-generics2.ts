// re-write foreach, filter in TS using reduce function

function myTypeSafeForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    forEachFunc(v);
    // reduce function needs to return something, in our case we just wants to run the function
    return undefined;
  }, undefined);
}

// check out the docs to the function.
myTypeSafeForEach(["dfesd", "wef", "ewf"], (v) => console.log(`forEach ${v}`));

// check out the docs to the function.. it changes
myTypeSafeForEach(["dfesd", 34, { helos: "sd" }], (v) =>
  console.log(`forEach ${v}`)
);


