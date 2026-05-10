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
    rotten_tomatoes: 90
  }
}
const {actors} = movie 
const {actors:[actor1, actor2]} = movie //варіант 1
console.log(actors)
console.log(actor1, actor2 )

const[actor3, actor4] = movie.actors
console.log(actor3, actor4)