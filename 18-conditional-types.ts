// TODO: I DONT GET IT 

import fetch from "node-fetch";
const url = "";

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResults<T> = T extends undefined
  ? Promise<PokemonResults[]>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  cb?: T
): FetchPokemonResults<T> {
  if (cb) {
    fetch(url)
      .then((resp) => resp.json())
      .then(cb);
    return undefined as FetchPokemonResults<T>;
  } else {
    return fetch(url).then((resp) => resp.json()) as FetchPokemonResults<T>;
  }
}

fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
  data.results.forEach((pokemon) => console.log(pokemon.name));
});

(async function () {
  const data = <PokemonResults>(
    await fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10")
  );
  data.results.forEach((pokemon) => console.log(pokemon.name));
})();
