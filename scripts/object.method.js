console.log('ОБЪЕКТЫ МЕТОДЫ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>');

console.log('Шпаргалка:');
console.log('- Object.keys: (obj) => arr — возвращает массив ключей объекта');
console.log('- Object.values: (obj) => arr — возвращает массив значений объекта');
console.log('- Object.entries: (obj) => arr — возвращает массив пар [ключ, значение]');
console.log('- Object.assign: (target, ...sources) => obj — копирует свойства из одного объекта в другой');
console.log('- Object.freeze: (obj) => obj — замораживает объект (нельзя изменять)');
console.log('- Object.hasOwnProperty: (prop) => bool — проверяет, есть ли свойство в объекте');
console.log('- Object.create: (proto) => obj — создает новый объект с указанным прототипом');
console.log('- Object.defineProperty: (obj, prop, descriptor) => obj — задает свойство с настройками');

// .Object.keys---------------------------------------------------------------------------------------->Object.keys()
const objForKeys = { name: "John", age: 30, city: "New York" };
const keysResult = Object.keys(objForKeys);
// ["name", "age", "city"]
console.log('Метод Object.keys: возвращает массив ключей, значение: ', objForKeys, ', результат: ', keysResult);
// Пример 1: Проверка наличия ключей
const hasKeys = Object.keys(objForKeys).length > 0; // true
// Пример 2: Итерация по ключам для логирования
Object.keys(objForKeys).forEach(key => console.log(`${key}: ${objForKeys[key]}`)); // "name: John", "age: 30", "city: New York"

// .Object.values-------------------------------------------------------------------- Object.values()
const objForValues = { name: "John", age: 30, city: "New York" };
const valuesResult = Object.values(objForValues);
// ["John", 30, "New York"]
console.log('Метод Object.values: возвращает массив значений, значение: ', objForValues, ', результат: ', valuesResult);
// Пример 1: Подсчет суммы числовых значений
const numericObj = { a: 10, b: 20, c: 30 };
const sumValues = Object.values(numericObj).reduce((acc, val) => acc + val, 0); // 60
// Пример 2: Фильтрация значений
const filteredValues = Object.values(objForValues).filter(val => typeof val === "string"); // ["John", "New York"]

// .Object.entries-------------------------------------------------------------------- Object.entries()
const objForEntries = { name: "John", age: 30 };
const entriesResult = Object.entries(objForEntries);
// [["name", "John"], ["age", 30]]
console.log('Метод Object.entries: возвращает массив пар [ключ, значение], значение: ', objForEntries, ', результат: ', entriesResult);
// Пример 1: Преобразование объекта в Map
const entriesMap = new Map(Object.entries(objForEntries)); // Map { 'name' => 'John', 'age' => 30 }
// Пример 2: Поиск пары по значению
const foundEntry = Object.entries(objForEntries).find(([key, value]) => value === 30); // ["age", 30]

// .Object.assign-------------------------------------------------------------------- Object.assign()
const targetObj = { a: 1 };
const sourceObj = { b: 2, c: 3 };
const assignResult = Object.assign(targetObj, sourceObj);
// { a: 1, b: 2, c: 3 }
console.log('Метод Object.assign: копирует свойства в целевой объект, target: ', targetObj, ', source: ', sourceObj, ', результат: ', assignResult);
// Пример 1: Клонирование объекта
const originalObj = { x: 10, y: 20 };
const clonedObj = Object.assign({}, originalObj); // { x: 10, y: 20 }
// Пример 2: Слияние настроек по умолчанию
const defaultSettings = { theme: "light", font: "Arial" };
const userSettings = { theme: "dark" };
const mergedSettings = Object.assign({}, defaultSettings, userSettings); // { theme: "dark", font: "Arial" }

// .Object.freeze-------------------------------------------------------------------- Object.freeze()
const objToFreeze = { name: "John" };
Object.freeze(objToFreeze);
objToFreeze.name = "Pete"; // Не изменится
// { name: "John" }
console.log('Метод Object.freeze: замораживает объект, значение: ', objToFreeze);
// Пример 1: Защита конфигурации
const configObj = Object.freeze({ apiKey: "xyz123", url: "api.example.com" }); // Нельзя изменить
// Пример 2: Предотвращение изменения констант
const constantValues = Object.freeze({ PI: 3.14, GRAVITY: 9.8 }); // Значения защищены

// .Object.hasOwnProperty-------------------------------------------------------------------- hasOwnProperty()
const objWithProps = { name: "John", age: 30 };
const hasPropResult = objWithProps.hasOwnProperty("name");
// true
console.log('Метод hasOwnProperty: проверяет наличие свойства "name", значение: ', objWithProps, ', результат: ', hasPropResult);
// Пример 1: Проверка существования свойства перед использованием
if (objWithProps.hasOwnProperty("age")) console.log(objWithProps.age); // 30
// Пример 2: Фильтрация собственных свойств (не унаследованных)
const protoObj = { inherited: true };
const childObj = Object.create(protoObj);
childObj.own = "yes";
const hasOwnProp = childObj.hasOwnProperty("own"); // true, а для "inherited" будет false

// .Object.create-------------------------------------------------------------------- Object.create()
const protoForCreate = { greet: () => "Hello" };
const objCreated = Object.create(protoForCreate);
objCreated.name = "John";
// { name: "John" } с прототипом { greet: ... }
console.log('Метод Object.create: создает объект с прототипом, прототип: ', protoForCreate, ', результат: ', objCreated, ', greet: ', objCreated.greet());
// Пример 1: Создание объекта с методами в прототипе
const userProto = { sayHi: () => "Hi!" };
const userObj = Object.create(userProto);
userObj.id = 1; // { id: 1 } с методом sayHi
// Пример 2: Наследование настроек
const baseConfig = { debug: false };
const customConfig = Object.create(baseConfig);
customConfig.debug = true; // Перекрывает базовое значение

// .Object.defineProperty-------------------------------------------------------------------- Object.defineProperty()
const objForDefine = {};
Object.defineProperty(objForDefine, "key", {
  value: "secret",
  writable: false,
  enumerable: true
});
objForDefine.key = "new"; // Не изменится
// { key: "secret" }
console.log('Метод Object.defineProperty: задает свойство с настройками, результат: ', objForDefine);
// Пример 1: Создание неизменяемого свойства
const dataObj = {};
Object.defineProperty(dataObj, "version", { value: "1.0", writable: false }); // Защита от изменений
// Пример 2: Скрытие свойства от перечисления
const userDataObj = {};
Object.defineProperty(userDataObj, "password", { value: "12345", enumerable: false });
console.log(Object.keys(userDataObj)); // [], "password" не отображается