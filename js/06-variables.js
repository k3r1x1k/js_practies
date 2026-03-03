// Напиши скрипт який перевіряє можливість відкрити чат з користувачем. 
// Для цього користувач має бути:
// другом
// онлайн
// без режиму не турбувати
const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

if (canOpenChat === true) {
    // console.log("You can open chat")
}

// Напиши скрипт перевірки підписки користувача під час доступу до контенту. 
// Є три типи підпистки: free, pro та vip. Отримати доступ можуть тільки pro та vip.
// const sub = 'free';
const sub = 'vip';

const canAccessContent = sub === 'vip' || sub === 'pro';
console.log(canAccessContent);

if (canAccessContent) {
    console.log("You can get access to content"); 
} else{
    console.log("You can't get access to content");
}

// напиши скрипт входження числа у відрізок зазначений в х1 та х2.
// до х1
// після х1
// від х1 до х2
// до х1 або після х2
const x1 = 10;
const x2 = 30;
const number = 45;



// console.log("до х1",  number < x1);
// console.log("після х1", number > x1 );
// console.log("від х1 до х2", number > x1 && number < x2 );
// console.log("до х1 або після х2",  number < x1 || number > x2); 

