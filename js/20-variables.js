// 1 Зроби новий масив планет у аперкейс
const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((item) => {
    console.log(item.toUpperCase())
    return item.toUpperCase()
});
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// 2 Збережи у змінній planetsLengths масив, 
// що буде складатися з довжин назв кожної планети 
const planetsLengths = planets.map((item) => {
return item.length
});

console.log(planetsLengths);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];



// Використовуючи 👆 масив об’єктів виконай наступні завдання:
//map()
// Отримати масив імен всіх гравців
const playersNames = planets.map((item) => {
return item.name
});
console.log(playersNames);
// Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const updatedPlayers = players.map((item) => {
  return {
    ...item,
    points: Math.round(item.points * 1.1),
  }
})
console.log(updatedPlayers);
// Збільшити кількість годин гравця по id. Переписати на тернарник
const updatedPlayers2 = players.map((item) => {
  if (item.id === 'player-3') {
    return {
      ...item,
      timePlayed: item.timePlayed + 100,
    }
  }
  return item
})
console.log(updatedPlayers2);
//filter()
// Отримати масив всіх гравців онлайн
const onlinePlayers = players.filter((item) => {
  return item.online
})
console.log(onlinePlayers);
// Отримати масив всіх гравців офлайн
const offlinePlayers = players.filter((item) => {
  return item.online === false
})
.map((item) => {
  return item.name
})
console.log(offlinePlayers);
// Отримати масив всіх хардкорних гравців з часом більше 250
const hardcorePlayers = players.filter((item) => {
  return item.timePlayed > 250
})
console.log(hardcorePlayers);
//Find()
// Знайти гравця по id
const timePlayedById = function(id) {
  const playerById = players.find(item => {
    return id === item.id
  })
  return playerById
}

console.log(timePlayedById('player-2'));
// Знайти гравця по імені
const playerByName = players.find((item) => {
  return item.name === 'Poly'
})
console.log(playerByName);
//every()
// Перевірити чи всі гравці мають час більше 200
// Перевірити чи всі гравці онлайн
// some()
// перевірити чи є хоча б один гравецт не онлайн