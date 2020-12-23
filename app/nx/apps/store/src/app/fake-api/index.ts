const games = [
  {
    id: 'purrfection',
    name: 'Purrfection',
    image: '/assets/cat.png',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
  {
    id: 'purrfection',
    name: 'Purrfection',
    image: '/assets/cat.png',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
  {
    id: 'purrfection',
    name: 'Purrfection',
    image: '/assets/cat.png',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
];

export const getAllGames = () => games;
export const getGame = (id: string) => games.find((game) => game.id === id);
