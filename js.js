// Задание 1. 

// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

// Если это число, то вывести в консоль чётное оно или нечётное.

// Если передано не число, выведите: «Упс, кажется, вы ошиблись».

// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.



let num = prompt('Введите число');
if (typeof (+num) != 'number' || isNaN(+num) || num == '') {
    console.log('Упс, вы ошиблись')
} else if (num % 2 === 0) {
    console.log('Четное число')
} else {
    console.log('Нечетное число')
}



// Задание 2.

// Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

// Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».

// Примечание: в этом задании использовать promt не нужно.


let x = 1;

if (typeof x === 'number') {
    console.log('x - число')
} else if (typeof x === 'string') {
    console.log('x - строка')
} else if (typeof x === 'boolean') {
    console.log('x - логический тип')
} else {
    console.log('Тип данных не определен')
}


// Задание 3.

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".


let str = 'Hello';
let Hello = str.split('').reverse().join('');
console.log(Hello);


// Задание 4.

// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.

let number = (Math.floor(Math.random() * 100));
console.log(number);




// Задание 5.

// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.


let nums = [1, 2, 3, 4, 5, 6];
console.log(nums.length);

nums.map(function (item, index, array) {
    console.log(item)
});



// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


let arr = [1, 1, 3, 1];
for (let i = 0; i < arr.length; i = i + 1) {
    if (arr[i] === 1) {
        console.log('true')
    } else {
        console.log('false')
    }
};


// Задание 7.

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.











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
