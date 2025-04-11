console.log('СТРОКИ МЕТОДЫ ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------>');

console.log('Шпаргалка:');
console.log('- toLowerCase: () => str — преобразует строку в нижний регистр');
console.log('- toUpperCase: () => str — преобразует строку в верхний регистр');
console.log('- trim: () => str — убирает пробелы с начала и конца');
console.log('- slice: (start, end) => str — вырезает часть строки');
console.log('- substring: (start, end) => str — вырезает часть строки между индексами');
console.log('- replace: (search, replacement) => str — заменяет первое совпадение');
console.log('- replaceAll: (search, replacement) => str — заменяет все совпадения');
console.log('- split: (separator) => arr — разбивает строку в массив по разделителю');
console.log('- includes: (search) => bool — проверяет, есть ли подстрока');
console.log('- startsWith: (search) => bool — проверяет, начинается ли строка с подстроки');
console.log('- endsWith: (search) => bool — проверяет, заканчивается ли строка подстрокой');
console.log('- indexOf: (search) => num — возвращает индекс первого вхождения');
console.log('- charAt: (index) => str — возвращает символ по индексу');

// .toLowerCase-------------------------------------------------------------------- toLowerCase()
const strLower = "HeLLo WoRLD";
const lowerResult = strLower.toLowerCase();
// "hello world"
console.log('Метод toLowerCase: преобразует строку в нижний регистр, значение: "HeLLo WoRLD", результат: ', lowerResult);
// Пример 1: Сравнение строк без учета регистра
const userInput = "AdMiN";
const isAdmin = userInput.toLowerCase() === "admin"; // true
// Пример 2: Нормализация email для поиска в базе
const email = "User@Example.COM";
const normalizedEmail = email.toLowerCase(); // "user@example.com"

// .toUpperCase-------------------------------------------------------------------- toUpperCase()
const strUpper = "HeLLo WoRLD";
const upperResult = strUpper.toUpperCase();
// "HELLO WORLD"
console.log('Метод toUpperCase: преобразует строку в верхний регистр, значение: "HeLLo WoRLD", результат: ', upperResult);
// Пример 1: Форматирование кодов или идентификаторов
const code = "abc123";
const formattedCode = code.toUpperCase(); // "ABC123"
// Пример 2: Выделение заголовков
const title = "new article";
const upperTitle = title.toUpperCase(); // "NEW ARTICLE"

// .trim-------------------------------------------------------------------- trim()
const strTrim = "   hello world   ";
const trimResult = strTrim.trim();
// "hello world"
console.log('Метод trim: убирает пробелы с начала и конца, значение: "   hello world   ", результат: ', trimResult);
// Пример 1: Очистка пользовательского ввода
const input = "   John Doe   ";
const cleanInput = input.trim(); // "John Doe"
// Пример 2: Подготовка данных перед сохранением
const rawData = "  product name  ";
const trimmedData = rawData.trim(); // "product name"

// .slice-------------------------------------------------------------------- slice()
const strSlice = "JavaScript";
const sliceResult = strSlice.slice(0, 4);
// "Java"
console.log('Метод slice: вырезает часть строки с 0 до 4 индекса, значение: "JavaScript", результат: ', sliceResult);
// Пример 1: Извлечение года из даты
const date = "2025-04-09";
const year = date.slice(0, 4); // "2025"
// Пример 2: Усечение длинного текста
const longText = "This is a very long description";
const shortText = longText.slice(0, 10); // "This is a"

// .substring-------------------------------------------------------------------- substring()
const strSubstring = "JavaScript";
const substringResult = strSubstring.substring(4, 10);
// "Script"
console.log('Метод substring: вырезает часть строки с 4 до 10 индекса, значение: "JavaScript", результат: ', substringResult);
// Пример 1: Извлечение имени файла без расширения
const fileName = "document.pdf";
const name = fileName.substring(0, 8); // "document"
// Пример 2: Получение кода из строки
const codeStr = "ID12345678";
const codePart = codeStr.substring(2, 6); // "1234"

// .replace-------------------------------------------------------------------- replace()
const strReplace = "Hello world, hello JS";
const replaceResult = strReplace.replace("hello", "hi");
// "Hi world, hello JS"
console.log('Метод replace: заменяет первое "hello" на "hi", значение: "Hello world, hello JS", результат: ', replaceResult);
// Пример 1: Замена символа в URL
const url = "http://site.com";
const secureUrl = url.replace("http", "https"); // "https://site.com"
// Пример 2: Маскировка данных
const phone = "123-456-7890";
const maskedPhone = phone.replace("456", "xxx"); // "123-xxx-7890"

// .replaceAll-------------------------------------------------------------------- replaceAll()
const strReplaceAll = "Hello world, hello JS";
const replaceAllResult = strReplaceAll.replaceAll("hello", "hi");
// "Hi world, hi JS"
console.log('Метод replaceAll: заменяет все "hello" на "hi", значение: "Hello world, hello JS", результат: ', replaceAllResult);
// Пример 1: Удаление всех пробелов
const spaced = "a b c d";
const noSpaces = spaced.replaceAll(" ", ""); // "abcd"
// Пример 2: Замена всех запятых на точки
const list = "1,2,3,4";
const dotList = list.replaceAll(",", "."); // "1.2.3.4"

// .split-------------------------------------------------------------------- split()
const strSplit = "apple,banana,orange";
const splitResult = strSplit.split(",");
// ["apple", "banana", "orange"]
console.log('Метод split: разбивает строку по запятой в массив, значение: "apple,banana,orange", результат: ', splitResult);
// Пример 1: Парсинг CSV строки
const csv = "name,age,city";
const csvArray = csv.split(","); // ["name", "age", "city"]
// Пример 2: Разделение пути файла
const path = "/usr/local/bin";
const pathParts = path.split("/"); // ["", "usr", "local", "bin"]

// .includes-------------------------------------------------------------------- includes()
const strIncludes = "Hello world";
const includesResult = strIncludes.includes("world");
// true
console.log('Метод includes: проверяет, есть ли "world" в строке, значение: "Hello world", результат: ', includesResult);
// Пример 1: Проверка наличия ключевого слова
const text = "Error: invalid input";
const hasError = text.includes("Error"); // true
// Пример 2: Фильтрация URL
const link = "https://example.com";
const isSecure = link.includes("https"); // true

// .startsWith-------------------------------------------------------------------- startsWith()
const strStarts = "Hello world";
const startsResult = strStarts.startsWith("Hello");
// true
console.log('Метод startsWith: проверяет, начинается ли строка с "Hello", значение: "Hello world", результат: ', startsResult);
// Пример 1: Проверка префикса номера телефона
const phoneNum = "+7-999-123-45-67";
const isRussian = phoneNum.startsWith("+7"); // true
// Пример 2: Валидация формата файла
const file = "image.png";
const isImage = file.startsWith("image"); // true

// .endsWith-------------------------------------------------------------------- endsWith()
const strEnds = "Hello world";
const endsResult = strEnds.endsWith("world");
// true
console.log('Метод endsWith: проверяет, заканчивается ли строка на "world", значение: "Hello world", результат: ', endsResult);
// Пример 1: Проверка расширения файла
const doc = "report.pdf";
const isPdf = doc.endsWith(".pdf"); // true
// Пример 2: Валидация домена
const emailDomain = "user@example.com";
const isCom = emailDomain.endsWith(".com"); // true

// .indexOf-------------------------------------------------------------------- indexOf()
const strIndex = "Hello world";
const indexResult = strIndex.indexOf("world");
// 6
console.log('Метод indexOf: возвращает индекс первого вхождения "world", значение: "Hello world", результат: ', indexResult);
// Пример 1: Поиск позиции разделителя
const data = "name:John";
const colonIndex = data.indexOf(":"); // 4
// Пример 2: Проверка наличия символа
const textCheck = "some text";
const spaceIndex = textCheck.indexOf(" "); // 4, если -1 — символа нет

// .charAt-------------------------------------------------------------------- charAt()
const strChar = "Hello";
const charResult = strChar.charAt(1);
// "e"
console.log('Метод charAt: возвращает символ на индексе 1, значение: "Hello", результат: ', charResult);
// Пример 1: Извлечение первой буквы
const word = "JavaScript";
const firstLetter = word.charAt(0); // "J"
// Пример 2: Проверка символа в пароле
const password = "pass123";
const thirdChar = password.charAt(2); // "s"