"use strict";
//23. Merge k Sorted Lists ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Есть несколько очередей(каждая — отсортированный список)
// надо объединить их в однугде все стоят по возрастанию
//     Фильтрация: Сначала убираешь пустые очереди (нульовые списки). Если никого нет, возвращаешь "пусто".
//     Старт: Ставишь табличку "Начало" (dummy узел), чтобы знать, откуда начинается новая очередь.
//     Сравнение: Смотришь на первого человека в каждой очереди (головы списков), выбираешь самого низкого (минимальный val).
//     Добавление: Ставишь его в новую очередь и сдвигаешь очередь, откуда он пришёл. Если очередь опустела, убираешь её.
//     Повтор: Продолжаешь, пока все очереди не закончатся.
//     Финиш: Возвращаешь новую очередь, начиная с первого человека после таблички.
// Пример: lists = [[1,4,5],[1,3,4],[2,6]]:
//     Сравниваю головы: 1, 1, 2 → беру 1, новая очередь: [1], списки: [[4,5],[1,3,4],[2,6]].
//     Сравниваю: 4, 1, 2 → беру 1, [1,1], списки: [[4,5],[3,4],[2,6]].
//     Сравниваю: 4, 3, 2 → беру 2, [1,1,2], списки: [[4,5],[3,4],[6]].
// И так далее → [1,1,2,3,4,4,5,6].
// Может быть использовано в
// Слияние логов:для десятков источников активности.
function mergeTwo(list1, list2) {
    let dummy = new ListNode();
    let merged = dummy;
    let p1 = list1;
    let p2 = list2;
    while (p1 && p2) {
        if (p1.val <= p2.val) {
            merged.next = p1;
            p1 = p1.next;
        }
        else {
            merged.next = p2;
            p2 = p2.next;
        }
        merged = merged.next;
    }
    merged.next = p1 ? p1 : p2;
    return dummy.next;
}
//Стек рекурсии для занимает O(log k) из-за деления на 2.
function mergeKLists(lists) {
    if (!lists.length)
        return null;
    return mergeListHelper(lists, 0, lists.length - 1);
}
;
function mergeListHelper(lists, left, right) {
    if (left === right)
        return lists[left];
    let mid = Math.floor((left + right) / 2);
    let l1 = mergeListHelper(lists, left, mid);
    let l2 = mergeListHelper(lists, mid + 1, right);
    return mergeTwo(l1, l2);
}
// по скорости (O(N * log k) против O(N * k)).
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//     // Убираем null списки
//     lists = lists.filter(list => list !== null);
//     if (lists.length === 0) return null;
//     // Создаём фиктивный узел для результата
//     const dummy = new ListNode(0);
//     let current = dummy;
//     while (true) {
//         // Находим минимальный элемент среди голов списков
//         let minIndex = -1;
//         let minVal = Infinity;
//         for (let i = 0; i < lists.length; i++) {
//             if (lists[i] && lists[i]!.val < minVal) {
//                 minVal = lists[i]!.val;
//                 minIndex = i;
//             }
//         }
//         // Если не нашли минимум, все списки пусты
//         if (minIndex === -1) break;
//         // Добавляем минимальный элемент в результат
//         current.next = new ListNode(minVal);
//         current = current.next;
//         // Сдвигаем указатель в списке, где взяли минимум
//         lists[minIndex] = lists[minIndex]!.next;
//         // Если список закончился, убираем его
//         if (!lists[minIndex]) {
//             lists.splice(minIndex, 1);
//         }
//     }
//     return dummy.next;
//     // Скорость: O(N * k), где N - общее число узлов, k - число списков
//     // Память: O(1) для указателей + O(N) для нового списка
// }
// Вспомогательные функции для локального тестирования
// Определение ListNode (только для локального запуска, на LeetCode не нужно)
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function createList(arr) {
    if (!arr.length)
        return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}
// Тесты
function runTests2() {
    const lists1 = [createList([1, 4, 5]), createList([1, 3, 4]), createList([2, 6])];
    console.log("Test 1:", listToArray(mergeKLists(lists1))); // [1,1,2,3,4,4,5,6]
    const lists2 = [];
    console.log("Test 2:", listToArray(mergeKLists(lists2))); // []
    const lists3 = [createList([])];
    console.log("Test 3:", listToArray(mergeKLists(lists3))); // []
}
runTests2();
// "212. Word Search II"!-----------------------------------------------------------------------------------------------.212
// Нужно найти слова из words на доске board, 
// используя соседние клетки (вверх, вниз, влево, вправо).
// Клетки не повторяются в одном слове.
// Пример: 
//board = [
//  ["o","a","a","n"],
//  ["e","t","a","e"],
//  ["i","h","k","r"],
//  ["i","f","l","v"]], 
//words = ["oath","pea","eat","rain"] → ["eat","oath"].
// 150_q_ts/212_wordSearchII_fast.ts
class TrieNode {
    nxt;
    word;
    constructor() {
        this.nxt = new Map(); // Дочерние узлы
        this.word = null; // Слово, если узел завершает слово
    }
}
function findWords(board, words) {
    const trie = new TrieNode();
    // Добавление слова в Trie
    function trieAdd(word) {
        let cur = trie;
        for (const ch of word) {
            if (!cur.nxt.has(ch)) {
                cur.nxt.set(ch, new TrieNode());
            }
            cur = cur.nxt.get(ch);
        }
        cur.word = word;
    }
    for (const word of words) {
        trieAdd(word);
    }
    const M = board.length, N = board[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // Направления: вниз, вверх, вправо, влево
    const ans = [];
    // DFS для поиска слов
    function findWord(i, j, cur) {
        const ch = board[i][j];
        if (cur.nxt.has(ch)) {
            const nxt = cur.nxt.get(ch);
            if (nxt.word) {
                ans.push(nxt.word); // Нашли слово
                nxt.word = null; // Убираем, чтобы избежать повторов
            }
            board[i][j] = '#'; // Помечаем как посещённую
            for (const [y, x] of dirs) {
                const ni = i + y, nj = j + x;
                if (ni >= 0 && ni < M && nj >= 0 && nj < N && board[ni][nj] !== '#') {
                    findWord(ni, nj, nxt);
                }
            }
            board[i][j] = ch; // Восстанавливаем клетку
            if (!nxt.nxt.size) {
                cur.nxt.delete(ch); // Обрезаем ненужный узел
            }
        }
    }
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            findWord(i, j, trie);
        }
    }
    return ans;
    // Скорость: O(m * n * 4^L), где m*n - размер доски, L - макс. длина слова
    // Оптимизация: обрезка Trie снижает повторные проверки
    // Память: O(sum(words[i].length)) для Trie, динамически уменьшается + O(L) для стека DFS
}
// Тесты
function runTests() {
    const board1 = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]];
    const words1 = ["oath", "pea", "eat", "rain"];
    console.log("Test 1:", findWords(board1, words1)); // ["eat","oath"]
    const board2 = [["a", "b"], ["c", "d"]];
    const words2 = ["abcb"];
    console.log("Test 2:", findWords(board2, words2)); // []
}
runTests();
