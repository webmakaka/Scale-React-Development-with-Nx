const games = [
  {
    id: '1',
    name: 'Settlers in the Can',
    image: '/assets/beans.png',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
  {
    id: '2',
    name: 'Chess Pie',
    image: '/assets/chess.png',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
  {
    id: '3',
    name: 'Purrfection',
    image: '/assets/cat.png',
    description: 'A cat grooming contest goes horribly wrong.',
    price: 45,
    rating: Math.random(),
  },
];

export const getAllGames = () => games;
export const getGame = (id: string) => games.find((game) => game.id === id);
