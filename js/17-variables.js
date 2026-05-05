// 1
const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// 2
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(allScores)
console.log(bestScore)
console.log(worstScore)

// 3
// Функція getExtremeScores(scores) 
// приймає масив оцінок (чисел) у параметрі scores.
// вона повертала об'єкт із двома властивостями:
// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

// getExtremeScores([89, 64, 42, 17, 93, 51, 26]) //{ best: 93, worst: 17 }
// getExtremeScores([19, 7, 4, 17, 81, 24]) //{ best: 81, worst: 4 }ZZЯ

const scores = function (array) {
    let best = Math.max(...array)
    let worst = Math.min(...array)
    console.log(best)
    console.log(worst)
    return{
        best,
        worst
    }
}

const results = [10, 5, 8, 20, 3];
scores(results)
