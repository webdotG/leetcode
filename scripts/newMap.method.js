console.log('MAP МЕТОДЫ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>');

console.log('Шпаргалка:');
console.log('- new Map: () => Map — создает новый Map');
console.log('- .set: (key, value) => Map — добавляет или обновляет пару ключ-значение');
console.log('- .get: (key) => value — возвращает значение по ключу');
console.log('- .has: (key) => bool — проверяет, есть ли ключ');
console.log('- .delete: (key) => bool — удаляет пару по ключу');
console.log('- .clear: () => void — очищает Map');
console.log('- .size: () => num — возвращает количество пар');
console.log('- .keys: () => Iterator — возвращает итератор ключей');
console.log('- .values: () => Iterator — возвращает итератор значений');
console.log('- .entries: () => Iterator — возвращает итератор пар [ключ, значение]');
console.log('- .forEach: (callback) => void — выполняет функцию для каждой пары');

// new Map-------------------------------------------------------------------- new Map()
const mapBasic = new Map();
mapBasic.set("name", "John");
mapBasic.set("age", 30);
// Map { "name" => "John", "age" => 30 }
console.log('Метод new Map: создает новый Map, результат: ', mapBasic);
// Пример 1: Хранение настроек с разными типами ключей
const mapSettings = new Map();
mapSettings.set("theme", "dark");
mapSettings.set(1, "priority");
// Пример 2: Инициализация с массивом пар
const mapFromArray = new Map([["x", 10], ["y", 20]]); // Map { "x" => 10, "y" => 20 }

// .set-------------------------------------------------------------------- .set()
const mapForSet = new Map();
mapForSet.set("key1", "value1");
mapForSet.set("key2", "value2");
// Map { "key1" => "value1", "key2" => "value2" }
console.log('Метод .set: добавляет пару ключ-значение, результат: ', mapForSet);
// Пример 1: Обновление значения по существующему ключу
const mapUser = new Map();
mapUser.set("id", 1);
mapUser.set("id", 2); // Обновляет "id" на 2
// Пример 2: Использование объекта как ключа
const keyObj = {};
const mapWithObjKey = new Map();
mapWithObjKey.set(keyObj, "unique"); // Map { {} => "unique" }

// .get-------------------------------------------------------------------- .get()
const mapForGet = new Map([["name", "Alice"], ["role", "dev"]]);
const getResult = mapForGet.get("name");
// "Alice"
console.log('Метод .get: возвращает значение по ключу "name", результат: ', getResult);
// Пример 1: Получение данных пользователя
const userMap = new Map([["email", "user@example.com"]]);
const userEmail = userMap.get("email"); // "user@example.com"
// Пример 2: Проверка значения по объекту-ключа
const objKey = {};
const mapObjGet = new Map([[objKey, "data"]]);
const objValue = mapObjGet.get(objKey); // "data"

// .has-------------------------------------------------------------------- .has()
const mapForHas = new Map([["id", 123], ["status", "active"]]);
const hasResult = mapForHas.has("id");
// true
console.log('Метод .has: проверяет наличие ключа "id", результат: ', hasResult);
// Пример 1: Проверка существования ключа перед использованием
const mapCheck = new Map([["token", "xyz"]]);
const hasToken = mapCheck.has("token"); // true
// Пример 2: Валидация обязательных полей
const mapFields = new Map([["name", "Bob"]]);
const hasAge = mapFields.has("age"); // false

// .delete-------------------------------------------------------------------- .delete()
const mapForDelete = new Map([["a", 1], ["b", 2]]);
const deleteResult = mapForDelete.delete("a");
// true, Map { "b" => 2 }
console.log('Метод .delete: удаляет пару по ключу "a", результат: ', deleteResult, ', Map: ', mapForDelete);
// Пример 1: Удаление временных данных
const mapTemp = new Map([["temp", "data"], ["perm", "keep"]]);
mapTemp.delete("temp"); // Map { "perm" => "keep" }
// Пример 2: Очистка устаревших записей
const mapCache = new Map([["user1", "old"], ["user2", "new"]]);
mapCache.delete("user1"); // Map { "user2" => "new" }

// .clear-------------------------------------------------------------------- .clear()
const mapForClear = new Map([["x", 10], ["y", 20]]);
mapForClear.clear();
// Map {}
console.log('Метод .clear: очищает Map, результат: ', mapForClear);
// Пример 1: Сброс сессии
const mapSession = new Map([["user", "John"], ["time", 12345]]);
mapSession.clear(); // Map {}
// Пример 2: Очистка кэша
const mapCacheClear = new Map([["page1", "data1"]]);
mapCacheClear.clear(); // Map {}

// .size-------------------------------------------------------------------- .size()
const mapForSize = new Map([["a", 1], ["b", 2], ["c", 3]]);
const sizeResult = mapForSize.size;
// 3
console.log('Метод .size: возвращает количество пар, результат: ', sizeResult);
// Пример 1: Проверка заполненности Map
const mapItems = new Map([["item", "value"]]);
const itemCount = mapItems.size; // 1
// Пример 2: Ограничение количества записей
const mapLimit = new Map();
mapLimit.set("k1", "v1");
const isFull = mapLimit.size >= 2; // false

// .keys-------------------------------------------------------------------- .keys()
const mapForKeys = new Map([["name", "John"], ["age", 30]]);
const keysIter = mapForKeys.keys();
// Iterator ["name", "age"]
console.log('Метод .keys: возвращает итератор ключей, результат: ', [...keysIter]);
// Пример 1: Логирование всех ключей
const mapLogKeys = new Map([["id", 1], ["type", "user"]]);
const allKeys = [...mapLogKeys.keys()]; // ["id", "type"]
// Пример 2: Проверка наличия ключей в списке
const mapKeyCheck = new Map([["code", 200]]);
const keyList = [...mapKeyCheck.keys()]; // ["code"]

// .values-------------------------------------------------------------------- .values()
const mapForValues = new Map([["name", "John"], ["age", 30]]);
const valuesIter = mapForValues.values();
// Iterator ["John", 30]
console.log('Метод .values: возвращает итератор значений, результат: ', [...valuesIter]);
// Пример 1: Подсчет суммы значений
const mapSum = new Map([["a", 5], ["b", 10]]);
const total = [...mapSum.values()].reduce((acc, val) => acc + val, 0); // 15
// Пример 2: Фильтрация строковых значений
const mapFilter = new Map([["x", "text"], ["y", 100]]);
const strings = [...mapFilter.values()].filter(v => typeof v === "string"); // ["text"]

// .entries-------------------------------------------------------------------- .entries()
const mapForEntries = new Map([["key1", "val1"], ["key2", "val2"]]);
const entriesIter = mapForEntries.entries();
// Iterator [["key1", "val1"], ["key2", "val2"]]
console.log('Метод .entries: возвращает итератор пар, результат: ', [...entriesIter]);
// Пример 1: Преобразование Map обратно в объект
const mapToObj = new Map([["a", 1], ["b", 2]]);
const objFromMap = Object.fromEntries(mapToObj.entries()); // { a: 1, b: 2 }
// Пример 2: Поиск пары по значению
const mapSearch = new Map([["id", 123], ["code", 456]]);
const targetEntry = [...mapSearch.entries()].find(([k, v]) => v === 456); // ["code", 456]

// .forEach-------------------------------------------------------------------- .forEach()
const mapForEach = new Map([["x", 1], ["y", 2]]);
mapForEach.forEach((value, key) => console.log(`${key}: ${value}`));
// "x: 1", "y: 2"
console.log('Метод .forEach: выполняет функцию для каждой пары');
// Пример 1: Обновление значений через forEach
const mapUpdate = new Map([["a", 10], ["b", 20]]);
mapUpdate.forEach((val, key) => mapUpdate.set(key, val * 2)); // Map { "a" => 20, "b" => 40 }
// Пример 2: Логирование с условием
const mapLog = new Map([["error", 404], ["status", 200]]);
mapLog.forEach((val, key) => val > 300 && console.log(`${key}: ${val}`)); // "error: 404"