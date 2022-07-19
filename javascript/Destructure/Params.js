// function fullName(user){
//     return `${user.firstName} ${user.lastName}`;
// }

function fullName(user) {
  const { firstName, lastName = "asdfasdf" } = user;
  return `${firstName} ${lastName}`;
}

movies = [
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Darkknight",
    score: 100,
  },
  {
    title: "Alien",
    score: 75,
  },
  {
    title: "Tad Ratho",
    score: 85,
  },
];

console.log(movies.filter(({ score }) => score >= 90));

movies.map((movie) => {
  return `${movie.title} is reated`;
});
