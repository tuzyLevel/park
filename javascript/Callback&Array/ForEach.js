const numbers = [];
for (let i = 0; i < 20; i++) {
  numbers.push(i);
}

// numbers.forEach((el) => {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });
movies = [
  {
    title: "parasite",
    score: 95,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} : ${movie.score}/100`);
// });

let timesNumbers = numbers.map(function (num) {
  return num * 2;
});

let titles = movies.map(function (movie) {
  return movie.title;
});

console.log(titles);
