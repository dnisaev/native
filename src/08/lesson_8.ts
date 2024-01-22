// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return sum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    if (a === b && a === c) {
        return '10'
    } else if (b === c && a === b - 1 || b === a && c === b - 1) {
        return '01'
    } else if (b !== a && b !== c) {
        return '11'
    } else {
        return '00'
    }
    // В return стоит "заглушка", чтоб typescript не ругался
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let array = Array.from(number.toString(), Number)
    return array.reduce((sum, num) => sum + num)
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 2] < arr[i + 1] + arr[(i + 1) + 2]) {
            return false
        } else {
            return true
        }
    }
    return true
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let newArr = [...array]
    let integerArr = newArr.filter(int => {
        if (int > 0 && Number.isInteger(int)) {
            return int
        }
    })
    return integerArr.map(int => int * int)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let sum = 0;
    for (let i = 0; i <= N; i++) {
        sum += i
    }
    return sum
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let newArr = [];
    let countBanknotes = 0;
    for (let i = 0; i < banknotes.length; i++){
        countBanknotes = Math.floor(amountOfMoney / banknotes[i])
        for (let j = 0; j < countBanknotes; j++){
            newArr.push(banknotes[i])
            amountOfMoney = amountOfMoney - banknotes[i]
        }
    }
    return newArr
}