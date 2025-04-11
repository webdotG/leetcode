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

//1.----------------------------------------------------------------------------------------------------------------------
// Дан массив целых чисел nums и целое число target. 
// Нужно вернуть индексы двух чисел из массива
// Сумма которых равна target.
// Подход 1: Брутфорс (два вложенных цикла)
// Скорость: O(n^2) — перебираем все пары чисел.
// Память: O(1) — используем только константы для хранения индексов.
function twoSum(nums: number[], target: number): number[] {
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
function twoSumHash(nums: number[], target: number): number[]{
    const map: {[key: number] : number } = {}

    for(let i =0; i < nums.length; i++){
        const complement = target - nums[i]; // Ищем второе число
        if (map[complement] !== undefined) {
            // Если complement уже в хэш-таблице, нашли пару
            return [map[complement], i];
        }
        // Добавляем текущее число и его индекс в хэш-таблицу
        map[nums[i]] = i;
    }
    return []
}
console.log('Индексы Двух Чисел [25,9,12,6,10,42,15,69] Сумма Которых Равна target 25',twoSumHash([25,9,12,6,10,42,15,69], 25))

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
function romanToInt(s: string): number {
    const sym: Record<string, number> = {
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
        } else {
            result += cur;
        }
    }
    return result;
}
console.log('Roman To Integer input s = "MCMXCIV" : ',romanToInt("MCMXCIV") )

//Удаление постов с определённым тегом (например, val — ID спама) из списка ленты для улучшения пользовательского опыта.
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


