// let row = 3;
// let col = 2;
// let symbol = '!@#$%^&*()';
// let result = []; // box besar
// let index = 0; // ini untuk akses symbol

// for (let i = 1; i <= row; i++) {
// 	let temp = [];
// 	for (let j = 0; j < col; j++) {
// 		temp.push(symbol[index]);
//         index++
// 	}
//     result.push(temp)
// }
// console.log(result);

/*
    [
        ["!", "@"],
        ["#", "$"],
        ["%", "^"]
    ]
*/

// ========================================
// 1
// ========================================
// setiap index 0 dari variabel menu adalah nama resto
// mulai dari index 1 - index terakhir berisi nama menu yang ada di resto tsb

// mencari nama resto yang menjual makanan sesuai dengan variabel data
// function findData(data) {
// 	let menu = [
// 		['Mama Suka', 'Nasi Bakar', 'Ayam Goreng', 'Bakso', 'Jus Jambu'],
// 		[
// 			'Resto KQ 5',
// 			'Nasi Goreng',
// 			'Mie Ayam',
// 			'Ayam Bakar',
// 			'Bakso',
// 			'Jus Melon',
// 		],
// 		['Papa Suka', 'Ayam Bakar', 'Nasi Bakar', 'Jus Melon'],
// 	];

// 	let result = [];

// 	if (!data) {
// 		return 'Invalid data';
// 	}

// 	for (let z = 0; z < menu.length; z++) {
// 		const split = menu[z];
// 		// console.log(scan.length);
// 		for (let x = 0; x < split.length; x++) {
// 			const scan = split[x];
// 			// console.log(scan);
// 			if (data === scan) {
// 				result.push(split[0]);
// 			}
// 		}
// 	}

// 	if (result.length > 0) {
// 		return result;
// 	} else {
// 		return 'Menu tidak ditemukan di resto manapun';
// 	}
// }

// console.log(findData()); // "Invalid data"
// console.log(findData('Nasi Bakar')); // ["Mama Suka", "Papa Suka"]
// console.log(findData('Jus Melon')); // ["Resto KQ 5", "Papa Suka"]
// console.log(findData('Mie Ayam')); // ["Resto KQ 5"]
// console.log(findData('Jus Nanas')); // "Menu tidak ditemukan di resto manapun"
// ========================================
// 2
// ========================================
// 1. Buatlah sebuah variabel dengan nama "groups"

// 2. Isi variable tersebut dengan array yang memiliki 3 array :
// - ['jennie', 'lisa', 'jisoo', 'rose']
// - ['winter', 'karina', 'giselle', 'ningning']
// - ['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong']

// 3. Cetak element array pertama (['jennie', 'lisa', 'jisoo', 'rose'])

// 4. Cetak element array ketiga (['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong'])

// 5. Ganti element ketiga dari array menjadi:
// - ['irene', 'joy', 'wendy', 'yeri', 'seulgi']

// 6. Cetak ("wendy")

// 7. Gunakan property length untuk mencetak jumlah element di array index kedua

// 8. Gunakan loop for untuk mencetak nilai groups di console secara berurutan
// output:

/*

['jennie', 'lisa', 'jisoo', 'rose']
['winter', 'karina', 'giselle', 'ningning']
['irene', 'joy', 'wendy', 'yeri', 'seulgi']

*/

// 8. Gunakan loop for untuk mencetak nama member di console secara berurutan

/*

'jennie'
'lisa'
'jisoo'
'rose'
'winter'
'karina'
'giselle'
'ningning'
'irene'
'joy'
'wendy'
'yeri'
'seulgi'

*/
// Jawaban
// let groups = [
// 	['jennie', 'lisa', 'jisoo', 'rose'],
// 	['winter', 'karina', 'giselle', 'ningning'],
// 	['yeji', 'ryujin', 'lia', 'yuna', 'chaeryeong'],
// ];
// console.log(groups[0]);
// console.log(groups[2]);
// groups[2] = ['irene', 'joy', 'wendy', 'yeri', 'seulgi'];
// console.log(groups[2]);
// console.log(groups[2][2]);
// for (let x = 0; x < groups.length; x++) {
// 	const element1 = groups[x];
// 	for (let c = 0; c < element1.length; c++) {
// 		const element2 = element1[c];
// 		console.log(element2);
// 	}
// }

// ========================================
// 3
// ========================================
/**
 * =================
 * Box of alphabet
 * =================
 *
 * Terdapat sebuah fungsi yang akan membuat sebuah array multi dimensi dengan jumlah baris dan kolom yang diminta oleh user.
 *
 * Pada setiap elementnya kita akan memasukkan huruf alphabet berurutan dari A hingga Z.
 * Pengisian huruf dimulai dari baris pertama dari kiri ke kanan, ketika baris pertama sudah terisi dengan huruf huruf alfabet,
 * maka pengisian dimulai dari baris kedua paling kiri dan bergerak ke kanan dan seterusnya.
 *
 * Ketika huruf sudah mencapai huruf Z maka element selanjutnya akan diisi oleh huruf A lagi dan seterusnya.
 *
 * Rules:
 * - Hanya boleh menggunakan built in function push()
 *
 */

// function boxOfAlphabet(row, col) {
// 	let result = [];
// 	let alphabet = `abcdefghijklmnopqrstuvwxyz`;
// 	let huruf = 0;

// 	for (let r = 0; r < row; r++) {
// 		let temp = [];
// 		for (let c = 0; c < col; c++) {
// 			if (huruf === alphabet.length) {
// 				huruf = 0;
// 			}
// 			temp.push(alphabet[huruf]);
// 			huruf++;
// 		}
// 		result.push(temp);
// 	}

// 	return result;
// }

// console.log(boxOfAlphabet(2, 2));
/**
 * [
 *  ['a', 'b'],
 *  ['c', 'd']
 * ]
 */

// console.log(boxOfAlphabet(3, 4));

/**
 *  [
 *   ['a', 'b', 'c', 'd'],
 *   ['e', 'f', 'g', 'h'],
 *   ['i', 'j', 'k', 'l'],
 * ]
 */

// console.log(boxOfAlphabet(6, 5));

/**
 * [
 *   ['a', 'b', 'c', 'd', 'e'],
 *   ['f', 'g', 'h', 'i', 'j'],
 *   ['k', 'l', 'm', 'n', 'o'],
 *   ['p', 'q', 'r', 's', 't'],
 *   ['u', 'v', 'w', 'x', 'y'],
 *   ['z', 'a', 'b', 'c', 'd']
 * ]
 */
// ========================================
// 4
// ========================================
/*
Dur: 3 Min
Buatlah sebuah function pushArr yang akan menambahkan 1 data baru ke dalam array. Function memiliki 2 input arr (array), val (berbagai tipe data);

contoh:
input:
- arr: [1, 2, 3, 4, 5]
- val: "enam"

output:
[1, 2, 3, 4, 5, "enam"]
*/
// function pushArr(arr, val) {
// 	// console.log(arr);
// 	// console.log(val);
// 	arr.push(val);
// 	return arr;
// }

// console.log(pushArr([1, 2, 3, 4, 5], 'enam')); // [1, 2, 3, 4, 5, "enam"]
// console.log(pushArr([4, 2, 12, 3, 7], [3, 2])) // [4, 2, 12, 3, 7, [3, 2]]
// ========================================
// 5
// ========================================
/*
Buatlah sebuah function reverseArr yang menerima 1 input arr (array). Funtion ini akan menghasilkan sebuah array baru yang urutannya dibalik dari belakang ke depan

contoh:
input:
- arr: [1, 2, 3, 4, 5];

output:
[5, 4, 3, 2, 1]
*/
// function reverseArr(arr) {
// 	let hasil = [];
// 	for (let z = arr.length -1; z >= 0; z--) {
// 		const split = arr[z];
// 		// console.log(split);
// 		hasil.push(split);
// 	}
// 	return hasil;
// }

// console.log(reverseArr([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log(reverseArr(['h', 'e', 'l', 'l', 'o'])) // ['o', 'l', 'l', 'e', 'h']
// ========================================
// 6
// ========================================
/*
Buatlah sebuah function sumArr yang menerima 1 parameter arr (array). Function ini akan mengeluarkan output jumlah atau kombinasi dari semua data di dalam array

contoh;
input:
- arr : [1, 2, 3, 4, 5]

output: 
15

hasil dari 1 + 2 + 3 + 4 + 5
=========
input:
- arr : ['h', 'e', 'l', 'l', 'o']

output:
'hello'
*/
// function sumArr(arr) {
// 	let hasil = arr[0];
// 	for (let z = 1; z < arr.length; z++) {
// 		const scan = arr[z];
// 		hasil += scan;
// 	}
// 	return hasil;
// }
// console.log(sumArr([1, 2, 3, 4, 5])); // 15
// console.log(sumArr(['h', 'e', 'l', 'l', 'o'])) // 'hello'
// ========================================
// 7
// ========================================
/*
Buatlah sebuah function filterArr yang menerima 2 input arr (array) dan index (number). Function akan menghasilkan sebuah ARRAY BARU yang berisikan semua data di arr kecuali data yang berada di parameter index

contoh:
input: 
- arr: [1, 2, 3, 4, 5, 6]
- index: 3

output:
[1, 2, 3, 5, 6]

karena angka 4 berada di index ke 3, sehingga tidak dimasukkan ke dalam array baru
Nb: diasumsikan input selalu benar
*/
// function filterArr(arr, index) {
// 	let hasil = [];
// 	for (let z = 0; z < arr.length; z++) {
// 		const scan = arr[z];
// 		if (z === index) {
// 			continue;
// 		} else {
// 			hasil.push(scan);
// 		}
// 	}
// 	return hasil;
// }
// console.log(filterArr([1, 4, 3, 4, 5], 1));

// console.log(filterArr([1, 2, 3, 4, 5, 6], 3)); // [1, 2, 3, 5, 6];
// console.log(filterArr([4, 5, 2, 11, 34, 121 ,21], 4)) // [4, 5, 2, 11, 121, 21]
// console.log(filterArr([3, 2, 1], 0)) // [2, 1]
// ========================================
// 8
// ========================================
/*
    buatlah sebuah function split yang akan menerima 2 parameter, str (string) dan param (string). Function ini berfungsi untuk memisahkan string menjadi array dimana param adalah parameter pemisahnya.

    contoh
    input: 
    - str: 'i love javascript'
    - param: ' '
    output: ['i', 'love', 'javascript'];

    contoh 2
    input:
    - str: 'javascript is so cool'
    - param: 'i'
    output: ['javascr', 'pt ', 's so cool']

    // s so cool
    // [javascr, pt , s so cool]
*/
// function split(str, param) {
// 	let hasil = [];
// 	let temp = '';
// 	for (let z = 0; z <= str.length; z++) {
// 		const scan = str[z];
// 		if (scan === param || scan === undefined) {
// 			hasil.push(temp);
// 			temp = '';
//             continue
// 		}
// 		temp += scan;
// 	}

// 	return hasil;
// }
// console.log(split('i love javascript', ' ')); // ['i', 'love', 'javascript']
// console.log(split('javascript is so cool', 'i')); // ['javascr', 'pt ', 's so cool']

// ========================================
// 9
// ========================================
/*
Buatlah sebuah filterNumberByParam yang menerima 2 parameter angka (array) dan param (string), Function akan menghasilkan 1 array baru yang sudah terfilter berdasarkan param yang dikirimkan

contoh
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'genap'

ourput: 
[2, 4, 6, 8]

========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'ganjil'

ourput: 
[1, 3, 5, 7]
========
input:
- angka: [1, 2, 3, 4, 5, 6, 7, 8]
- param: 'test'

ourput: 
'param harus genap atau ganjil'
*/

// function filterNumberByParam(angka, param) {
// 	let hasil = [];
// 	if (param !== 'genap' && param !== 'ganjil') {
// 		return 'param harus genap atau ganjil';
// 	}
// 	for (let z = 0; z < angka.length; z++) {
// 		const scan = angka[z];

// 		if (scan % 2 === 0 && param === 'genap') {
// 			hasil.push(scan);
// 		} else if (scan % 2 === 1 && param === 'ganjil') {
// 			scan % 2 === 0;
// 			hasil.push(scan);
// 		}
// 	}
// 	return hasil;
// }

// console.log(filterNumberByParam([43, 43, 32, 43, 43, 21, 22], 'genap')); // [32, 22]
// console.log(filterNumberByParam([1, 32, 123, 12, 543, 544], 'ganjil')); // [1, 123, 543]
// console.log(filterNumberByParam([1, 2, 3], 'ganjul')); // 'param harus genap atau ganjil'

// ========================================
// 10
// ========================================
// function filterByComparison(arr, operator, value) {
// 	let hasil = [];
// 	if (operator !== '>' && operator !== '<' && operator !== '=') {
// 		return 'salah nih';
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		const scan = arr[i];
// 		if (scan > value && operator === '>') {
// 			hasil.push(scan);
// 		} else if (scan < value && operator === '<') {
// 			hasil.push(scan);
// 		} else if (scan === value && operator === '=') {
// 			hasil.push(scan);
// 		}
// 	}
// 	return hasil;
// }

// console.log(filterByComparison([1, 4, 6, 8], '>', 4)); // [6, 8]
// console.log(filterByComparison([1, 4, 6, 8], '=', 4)); // [4]
// console.log(filterByComparison([1, 4, 6], '!>', 3)); // 'operator tidak valid'

// ========================================
// extra
// ========================================
/*
Buatlah sebuah function deepSum yang menerima 1 parameter arr (array multidimensi), function akan mengembalikan sebuah number yang merupakan hasil penjumlahan semua angka yang terdapat di array
*/

// function deepSum(arr) {
// 	let hasil = 0;
// 	for (let z = 0; z < arr.length; z++) {
// 		const split1 = arr[z];
// 		for (let x = 0; x < split1.length; x++) {
// 			const split2 = split1[x];
// 			for (let c = 0; c < split2.length; c++) {
// 				const scan = split2[c];
// 				hasil += scan;
// 			}
// 		}
// 	}
// 	return hasil;
// }

// let data = [
// 	[
// 		[4, 5, 6],
// 		[9, 1, 2, 10],
// 		[9, 4, 3],
// 	],
// 	[
// 		[4, 14, 31],
// 		[9, 10, 18, 12, 20],
// 		[1, 4, 90],
// 	],
// 	[
// 		[2, 5, 10],
// 		[3, 4, 5],
// 		[2, 4, 5, 10],
// 	],
// ];

// console.log(deepSum(data)); // 316

// ========================================
// 11
// ========================================

// /*
// Buatlah sebuah function highestLowest untuk mendapatkan angka terbesar dan terkecil dari sebuah array multidimensi
// */

// function highestLowest(arr) {
// 	let hasil = [];
// 	let low = Infinity;
// 	let high = -Infinity;
// 	for (let z = 0; z < arr.length; z++) {
// 		const satu = arr[z];
// 		for (let x = 0; x < satu.length; x++) {
// 			const dua = satu[x];
// 			for (let c = 0; c < dua.length; c++) {
// 				const tiga = dua[c];
// 				if (tiga < low) {
// 					low = tiga;
// 				}
// 				if (tiga > high) {
// 					high = tiga;
// 				}
// 			}
// 		}
// 	}
// 	hasil.push(low);
// 	hasil.push(high);
// 	return hasil;
// }

// let data = [
// 	[
// 		[4, 5, 6],
// 		[9, 1, 2, 10],
// 		[9, 4, 3],
// 	],
// 	[
// 		[4, 14, 31],
// 		[9, 10, 18, 12, 20],
// 		[1, 4, 90],
// 	],
// 	[
// 		[2, 5, 10],
// 		[3, 4, 5],
// 		[2, 4, 5, 10],
// 	],
// ];

// console.log(highestLowest(data)); // [1, 90] => 1 yang terkecil dan 90 yang terbesar

// ========================================
// 12
// ========================================
// function getAnimals(arr) {
// 	let hasil = [];
// 	let temp = '';
// 	let k = [];
// 	let h = [];
// 	let o = [];
// 	for (let z = 0; z < arr.length; z++) {
// 		const split = arr[z];

// 		for (let x = 0; x < split.length; x++) {
// 			const char = split[x];
// 			// console.log(split[x + 1]);
// 			if (char !== ':') {
// 				temp += char;
// 			} else {
// 				if (split[x + 1] === 'K') {
// 					k.push(temp);
// 					temp = '';
// 					x += 2;
// 				} else if (split[x + 1] === 'H') {
// 					h.push(temp);
// 					temp = '';
// 					x += 2;
// 				} else if (split[x + 1] === 'O') {
// 					o.push(temp);
// 					temp = '';
// 					x += 2;
// 				}
// 			}
// 		}
// 	}

// 	for (let q = 0; q < k.length; q++) {
// 		if (k[q].length > temp.length) {
// 			temp = k[q];
// 		}
// 		if (q === k.length - 1) {
// 			hasil.push(temp);
// 			temp = '';
// 		}
// 	}

// 	for (let w = 0; w < h.length; w++) {
// 		if (h[w].length > temp.length) {
// 			temp = h[w];
// 		}
// 		if (w === h.length - 1) {
// 			hasil.push(temp);
// 			temp = '';
// 		}
// 	}

// 	for (let e = 0; e < o.length; e++) {
// 		if (o[e].length > temp.length) {
// 			temp = o[e];
// 		}
// 		if (e === o.length - 1) {
// 			hasil.push(temp);
// 			temp = '';
// 		}
// 	}

// 	return hasil;
// }

// //Test Case

// console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']));
// [ 'Singa','Kuda','Monyet' ]

// console.log(
// 	getAnimals([
// 		'Hiu:K',
// 		'Macan:K',
// 		'Ayam:O',
// 		'Gajah:H',
// 		'Monyet:O',
// 		'Kerbau:H',
// 		'Musang:O',
// 		'Burung:H',
// 	])
// );
// [ 'Macan', 'Kerbau', 'Monyet' ]

// console.log(
// 	getAnimals([
// 		'Tikus:O',
// 		'Merpati:H',
// 		'Beruang:O',
// 		'Elang:K',
// 		'Perkutut:H',
// 		'Harimau:K',
// 	])
// );
// [ 'Harimau', 'Perkutut', 'Beruang' ]
// ========================================
// 13
// ========================================
// function parseData(str) {
// 	let hasil = [];
// 	let temp = [];
// 	let char = '';
// 	for (let z = 0; z <= str.length; z++) {
// 		const scan = str[z];
// 		if (scan !== ';' && scan !== undefined) {
// 			if (scan !== ':') {
// 				char += scan;
// 				if (!isNaN(char)) {
// 					char = Number(char);
// 				}
// 			} else {
// 				temp.push(char);
// 				char = '';
// 			}
// 		} else {
// 			if (scan !== ':') {
// 				temp.push(char);
// 				char = '';
// 				hasil.push(temp);
// 				temp = [];
// 			}
// 		}
// 	}

// 	return hasil;
// }

// console.log(parseData('A:10;B:20;C:30'));
// [
// 	['A', 10],
// 	['B', 20],
// 	['C', 30],
// ];

// ========================================
// EXTRA
// ========================================
// function filterMovie(genres) {
// 	let movies = [
// 		['Drama', 'Boyhood', 'The Last of the Mohicans', 'The Goldfinch'],
// 		['Action', 'Mad Max', 'The Batman', 'Josh Wick'],
// 		['Fantasy', 'The Fall', 'The Forbidden Kingdom', 'Ladyhawke', 'Sea Beast'],
// 		['Comedy', 'Safety Last', 'The Trip'],
// 	];

// 	//data dari user can watch
// 	// console.log(genres);

// 	let resultFilterMovie = [];
// 	for (let q = 0; q < genres.length; q++) {
// 		const genre = genres[q];
// 		for (let z = 0; z < movies.length; z++) {
// 			const peel = movies[z];
// 			let list = peel[0];

// 			if (genre === list) {
// 				resultFilterMovie.push(peel);
// 			}
// 		}
// 	}
// 	if (resultFilterMovie.length < 1) {
// 		return 'Movie not found';
// 	} else {
// 		return resultFilterMovie;
// 	}
// }

// function usersCanWatch(users) {
// 	// write your code here
// 	if (!users) {
// 		return 'Invalid Data!';
// 	}
// 	let menu = users.menu;
// 	let genres = [];
// 	let word = '';
// 	for (let x = 0; x <= menu.length; x++) {
// 		const scan = menu[x];
// 		if (scan !== ';' && scan !== undefined) {
// 			word += scan;
// 		} else {
// 			genres.push(word);
// 			word = '';
// 		}
// 	}

// 	let result = filterMovie(genres);
// 	return result;
// }

// // TEST CASE
// const user1 = {
// 	name: 'Bari',
// 	cinema: 'XIV',
// 	menu: 'Action;Drama;Comedy',
// };
// console.log(usersCanWatch(user1));
/*
[
	["Action", "Mad Max", "The Batman", "Josh Wick"],
	["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
	["Comedy", "Safety Last", "The Trip"]
]
*/

// const user2 = {
// 	name: 'Tole',
// 	cinema: 'XIIX',
// 	menu: 'Fantasy;Adventure;Comedy',
// };
// console.log(usersCanWatch(user2));
/*
[
	["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
	["Comedy", "Safety Last", "The Trip"]
]
*/

// const user3 = {
// 	name: 'Rizky',
// 	cinema: 'Cinepolos',
// 	menu: 'Scifi-Musical',
// };
// console.log(usersCanWatch(user3));
// "Movie not found"

// const user4 = {
// 	name: 'Tobias',
// 	cinema: 'Rumah',
// 	menu: 'Comedy',
// };
// console.log(usersCanWatch(user4));
/*
	["Comedy", "Safety Last", "The Trip"]
]
*/

// console.log(usersCanWatch());
// "Invalid Data!"

// ========================================
// 14
// ========================================

// // Parsing data untuk di olah
// function parsingData(data) {
// 	// kerjakan di sini
// 	let day = [];
// 	let word = '';
// 	for (let q = 0; q <= data.length; q++) {
// 		const char = data[q];
// 		if (char !== '|' && char !== undefined) {
// 			word += char;
// 		} else {
// 			day.push(word);
// 			word = '';
// 		}
// 	}
// 	return day;
// }

// // Filter Class
// function filterClass(days) {
// 	let classes = [
// 		['Monday', 'Math', 'Physics'],
// 		['Tuesday', 'Biology'],
// 		['Wednesday', 'Chemistry', 'Math'],
// 		['Thursday', 'History'],
// 		['Friday', 'Sport', 'Art'],
// 	];

// 	// kerjakan di sini

// 	let resultFilterClass = [];
// 	for (let z = 0; z < days.length; z++) {
// 		const scan = days[z];
// 		for (let x = 0; x < classes.length; x++) {
// 			const schedule = classes[x];
// 			if (schedule[0] === scan) {
// 				resultFilterClass.push(schedule);
// 			}
// 		}
// 	}

// 	if (resultFilterClass.length < 1) {
// 		return 'Class not found';
// 	} else {
// 		return resultFilterClass;
// 	}
// }

// // Function Utama
// function userSchedule(user) {
// 	// kerjakan di sini
// 	if (!user) {
// 		return 'Invalid Data!';
// 	}
// 	let day = user.days;
// 	let parsing = parsingData(day);
// 	let result = filterClass(parsing);
// 	return result;
// }

// console.log(userSchedule());
// "Invalid Data!"

// const user4 = {
// 	name: 'Dina',
// 	days: 'Tuesday',
// };
// console.log(userSchedule(user4));
// [['Tuesday', 'Biology']];

// const user3 = {
// 	name: 'Bimo',
// 	days: 'Saturday',
// };
// console.log(userSchedule(user3));
// "Class not found"

// const user2 = {
// 	name: 'Sinta',
// 	days: 'Friday|Sunday',
// };
// console.log(userSchedule(user2));
// [['Friday', 'Sport', 'Art']];

// const user1 = {
// 	name: 'Raka',
// 	days: 'Monday|Wednesday',
// };
// console.log(userSchedule(user1));
// [
// 	['Monday', 'Math', 'Physics'],
// 	['Wednesday', 'Chemistry', 'Math'],
// ];

// ========================================
// EXTRAA
// ========================================

/**
 * =========================
 * User Purchase Analyzer
 * =========================
 *
 * Data transaksi disimpan dalam format STRING mentah.
 * Setiap user dipisahkan oleh '#'
 * Setiap field user dipisahkan oleh '|'
 * Format:
 * name|item1,item2,item3|amount
 *
 * Contoh:
 * "Andi|Book,Pen|50000#Budi|Pencil|10000"
 *
 * TUGAS:
 * 1. Parsing data mentah menjadi struktur array yang bisa diolah
 * 2. Ambil hanya user yang total belanjanya >= minAmount
 * 3. Kembalikan array hasil dengan format:
 *    [
 *      ['Andi', ['Book', 'Pen'], 50000],
 *      ...
 *    ]
 *
 * ATURAN:
 * - Tidak boleh pakai split, map, filter, reduce
 * - Parsing WAJIB manual (loop + akumulasi string)
 * - Gunakan minimal:
 *   - 1 helper parsing
 *   - 1 helper filter
 *   - 1 caller function
 *
 * EDGE CASE:
 * - input null / undefined → "Invalid Data!"
 * - tidak ada user lolos filter → "No qualified user"
 */

function parseUsers(rawData) {
	// kerjakan di sini
}

function filterByAmount(users, minAmount) {
	// kerjakan di sini
}

function analyzePurchase(data, minAmount) {
	// kerjakan di sini
}

// =====================
// TEST CASE
// =====================

// console.log(analyzePurchase());
// "Invalid Data!"

// const data1 = 'Andi|Book,Pen|50000#Budi|Pencil|10000#Caca|Bag,Shoes|150000';
// console.log(analyzePurchase(data1, 50000));
// [
//   ['Andi', ['Book', 'Pen'], 50000],
//   ['Caca', ['Bag', 'Shoes'], 150000]
// ]

// console.log(analyzePurchase(data1, 200000));
// "No qualified user"

// const data2 = 'Dina|Notebook|75000';
// console.log(analyzePurchase(data2, 50000));
// [['Dina', ['Notebook'], 75000]]

// ========================================
// MOREE EXTRAA
// ========================================
// function getPoints(history) {
//     let itemPoint = {
//         'Moonlight': 120,
//         'Goldqueen': 550,
//         'Beras Parist': 1200,
//         'Minyak Fatma': 2500
//     }
//     // write your code here
// }

// function getPrizes(point) {
//     // write your code here
// }

// function betamart(pembeli) {
//     // write your code here
// }

// console.log(
//     betamart({
//         name: 'Ilham',
//         histories: [
//             'Moonlight',
//             'Goldqueen',
//             'Beras Parist',
//             'Moonlight',
//             'Goldqueen',
//             'Beras Parist',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Moonlight',
//             'Goldqueen',
//             'Goldqueen',
//             'Moonlight',
//             'Beras Parist',
//             'Beras Parist',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Moonlight',
//             'Moonlight'
//         ]
//     })
// )

// /*
// {
//   name: 'Ilham',
//   belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
//   prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
// }
// */

// console.log(
//     betamart({
//         name: 'Kosasih',
//         histories: [
//             'Moonlight',
//             'Moonlight',
//             'Goldqueen',
//             'Moonlight',
//             'Minyak Fatma',
//             'Goldqueen',
//             'Beras Parist',
//             'Beras Parist',
//             'Beras Parist',
//             'Moonlight',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Moonlight',
//             'Goldqueen',
//             'Goldqueen',
//             'Goldqueen',
//             'Beras Parist',
//             'Moonlight',
//             'Moonlight',
//             'Beras Parist',
//             'Beras Parist',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Goldqueen',
//             'Goldqueen',
//             'Moonlight',
//             'Moonlight',
//             'Moonlight',
//             'Moonlight'
//         ]
//     })
// )

// /*
// {
//   name: 'Kosasih',
//   belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
//   prizes: [
//     'Voucher 10k',
//     'Sticker',
//     'Penggaris',
//     'Voucher 25k',
//     'Kinderboy',
//     'Tissue'
//   ]
// }
// */

// console.log(betamart());
// // Tidak ada pembeli yang belanja

// ========================================
// 15
// ========================================
