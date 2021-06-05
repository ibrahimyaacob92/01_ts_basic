function newSimpleStringState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

// T is generics once we defined it the rest will follow
const [st1getter, st1setter] = newSimpleStringState<number>(10); // ! Now T is infered as number
console.log(`st1getter()`, st1getter());
st1setter(534);
console.log(`st1getter()`, st1getter());

const [st2getter, st2setter] = newSimpleStringState<string>("stringf"); // ! Now T is number
console.log(`st1getter()`, st2getter());
st2setter("world");
console.log(`st1getter()`, st2getter());

// ? same as above but without overiding the generics
const [st3getter, st3setter] = newSimpleStringState("stringf"); // ! Now T is string
const [st4getter, st4setter] = newSimpleStringState(53); // ! Now T is string



// Generic Interface
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

// RankItem is a generic Type - it can adapt to any type inferred type
/** This is a Generic Ranker Function */
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

/**This is a pokemon type doc string
 * @interface It's multi line 
 */
interface Pokemon {
  name: string;
  attack: string[];
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasor",
    attack: ["fire"],
    hp: 20,
  },
  {
    name: "Charmendaer",
    attack: ["fire"],
    hp: 5,
  },
];


const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
