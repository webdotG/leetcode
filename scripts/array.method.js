console.log('МАССИВЫ МЕТОДЫ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>');

console.log('Шпаргалка:');
console.log('- sort: (a, b) => a - b — сортирует массив по возрастанию');
console.log('- map: (item) => item * 2 — новый массив с изменёнными элементами');
console.log('- filter: (item) => item > 0 — новый массив с отфильтрованными элементами');
console.log('- reduce: (acc, item) => acc + item, 0 — сводит массив к одному значению');
console.log('- forEach: (item) => console.log(item) — выполняет действие для каждого элемента');
console.log('- find: (item) => item > 10 — возвращает первый подходящий элемент');
console.log('- slice: (start, end) — вырезает часть массива в новый массив');
console.log('- splice: (start, deleteCount, ...items) — удаляет/добавляет элементы в массив');
// .sort-------------------------------------------------------------------- sort()
// От меньшего к большему:
const numbersSort1 = [5, 2, 9, 1, 5, 6];
const sortedAsc = numbersSort1.sort((a, b) => a - b);
// [1, 2, 5, 5, 6, 9]
console.log('Метод sort от меньшего к большему: сортирует числа по возрастанию, значения: [5, 2, 9, 1, 5, 6], результат: ', sortedAsc);

// От большего к меньшему:
const numbersSort2 = [5, 2, 9, 1, 5, 6];
const sortedDesc = numbersSort2.sort((a, b) => b - a);
// [9, 6, 5, 5, 2, 1]
console.log('Метод sort от большего к меньшему: сортирует числа по убыванию, значения: [5, 2, 9, 1, 5, 6], результат: ', sortedDesc);

// 1. По длине строк
const wordsSort1 = ['cat', 'elephant', 'dog', 'hippopotamus'];
const sortedByLength = wordsSort1.sort((a, b) => a.length - b.length);
// ['cat', 'dog', 'elephant', 'hippopotamus']
console.log('Метод sort по длине строк: сортирует строки по длине, значения: ["cat", "elephant", "dog", "hippopotamus"], результат: ', sortedByLength);
// Обратный порядок: b.length - a.length.

// 2. По алфавиту (лексикографически)
const wordsSort2 = ['banana', 'apple', 'cherry'];
const sortedAlphabet = wordsSort2.sort((a, b) => a.localeCompare(b));
// ['apple', 'banana', 'cherry']
console.log('Метод sort по алфавиту: сортирует строки лексикографически, значения: ["banana", "apple", "cherry"], результат: ', sortedAlphabet);
// Обратный порядок: b.localeCompare(a).

// 3. По чётности (чётные вперёд, нечётные назад)
const numbersSort3 = [5, 2, 9, 1, 4, 6];
const sortedByParity = numbersSort3.sort((a, b) => (a % 2) - (b % 2));
// [2, 4, 6, 1, 5, 9]
console.log('Метод sort по чётности: чётные вперёд, нечётные назад, значения: [5, 2, 9, 1, 4, 6], результат: ', sortedByParity);
// Обратный порядок: (b % 2) - (a % 2) — нечётные вперёд.

// 4. По последней цифре числа
const numbersSort4 = [13, 25, 42, 17, 9];
const sortedByLastDigit = numbersSort4.sort((a, b) => (a % 10) - (b % 10));
// [42, 13, 25, 17, 9]
console.log('Метод sort по последней цифре: сортирует по последней цифре числа, значения: [13, 25, 42, 17, 9], результат: ', sortedByLastDigit);
// Если последние цифры равны, порядок сохраняется.

// 5. По нескольким критериям (многоуровневая сортировка)
const numbersSort5 = [13, 23, 42, 12, 9];
const sortedMulti = numbersSort5.sort((a, b) => {
    const lastDigitA = a % 10;
    const lastDigitB = b % 10;
    if (lastDigitA === lastDigitB) {
        return a - b; // Если последние цифры равны, сортируем по значению
    }
    return lastDigitA - lastDigitB; // Иначе по последней цифре
});
// [9, 12, 13, 23, 42]
console.log('Метод sort по нескольким критериям: сначала по последней цифре, затем по значению, значения: [13, 23, 42, 12, 9], результат: ', sortedMulti);

// .reduce-------------------------------------------------------------------- reduce()
// 1. Сумма элементов
const numbersReduce1 = [1, 2, 3, 4];
const sumReduce = numbersReduce1.reduce((acc, curr) => acc + curr, 0);
// 10
console.log('Метод reduce для суммы: складывает все элементы массива, значения: [1, 2, 3, 4], результат: ', sumReduce);

// 2. Произведение элементов
const numbersReduce2 = [1, 2, 3, 4];
const productReduce = numbersReduce2.reduce((acc, curr) => acc * curr, 1);
// 24
console.log('Метод reduce для произведения: умножает все элементы массива, значения: [1, 2, 3, 4], результат: ', productReduce);

// 3. Нахождение максимума
const numbersReduce3 = [5, 2, 9, 1, 7];
const maxReduce = numbersReduce3.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
// 9
console.log('Метод reduce для максимума: находит наибольшее значение, значения: [5, 2, 9, 1, 7], результат: ', maxReduce);

// 4. Подсчёт частоты элементов
const lettersReduce4 = ['a', 'b', 'a', 'c', 'b', 'a'];
const frequencyReduce = lettersReduce4.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
// { a: 3, b: 2, c: 1 }
console.log('Метод reduce для частоты: подсчитывает частоту элементов, значения: ["a", "b", "a", "c", "b", "a"], результат: ', frequencyReduce);

// 5. Группировка по свойству
const itemsReduce5 = [
    { type: 'fruit', name: 'apple' },
    { type: 'vegetable', name: 'carrot' },
    { type: 'fruit', name: 'banana' }
];
const groupedReduce = itemsReduce5.reduce((acc, curr) => {
    acc[curr.type] = acc[curr.type] || [];
    acc[curr.type].push(curr.name);
    return acc;
}, {});
// { fruit: ['apple', 'banana'], vegetable: ['carrot'] }
console.log('Метод reduce для группировки: группирует элементы по свойству, значения: [{type: "fruit", name: "apple"}, {type: "vegetable", name: "carrot"}, {type: "fruit", name: "banana"}], результат: ', groupedReduce);

// .filter-------------------------------------------------------------------- filter()
// 1. Фильтр чётных чисел
const numbersFilter1 = [1, 2, 3, 4, 5, 6];
const evensFilter = numbersFilter1.filter((item) => item % 2 === 0);
// [2, 4, 6]
console.log('Метод filter для чётных: отбирает все чётные числа, значения: [1, 2, 3, 4, 5, 6], результат: ', evensFilter);

// 2. Фильтр строк длиннее 3 символов
const wordsFilter2 = ['cat', 'elephant', 'dog', 'bird'];
const longWordsFilter = wordsFilter2.filter((item) => item.length > 3);
// ['elephant', 'bird']
console.log('Метод filter для длинных строк: отбирает строки длиннее 3 символов, значения: ["cat", "elephant", "dog", "bird"], результат: ', longWordsFilter);

// 3. Фильтр объектов по свойству
const usersFilter3 = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 }
];
const adultsFilter = usersFilter3.filter((item) => item.age >= 25);
// [{ name: 'John', age: 25 }, { name: 'Alice', age: 30 }]
console.log('Метод filter для объектов: отбирает объекты с age >= 25, значения: [{name: "John", age: 25}, {name: "Alice", age: 30}, {name: "Bob", age: 20}], результат: ', adultsFilter);

// 4. Фильтр с использованием индекса
const numbersFilter4 = [10, 20, 30, 40, 50];
const afterSecondFilter = numbersFilter4.filter((item, index) => index > 1);
// [30, 40, 50]
console.log('Метод filter по индексу: отбирает элементы после второго, значения: [10, 20, 30, 40, 50], результат: ', afterSecondFilter);

// 5. Фильтр дубликатов
const numbersFilter5 = [1, 2, 2, 3, 3, 3];
const uniquesFilter = numbersFilter5.filter((item, index, arr) => arr.indexOf(item) === index);
// [1, 2, 3]
console.log('Метод filter для уникальных: убирает дубликаты, значения: [1, 2, 2, 3, 3, 3], результат: ', uniquesFilter);

// .find-------------------------------------------------------------------- find()
// 1. Поиск первого чётного числа
const numbersFind1 = [1, 3, 4, 5, 6];
const firstEvenFind = numbersFind1.find((item) => item % 2 === 0);
// 4
console.log('Метод find для чётного: находит первое чётное число, значения: [1, 3, 4, 5, 6], результат: ', firstEvenFind);

// 2. Поиск строки по условию
const wordsFind2 = ['cat', 'elephant', 'dog'];
const longWordFind = wordsFind2.find((item) => item.length > 3);
// 'elephant'
console.log('Метод find для длинной строки: находит первую строку длиннее 3 символов, значения: ["cat", "elephant", "dog"], результат: ', longWordFind);

// 3. Поиск объекта по свойству
const usersFind3 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
];
const userFind = usersFind3.find((item) => item.id === 2);
// { id: 2, name: 'Alice' }
console.log('Метод find для объекта: находит первый объект с id === 2, значения: [{id: 1, name: "John"}, {id: 2, name: "Alice"}, {id: 3, name: "Bob"}], результат: ', userFind);

// 4. Поиск с использованием индекса
const numbersFind4 = [5, 10, 15, 20];
const afterFirstFind = numbersFind4.find((item, index) => index > 0 && item > 10);
// 15
console.log('Метод find по индексу: находит первый элемент после первого, больше 10, значения: [5, 10, 15, 20], результат: ', afterFirstFind);

// 5. Поиск первого отрицательного числа
const numbersFind5 = [1, -2, 3, -4, 5];
const firstNegativeFind = numbersFind5.find((item) => item < 0);
// -2
console.log('Метод find для отрицательного: находит первое отрицательное число, значения: [1, -2, 3, -4, 5], результат: ', firstNegativeFind);

// .forEach-------------------------------------------------------------------- forEach()
// 1. Логирование элементов
const lettersForEach1 = ['a', 'b', 'c'];
lettersForEach1.forEach((item) => console.log(item));
// a
// b
// c
console.log('Метод forEach для логирования: выводит каждый элемент, значения: ["a", "b", "c"], результат: undefined');

// 2. Изменение исходного массива
const numbersForEach2 = [1, 2, 3];
numbersForEach2.forEach((item, index, arr) => arr[index] = item * 2);
// numbersForEach2 теперь [2, 4, 6]
console.log('Метод forEach для изменения: удваивает элементы массива, значения: [1, 2, 3], результат: ', numbersForEach2);

// 3. Подсчёт суммы во внешней переменной
const numbersForEach3 = [1, 2, 3];
let sumForEach = 0;
numbersForEach3.forEach((item) => sumForEach += item);
// sumForEach = 6
console.log('Метод forEach для суммы: суммирует элементы во внешнюю переменную, значения: [1, 2, 3], результат: ', sumForEach);

// 4. Обновление внешнего объекта
const fruitsForEach4 = ['apple', 'banana'];
const countsForEach = {};
fruitsForEach4.forEach((item) => countsForEach[item] = (countsForEach[item] || 0) + 1);
// countsForEach = { apple: 1, banana: 1 }
console.log('Метод forEach для объекта: подсчитывает элементы в объекте, значения: ["apple", "banana"], результат: ', countsForEach);

// 5. Выполнение действия с индексом
const numbersForEach5 = [10, 20, 30];
numbersForEach5.forEach((item, index) => console.log(`Элемент ${index}: ${item}`));
// Элемент 0: 10
// Элемент 1: 20
// Элемент 2: 30
console.log('Метод forEach с индексом: выводит элементы с их индексами, значения: [10, 20, 30], результат: undefined');

// .map-------------------------------------------------------------------- map()
// 1. Удвоение чисел
const numbersMap1 = [1, 2, 3];
const doubledMap = numbersMap1.map((item) => item * 2);
// [2, 4, 6]
console.log('Метод map для удвоения: создаёт новый массив с удвоенными числами, значения: [1, 2, 3], результат: ', doubledMap);

// 2. Преобразование строк
const wordsMap2 = ['cat', 'dog'];
const upperMap = wordsMap2.map((item) => item.toUpperCase());
// ['CAT', 'DOG']
console.log('Метод map для строк: преобразует строки в верхний регистр, значения: ["cat", "dog"], результат: ', upperMap);

// 3. Создание объектов
const numbersMap3 = [1, 2, 3];
const objectsMap = numbersMap3.map((item) => ({ value: item }));
// [{ value: 1 }, { value: 2 }, { value: 3 }]
console.log('Метод map для объектов: создаёт массив объектов, значения: [1, 2, 3], результат: ', objectsMap);

// 4. Использование индекса
const lettersMap4 = ['a', 'b', 'c'];
const indexedMap = lettersMap4.map((item, index) => `${index}: ${item}`);
// ['0: a', '1: b', '2: c']
console.log('Метод map с индексом: создаёт массив строк с индексами, значения: ["a", "b", "c"], результат: ', indexedMap);

// 5. Извлечение свойства объектов
const usersMap5 = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 }
];
const namesMap = usersMap5.map((item) => item.name);
// ['John', 'Alice']
console.log('Метод map для свойств: извлекает имена из объектов, значения: [{name: "John", age: 25}, {name: "Alice", age: 30}], результат: ', namesMap);

// .slice-------------------------------------------------------------------- slice()
// 1. Вырезка части массива
const numbersSlice1 = [1, 2, 3, 4, 5];
const slicedPart = numbersSlice1.slice(1, 4);
// [2, 3, 4]
console.log('Метод slice для части массива: вырезает элементы с 1 по 3 индекс, значения: [1, 2, 3, 4, 5], результат: ', slicedPart);

// 2. Вырезка с начала до указанного индекса
const wordsSlice2 = ['cat', 'dog', 'bird', 'fish'];
const slicedStart = wordsSlice2.slice(0, 2);
// ['cat', 'dog']
console.log('Метод slice с начала: вырезает элементы с начала до 2 индекса, значения: ["cat", "dog", "bird", "fish"], результат: ', slicedStart);

// 3. Вырезка с конца
const numbersSlice3 = [10, 20, 30, 40];
const slicedEnd = numbersSlice3.slice(-2);
// [30, 40]
console.log('Метод slice с конца: вырезает последние 2 элемента, значения: [10, 20, 30, 40], результат: ', slicedEnd);

// 4. Копия всего массива
const lettersSlice4 = ['a', 'b', 'c'];
const slicedCopy = lettersSlice4.slice();
// ['a', 'b', 'c']
console.log('Метод slice для копии: создаёт копию всего массива, значения: ["a", "b", "c"], результат: ', slicedCopy);

// 5. Вырезка с одного индекса до конца
const numbersSlice5 = [1, 2, 3, 4, 5];
const slicedFrom = numbersSlice5.slice(2);
// [3, 4, 5]
console.log('Метод slice до конца: вырезает элементы с 2 индекса до конца, значения: [1, 2, 3, 4, 5], результат: ', slicedFrom);

// .splice-------------------------------------------------------------------- splice()
// 1. Удаление элементов
const numbersSplice1 = [1, 2, 3, 4, 5];
const removedSplice = numbersSplice1.splice(1, 2);
// removedSplice = [2, 3], numbersSplice1 теперь [1, 4, 5]
console.log('Метод splice для удаления: удаляет 2 элемента с 1 индекса, значения: [1, 2, 3, 4, 5], удалённые: ', removedSplice, 'массив стал: ', numbersSplice1);

// 2. Добавление элементов
const wordsSplice2 = ['cat', 'dog'];
wordsSplice2.splice(1, 0, 'bird', 'fish');
// wordsSplice2 теперь ['cat', 'bird', 'fish', 'dog']
console.log('Метод splice для добавления: добавляет элементы с 1 индекса, значения: ["cat", "dog"], результат: ', wordsSplice2);

// 3. Замена элементов
const numbersSplice3 = [1, 2, 3, 4];
const replacedSplice = numbersSplice3.splice(1, 2, 10, 20);
// replacedSplice = [2, 3], numbersSplice3 теперь [1, 10, 20, 4]
console.log('Метод splice для замены: заменяет 2 элемента с 1 индекса на новые, значения: [1, 2, 3, 4], удалённые: ', replacedSplice, 'массив стал: ', numbersSplice3);

// 4. Удаление с конца
const lettersSplice4 = ['a', 'b', 'c', 'd'];
const removedEndSplice = lettersSplice4.splice(-2, 2);
// removedEndSplice = ['c', 'd'], lettersSplice4 теперь ['a', 'b']
console.log('Метод splice с конца: удаляет 2 элемента с конца, значения: ["a", "b", "c", "d"], удалённые: ', removedEndSplice, 'массив стал: ', lettersSplice4);

// 5. Удаление и добавление одновременно
const numbersSplice5 = [1, 2, 3];
const mixedSplice = numbersSplice5.splice(1, 1, 10);
// mixedSplice = [2], numbersSplice5 теперь [1, 10, 3]
console.log('Метод splice для удаления и добавления: удаляет 1 элемент с 1 индекса и добавляет новый, значения: [1, 2, 3], удалённые: ', mixedSplice, 'массив стал: ', numbersSplice5);