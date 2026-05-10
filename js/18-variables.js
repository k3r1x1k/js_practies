// Практика разом деструктуризувати
// Об’єкт car
// const {make, model: carmodel, year, features = [], safety: {airbags, antilock_brakes, stability_control}} = car
// console.log(make, carmodel, year, features, airbags, antilock_brakes, stability_control);

// Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
   
  }
}

// const{ title, director, name, nationality, actors, release_year, ratings, imdbrotten_tomatoes}