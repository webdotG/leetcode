// Замыкание 1
//Write a function createHelloWorld. 
//It should return a new function that always returns "Hello World".

function HelloWorld () {
    return function (...args){
        return "Всегда возвращать hello world" 
    }
}
const func = HelloWorld()
console.log(func())

const HelloWorld2 = () => () => {return 'Всегда возвращать hello world'}
console.log(HelloWorld2()())

// Замыкание 2
//Given an integer n, return a counter function. 
//This counter function initially returns n and 
//then returns 1 more than the previous value every subsequent time it is called
//(n, n + 1, n + 2, etc).

const CreateCounter = function (n) {
    let current = n   
    return function() {
        const result = current
        current += 1
        return result
    }
}
const counter = CreateCounter(1)
console.log(counter())
console.log(counter())

const CreateCounter2 = (n) => () => n++
const counter2 = CreateCounter2(5)
console.log(counter2())
console.log(counter2())

//Write a function expect that helps developers test their code. 
//It should take in any value val and return an object with the following two functions.
//toBe(val) accepts another value and returns true if the two values === each other. 
//If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. 
// If they are equal, it should throw an error "Equal".

const expect = function (val) {
    return {
        toBe: function (val2){
            if(val === val2) {
                return true
            } else {
                return console.log('toBe Not Equal')
            }
        },
        notToBe: function(val2){
            if(val !== val2) {
                return true
            } else {
                return console.log('Equal')
            }
        }
    }}
const resultToBe = expect(10).toBe(10)
console.log('resultToBe ', resultToBe)
const resultToBe2 = expect(10).toBe(null)
console.log('resultToBe2 ', resultToBe2)

const expect2 = (val) => (
    {
        toBe: (val2) => val === val2 ? true : (() => {console.log('toBe Not Equal')})(),
        notToBe: (val2) => val!== val2 ? true : (() => {console.log('Equal')})()

    }
)
const resultToBe3 = expect2(20).toBe(20)
console.log('arrow resultToBe3 ', resultToBe3)
const resultToBe4 = expect2(20).notToBe(10)
console.log('arrow resultToBe4 ', resultToBe4)

//Write a function createCounter. 
//It should accept an initial integer init. 
//It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const createCounter3 = function (init) {
    let current = init
    return {
        increment: function () {
            current +=1
            return current
        },
        decrement: function() {
            current -=1
            return current
        },
        reset: function(){
            current = init
            return current
        }
    }
}
const result3 = createCounter3(0)
console.log('Counter result3 inc ', result3.increment())
console.log('Counter result3 dec ', result3.decrement())
console.log('Counter result3 res ', result3.reset())

var createCounter4 = function(init) {
    let count = init;
    return {
      increment: ()=> ++count  ,
      decrement:() => --count,
      reset:()=>count = init
    }  
};
const result4 = createCounter4(1)
console.log('Counter result4 inc ', result4.increment())
console.log('Counter result4 dec ', result4.decrement())
console.log('Counter result4 res ', result4.reset())


//Given an integer array arr and a mapping function fn, 
//return a new array with a transformation applied to each element.
//The returned array should be created such that returnedArray[i] = fn(arr[i], i).
//solve it without the built-in Array.map method.
arr = [1,2,3], 
fn = function plusI(n, i) 
{ return n + i; }
const map = function (arr, fn) {
    const returnedArray = []
    for(let i=0; i<arr.length; i++) {
        returnedArray.push(fn(arr[i], i))
    }
    return returnedArray
}
console.log('Map arr',map(arr, fn))

const map2 = function(arr, fn) {
    const returnedArray = []
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i);
    }
    return returnedArray;
};
console.log('Map2 arr', map2(arr, fn))

// Given an integer array arr and a filtering function fn, 
// return a filtered array filteredArr.
// The fn function takes one or two arguments:
//     arr[i] - number from the arr
//     i - index of arr[i]
// filteredArr should only contain the elements from the arr 
// for which the expression fn(arr[i], i) evaluates to a truthy value. 
// A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.
arr = [0,5,10,20,30,40], 
fn = function greaterThan10(n) { return n > 10; }

const filter = function (arr, fn)  {
    const filteredArr = []

    for(let i=0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
console.log('Filter n > 10  [0,5,10,20,30,40] ', filter(arr, fn))

// Given an integer array nums, a reducer function fn, and an initial value init, 
// return the final result obtained by executing the fn function on each element of the array,
// sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: 
// val = fn(init, nums[0]), 
// val = fn(val, nums[1]), 
// val = fn(val, nums[2]), 
// ... until every element in the array has been processed. 
// The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

const arr2 = [1,2,3,4]
const fn2 = function sum(accum, curr) { return accum / curr; }
const reduce = function (arr2, fn, init) {
    let accumulator = init;
    for (let i = 0; i < arr2.length; i++) {
        accumulator = fn(accumulator, arr2[i], i, arr);
    }
    return accumulator;
};
const res = reduce(arr2, (acc, curr) => acc + curr, 0);
console.log('Reduce acc + curr [1,2,3,4] ', res); 
 
const initialValue = {  
    totalCost: 0, 
    categoryStats: {}, 
    processedOrders: 0  
};
const orders = [
    { id: 6, category: "books", price: 25, discount: 0, active: false }
]
    const complexReducer = function (acc, order, index, array) {
    const discountedPrice = order.price * (1-order.discount / 100);  
    acc.totalCost += discountedPrice;  
    const category = order.category; 
    if (!acc.categoryStats[category]) {  
        acc.categoryStats[category] = { count: 0, total: 0 };  
    }  
    acc.categoryStats[category].count += 1;  
    acc.categoryStats[category].total += discountedPrice;  
    acc.processedOrders += 1; 
    return acc;};

    const compplexResult = reduce(orders, complexReducer, initialValue);
    console.log('Reduce complex : ', compplexResult);

// Given two promises promise1 and promise2, 
// return a new promise. promise1 and promise2 will both resolve with a number. 
// The returned promise should resolve with the sum of the two numbers.
// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

function addTwoPromisesChain(promise1, promise2) {
    let num1;
    return promise1
        .then(value => {
            num1 = value;
            return promise2;
        })
        .then(num2 => num1 + num2)
        .catch(error => {
            console.error('Один из promises rejected:', error);
            // throw error;
        });
}
addTwoPromisesChain(promise1, promise2)
    .then(result => console.log('Результат Chain .then:', result));
 
async function addTwoPromisesAsync(promise1, promise2) {
    const num1 = await promise1;
    const num2 = await promise2;
    return num1 + num2;
}
addTwoPromisesAsync(promise1, promise2)
    .then(result => console.log('Результат async/await:', result));

function addTwoPromisesAll(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([num1, num2]) => num1 + num2)
        .catch(error => {
            console.error('Один из promises rejected:', error);
            // throw error; 
        });
}
addTwoPromisesAll(promise1, promise2)
    .then(result => console.log('Результат Promise.all:', result));

// Given a positive integer millis, 
// write an asynchronous function that sleeps 
// for millis milliseconds. 
// It can resolve any value.    
// async function sleep(millis) {
//     return new Promise((resolve) => {
//         return setTimeout(resolve, millis)
//     })
// }
async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
    return millis; 
}
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); 

const sleep2 = function (millis) {
    if(typeof millis !== "number" || millis < 1 || millis >100) {
        return Promise.reject(console.log('millis mus be number more 1 '))
    }
    return new Promise((resolve) => setTimeout(() => resolve({status:'done'}), millis))
}
let t2 = Date.now();
sleep2(50).then(result => console.log(result, 'задержка 50 : ', Date.now(), Date.now() - t2));





console.log('LEET CODE ================================================================================================================================================================================================>')
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    // if (typeof fn !== 'function') throw new Error('fn must be a function');
    // if (!Array.isArray(args)) throw new Error('args must be an array');
    // if (typeof t !== 'number' || t < 0) throw new Error('t must be a non-negative number');
    
    const timeoutId = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timeoutId);
};
var cancellable = function(fn, args, t,cancelTimeMs) {
    let timeOut=setTimeout(()=>{
         fn(...args)
    },t)
    function cancelFn(){
      clearTimeout(timeOut);
    }
    if (cancelTimeMs < t) {
       setTimeout(cancelFn, cancelTimeMs);
     }
   
    return cancelFn
   };

//    Пример: Уведомление о новом сообщении в 

// Сценарий:

// Пользователь получил новое сообщение в чате . Система планирует показать уведомление через 3 секунды (вдруг пользователь уже в чате и увидит сообщение сам). Но если пользователь сразу открывает чат, уведомление отменяется.
// Код:
// javascript
// var cancellable = function(fn, args, t) {
//     const timeoutId = setTimeout(() => fn(...args), t);
//     return () => clearTimeout(timeoutId);
// };

// // Функция отправки уведомления (с промисом)
// const sendNotification = (userId, message) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log(`Уведомление для ${userId}: "${message}"`);
//             resolve({ status: 'sent', userId });
//         }, 1000); // Имитация задержки отправки
//     });
// };

// // Использование в 
// const notifyUser = (userId, message) => {
//     const delay = 3000; // 3 секунды до уведомления
//     const cancelFn = cancellable(sendNotification, [userId, message], delay);

//     // Пользователь открыл чат через 2 секунды — отменяем
//     setTimeout(cancelFn, 2000);
// };

// // Тест
// console.log(`Старт в ${Date.now()}`);
// notifyUser("user123", "Новое сообщение от коллеги");

// // Тест без отмены
// setTimeout(() => {
//     console.log('--- Тест без отмены ---');
//     cancellable(sendNotification, ["user456", "Привет от HR"], 3000);
// }, 4000);
// Вывод в консоли:
// text
// Старт в 1712847500000
// --- Тест без отмены ---
// Уведомление для user456: "Привет от HR"  // Через ~7000 мс (4000 + 3000)

var cancellable = function(fn, args, t) {
    if (typeof fn !== 'function') throw new Error('fn must be a function');
    if (!Array.isArray(args)) throw new Error('args must be an array');
    if (typeof t !== 'number' || t < 30 || t > 100) throw new Error('t must be a number between 30 and 100');
    
    fn(...args);
    const intervalId = setInterval(() => fn(...args), t);
    return () => clearInterval(intervalId);
};
// Обновление количества уведомлений
// Вы разрабатываете функцию в которая каждые 50 мс обновляет счётчик 
// непрочитанных уведомлений в реальном времени (например, в верхнем меню). 
// Это делается через вызов API
// но если пользователь переходит в раздел уведомлений
// обновление должно остановиться, чтобы не тратить ресурсы.
var cancellable2 = function(fn, args, t) {
    if (typeof fn !== 'function') throw new Error('fn must be a function');
    if (!Array.isArray(args)) throw new Error('args must be an array');
    if (typeof t !== 'number' || t < 30 || t > 100) throw new Error('t must be a number between 30 and 100');
    
    fn(...args); // Первый вызов сразу
    const intervalId = setInterval(() => fn(...args), t);
    return () => clearInterval(intervalId);
};
// Функция проверки уведомлений (имитация API-запроса)
const fetchNotifications = (userId) => {
    // Имитация получения данных (случайное число уведомлений)
    const unreadCount = Math.floor(Math.random() * 10);
    console.log(`Обновление для ${userId}: ${unreadCount} непрочитанных уведомлений`);
    return unreadCount;
};
// Использование в 
function startNotificationUpdates(userId) {
    const interval = 50; // Обновление каждые 50 мс
    const cancelFn = cancellable2(fetchNotifications, [userId], interval);

    // Пользователь открыл уведомления через 200 мс — останавливаем
    setTimeout(() => {
        cancelFn();
        console.log(`Обновления для ${userId} остановлены`);
    }, 200);

    return cancelFn;
}
// Тест
console.log(`Старт в ${Date.now()}`);
startNotificationUpdates("user123");


var timeLimit = function(fn, t) {  

    return async function(...args) {
    
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });

    return Promise.race([fn(...args), timeoutPromise]);
    };
};
// Проверка статуса пользователя в LinkedIn
// функцию  которая проверяет, онлайн ли пользователь, 
// чтобы показать его статус в чате (зелёный кружок "в сети").
var timeLimit2 = function(fn, t) {
    return async function(...args) {
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        return Promise.race([fn(...args), timeoutPromise]);
    };
};
// Асинхронная функция проверки статуса (имитация запроса к серверу LinkedIn)
const checkUserStatus = async (userId) => {
    console.log(`Проверяем статус пользователя ${userId}...`);
    // Имитация задержки ответа сервера (например, 200 мс)
    await new Promise(resolve => setTimeout(resolve, 200));
    return { userId, status: "online" };
};
// Ограниченная по времени версия функции
const limitedCheckStatus = timeLimit2(checkUserStatus, 150);
// Использование 
function updateUserStatus(userId) {
    limitedCheckStatus(userId)
        .then(result => {
            console.log(`Статус ${userId}: ${result.status}`);
        })
        .catch(err => {
            console.log(`Не удалось проверить статус ${userId}: ${err}. Показываем 'неизвестно'`);
        });
}
// Тесты
console.log(`Старт в ${Date.now()}`);
updateUserStatus("user123"); // Сервер не успевает
setTimeout(() => {
    const fastCheck = timeLimit(checkUserStatus, 300); // Увеличим лимит
    fastCheck("user456").then(
        res => console.log(`Статус ${res.userId}: ${res.status}`),
        err => console.log(`Ошибка: ${err}`)
    );
}, 1000);

// class TimeLimitedCache2 {
//     constructor() {
//       this.cache = {};
//     }
  
//     set(key, value, duration) {
//       const time = Date.now() + duration;
//       if (this.cache[key]) {
//         this.cache[key] = { value, time };
//         return true;
//       }
//       this.cache[key] = { value, time };
//       return false;
//     }
//     get(key) {
//       const data = this.cache[key];
//       if (!data) return -1;
  
//       if (data.time < Date.now()) {
//         delete this.cache[key];
//         return -1;
//       }
  
//       return data.value;
//     }
//     count() {
//       let count = 0;
  
//       const keys = Object.keys(this.cache);
//       for (let i = 0; i < keys.length; i++) {
//         if (this.cache[keys[i]].time >= Date.now()) {
//           count++;
//         } else {
//           delete this.cache[keys[i]];
//         }
//       }
//       return count;
//     }
//   }
// const timeLimitedCache2 = new TimeLimitedCache2();
// console.log(timeLimitedCache.set(1, 42, 1000));
// console.log(timeLimitedCache.get(1)); 
// console.log(timeLimitedCache.count());

// class TimeLimitedCache {
//     constructor() {
//         this.cache = new Map(); 
//     }

//     set(key, value, duration) {
//         this.cache.set(key, { value, expiry: Date.now() + duration });
//     }

//     get(key) {
//         const entry = this.cache.get(key);
//         return entry && entry.expiry > Date.now() ? entry.value : -1;
//     }
// }
// var TimeLimitedCache = function() {
//     this.cache = new Map();
// };
 

var TimeLimitedCache = function() {
    this.cache = new Map(); // Инициализируем Map для хранения ключей и данных
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    const existing = this.cache.get(key);
    const keyExists = !!(existing && existing.expiry > now); // Явно преобразуем в boolean

    // Очищаем старый таймер, если ключ был
    if (existing) {
        clearTimeout(existing.timeoutId);
    }

    // Устанавливаем новые данные и таймер
    const expiry = now + duration;
    const timeoutId = setTimeout(() => this.cache.delete(key), duration);
    this.cache.set(key, { value, expiry, timeoutId });

    return keyExists; // Синхронно возвращаем true или false
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const now = Date.now();
    const entry = this.cache.get(key);
    return entry && entry.expiry > now ? entry.value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;
    for (const [key, entry] of this.cache) {
        if (entry.expiry <= now) {
            this.cache.delete(key);
        } else {
            count++;
        }
    }
    return count;
};

// Тестовая функция для проверки
function runTest(actions, values, timeDelays) {
    const results = [];
    const cache = new TimeLimitedCache();

    actions.forEach((action, i) => {
        const delay = timeDelays[i];
        
        // Используем setTimeout для эмуляции временных задержек
        setTimeout(() => {
            if (action === "TimeLimitedCache") {
                results.push(null);
            } else if (action === "set") {
                const [key, value, duration] = values[i];
                const result = cache.set(key, value, duration);
                results.push(result); // Сразу записываем результат
            } else if (action === "get") {
                const [key] = values[i];
                results.push(cache.get(key));
            } else if (action === "count") {
                results.push(cache.count());
            }

            // Выводим результат после последнего действия
            if (i === actions.length - 1) {
                console.log(results);
            }
        }, delay);
    });
}

// Тест 1
runTest(
    ["TimeLimitedCache", "set", "get", "count", "get"],
    [[], [1, 42, 100], [1], [], [1]],
    [0, 0, 50, 50, 150]
); // Ожидаем: [null, false, 42, 1, -1]

// Тест 2
runTest(
    ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"],
    [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []],
    [0, 0, 40, 50, 120, 200, 250]
); // Ожидаем: [null, false, true, 50, 50, -1, 0]



var debounce = function(fn, t) {
    let id = null
    return function(...args) {
        clearTimeout(id)
        id = setTimeout(() => fn(...args), t)
    }
};

// Функция имитации API-запроса для поиска
function searchLink(query) {
    console.log(`Отправка запроса к API Link: "${query}"`);
    // Например: fetch(`https://api.link.com/search?q=${query}`)
    return `Результаты для "${query}"`; // Имитация ответа
}
// Дебаунсим функцию поиска с задержкой 300 мс
const debouncedSearch = debounce(searchLink, 300);


// Когда пользователь открывает страницу профиля 
// нужно одновременно загрузить несколько типов данных:
//     Основная информация (имя, фото, должность).
//     Список постов.
//     История опыта работы.
//     Уведомления.
var promiseAll = async function(functions) {
    return new Promise((res,rej)=>{
      let resolvedPromises = [] , completed = 0;
      const len = functions.length
       for(let i = 0; i < len; i++){
           functions[i]()
          .then((val)=>{
             resolvedPromises[i] = val
             completed++
             if(completed === len) res(resolvedPromises)
          })
          .catch(err => rej(err))
       }
    })
 }

// Проверка, есть ли данные в ответе API  
// results: []  или {}, 
// чтобы показать "Нет результатов" или обработать данные.
 var isEmpty = function(obj) {
    return Object.keys(obj).length == 0
};

// Разбиение списка постов на группы для постраничного отображения
// Нужно разбить массив на подмассивы длиной size
// цикл с шагом size и slice для создания подмассивов
var chunk = function(arr, size) {
    if (arr.length === 0 || size <= 0) return [];
    
    const result = []; 
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size)); 
    }  
    return result;
};

// Добавить метод last() ко всем массивам через Array.prototype.
// Возвращает последний элемент массива.
// Если массив пустой, возвращает -1.
Array.prototype.last = function() {
    return  this.length > 0 ? this[this.length - 1] : -1;
};


// задача на группировку элементов массива 
// с использованием функции обратного вызова    
// Группировка постов по дате (fn = post => post.date) для отображения в хронологическом порядке.
// Группировка уведомлений по типу (fn = notification => notification.type).
Array.prototype.groupBy = function(fn) {
    let data = {};

    for (let i = 0; i < this.length; i++) {
        let value = this[i];
        let key = fn(value);
        
        if (key in data) {
            data[key].push(value);
        } else {
            data[key] = [value];
        }
    }
    return data;
};

// Нужно отсортировать массив по значениям, которые возвращает fn.
// Сортировка контактов по количеству общих связей 
// (fn = contact => contact.mutualConnections).
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};

// Аналог SQL JOIN с приоритетом одного источника.
// Слияние списка контактов из локальной базы и API.
// Объединение данных о пользователе из разных источников
//  (основной профиль из arr1, обновления из arr2).
// Нужно объединить два массива по id
// сливая объекты и сортируя результат.
var join = function (arr1, arr2) {
    const result = {}

    arr1.forEach((item) => result[item.id] = item)

    arr2.forEach((item) => {
        if (result[item.id]) {
            Object.keys(item).forEach((key) => {
                result[item.id][key] = item[key]
            })
        } else {
            result[item.id] = item
        }
    })

    return Object.values(result)
}

// Преобразование сложных структур в плоские для анализа или UI
// Уплощение списка вложенных комментариев для отображения в плоском виде 
// (n=1 — только первый уровень ответов).
// Обработка данных из API с разной степенью вложенности.
// Вернуть уплощённый массив,
//  где подмассивы распаковываются, если их текущая глубина меньше n.
var flat = function(arr, n) {
    // глубина уплощения 0
    if (n == 0) {
        return arr;
    }

    // для хранения уплощённых элементов
    const res = [];

    // рекурсивная функция для уплощения массива
    function flatten(arr, depth) {
      
        for (const ele of arr) {
            // Если элемент — массив и текущая глубина меньше заданной
            if (Array.isArray(ele) && depth < n) {
                // Рекурсивно уплощаем вложенный массив, увеличивая глубину
                flatten(ele, depth + 1);
            } else {
                // Если элемент не массив или глубина достигнута
                res.push(ele);
            }
        }
        // 
        return res;
    }
    return flatten(arr, 0);
};


// Очистка данных API от "мусорных" значений (null, 0) перед отображением.
// Упрощение структуры данных для аналитики (удаление пустых полей).
// задача на рекурсивную очистку объекта или массива от falsy-значений
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    let result;
    if(Array.isArray(obj)){
        result=[];
        for(let i=0; i<obj.length;i++){
            if(typeof obj[i]!=='object' && obj[i]){
                result.push(obj[i])
            }else if(typeof obj[i]==='object' && obj[i]){
                result.push(compactObject(obj[i]));
            }
        }
    }
    else if(typeof obj==='object'){
        result={};
        for(let key in obj){
            if(typeof obj[key]!=='object' && obj[key] ){
                result[key]= obj[key];
            }else if(typeof obj[key]==='object' && obj[key]){
                result[key]=compactObject(obj[key]);
            }
        }
    }
    return result
};


// Подписка на обновления профиля (новые посты, уведомления).
// Обработка кликов в UI с динамическими слушателями.
//это класс для управления событиями, 
//похожий на механизмы в Node.js или DOM.
// Управление асинхронными действиями (загрузка данных, реакции).
class EventEmitter {

    constructor() {
        this.listeners = new Map();
    }
    
    /**
     * Подписка на событие
     * @param {string} eventName - Название события
     * @param {Function} callback - Оригинальная функция обратного вызова
     * @return {Object} - Объект с методом unsubscribe для отписки
     */
    subscribe(eventName, callback) {
        // Проверяем, существует ли событие в Map
        if (!this.listeners.has(eventName)) {
            // Если события нет, создаём новый пустой массив подписчиков
            this.listeners.set(eventName, []);
        }
        // Получаем массив подписчиков для данного события
        const listeners = this.listeners.get(eventName);
        
        // Создаём обёртку для callback, чтобы сохранить контекст и передать аргументы
        const fn = (...args) => {
            return callback.apply(callback, args);
        };
        // Добавляем обёртку в массив подписчиков
        listeners.push(fn);
        
        // Возвращаем объект с методом unsubscribe
        return {
            unsubscribe: () => {
                // Находим позицию обёртки в массиве подписчиков
                let position = listeners.indexOf(fn);
                // Если обёртка найдена (позиция >= 0)
                if (position >= 0) {
                    // Удаляем обёртку из массива
                    listeners.splice(position, 1);
                }
                // Возвращаем undefined (по умолчанию, ничего не указываем)
            }
        };
    }
    
    /**
     * Вызов события
     * @param {string} eventName - Название события
     * @param {Array} args - Аргументы для передачи в подписчики (по умолчанию пустой массив)
     * @return {Array} - Массив результатов вызовов подписчиков
     */
    emit(eventName, args = []) {
        // Получаем массив подписчиков для события, если он существует
        const listeners = this.listeners.get(eventName);
        // Если подписчиков нет или событие не зарегистрировано, возвращаем пустой массив
        if (!listeners) {
            return [];
        }
        // Вызываем каждый подписчик с аргументами и собираем результаты в массив
        return listeners.map(fn => fn(...args));
    }
}
// Тесты для проверки
const emitter = new EventEmitter();
console.log(emitter.emit("firstEvent")); // []
const sub1 = emitter.subscribe("firstEvent", () => 5);
const sub2 = emitter.subscribe("firstEvent", () => 6);
console.log(emitter.emit("firstEvent")); // [5, 6]
sub1.unsubscribe();
console.log(emitter.emit("firstEvent")); // [6]


// Обёртка для массива данных 
// (например, лайков или просмотров) с удобным суммированием.
// Создаю класс, который оборачивает массив
// valueOf переопределяет поведение +, возвращая сумму элементов
// toString форматирует массив в строку с запятыми и скобками
// Оба метода используют this.nums для доступа к массиву
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    /**
     * @return {number}
     */
    valueOf() {
        // Return the sum of all the elements in the array
        return this.nums.reduce((acc, curr) => acc + curr, 0);
    }
    /**
     * @return {string}
     */
    toString() {
        // Return the string representation of the array
        return `[${this.nums.join(',')}]`;
    }
}

// Цепочка операций для подсчёта статистики 
// например, лайков, просмотров, комментариев.
// Метод chaining часто используется в библиотеках ( jQuery).
// создание класса с поддержкой цепочки вызовов (method chaining)
// Каждый метод (кроме getResult) возвращает this для цепочки.
class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}