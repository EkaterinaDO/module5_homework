// Задание 6.

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let check = true
let arr = [1, 1, 1, 1];
for (let i = 1; i < arr.length; i++) {
    if (arr[0] != arr[i]) {
        check = false
        break
    }
};
console.log(check)