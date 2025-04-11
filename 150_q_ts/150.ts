//88. --------------------------------------------------------------------------------- 
// Объединение отсортированных массивов
// Вход: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Выход: [1,2,2,3,5,6]
// Объяснение: Мы объединяем массивы [1,2,3] и [2,5,6].
// Результат объединения — [1,2,2,3,5,6], где элементы из nums1 подчёркнуты.
function mergeMetod(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a, b) => {
      return a - b;
    });
};    
// Скорость: mergeWileIf O(m + n) против 
//  O((m + n) log (m + n)) у mergeMetod. 
// mergeMetod неэффективнf для больших массивов.
// Память: mergeWileIf лучше O(1) против O(n) у mergeMetod.
function mergeWileIf(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1; // последний элемент в nums1
    let p2 = n - 1; // последний элемент в nums2
    let p = m + n - 1; // на последнюю позицию в nums1
    // Пока есть элементы в обоих массивах
    while (p2 >= 0 && p1 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
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


//27. --------------------------------------------------------------------------------- 
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

//     Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
//     Return k.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }

// If all assertions pass, then your solution will be accepted.
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Фильтрация постов:

//     Удаление постов с определённым тегом (например, val — ID спама) из списка ленты для улучшения пользовательского опыта.

// Обработка данных профиля:

//     Удаление устаревших записей (например, val — ID старого опыта работы) из списка в профиле.
// удаление значений из обьекта 
// если это число не равно тому что ищем 
// то записываем на новое место 
// и 
function removeElement(nums: number[], val: number): number {
    let k = 0; // Указатель на позицию для элементов != val
    
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



// 2843. Count Symmetric Integers------------------------------------------------------------------------
// Фильтрация метрик:
//Подсчёт "симметричных" значений в статистике 
// (например, баланс активности) для отчётов.
// Двузначные (меньше 100): Если номер делится на 11
function countSymmetricIntegers(low: number, high: number): number {
    let res = 0;
    for (let a = low; a <= high; ++a) {
        if (a < 100 && a % 11 === 0) {
            // Двузначные числа: 11, 22, ..., 99
            res++;
        } else if (1000 <= a && a < 10000) {
            // Четырёхзначные числа: считаем суммы половин
            const left = Math.floor(a / 1000) + Math.floor((a % 1000) / 100); // Первые две цифры
            const right = Math.floor((a % 100) / 10) + (a % 10);              // Последние две цифры
            if (left === right) {
                res++;
            }
        }
    }
    return res;
    // Скорость: O(high - low), линейный проход без строковых операций
    // Память: O(1), только константы
}

// Тесты
function runTests5() {
    console.log("Test 1:", countSymmetricIntegers(1, 100)); // 9
    console.log("Test 2:", countSymmetricIntegers(1200, 1230)); // 4
}
runTests5();

//3507. Minimum Pair Removal to Sort Array I----------------------------------------------------------------3507.
// Given an array nums, you can perform the following operation any number of times:
//     Select the adjacent pair with the minimum sum in nums. If multiple such pairs exist, choose the leftmost one.
//     Replace the pair with their sum.
// Return the minimum number of operations needed to make the array non-decreasing.
// An array is said to be non-decreasing if each element is greater than or equal to its previous element (if it exists).
// Example 1:
// Input: nums = [5,2,3,1]
// Output: 2
// Explanation:
//     The pair (3,1) has the minimum sum of 4. After replacement, nums = [5,2,4].
//     The pair (2,4) has the minimum sum of 6. After replacement, nums = [5,6].
// The array nums became non-decreasing in two operations.
// Example 2:
// Input: nums = [1,2,2]
// Output: 0
// Explanation:
// The array nums is already sorted.
function minOperationsGreedyLoop(nums: number[]): number {
    let operations = 0;
    let arr = [...nums];

    while (true) {
        let isNonDecreasing = true;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                isNonDecreasing = false;
                break;
            }
        }
        if (isNonDecreasing) break;

        let minSum = Infinity;
        let minIndex = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            const sum = arr[i] + arr[i + 1];
            if (sum < minSum) {
                minSum = sum;
                minIndex = i;
            }
        }
        arr.splice(minIndex, 2, minSum);
        operations++;
    }

    return operations;
}

function minOperationsOptimizedGreedy(nums: number[]): number {
    let operations = 0;
    let arr = [...nums];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            arr[i + 1] = arr[i] + arr[i + 1];
            arr.splice(i, 1);
            operations++;
            i--;
        }
    }

    return operations;
}
// Анализ
// 1. Greedy Loop
//     Скорость: O(n² * m)
//         Проверка неубываемости: O(n).
//         Поиск минимальной пары: O(n).
//         splice: O(n).
//         Цикл повторяется m раз (число операций).
//     Память: O(n)
//         Копия массива.
//---------------------------------------------------
// // 2. Optimized Greedy
//     Скорость: O(n²)
//         Один проход: O(n), splice внутри: O(n).
//     Память: O(n)
//         Копия массива.
// Сравнение
// Подход	Скорость	Память	Применимость
// Greedy Loop	O(n² * m)	O(n)	Маленькие массивы
// Optimized Greedy	O(n²)	O(n)	Универсальный
// Вывод: Optimized Greedy быстрее и элегантнее,
//        Greedy Loop точнее следует условию задачи.
