"use strict";
console.log('==== 150_Q_ ========150_Q_>>===========150_Q_??================150_Q_>>================150_Q_??===============150_Q_>>=================150_Q_======>>');
//
//58. Length of Last Word------------------------------------------------------------------------------------------------------
// function lengthOfLastWord(s: string): number {
//     //s.trim() — убирает пробелы в начале и конце.
//     //split(' ') — разбивает строку на массив слов.
//     const words = s.trim().split(' '); // 
//     return words[words.length - 1].length; // Длина последнего слова
// }
function lengthOfLastWord(s) {
    let i = s.length - 1;
    let length = 0;
    // Пропускаю пробелы с конца
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    // Считаю длину слова пока не увижу пробел или не кончится строка
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    return length;
}
console.log('Посчитать Длину Последнего Слова .luffy is still joyboy. = ', lengthOfLastWord('luffy is still joyboy'));
//121. Best Time to Buy and Sell Stock
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// function maxProfit(prices: number[]): number {  
//     let minPrice = Infinity
//     let profit = 0 
//     for(let price of prices){
//         if(minPrice > price) {
//             minPrice = price
//         }
//         let currentProfit = price - minPrice
//         if(currentProfit > profit) {
//             profit = currentProfit
//         }
//     }
//     return profit
// };
// function maxProfit(prices: number[]): number {
//     let profit = 0;
//     let buyPrice = prices[0];
//     for (let i = 1; i < prices.length; i++) {
//         profit = Math.max(profit, prices[i] - buyPrice);
//         buyPrice = Math.min(prices[i], buyPrice);
//     }
//     return profit;
// }
function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currProfit = prices[i] - minPrice;
        if (minPrice < prices[i])
            minPrice = prices[i];
        if (currProfit > maxProfit)
            maxProfit = currProfit;
    }
    return maxProfit;
}
console.log('MAX PROFIT FOR BY AND SALE [13,2,9,3,8,4,1,12,6,14] ', maxProfit([13, 2, 9, 3, 8, 4, 1, 12, 6, 14]));
//88. --------------------------------------------------------------------------------- 
// Объединение отсортированных массивов
// Вход: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Выход: [1,2,2,3,5,6]
// Объяснение: Мы объединяем массивы [1,2,3] и [2,5,6].
// Результат объединения — [1,2,2,3,5,6], где элементы из nums1 подчёркнуты.
function mergeMetod(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => {
        return a - b;
    });
}
;
// Скорость: mergeWileIf O(m + n) против 
//  O((m + n) log (m + n)) у mergeMetod. 
// mergeMetod неэффективнf для больших массивов.
// Память: mergeWileIf лучше O(1) против O(n) у mergeMetod.
function mergeWileIf(nums1, m, nums2, n) {
    let p1 = m - 1; // последний элемент в nums1
    let p2 = n - 1; // последний элемент в nums2
    let p = m + n - 1; // на последнюю позицию в nums1
    // Пока есть элементы в обоих массивах
    while (p2 >= 0 && p1 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        }
        else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    // Если остались элементы в nums2
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}
//1.----------------------------------------------------------------------------------------------------------------------
// Дан массив целых чисел nums и целое число target. 
// Нужно вернуть индексы двух чисел из массива
// Сумма которых равна target.
// Подход 1: Брутфорс (два вложенных цикла)
// Скорость: O(n^2) — перебираем все пары чисел.
// Память: O(1) — используем только константы для хранения индексов.
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
//  Подход 2: Хэш-таблица
//  Скорость: O(n) — один проход по массиву.
//  Память: O(n) — храним числа и их индексы в хэш-таблице.
function twoSumHash(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Ищем второе число
        if (map[complement] !== undefined) {
            // Если complement уже в хэш-таблице, нашли пару
            return [map[complement], i];
        }
        // Добавляем текущее число и его индекс в хэш-таблицу
        map[nums[i]] = i;
    }
    return [];
}
console.log('Индексы Двух Чисел [25,9,12,6,10,42,15,69] Сумма Которых Равна target 25', twoSumHash([25, 9, 12, 6, 10, 42, 15, 69], 25));
//13.Roman To Integer ----------------------------------------------------------------------------
// Пройти по строке слева направо.
// Для каждого символа s[i]:
//   Если s[i] меньше s[i+1] (например, I перед V)
//      это значит, что s[i] участвует в вычитании.
//   Если s[i] больше или равно s[i+1] (или s[i] — последний символ)
//       мы прибавляем его значение.
// Хэш-таблица для значений
//      Ключ — символ (I,V).
//      Значение — число (1,5).
// Подход: Проход по строке с обработкой пар для вычитания
// Скорость: O(n) — один проход по строке.
// Память: O(1) — хэш-таблица фиксированного размера.
function romanToInt(s) {
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = i < s.length - 1 ? sym[s[i + 1]] : 0;
        //sym[s[i]] значение римского символа на позиции i в строке s.
        // i = 0:
        // s[0] = 'I'.
        // sym[s[0]] = values['I'] = 1.
        if (cur < next) {
            result += next - cur;
            i++;
        }
        else {
            result += cur;
        }
    }
    return result;
}
console.log('Roman To Integer input s = "MCMXCIV" : ', romanToInt("MCMXCIV"));
//
// UNIQ BLOCK ========>>==============??=================>>==================??===============>>=======================??===>>===
//
//26. Remove Duplicates from Sorted Array------------------------------------------------------------------------------------------
// Нужно "удалить" дубликаты на месте (in-place), 
//  чтобы каждый уникальный элемент встречался только один раз, 
//  сохраняя относительный порядок элементов. 
// Вернуть количество уникальных элементов k.
// writeIndex = 1 
// i = 1 i < nums.length.
// сравнить nums[i] с nums[i - 1].
//  если не равны, записпть
//      nums[i] на позицию writeIndex 
//      и увеличивай writeIndex.
// вернуть writeIndex.
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    if (nums.length === 1)
        return 1;
    let writeIndex = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex;
}
;
console.log('Уникальных Чисел  ДО 1 Повторения [0,0,1,1,1,1,2,3,3,444,555,66,7777777] ', removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3, 444, 555, 66, 7777777]));
//80. Remove Duplicates from Sorted Array II-------------------------------------------------------------------------------
//Чем отличается от задачи 26?
//Ключевое различие:
//Теперь мы не просто пропускаем все дубликаты после первого, 
//а считаем, сколько раз число уже встречалось, 
//и разрешаем до двух раз.
// function removeDuplicatesTwoI(nums: number[]): number {
//     let i = 2;
//     let k = 2;
//     while (i < nums.length) {
//         if (nums[k - 2] !== nums[i]) {
//             nums[k++] = nums[i];
//         }
//         i++;
//     }
//     return k;
// };
function removeDuplicatesTwo(nums) {
    if (nums.length === 0)
        return 0;
    if (nums.length <= 2)
        return nums.length;
    let writeIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (writeIndex < 2) {
            //nums[writeIndex] по тому что работает "налету/in-place"
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
        else {
            if (nums[i] !== nums[writeIndex - 2]) {
                nums[writeIndex] = nums[i];
                writeIndex++;
            }
        }
    }
    return writeIndex;
}
;
console.log('Уникальных Чисел  ДО 2 Повторений[0,0,1,1,1,1,2,3,3,444,555,66,7777777]', removeDuplicatesTwo([0, 0, 1, 1, 1, 1, 2, 3, 3, 444, 555, 66, 777777]));
// SPEC UNIQ SORT
function removeDuplicatesGeneral(nums, maxDuplicates) {
    if (nums.length === 0)
        return 0;
    if (nums.length <= maxDuplicates)
        return nums.length;
    let writeIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (writeIndex < maxDuplicates || nums[i] !== nums[writeIndex - maxDuplicates]) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }
    return writeIndex;
}
console.log('Уникальных Чисел  ДО N=4 Повторений[0,0,1,1,1,1,2,3,3,444,555,66,77777]', removeDuplicatesGeneral([0, 0, 1, 1, 1, 1, 2, 3, 3, 444, 555, 66, 777777], 4));
//
// REMOVE BLOCK ========>>==============??=================>>==================??===============>>=======================??===>>===
//
//Удаление постов с определённым тегом (например, val — ID спама) из списка ленты для улучшения пользовательского опыта.
// Обработка данных профиля:
// Удаление устаревших записей (например, val — ID старого опыта работы) из списка в профиле.
// удаление значений из обьекта 
// если это число не равно тому что ищем 
// то записываем на новое место  
function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
    // Скорость: O(n) - один проход по массиву
    // Память: O(1) - изменения in-place, без дополнительной памяти
}
// Тесты
function runTests3() {
    let nums1 = [3, 2, 2, 3];
    console.log("Test 1:", removeElement(nums1, 3), nums1); // 2, [2,2,3,3]
    let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
    console.log("Test 2:", removeElement(nums2, 2), nums2); // 5, [0,1,3,0,4,2,4,2]
}
runTests3();
