// Задание 7.

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [1, 2, 3, 4, "abc", "", null, 0];
let chet = 0;
let nechet = 0;
let nullCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != 'string') {
        if (arr[i] == null) {
            nullCount++
        } else if (arr[i] % 2 == 0) {
            chet++
        } else {
            nechet++
        }
    }
}



console.log('Четных чисел ' + chet);
console.log('Нечетных чисел ' + nechet);
console.log('Нулей ' + nullCount);