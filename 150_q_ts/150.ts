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