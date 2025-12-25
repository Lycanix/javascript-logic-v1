// -Infinity adalah angka paling kecil yang ada js
// Infinity adalah angka paling besar di js
// let numbers1 = [5, 3, 6, 18, 9, 20, 3, 7]; // array of number
// function getMax(satu) {
// 	let result = -Infinity;
// 	for (let q = 0; q < satu.length; q++) {
// 		const scan = satu[q];

// 		if (scan > result) {
// 			result = scan;
// 		}
// 	}
// 	return result;
// }
// console.log(getMax(numbers1)); // 20
// =====================================================
// let numbers2 = [5, 3, 6, 18, 9, 20, 1, 7, -10];
// function getMin(dua) {
// 	let result = Infinity;

// 	for (let w = 0; w < dua.length; w++) {
// 		const scan = dua[w];
// 		if (scan < result) {
// 			result = scan;
// 		}
// 	}
//   return result
// }
// console.log(getMin(numbers2)); // -10
// =====================================================
// let numbers3 = [5, 3, 6, 18, 9, 20, 1, 7]; // array of number

// function getMax(data1) {
// 	let result = [];
// 	let temp1 = 0;
// 	let temp2 = 0;
// 	let max = -Infinity;
// 	let min = Infinity;
// 	for (let e = 0; e < data1.length; e++) {
// 		const scan = data1[e];
// 		if (scan < min) {
// 			min = scan;
// 		}
// 		if (scan > max) {
// 			max = scan;
// 		}
// 	}
// 	result.push(min);
// 	result.push(max);
// 	return result;
// }

// console.log(getMax(numbers3)); // [1, 20]

// =====================================================
// let text1 = 'mangga;apel;jambu;nanas';
// function splitData(word) {
// 	let result = [];
// 	let temp = '';
// 	for (let r = 0; r < word.length; r++) {
// 		const scan = word[r];
// 		// console.log(scan);

// 		if (scan !== ';') {
// 			temp += scan;
// 		} else {
// 			result.push(temp);
// 			temp = '';
// 		}
// 	}
// 	result.push(temp);
// 	return result;
// }
// console.log(splitData(text1)); // ["mangga", "apel", "jambu", "nanas"]
// =====================================================
// // 1. Buatlah sebuah variabel dengan nama "animals"

// // 2. Isi variable tersebut dengan array yang memiliki 3 elemen string "kucing", "domba", "kuda"
// let animals = ['kucing', 'domba', 'kuda'];
// // 3. Cetak element array pertama ("kucing")
// console.log(animals[0]);
// // 4. Cetak element array ketiga ("kuda")
// console.log(animals[2]);
// // 5. Ganti element ketiga dari array menjadi "kelinci"
// animals[2] = 'Kelinci';
// // 6. Cetak element array ketiga ("kelinci")
// console.log(animals[2]);
// // 7. Gunakan property length untuk mencetak jumlah element di array
// console.log(animals.length);

// // 8. Gunakan loop for untuk mencetak nilai animals di console secara berurutan
// // output:
// // kucing
// // domba
// // kuda
// for (let index = 0; index < animals.length; index++) {
// 	const element = animals[index];
// 	console.log(element);
// }
// =====================================================
// const numbers4 = [1, 4, 2, 1, 51, 67, 8, 32, 21, 65];
// // Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari kumpulan angka diatas dan sesuaikan kebutuhan parameternya
// function getMax(nums) {
// 	let result = -Infinity;
// 	for (let z = 0; z < nums.length; z++) {
// 		const scan = nums[z];

// 		if (scan > result) {
// 			result = scan;
// 		}
// 	}

// 	return `Nilai maksimum adalah ${result}`;
// }
// console.log(getMax(numbers4));

// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 67

// =====================================================
// const number7 = 103;
// const number8 = 272;
// const number9 = 189;
// let all = [number7, number8, number9]
// function getMax(nums) {
// 	let result = -Infinity;
// 	for (let z = 0; z < nums.length; z++) {
// 		const scan = nums[z];

// 		if (scan > result) {
// 			result = scan;
// 		}
// 	}

// 	return `Nilai maksimum adalah ${result}`;
// }
// console.log(getMax(all));
// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari ke-3 angka diatas dan sesuaikan kebutuhan parameternya

// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 272
// =====================================================
/*
# Ganjil Genap

## Objectives
- Mampu menggunakan built in function pada Array seperti .push, .shift, .unshift, dll
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
- Mampu menggunakan template literals


## Directions
Diberikan sebuah function ganjilGenap yang menerima satu parameter `plat` bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).

Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.
*/
// function ganjilGenap(plat) {
// 	// invalid data
// 	if (plat === undefined) {
// 		return 'invalid data';
// 	}

// 	// string kosong
// 	if (plat.length === 0) {
// 		return 'plat tidak ditemukan';
// 	}

// 	let temp = '';
// 	let genap = 0;
// 	let ganjil = 0;
// 	for (let x = 0; x < plat.length; x++) {
// 		const scan = plat[x];
// 		if (scan !== ';' && scan !== undefined) {
// 			temp += scan;
// 		}
// 		if (scan === ';' || x === plat.length - 1) {
// 			if (temp.length % 2 === 0) {
// 				genap++;
// 				temp = '';
// 			} else if (temp.length % 2 === 1) {
// 				ganjil++;
// 				temp = '';
// 			}
// 		}
// 	}

// 	if (genap > ganjil) {
// 		if (ganjil !== 0) {
// 			return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`;
// 		} else {
// 			return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`;
// 		}
// 	}
// 	if (ganjil > genap) {
// 		if (genap !== 0) {
// 			return `plat ganjil sebanyak ${ganjil} dan plat genap sebanyak ${genap}`;
// 		} else {
// 			return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`;
// 		}
// 	}
// }

// console.log(ganjilGenap('2341;3429;864;1309;1276')); //plat genap sebanyak 4 dan plat ganjil sebanyak 1
// console.log(ganjilGenap('2347;3429;1305')); //plat genap sebanyak 3 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap('864;1308;1276;1432')); //plat genap sebanyak 3 dan plat ganjil sebanyak 1
// console.log(ganjilGenap('')); //plat tidak ditemukan
// console.log(ganjilGenap()); //invalid data
// =====================================================
/*
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19287312&assignment_repo_type=AssignmentRepo)
# Fill

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function `.fill()`

### HINTS


- Wajib menggunakan `While loop`
---

## Objectives

- Mampu menggunakan built in function pada Array
- Mampu melakukan manipulasi pada sebuah Array
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

Diberikan sebuah function `fill` yang memiliki 4 parameter yaitu `data` (mandatory) dengan tipe Array, `value` (mandatory), `start` (optional) dengan tipe integer dan `end` (optional) dengan tipe integer.

Buatlah algoritma di dalam function `fill` sehingga bisa menghasilkan output seperti contoh berikut:

```js
function fill(data, value, start, end) {
  // your code here
}


//Test Case
console.log(fill()); 
// Invalid input

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"])); 
// Invalid input

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4)); 
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3)); 
// [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20)); 
// [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1)); 
// [ 'Golf', 'Beta', 'Charlie', 'Delta' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1)); 
// [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India")); 
// [ 'India', 'India', 'India', 'India', 'India', 'India' ]
```

*/
// function fill(data, value, start, end) {
// 	if (!data || !value) {
// 		return 'Invalid data';
// 	}
// 	let startIndex = start === undefined ? 0 : start;
// 	let endIndex = end === undefined ? data.length : end;
// 	let i = startIndex;
// 	while (i < endIndex && i < data.length) {
// 		data[i] = value;
// 		i++;
// 	}
// 	return data;
// }

//Test Case
// console.log(fill());
// console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo']));
// Invalid input

// console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Echo', 2, 4));
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]

// console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Foxtrot', 1, 3));
// [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]

// console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Juliett', 3, 20));
// [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]

// console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Golf', 0, 1));
// [ 'Golf', 'Beta', 'Charlie', 'Delta' ]

// console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'], 'Hotel', 1));
// [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]

// console.log(
// 	fill(['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo', 'Foxtrot'], 'India')
// );
// [ 'India', 'India', 'India', 'India', 'India', 'India' ]

// =====================================================
