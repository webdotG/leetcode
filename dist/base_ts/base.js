"use strict";
console.log('==== BASE ========BASE>>===========BASE??================BASE>>================BASE??===============BASE>>=================BASE======>>');
//
function map(arr, fn) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
}
const fn = (n) => n + 1;
console.log('Преобразование К Каждому Элементу В Массиве [1,3,6,9] fn=(n)=>return n + 1; ', map([1, 3, 6, 9], fn));
//169. Majority Element-----------------------------------------------------------------------
//надо найти мажоритарный элемент 
// — число, которое встречается больше ⌊n / 2⌋ раз
//Алгоритм Бойера-Мура! 
//  Используем переменную candidate (кандидат) и count (счётчик):
//  Если count = 0, выбираем текущий элемент как candidate.
//  Если текущий элемент равен candidate, увеличиваем count.
//  Если не равен, уменьшаем count
//  В конце candidate будет мажоритарным элементом.
// Время: O(n) Память: O(1)
function majorityElement(nums) {
    let count = 1;
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            result = nums[i];
            count = 1;
        }
        if (result === nums[i])
            count++;
        else
            count--;
    }
    return result;
}
;
// Хэш-таблица Время: O(n), память: O(n)
function majorityElementHash(nums) {
    const map = new Map();
    const threshold = Math.floor(nums.length / 2);
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > threshold)
            return num;
    }
    return 0; // Никогда не дойдёт сюда по условию
}
// Сортировка Время: O(n log n), память: O(1) (если in-place).
function majorityElementSort(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}
console.log('МАЖОРИТАРНЫЙ ЭЛЕМЕНТ встречается больше ⌊n / 2⌋ раз [2,2,1,1,1,2,2,1,1,1,1,1,3,3,3,3,4,4,4,4]', majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 3, 3, 3, 3, 4, 4, 4, 4]));
function expect(val) {
    let original_value = val;
    return {
        toBe: function toBe(val) {
            if (original_value === val) {
                return true;
            }
            else {
                // console.log('Not Equal')
                // throw new Error("Not Equal")
                return false;
            }
        },
        notToBe: function notToBe(val) {
            if (original_value !== val) {
                return true;
            }
            else {
                // console.log('Equal')
                // throw new Error("Equal")
                return false;
            }
        }
    };
}
;
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */ 
