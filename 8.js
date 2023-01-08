// Задание 8.

// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

// Используйте шаблонные строки.

let myMap = new Map();
myMap.set('key', 'yellow');
myMap.set('key2', 'red');
myMap.set('key3', 'black');

myMap.forEach((value, key, myMap) => {
    console.log(`Ключ - ${key},значение - ${value}`);
});