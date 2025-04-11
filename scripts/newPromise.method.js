console.log('PROMISE МЕТОДЫ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->');

console.log('Шпаргалка:');
console.log('- new Promise: (executor) => Promise — создает новый промис');
console.log('- .then: (onFulfilled, onRejected) => Promise — обрабатывает успешное выполнение или ошибку');
console.log('- .catch: (onRejected) => Promise — обрабатывает ошибку');
console.log('- .finally: (onFinally) => Promise — выполняется всегда после завершения');
console.log('- Promise.resolve: (value) => Promise — возвращает выполненный промис');
console.log('- Promise.reject: (reason) => Promise — возвращает отклоненный промис');
console.log('- Promise.all: (iterable) => Promise — ожидает выполнения всех промисов');
console.log('- Promise.race: (iterable) => Promise — возвращает первый завершившийся промис');
console.log('- Promise.any: (iterable) => Promise — возвращает первый успешный промис');
console.log('- Promise.allSettled: (iterable) => Promise — ожидает завершения всех промисов с их статусами');
// new Promise-----------------------------------------------------------------------------------------------new Promise()
const promiseBasic = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 1000);
});
promiseBasic.then(result => console.log(result)); // "Success" через 1 сек
console.log('Метод new Promise: создает промис, результат через 1 сек: "Success"');
// Пример 1: Простая асинхронная задержка
const promiseDelay = new Promise((resolve) => setTimeout(() => resolve("Done"), 500));
// Пример 2: Сложный промис с вложенным таймаутом и замыканием
const promiseComplex = new Promise((resolve, reject) => {
  let count = 0;
  const increment = () => {
    count++;
    if (count < 3) {
      setTimeout(() => {
        console.log(`Попытка ${count}`);
        increment(); // Замыкание на count
      }, 1000);
    } else {
      resolve(`Завершено после ${count} попыток`);
    }
  };
  increment();
});
promiseComplex.then(res => console.log(res)); // "Завершено после 3 попыток"

// .then-------------------------------------------------------------------- .then()
const promiseForThen = new Promise((res) => res(42));
const thenResult = promiseForThen.then(num => num * 2);
// Promise { 84 }
console.log('Метод .then: удваивает значение, результат: ', thenResult);
// Пример 1: Простая цепочка обработки
const promiseChainSimple = new Promise((res) => res("Hello"));
promiseChainSimple
  .then(str => str + " World")
  .then(result => console.log(result)); // "Hello World"
// Пример 2: Сложная цепочка с вложенными промисами и таймаутами
const promiseChainComplex = new Promise((resolve) => {
  setTimeout(() => resolve(10), 1000);
}).then(value => {
  return new Promise((res) => {
    setTimeout(() => {
      const doubled = value * 2;
      res(doubled);
    }, 500);
  }).then(doubled => {
    return new Promise((res) => {
      setTimeout(() => res(doubled + 5), 300); // Замыкание на doubled
    });
  });
}).then(final => console.log(`Итог: ${final}`)); // "Итог: 25" через 1.8 сек

// .catch-------------------------------------------------------------------- .catch()
const promiseForCatch = new Promise((_, reject) => reject("Ошибка"));
promiseForCatch.catch(err => console.log(err)); // "Ошибка"
console.log('Метод .catch: обрабатывает ошибку');
// Пример 1: Простая обработка ошибки
const promiseErrorSimple = new Promise((_, rej) => rej("Нет данных"));
promiseErrorSimple.catch(err => console.log(`Поймано: ${err}`)); // "Поймано: Нет данных"
// Пример 2: Обработка ошибки в цепочке с восстановлением
const promiseErrorComplex = new Promise((_, rej) => {
  setTimeout(() => rej("Таймаут"), 1000);
}).then(() => "Успех") // Не выполнится
  .catch(err => {
    console.log(err); // "Таймаут"
    return new Promise((res) => setTimeout(() => res("Восстановлено"), 500));
  }).then(recovery => console.log(recovery)); // "Восстановлено"

// .finally-------------------------------------------------------------------- .finally()
const promiseForFinally = new Promise((res) => res("OK"));
promiseForFinally.finally(() => console.log("Завершено")); // "Завершено", затем "OK"
// Пример 1: Простая очистка
const promiseCleanup = new Promise((res) => setTimeout(() => res("Данные"), 1000));
promiseCleanup.finally(() => console.log("Очистка ресурсов"));
// Пример 2: Сложный finally с независимым таймаутом
const promiseFinallyComplex = new Promise((res, rej) => {
  setTimeout(() => res("Результат"), 1000);
}).then(res => res + " обработан")
  .finally(() => {
    return new Promise((res) => {
      setTimeout(() => {
        console.log("Логирование завершено");
        res(); // Не влияет на основную цепочку
      }, 200);
    });
  }).then(final => console.log(final)); // "Результат обработан"

// .Promise.resolve-------------------------------------------------------------------- Promise.resolve()
const resolveBasic = Promise.resolve("Готово");
resolveBasic.then(res => console.log(res)); // "Готово"
console.log('Метод Promise.resolve: возвращает выполненный промис');
// Пример 1: Быстрый успех
const resolveSimple = Promise.resolve(100);
resolveSimple.then(num => console.log(num * 2)); // 200
// Пример 2: Интеграция с цепочкой
const resolveComplex = Promise.resolve("Старт")
  .then(start => new Promise(res => setTimeout(() => res(start + " + шаг"), 1000)))
  .then(step => console.log(step)); // "Старт + шаг"

// .Promise.reject-------------------------------------------------------------------- Promise.reject()
const rejectBasic = Promise.reject("Не удалось");
rejectBasic.catch(err => console.log(err)); // "Не удалось"
console.log('Метод Promise.reject: возвращает отклоненный промис');
// Пример 1: Простая ошибка
const rejectSimple = Promise.reject("Доступ запрещен");
rejectSimple.catch(err => console.log(err)); // "Доступ запрещен"
// Пример 2: Ошибка с восстановлением
const rejectComplex = Promise.reject("Сбой")
  .catch(err => {
    console.log(err); // "Сбой"
    return new Promise((res) => setTimeout(() => res("Попробуем снова"), 500));
  }).then(recovery => console.log(recovery)); // "Попробуем снова"

// .Promise.all-------------------------------------------------------------------- Promise.all()
const allPromises = Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
]);
allPromises.then(results => console.log(results)); // [1, 2]
console.log('Метод Promise.all: ожидает все промисы');
// Пример 1: Простая загрузка данных
const allSimple = Promise.all([
  new Promise(res => setTimeout(() => res("A"), 100)),
  new Promise(res => setTimeout(() => res("B"), 200)),
]).then(data => console.log(data)); // ["A", "B"]
// Пример 2: Сложная загрузка с обработкой ошибок
const allComplex = Promise.all([
  new Promise(res => setTimeout(() => res("Файл 1"), 1000)),
  new Promise((res, rej) => setTimeout(() => rej("Ошибка файла 2"), 500)),
  new Promise(res => setTimeout(() => res("Файл 3"), 300)),
]).then(results => console.log(results))
  .catch(err => console.log(`Поймано: ${err}`)); // "Поймано: Ошибка файла 2"

// .Promise.race-------------------------------------------------------------------- Promise.race()
const racePromises = Promise.race([
  new Promise(res => setTimeout(() => res("Первый"), 100)),
  new Promise(res => setTimeout(() => res("Второй"), 200)),
]);
racePromises.then(winner => console.log(winner)); // "Первый"
console.log('Метод Promise.race: возвращает первый завершившийся промис');
// Пример 1: Таймаут или успех
const raceSimple = Promise.race([
  new Promise(res => setTimeout(() => res("Успех"), 300)),
  new Promise((_, rej) => setTimeout(() => rej("Таймаут"), 200)),
]).then(res => console.log(res)).catch(err => console.log(err)); // "Таймаут"
// Пример 2: Сложная гонка с вложенными промисами
const raceComplex = Promise.race([
  new Promise(res => {
    setTimeout(() => {
      res(new Promise(r => setTimeout(() => r("Внутренний успех"), 500)));
    }, 100);
  }),
  new Promise(res => setTimeout(() => res("Быстрый"), 200)),
]).then(result => console.log(result)); // "Быстрый"

// .Promise.any-------------------------------------------------------------------- Promise.any()
const anyPromises = Promise.any([
  Promise.reject("Ошибка 1"),
  Promise.resolve("Успех 2"),
]);
anyPromises.then(res => console.log(res)); // "Успех 2"
console.log('Метод Promise.any: возвращает первый успешный промис');
// Пример 1: Первый успешный ответ
const anySimple = Promise.any([
  new Promise((_, rej) => setTimeout(() => rej("Нет"), 100)),
  new Promise(res => setTimeout(() => res("Да"), 200)),
]).then(res => console.log(res)); // "Да"
// Пример 2: Попытка подключения к серверам
const anyComplex = Promise.any([
  new Promise((_, rej) => setTimeout(() => rej("Сервер 1 вниз"), 1000)),
  new Promise((_, rej) => setTimeout(() => rej("Сервер 2 вниз"), 500)),
  new Promise(res => setTimeout(() => res("Сервер 3 жив"), 300)),
]).then(res => console.log(res)); // "Сервер 3 жив"

// .Promise.allSettled-------------------------------------------------------------------- Promise.allSettled()
const settledPromises = Promise.allSettled([
  Promise.resolve("Успех"),
  Promise.reject("Ошибка"),
]);
settledPromises.then(results => console.log(results));
// [{ status: "fulfilled", value: "Успех" }, { status: "rejected", reason: "Ошибка" }]
console.log('Метод Promise.allSettled: возвращает статусы всех промисов');
// Пример 1: Простая проверка завершения
const settledSimple = Promise.allSettled([
  new Promise(res => setTimeout(() => res(1), 100)),
  new Promise((_, rej) => setTimeout(() => rej("Нет"), 200)),
]).then(res => console.log(res)); // [{fulfilled: 1}, {rejected: "Нет"}]
// Пример 2: Сложная обработка результатов загрузки
const settledComplex = Promise.allSettled([
  new Promise(res => setTimeout(() => res("Данные 1"), 1000)),
  new Promise((_, rej) => setTimeout(() => rej("Ошибка 2"), 500)),
  new Promise(res => {
    setTimeout(() => {
      res(new Promise(r => setTimeout(() => r("Данные 3"), 300)));
    }, 200);
  }),
]).then(results => {
  results.forEach((result, i) => {
    if (result.status === "fulfilled") console.log(`Успех ${i + 1}: ${result.value}`);
    else console.log(`Ошибка ${i + 1}: ${result.reason}`);
  });
});