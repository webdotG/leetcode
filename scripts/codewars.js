//развернуть строку
const expand = function(str) {
    //- классический метод
    // return str.split('').reverse().join('')

    let s = ''
    for( let i = str.length-1; i >= 0; i--) {
        s += str[i]
    }
    return s
}
expand('HOME')
console.log('1. было HOME стало EMOH ')

//посчитать кол-во нечёт чисел до n
const count = function (n) {
    return Math.floor(n/2)
}
console.log('2. Нечётных Чисел до n = 12 : ',count(12))

//посчитать кол-во чёт чисел до n
const count2 = function (n) {
    return Math.floor(n/2 + 1)
}
console.log('3. Чётных Чисел до n = 12 : ',count2(12))

//посчитать среднее арифмитическое в массиве 
const someArray = ['12','25','35','42','69','71',]
const average = someArray.reduce((acc, item) => acc + item, 0) /someArray.length
console.log('4. someArray : ', someArray)
console.log('4.1 Среднее Арифмитическое в someArray',average)
console.log('4.2 округлённое в большую сторону : ', Math.floor(average))
console.log('4.3 округлённое в меньшую сторону : ', Math.ceil(average))

//посчитать среднее медианное 
const someArrayString = ['100', '10', '-25', '25', '735', '91'];
const someArrayNumber = [100, 10, -25, 25, 735, 91];
const someArrayNull = [];
const someArrayError = ['12', 9, (number) => {console.log(number)} ];
//вычислениe медианы с проверками
const getMedian = (arr) => {
    // 1. Проверка, что передан массив
    if (!Array.isArray(arr)) {
        throw new Error('Аргумент должен быть массивом');
    }
    // 1. Проверка, что массив не пустой
    if (arr.length === 0) {
        return 'пришёл пустой массив ';     }
    // 1. Преобразуем элементы в числа и проверяем, что все они валидны
    const numbers = arr.map((item) => {
        // Если элемент — строка или число, преобразуем в число
        if (typeof item === 'string' || typeof item === 'number') {
            const num = Number(item);
            if (isNaN(num)) {
                throw new Error(`Элемент "${item}" не может быть преобразован в число`);
            }
            return num;
        }
        // Если элемент — не строка и не число (например, функция или объект)
        throw new Error(`Элемент / "${item}" / не является числом или строкой`);
    });
    // 2. Сортируем массив
    numbers.sort((a, b) => a - b);
    const length = numbers.length;
    // 3. Вычисляем медиану
    if (length % 2 !== 0) {
        // Нечётная длина — берём средний элемент
        return numbers[Math.floor(length / 2)];
    } else {
        // Чётная длина — среднее двух центральных элементов
        const mid1 = numbers[length / 2 - 1];
        const mid2 = numbers[length / 2];
        return (mid1 + mid2) / 2;
    }
};
try {
    console.log(`5. Медианное ['100', '10', '-25', '25', '735', '91'] = ${getMedian(someArrayString)}`); 
    console.log(`5.1 Медианное [100, 10, -25, 25, 735, 91] = ${getMedian(someArrayNumber)}`); 
    console.log(`5.2 Медианное [] = ${getMedian(someArrayNull)}`); 
    // console.log(`Медианное с func: ${getMedian(someArrayError)})); 
} catch (error) {
    console.error(error.message);
}

//проверить нэйм и пассворд
const chek = function (name, pass) {
    return name === 'Santa' && pass === 'test pass'
}
console.log('5. Проверка красивая запись Санты  : ', chek('Santa', 'Nonexist'))

console.log('CODE WAR ================================================================================================================================================================================================>')
