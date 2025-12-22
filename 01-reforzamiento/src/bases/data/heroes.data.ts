// Interfaces 
interface Hero {
    id: number;
    name: string;
    owner: Owner;
}

//tipos
type Owner1 = 'DC' | 'Marvel'

// enumeraciones
enum Owner {
    DC,
    Marvel,
}

const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: Owner.DC, 
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: Owner.DC, 
  },
  {
    id: 3,
    name: 'Superman',
    owner: Owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: Owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: Owner.Marvel,
  },
];

