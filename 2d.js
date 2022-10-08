let d = 3;
const arr = [1, 2, 3, 4, 5];
let temp

// while (d !== 0) {
temp = arr[0]
for (let i = 0; i < arr.length - 1; i++) {
	arr[i] = arr[i + 1]
}
arr[arr.length - 1] = temp;
// 	d--;
// }

console.log(arr)