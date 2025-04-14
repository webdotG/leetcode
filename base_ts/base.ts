console.log('==== BASE ========BASE>>===========BASE??================BASE>>================BASE??===============BASE>>=================BASE======>>')
//
//2635. Apply Transform Over Each Element in Array-----------------------------------------------------------------------------------------
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
        // const res: number[] = []
    // for (let i = 0; i < arr.length; i++) {
    //     res.push(fn(arr[i], i))
    // }
    // return res

    const newArr: number[] = []
    for(let i = 0; i < arr.length; i++){
        newArr[i] = fn(arr[i], i)
    }
    return newArr
}
const fn = ( n:number ):number =>  n + 1; 
console.log('MAP К Каждому Элементу [1,3,6,9] fn=(n)=> n + 1; ', map([1,3,6,9], fn))

//2634. Filter Elements from Array -----------------------------------------------------------------------------------
type Fn2 = (n: number, i: number) => any
function filter(arr: number[], fn2: Fn2): number[] {
  const newArr:number[] = []
    
  for(let i = 0; i < arr.length; i++) {
//     if(fn2(arr[i],i)) {
//         newArr.push(arr[i])
//     }
    fn2(arr[i],i) && newArr.push(arr[i])
  }
  return newArr
};
const fn2 = (n: number, i: number):boolean => n > 10
console.log('FILTER К Каждому Элементу [10,30,60,90] fn =(n)=> n > 10 ', filter([10,30,60,90], fn2))


//2626. Array Reduce Transformation-----------------------------------------------------------------------------------------------------
type Fn3 = (accum: number, curr: number) => number
function reduce(nums: number[], fn3: Fn3, init: number): number {
  
    let result = init

    for(let i = 0; i < nums.length; i++){
        result = fn3(result, nums[i])
    }
    return result
};
const fn3 = (accum: number, curr: number):number => accum + curr
console.log('REDUCE К Каждому Элементу Начиная с init=0 [1,3,6,9] fn = sum(accum, curr)  accum + curr; ', reduce([1,3,6,9], fn3, 0))

//2629. Function Composition--------------------------------------------------------------------------------------------------------
// Композиция функций — это способ комбинировать несколько функций так, 
// чтобы результат одной функции передавался как вход для другой. 
// В итоге получается новая функция, 
// которая выполняет все эти операции в определённом порядке.
// есть функции f и g, 
// композиция функций записывается как (f ∘ g)(x) 
// и означает f(g(x)).
// Это значит, что сначала применяется функция g к x, 
// а потом результат передаётся в f.type F = (x: number) => number;
type F = (x: number) => number;
function compose(functions: F[]): F {
    
    return function(x) {
        let result = x 
        for(let i = functions.length - 1; i >= 0; i--){
            result = functions[i](result)
        }
        return result
    }
};
console.log('Composition Композит Функций ', compose)

//2666. Allow One Function Call-------------------------------------------------------------------------------
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn4: Function): OnceFn {
    let isCalling = false

    return function (...args) {
        if(!isCalling) {
            isCalling = true
            return fn4(...args) 
        }
        return undefined                       
    };
}


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
 function majorityElement(nums: number[]): number {
    let count = 1
    let result = nums[0]
  
    for (let i = 1; i < nums.length; i++) {
      if (count === 0) {
        result = nums[i]
        count = 1
      }
  
      if (result === nums[i]) count++
      else count--
    }
  
    return result
  };
// Хэш-таблица Время: O(n), память: O(n)
  function majorityElementHash(nums: number[]): number {
    const map = new Map<number, number>();
    const threshold = Math.floor(nums.length / 2);
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num)! > threshold) return num;
    }
    return 0; // Никогда не дойдёт сюда по условию
}
// Сортировка Время: O(n log n), память: O(1) (если in-place).
function majorityElementSort(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}
console.log('МАЖОРИТАРНЫЙ ЭЛЕМЕНТ встречается больше ⌊n / 2⌋ раз [2,2,1,1,1,2,2,1,1,1,1,1,3,3,3,3,4,4,4,4]', majorityElement([2,2,1,1,1,2,2,1,1,1,1,1,3,3,3,3,4,4,4,4]))

 type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};
function expect(val: any): ToBeOrNotToBe {
    let original_value=val;
    return{
    toBe: function toBe(val){
        if(original_value===val){
            return  true
        }
        else{
            // console.log('Not Equal')
            // throw new Error("Not Equal")
            return false;
        }
    },
   notToBe: function notToBe(val){
        if(original_value!== val){
            return true
        }
        else{
            // console.log('Equal')
            // throw new Error("Equal")
            return false;
        }
    }
    }
    
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */