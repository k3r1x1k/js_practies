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

// 1
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps] ;
 console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// 2
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores] ;
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores); 
// console.log( allScores);
// console.log(bestScore);
// console.log(worstScore);

// 3
// Функція getExtremeScores(scores) 
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().
const getExtremeScores = function (array) {
  let best = Math.min(...array);
  let worst = Math.max(...array)
//   console.log(best);
// console.log(worst);
return{
  best,
  worst,
}
}
getExtremeScores([89, 64, 42, 17, 93, 51, 26]) //{ best: 93, worst: 17 }
getExtremeScores([19, 7, 4, 17, 81, 24]) //{ best: 81, worst: 4 }





// Практика разом деструктуризувати
// Об’єкт car
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}

const { features: [features1, features2, features3]} = car 
// Варіант 1
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
    rotten_tomatoes: 90
  }
}


const {actors} = movie
const {actors: [actor1, actor2]} = movie //Варіант 1
console.log(actors)
console.log(actor1, actor2)
const[actor3, actor4] = movie.actors
console.log(actor3, actor4);

// const {title, director:{name:directorName, nationality:directorNationality}, actors,  release_year, ratings} = movie;
// console.log(title, directorName, directorNationality, actors, release_year, ratings);


// Об’єкт books
const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}


const {count, list} = books;
// console.log(count, list);


// 2
// Напишіть функцію, яка приймає об'єкт, що містить інформацію 
// про студента (ім'я, прізвище, оцінки за три предмети) та 
// використовує деструктуризацію для повернення середньої оцінки 
// студента.
const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3]
  };


const calculateAverageGrade = function (student){
let sum = 0;
const {grades} = student;
for (const grade of grades){
  sum = sum + grade;
console.log(sum);
}
return sum / grades.lengh;
}


calculateAverageGrade(student)


// Напишіть функцію, яка отримує об'єкт 
// з ім'ям, прізвищем та віком та використовує 
// деструктуризацію для повернення рядка, 
// що містить інформацію про цю людину в такому форматі:
//  "Мене звати Ім'я Прізвище і мені Вік років".


const personInfo = function (personObg){
const {name, lastName, age} = personObg;
return Мене звати ${name} ${lastName} і мені ${age} років
}
console.log(personInfo({name:"kiril", lastName:"Shostak", age:14}));

personInfo({name:"kiril", lastName:"Shostak", age:14});