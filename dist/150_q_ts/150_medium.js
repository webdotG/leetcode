"use strict";
console.log('==== 150_Q_MEDIUM ========150_Q_MEDIUM>>===========150_Q_MEDIUM??================150_Q_MEDIUM>>================150_Q_MEDIUM??===============150_Q_MEDIUM>>=================150_Q_MEDIUM======>>');
//
//189. Rotate Array------------------------------------------------------------------------------------
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// function rotate(nums: number[], k: number): void {
//     // Нормализуем k, чтобы учесть случаи, когда k больше длины массива
//     // Например, если nums.length = 7 и k = 10, то k становится 10 % 7 = 3
//     k = k % nums.length;
//     // Счётчик перемещённых элементов (сколько элементов уже поставили на свои места)
//     let currStep = 0;
//     // Индекс, с которого начинаем новый цикл (увеличивается, если цикл завершён)
//     let currStartingIdx = 0;
//     // Продолжаем, пока не переместим все элементы (currStep < nums.length)
//     while (currStep < nums.length) {
//       // Начинаем цикл с текущего стартового индекса
//       let nextIdx = currStartingIdx;
//       // Сохраняем значение элемента на текущем индексе, чтобы не потерять его
//       let prev = nums[nextIdx];
//       // Выполняем цикл перемещений, пока не вернёмся в начальный индекс
//       do {
//         // Вычисляем следующий индекс, куда нужно переместить prev
//         // Используем модуль, чтобы учесть "зацикливание" массива
//         // Например, для k = 3 и nextIdx = 6: (6 + 3) % 7 = 2
//         nextIdx = (nextIdx + k) % nums.length;
//         // Сохраняем значение в следующем индексе, чтобы не затереть его
//         const tmp = nums[nextIdx];
//         // Перемещаем prev на следующий индекс
//         nums[nextIdx] = prev;
//         // Обновляем prev, чтобы в следующей итерации переместить tmp
//         prev = tmp;
//         // Увеличиваем счётчик перемещённых элементов
//         currStep++;
//       // Продолжаем, пока не вернёмся в начальный индекс цикла
//       } while (nextIdx !== currStartingIdx);
//       // Переходим к следующему стартовому индексу для нового цикла
//       currStartingIdx++;
//     }
// };
// function rotate(nums: number[], k: number): void {
//     let n = nums.length;
//     k = k % n;
//     nums.splice(0, 0, ...nums.splice(n - k, n));
// };
function rotate(nums, k) {
    k %= nums.length;
    if (k == 0)
        return;
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
}
;
console.log('ROTATE Массива на k Элементов вправо [1,2,3,4,5,6,7], k = 3 ', rotate([1, 2, 3, 4, 5, 6, 7], 3));
