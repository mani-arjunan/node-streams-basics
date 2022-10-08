// // // // function sample(arr) {
// // // //     try {
// // // //         arr.map()
// // // //     } catch (e) {
// // // //         console.log('Error encountered')
// // // //     }

// // // // }

// // // // sample(2)
// // // const buf = Buffer.alloc(2048);
// // // buf.write('Hello')
// // // console.log(buf.toString())

// // // fetch('').then(data => data.json()).then(data => console.log(data))

// // // something()
// // // something()
// // // something()
// // // something()
// // // something()



// // const arr = [
// //     {
// //         name: 'Manikandan',
// //         marks: 20,
// //     },
// //     {
// //         name: 'Manikandan',
// //         marks: 22,
// //     },
// //     {
// //         name: 'Arjunan',
// //         marks: 30,
// //     },
// //     {
// //         name: 'Arjunan',
// //         marks: 24,
// //     },
// //     {
// //         name: 'Ismail',
// //         marks: 20,
// //     },
// //     {
// //         name: 'Dinesh',
// //         marks: 30,
// //     },
// // ]

// // // const internalReduce = arr.reduce((initial, next) => {
// // //     if (initial[next.name]) {
// // //         initial[next.name] = [...initial[next.name], next.marks]
// // //     } else {
// // //         initial[next.name] = [next.marks]
// // //     }

// // //     return initial
// // // }, {})

// // const customReduce = (arr, callback, initial) => {
// //     let accumulator = initial || arr[0];
// //     let currentValue = initial ? arr[0] : arr[1];

// //     for (let i = 0; i < arr.length; i++) {
// //         accumulator = callback(accumulator, currentValue)
// //         currentValue = arr[i + 1]
// //     }

// //     return accumulator
// // }

// // console.log(customReduce(arr, (initial, next) => {
// //     if (initial[next.name]) {
// //         initial[next.name] = [...initial[next.name], next.marks]
// //     } else {
// //         initial[next.name] = [next.marks]
// //     }
// //     return initial
// // }, {}))

// const arr = [
//     [112, 42, 83, 119],
//     [56, 125, 56, 49],
//     [15, 78, 101, 43],
//     [62, 98, 114, 108]
// ]
const n = 5;
// step1: i = 0, j=0;
// step1: i = 0, j=1;
// step1: i = 0, j=2;
// step1: i = 0, j=3;
for(let i=0;i<n;i++){
    let str = ''
    for(let j=0;j<n;j++) {
        if(j === n-i-1) {
            str += '*'
        } else {
            str += ' '
        }
    }
    console.log(str)
}