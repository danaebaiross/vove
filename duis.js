const countHeroes = await repositoryHero.countOfHeroes();

if (countHeroes > 0) {
  console.log("There are heroes in the database.");
} else {
  console.log("There are no heroes in the database.");
}
