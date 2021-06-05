const houses = [
  {
    name: "Atreides",
    planets: "Calladam",
  },
  {
    name: "Corrino",
    planets: ["Kaitan", "Salusa Secundus"],
  },
  {
    name: "Jarlommem",
    planets: ["Geidin Primen", "Arrakis"],
  },
];

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithId {
  id: number;
  name: string;
  planets: string | string[];
}


