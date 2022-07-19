const square = (x) => {
  return x * x;
};

console.log(square(2));

const rollDie = () => Math.floor(Math.random() * 6) + 1;

rollDie();

movies = [
  {
    title: "Alien",
    score: 90,
  },
  {
    title: "Parasite",
    score: 95,
  },
];

// movies.map((movie) => {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);
