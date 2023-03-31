// Заданиие 1
let index = prompt('Введите имя')
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
let ind = arr.indexOf(index)
arr.splice(ind, 1)
console.log(arr);


// Задание 2
// let index = prompt('Введите число')
// let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
// if (index <= arr.length) {
//     arr.splice(index, 1)
//     console.log(arr)
// } else {
//     console.log('go home');
// }



//Задание3
// let arr2 = [
//     [
//         {

//             a: { price: 20 }

//         }
//     ],
//     [
//         {

//             a: { price: 35 }

//         }
//     ],
//     [
//         {

//             a: { price: 44 }

//         }
//     ]
// ]

// let flad = arr2.flat(Infinity)
// let total = 0
// let all = flad.filter(item => total += item.a.price)
// console.log(total);

