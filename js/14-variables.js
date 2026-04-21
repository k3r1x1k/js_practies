const deliveryPizza = (pizzaName) => {
    return `Delivering ${pizzaName} pizza.`;
}


const makePizza = (pizzaName) => {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}


/* задачка

Доповни функцію makeMessage таким чином,щоб вона очікувала
 другим параметром (параметр callback) колбек-функцію і 
 повертала результат її виклику. 
 Функції deliverPizza або makePizza будуть передаватися 
 як колбек для makeMessage і очікувати аргументом 
 ім'я готової піци, що доставляється.*/
  
const makeMessage = function (pizzaName, callback) {
    
    const result = callback(pizzaName)
    return result
    console.log(callback);
}




console.log(makeMessage("Royal Grand", makePizza));
"Pizza Royal Grand is being prepared, please wait..."

console.log(makeMessage("Ultracheese", deliveryPizza));
"Delivering Ultracheese pizza."