console.log('SET МЕТОДЫ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>');
console.log('Шпаргалка:');
console.log('- new Set: ([iterable]) => Set — создает новый Set');
console.log('- .add: (value) => Set — добавляет значение в Set');
console.log('- .has: (value) => bool — проверяет, есть ли значение');
console.log('- .delete: (value) => bool — удаляет значение');
console.log('- .clear: () => void — очищает Set');
console.log('- .size: () => num — возвращает количество элементов');
console.log('- .values: () => Iterator — возвращает итератор значений');
console.log('- .entries: () => Iterator — возвращает итератор пар [значение, значение]');
console.log('- .forEach: (callback) => void — выполняет функцию для каждого значения');

// new Set-------------------------------------------------------------------- new Set()
const setBasic = new Set();
setBasic.add(1);
setBasic.add(2);
// Set { 1, 2 }
console.log('Метод new Set: создает новый Set, результат: ', setBasic);
// Пример 1: Создание Set из массива с удалением дубликатов
const setFromArray = new Set([1, 2, 2, 3, 3]); // Set { 1, 2, 3 }
// Пример 2: Инициализация с уникальными строками
const setStrings = new Set(["apple", "banana", "apple"]); // Set { "apple", "banana" }

// .add-------------------------------------------------------------------- .add()
const setForAdd = new Set();
setForAdd.add("item1");
setForAdd.add("item2");
setForAdd.add("item1"); // Дубликат не добавится
// Set { "item1", "item2" }
console.log('Метод .add: добавляет значение в Set, результат: ', setForAdd);
// Пример 1: Добавление уникальных ID
const setIds = new Set();
setIds.add(101);
setIds.add(102);
setIds.add(101); // Set { 101, 102 }
// Пример 2: Сбор уникальных тегов
const setTags = new Set();
setTags.add("js");
setTags.add("web");
setTags.add("js"); // Set { "js", "web" }

// .has-------------------------------------------------------------------- .has()
const setForHas = new Set([10, 20, 30]);
const hasResult = setForHas.has(20);
// true
console.log('Метод .has: проверяет наличие значения 20, результат: ', hasResult);
// Пример 1: Проверка существования элемента
const setItems = new Set(["book", "pen"]);
const hasPen = setItems.has("pen"); // true
// Пример 2: Валидация доступа
const setPermissions = new Set(["read", "write"]);
const canWrite = setPermissions.has("write"); // true

// .delete-------------------------------------------------------------------- .delete()
const setForDelete = new Set([1, 2, 3]);
const deleteResult = setForDelete.delete(2);
// true, Set { 1, 3 }
console.log('Метод .delete: удаляет значение 2, результат: ', deleteResult, ', Set: ', setForDelete);
// Пример 1: Удаление устаревшего значения
const setCache = new Set(["data1", "data2"]);
setCache.delete("data1"); // Set { "data2" }
// Пример 2: Удаление пользователя из списка
const setUsers = new Set(["user1", "user2"]);
setUsers.delete("user1"); // Set { "user2" }

// .clear-------------------------------------------------------------------- .clear()
const setForClear = new Set([100, 200]);
setForClear.clear();
// Set {}
console.log('Метод .clear: очищает Set, результат: ', setForClear);
// Пример 1: Сброс временных данных
const setTemp = new Set(["temp1", "temp2"]);
setTemp.clear(); // Set {}
// Пример 2: Очистка списка активных сессий
const setSessions = new Set([123, 456]);
setSessions.clear(); // Set {}

// .size-------------------------------------------------------------------- .size()
const setForSize = new Set(["a", "b", "c"]);
const sizeResult = setForSize.size;
// 3
console.log('Метод .size: возвращает количество элементов, результат: ', sizeResult);
// Пример 1: Проверка количества уникальных элементов
const setUnique = new Set([1, 1, 2, 3]);
const uniqueCount = setUnique.size; // 3
// Пример 2: Ограничение количества записей
const setLimit = new Set(["x", "y"]);
const isFull = setLimit.size >= 3; // false

// .values-------------------------------------------------------------------- .values()
const setForValues = new Set([1, 2, 3]);
const valuesIter = setForValues.values();
// Iterator [1, 2, 3]
console.log('Метод .values: возвращает итератор значений, результат: ', [...valuesIter]);
// Пример 1: Преобразование Set в массив
const setToArray = new Set(["red", "blue"]);
const colorsArray = [...setToArray.values()]; // ["red", "blue"]
// Пример 2: Подсчет суммы значений
const setNumbers = new Set([10, 20, 30]);
const sumValues = [...setNumbers.values()].reduce((acc, val) => acc + val, 0); // 60

// .entries-------------------------------------------------------------------- .entries()
const setForEntries = new Set(["x", "y"]);
const entriesIter = setForEntries.entries();
// Iterator [["x", "x"], ["y", "y"]]
console.log('Метод .entries: возвращает итератор пар [значение, значение], результат: ', [...entriesIter]);
// Пример 1: Преобразование Set в объект (с дублированием ключей)
const setToObj = new Set(["a", "b"]);
const objFromSet = Object.fromEntries(setToObj.entries()); // { a: "a", b: "b" }
// Пример 2: Логирование пар
const setLogEntries = new Set([1, 2]);
const entriesArray = [...setLogEntries.entries()]; // [[1, 1], [2, 2]]

// .forEach-------------------------------------------------------------------- .forEach()
const setForEach = new Set([5, 10, 15]);
setForEach.forEach(value => console.log(`Value: ${value}`));
// "Value: 5", "Value: 10", "Value: 15"
console.log('Метод .forEach: выполняет функцию для каждого значения');
// Пример 1: Удвоение значений с созданием нового Set
const setDouble = new Set([1, 2, 3]);
const doubledSet = new Set();
setDouble.forEach(val => doubledSet.add(val * 2)); // Set { 2, 4, 6 }
// Пример 2: Фильтрация и логирование четных чисел
const setFilter = new Set([1, 2, 3, 4]);
setFilter.forEach(val => val % 2 === 0 && console.log(`Even: ${val}`)); // "Even: 2", "Even: 4"