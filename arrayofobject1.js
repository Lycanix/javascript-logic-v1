// ==============================================
// --------------- L I N E 1 -------------------
// ==============================================
// let arrayMulti = [
// 	['apuse', 'Papua'],
// 	['Anging Mamiri', 'Sulawesi Selatan'],
// 	['Ampar-Ampar Pisang', 'Kalimantan Selatan'],
// 	['Bungong Jeumpa', 'Nanggroe Aceh Darussalam'],
// 	['Manuk Dadali', 'Jawa Barat'],
// ];

// // merubah array multidimensi menjadi array of objek
// function changeData(data) {
// 	let finish = [];
// 	for (let z = 0; z < data.length; z++) {
// 		let result = {};
// 		const arr = data[z];
// 		if (result.lagu === undefined) {
// 			result.lagu = arr[0];
// 		}
// 		if (result.daerah === undefined) {
// 			result.daerah = arr[1];
// 		}
// 		finish.push(result);
// 	}
// 	return finish;
// }

// console.log(changeData(arrayMulti));

/*
[
    {
        lagu: "apuse",
        daerah: "Papua"
    },
    {
        lagu: "Anging Mamiri", 
        daerah: "Sulawesi Selatan"
    },
    {
        lagu: "Ampar-Ampar Pisang",
        daerah: "Kalimantan Selatan"
    },
    {
        lagu: "Bungong Jeumpa",
        daerah: "Nanggroe Aceh Darussalam"
    },
    {
        lagu: "Manuk Dadali",
        daerah: "Jawa Barat" 
    }
]
*/

// ==============================================
// --------------- L I N E 2 -------------------
// ==============================================

// let arrOfObj = [
// 	{ name: 'Andika', score: [85, 90, 67, 75], class: 'A' },
// 	{ name: 'Budika', score: [77, 80, 95, 100], class: 'B' },
// 	{ name: 'Cendikia', score: [60, 90, 85, 89], class: 'B' },
// 	{ name: 'Dodika', score: [88, 79, 83, 95], class: 'A' },
// 	{ name: 'Endika', score: [85, 92, 65, 70], class: 'C' },
// ];

// let result = {};
// function grouppingClass(data) {
// 	for (let z = 0; z < data.length; z++) {
// 		const obj = data[z];
// 		let names = obj.name;
// 		if (result[obj.class] === undefined) {
// 			result[obj.class] = { list: [names] };
// 		} else {
// 			result[obj.class].list.push(names);
// 		}
// 	}

// 	return result;
// }

// console.log(grouppingClass(arrOfObj));

/*
  {
    A: {
      list: [ 'Andika', 'Dodika' ]
    },
    B: {
      list: [ 'Budika', 'Cendikia' ]
    },
    C: {
      list: [ 'Endika' ]
    }
  }
*/

// ==============================================
// --------------- L I N E 3 -------------------
// ==============================================

// function getMinMax(data) {
// 	let result = [];
// 	let tempMin;
// 	let tempMax;
// 	let min = Infinity;
// 	let max = -Infinity;
// 	for (let z = 0; z < data.length; z++) {
// 		const list = data[z];

// 		let point = list.score;

// 		if (min > point) {
// 			min = point;
// 			tempMin = list;
// 		}

// 		if (max < point) {
// 			max = point;
// 			tempMax = list;
// 		}
// 	}
// 	result.push(tempMin, tempMax);
// 	return result;
// }
// let arrOfObj = [
// 	{
// 		name: 'andi',
// 		score: 70,
// 	},
// 	{
// 		name: 'Budi',
// 		score: 85,
// 	},
// 	{
// 		name: 'Candi',
// 		score: 60,
// 	},
// 	{
// 		name: 'Dandi',
// 		score: 65,
// 	},
// 	{
// 		name: 'Endra',
// 		score: 99,
// 	},
// 	{
// 		name: 'Fina',
// 		score: 95,
// 	},
// ];
// console.log(getMinMax(arrOfObj));

/*
    [
        { name: 'Candi', score: 60 },  // min
        { name: 'Endra', score: 99 }  // max
    ]
*/

// ==============================================
// --------------- L I N E 4 -------------------
// ==============================================
// function graduates(students) {
// 	if (students.length === 0) {
// 		return {};
// 	}

// 	let result = {};

// 	for (let z = 0; z < students.length; z++) {
// 		const obj = students[z];

// 		if (obj.score <= 75) continue;

// 		if (result[obj.class] === undefined) {
// 			result[obj.class] = [];
// 		}

// 		result[obj.class].push({
// 			name: obj.name,
// 			score: obj.score,
// 		});
// 	}
// 	return result;
// }

// // TEST CASE 1
// let input1 = [
// 	{ name: 'Dimitri', score: 90, class: 'foxes' },
// 	{ name: 'Alexei', score: 85, class: 'wolves' },
// 	{ name: 'Sergei', score: 74, class: 'foxes' },
// 	{ name: 'Anastasia', score: 78, class: 'wolves' },
// ];
// console.log(graduates(input1));
// /*
// {
//   foxes: [ { nama: 'Dimitri', nilai: 90 } ],
//   wolves: [ { nama: 'Alexei', nilai: 85 }, { nama: 'Anastasia', nilai: 78 } ]
// }
// */

// // TEST CASE 2
// let input2 = [
// 	{ name: 'Rin', score: 100, class: 'foxes' },
// 	{ name: 'Saber', score: 80, class: 'wolves' },
// 	{ name: 'Gilgamesh', score: 30, class: 'foxes' },
// 	{ name: 'Ishtar', score: 50, class: 'wolves' },
// ];
// console.log(graduates(input2));
// /*
// {
//   foxes: [ { nama: 'Rin', nilai: 100 } ],
//   wolves: [ { nama: 'Saber', nilai: 80 } ]
// }
// */

// // TEST CASE 3
// let input3 = [
// 	{ name: 'Alexander', score: 100, class: 'foxes' },
// 	{ name: 'Alisa', score: 76, class: 'wolves' },
// 	{ name: 'Vladimir', score: 92, class: 'foxes' },
// 	{ name: 'Albert', score: 71, class: 'wolves' },
// 	{ name: 'Viktor', score: 80, class: 'tigers' },
// ];
// console.log(graduates(input3));
// /*
// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }
// */

// // TEST CASE 4
// // console.log(graduates([]));
// // {}
// ==============================================
// --------------- L I N E 5 -------------------
// ==============================================
// function cariMedian(arr) {
// 	let numbers = [];
// 	for (let z = 0; z < arr.length; z++) {
// 		numbers.push(arr[z]);
// 	}

// 	for (let x = 0; x < numbers.length - 1; x++) {
// 		for (let y = x + 1; y < numbers.length; y++) {
// 			if (numbers[x] > numbers[y]) {
// 				let temp = numbers[x];
// 				numbers[x] = numbers[y];
// 				numbers[y] = temp;
// 			}
// 		}
// 	}

// 	let mid = numbers.length / 2;
// 	if (numbers.length % 2 === 1) {
// 		let ganjil = numbers[Math.floor(mid)];
// 		return ganjil;
// 	} else if (numbers.length % 2 === 0) {
// 		let genap = (numbers[mid] + numbers[mid - 1]) / 2;
// 		return genap;
// 	}
// }

// // TEST CASES
// console.log(cariMedian([1, 2, 3, 4, 5])); // 3
// console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
// console.log(cariMedian([3, 4, 7, 6, 10])); // 7
// console.log(cariMedian([1, 3, 3])); // 3
// console.log(cariMedian([7, 7, 8, 8])); // 7.5
// ==============================================
// --------------- L I N E 6 -------------------
// ==============================================
// function angkaPrima(angka) {
// 	if (angka <= 1) {
// 		return false;
// 	}
// 	for (let i = 2; i < angka; i++) {
// 		if (angka % i === 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// // TEST CASES
// console.log(angkaPrima(3)); // true
// console.log(angkaPrima(7)); // true
// console.log(angkaPrima(6)); // false
// console.log(angkaPrima(23)); // true
// console.log(angkaPrima(33)); // false
// ==============================================
// --------------- L I N E 7 -------------------
// ==============================================
// function cariModus(arr) {
// 	let obj = {};
// 	for (let z = 0; z < arr.length; z++) {
// 		const a = arr[z];
// 		if (obj[a] === undefined) {
// 			obj[a] = 1;
// 		} else {
// 			obj[a] = obj[a] + 1;
// 		}
// 	}

// 	let highest = 0;
// 	let modus = -1;
// 	let count = 0;
// 	for (let c in obj) {
// 		count++;
// 		if (obj[c] > highest) {
// 			highest = obj[c];
// 			modus = Number(c);
// 		}
// 	}

// 	if (count === 1 || highest === 1) {
// 		return -1;
// 	}

// 	return modus;
// }

// // TEST CASES
// console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1
// ==============================================
// --------------- L I N E 8 -------------------
// ==============================================

// function convertSymbol(arr) {
// 	let resultConvertSimbol = [];
// let simbolObject = {
// 	'!': 1,
// 	'@': 2,
// 	'#': 3,
// 	$: 4,
// 	'%': 5,
// 	'^': 6,
// 	'&': 7,
// 	'*': 8,
// 	'(': 9,
// 	')': 0,
// };

// 	for (let z = 0; z < arr.length; z++) {
// 		const data = arr[z];
// 		let temp = '';

// 		for (let x = 0; x < data.length; x++) {
// 			const char = data[x];
// 			temp += simbolObject[char];
// 		}
// 		resultConvertSimbol.push(Number(temp));
// 	}
// 	// console.log(resultConvertSimbol);

// 	return resultConvertSimbol;
// }

// function decrementOdd(arr) {
// 	let resultDecrementOdd = [];
// 	for (let z = 0; z < arr.length; z++) {
// 		const scan = arr[z];
// 		if (scan % 2 === 1) {
// 			resultDecrementOdd.push(scan - arr.length);
// 		} else {
// 			resultDecrementOdd.push(scan);
// 		}
// 	}
// 	// console.log(resultDecrementOdd);

// 	return resultDecrementOdd;
// }

// function splitNumber(arr) {
// 	let resultSplitNumber = [];
// 	let tempArr = [];
// 	for (let z = 0; z < arr.length; z++) {
// 		const scan = arr[z];
// 		// console.log(scan);

// 		if (scan > 26) {
// 			if (tempArr.length > 0) {
// 				resultSplitNumber.push(tempArr);
// 				tempArr = [];
// 			}
// 		} else {
// 			tempArr.push(scan);
// 		}
// 	}

// 	if (tempArr.length > 0) {
// 		resultSplitNumber.push(tempArr);
// 	}
// 	// console.log(resultSplitNumber);

// 	return resultSplitNumber;
// }

// function convertNumber(arr) {
// 	let resultConvertNumber = '';
// let alphabet = {
// 	1: 'a',
// 	2: 'b',
// 	3: 'c',
// 	4: 'd',
// 	5: 'e',
// 	6: 'f',
// 	7: 'g',
// 	8: 'h',
// 	9: 'i',
// 	10: 'j',
// 	11: 'k',
// 	12: 'l',
// 	13: 'm',
// 	14: 'n',
// 	15: 'o',
// 	16: 'p',
// 	17: 'q',
// 	18: 'r',
// 	19: 's',
// 	20: 't',
// 	21: 'u',
// 	22: 'v',
// 	23: 'w',
// 	24: 'x',
// 	25: 'y',
// 	26: 'z',
// };

// 	for (let z = 0; z < arr.length; z++) {
// 		const outter = arr[z];
// 		for (let x = 0; x < outter.length; x++) {
// 			const scan = outter[x];
// 			resultConvertNumber += alphabet[scan];
// 		}

// 		if (z < arr.length - 1) {
// 			resultConvertNumber += ' ';
// 		}
// 	}
// 	// console.log(resultConvertNumber);

// 	return resultConvertNumber;
// }

// function result(arr) {
// 	let resConvertSymbol = convertSymbol(arr);
// 	let resDecrementOdd = decrementOdd(resConvertSymbol);
// 	let resSplitNumber = splitNumber(resDecrementOdd);
// 	let result = convertNumber(resSplitNumber);

// 	return result;
// }

// // // =================================================================================================
// console.log(
// 	result([
// 		'!@',
// 		'!&',
// 		'@)',
// 		'#!',
// 		'&#',
// 		'!(',
// 		'@&',
// 		'%%',
// 		'!(',
// 		'##',
// 		'#&',
// 		'@^',
// 	])
// );
// // // lets go guyz

// // console.log(
// // 	result(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!'])
// // );
// // // i love you

// console.log(
// 	result(['!%', '@&', '$', '!&', '$#', '*', '!#', '!%', '@#', '@)', '@!', '@@'])
// );
// // // code hacktiv

// ==============================================
// --------------- L I N E 9 -------------------
// ==============================================
// /**
//  * ============================
//  * Number Cipher Decode
//  * ============================
//  *
//  * RULES:
//  * - Tidak boleh menggunakan built-in: map, filter, reduce, join, split
//  * - Boleh menggunakan: Number, String, .length, push
//  * - Fokus pada logika looping, conditional, dan buffer
//  */

// /**
//  * Mengubah array of string menjadi array of number
//  *
//  * example:
//  * input  : ['12', '5', '30']
//  * output : [12, 5, 30]
//  */
// function toNumberArray(arr) {
// 	let resultI = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
// 		resultI.push(Number(element));
// 	}

// 	// console.log(resultI);
// 	return resultI;
// }

// /**
//  * Jika angka ganjil, kurangi dengan panjang array
//  * Jika genap, biarkan
//  *
//  * example:
//  * input  : [12, 5, 30]
//  * output : [12, 2, 30]
//  */
// function subtractOdd(arr) {
// 	let resultII = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
// 		if (element % 2 !== 0) {
// 			resultII.push(element - arr.length);
// 		} else {
// 			resultII.push(element);
// 		}
// 	}

// 	// console.log(resultII);
// 	return resultII;
// }

// /**
//  * Memisahkan angka menjadi beberapa group
//  * - Angka > 20 adalah PEMISAH
//  * - Angka pemisah tidak ikut group
//  *
//  * example:
//  * input  : [12, -2, 30, 8, -6, 18, -4]
//  * output :
//  * [
//  * [12, -2],
//  * [8, -6, 18, -4]
//  * ]
//  */
// function groupByLimit(arr) {
// 	let resultIII = [];
// 	let buffer = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const angka = arr[i];
// 		if (angka > 20) {
// 			if (buffer.length > 0) {
// 				resultIII.push(buffer);
// 				buffer = [];
// 			}
// 		} else {
// 			buffer.push(angka);
// 		}
// 	}

// 	if (buffer.length > 0) {
// 		resultIII.push(buffer);
// 		buffer = [];
// 	}

// 	// console.log(resultIII);
// 	return resultIII;
// }

// /**
//  * Mengubah array multi dimensi menjadi string
//  * Antar group dipisahkan spasi
//  *
//  * Mapping angka ke huruf SUDAH DISEDIAKAN
//  */
// function numberToChar(arr) {
// 	let alphabet = {
// 		1: 'a',
// 		2: 'b',
// 		3: 'c',
// 		4: 'd',
// 		5: 'e',
// 		6: 'f',
// 		7: 'g',
// 		8: 'h',
// 		9: 'i',
// 		10: 'j',
// 		11: 'k',
// 		12: 'l',
// 		13: 'm',
// 		14: 'n',
// 		15: 'o',
// 		16: 'p',
// 		17: 'q',
// 		18: 'r',
// 		19: 's',
// 		20: 't',
// 		21: 'u',
// 		22: 'v',
// 		23: 'w',
// 		24: 'x',
// 		25: 'y',
// 		26: 'z',
// 	};

// 	let resultIV = '';
// 	for (let i = 0; i < arr.length; i++) {
// 		const data = arr[i];
// 		for (let j = 0; j < data.length; j++) {
// 			const element = data[j];
// 			if (element < 0) {
// 				// console.log(element);
// 				continue;
// 			} else {
// 				resultIV += alphabet[element];
// 			}
// 		}
// 		resultIV += ' ';
// 	}

// 	// console.log(resultIV);
// 	return resultIV;
// }

// /**
//  * MAIN FUNCTION
//  * Menggabungkan seluruh proses
//  */
// function result(arr) {
// 	let resultI = toNumberArray(arr);
// 	let resultII = subtractOdd(resultI);
// 	let resultIII = groupByLimit(resultII);
// 	let resultIV = numberToChar(resultIII);

// 	return resultIV;
// }

// /**
//  * ============================
//  * TEST CASE (DO NOT MODIFY)
//  * ============================
//  */

// console.log(result(['12', '5', '30', '8', '1', '25', '3']));
// // expected: "l hr"

// console.log(result(['1', '3', '21', '2', '4']));
// // expected: "pbd"

// console.log(result(['30', '1', '2']));
// // expected: "b"

// ==============================================
// --------------- L I N E 10 -------------------
// ==============================================
// /**
//  * ============================
//  * Alien Code Translator
//  * ============================
//  *
//  * RULES:
//  * - Tidak boleh menggunakan built-in: map, filter, reduce, join, split
//  * - Boleh menggunakan: Number, String, .length, push
//  * - Fokus pada logika looping, conditional, buffer
//  */

// /**
//  * 1. translateSymbols
//  * Mengubah simbol alien menjadi angka
//  * example:
//  * input: ['@!', '#*', '$%']
//  * expected output: [21, 38, 45]
//  */
// function translateSymbols(arr) {
// 	let symbolMap = {
// 		'!': 1,
// 		'@': 2,
// 		'#': 3,
// 		$: 4,
// 		'%': 5,
// 		'^': 6,
// 		'&': 7,
// 		'*': 8,
// 		'(': 9,
// 		')': 0,
// 	};

// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const data = arr[i];
// 		let buffer = '';
// 		for (let j = 0; j < data.length; j++) {
// 			const symbol = data[j];
// 			buffer += symbolMap[symbol];
// 		}
// 		result.push(Number(buffer));
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 2. adjustOdd
//  * Kurangi angka ganjil dengan panjang array
//  * genap tetap
//  * example:
//  * input: [21, 38, 45]
//  * expected output: [18, 38, 42]
//  */
// function adjustOdd(arr) {
// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
// 		if (element % 2 !== 0) {
// 			result.push(element - arr.length);
// 		} else {
// 			result.push(element);
// 		}
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 3. removeNegatives
//  * Hapus angka negatif, tapi catat posisi untuk nanti
//  * example:
//  * input: [18, -5, 38, 42, -2]
//  * expected output: [18, 38, 42]
//  */
// function removeNegatives(arr) {
// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const element = arr[i];
// 		if (element < 1) {
// 			continue;
// 		} else {
// 			result.push(element);
// 		}
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 4. groupByThreshold
//  * Pisahkan array menjadi group
//  * angka > 40 sebagai pemisah (tidak termasuk)
//  * example:
//  * input: [18, 38, 42, 15, 8]
//  * expected output: [[18, 38], [15, 8]]
//  */
// function groupByThreshold(arr) {
// 	let result = [];
// 	let buffer = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const data = arr[i];

// 		if (data > 40) {
// 			if (buffer.length > 0) {
// 				result.push(buffer);
// 				buffer = [];
// 			}
// 		} else {
// 			buffer.push(data);
// 		}
// 	}

// 	if (buffer.length > 0) {
// 		result.push(buffer);
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 5. numberToAlienChar
//  * selama n > 26 → n = n - 26
//  * input:
//  * [ 16, 38, 40 ]
//  *
//  * proses:
//  * 16 → 16
//  * 38 → 12
//  * 40 → 14
//  *
//  * output:
//  * ['π', 'μ', 'ξ']
//  */

// function numberToAlienChar(arr) {
// 	let alienAlphabet = {
// 		1: 'α',
// 		2: 'β',
// 		3: 'γ',
// 		4: 'δ',
// 		5: 'ε',
// 		6: 'ζ',
// 		7: 'η',
// 		8: 'θ',
// 		9: 'ι',
// 		10: 'κ',
// 		11: 'λ',
// 		12: 'μ',
// 		13: 'ν',
// 		14: 'ξ',
// 		15: 'ο',
// 		16: 'π',
// 		17: 'ρ',
// 		18: 'σ',
// 		19: 'τ',
// 		20: 'υ',
// 		21: 'φ',
// 		22: 'χ',
// 		23: 'ψ',
// 		24: 'ω',
// 		25: 'ϑ',
// 		26: 'ϕ',
// 	};

// 	let result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		const data = arr[i];
// 		for (let j = 0; j < data.length; j++) {
// 			const element = data[j];
// 			if (element > 26) {
// 				result.push(alienAlphabet[element - 26]);
// 			} else {
// 				result.push(alienAlphabet[element]);
// 			}
// 		}
// 	}

// 	return result;
// }

// /**
//  * 6. main function translate
//  * Menggabungkan semua helper
//  */
// function translate(arr) {
// 	let resultI = translateSymbols(arr);
// 	let resultII = adjustOdd(resultI);
// 	let resultIII = removeNegatives(resultII);
// 	let resultIV = groupByThreshold(resultIII);
// 	let resultV = numberToAlienChar(resultIV);

// 	return resultV;
// }

// /**
//  * ============================
//  * TEST CASE (DO NOT MODIFY)
//  * ============================
//  */

// console.log(translate(['@!', '#*', '$%', '^&', '(!']));
// // expected final output: [ 'π', 'μ', 'ξ' ]
// console.log(translate(['!', '(', '&', '%', '@#']));
// // expected final output: [ 'δ', 'β', 'σ' ]
// console.log(translate(['$', '*', '(', ')', '@!']));
// // expected final output: [ 'δ', 'θ', 'δ', 'π' ]

// ==============================================
// --------------- L I N E 11 -------------------
// ==============================================
// /**
//  * ============================
//  * Student Score Processor
//  * ============================
//  *
//  * RULES:
//  * - DILARANG menggunakan: map, filter, reduce, Object.entries
//  * - BOLEH menggunakan: Object.keys, .length, push, Number, String
//  * - Fokus: object traversal, nested object, conditional logic
//  * - TOTAL 6 FUNCTION:
//  *   5 helper + 1 main (result)
//  */

// /**
//  * RAW DATA
//  */
// const students = {
// 	alex: { math: 80, english: 70, science: 90 },
// 	bella: { math: 60, english: 85, science: 75 },
// 	carlo: { math: 90, english: 40, science: 65 },
// 	dina: { math: 50, english: 55, science: 60 },
// };

// /**
//  * 1. getStudentNames
//  * Ambil semua nama student dalam bentuk array
//  *
//  * example:
//  * input: students
//  * expected output: ['alex', 'bella', 'carlo', 'dina']
//  */
// function getStudentNames(obj) {
// 	let result = [];
// 	for (let name in obj) {
// 		result.push(name);
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 2. calculateTotalScore
//  * Hitung total nilai tiap student
//  *
//  * example:
//  * input: students
//  * expected output:
//  * {
//  *   alex: 240,
//  *   bella: 220,
//  *   carlo: 195,
//  *   dina: 165
//  * }
//  */
// function calculateTotalScore(obj) {
// 	let result = {};
// 	for (let name in obj) {
// 		let data = Object.values(obj[name]);
// 		// console.log(data);
// 		let point = 0;
// 		for (let i = 0; i < data.length; i++) {
// 			const major = data[i];
// 			point += major;
// 		}

// 		if (result[name] === undefined) {
// 			result[name] = point;
// 		}
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 3. filterPassedStudents
//  * Student LULUS jika total nilai >= 200
//  *
//  * example:
//  * input:
//  * {
//  *   alex: 240,
//  *   bella: 220,
//  *   carlo: 195,
//  *   dina: 165
//  * }
//  *
//  * expected output:
//  * {
//  *   alex: 240,
//  *   bella: 220
//  * }
//  */
// function filterPassedStudents(totalScoreObj) {
// 	let result = {};
// 	for (let student in totalScoreObj) {
// 		if (totalScoreObj[student] >= 200) {
// 			result[student] = totalScoreObj[student];
// 		}
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 4. convertToGrade
//  * Konversi total nilai ke grade:
//  * - >= 230 → 'A'
//  * - >= 200 → 'B'
//  * - >= 170 → 'C'
//  * - < 170  → 'D'
//  *
//  * example:
//  * input:
//  * {
//  *   alex: 240,
//  *   bella: 220
//  * }
//  *
//  * expected output:
//  * {
//  *   alex: 'A',
//  *   bella: 'B'
//  * }
//  */
// function convertToGrade(obj) {
// 	let result = {};
// 	for (let student in obj) {
// 		let score = obj[student];
// 		// console.log(score);

// 		let grade = '';
// 		if (score >= 230) {
// 			grade = 'A';
// 		} else if (score >= 200) {
// 			grade = 'B';
// 		} else if (score >= 170) {
// 			grade = 'C';
// 		} else if (score < 170) {
// 			grade = 'D';
// 		}

// 		if (result[student] === undefined) {
// 			result[student] = grade;
// 		}
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 5. formatResult
//  * Ubah object menjadi array string dengan format:
//  * "name: GRADE"
//  *
//  * example:
//  * input:
//  * {
//  *   alex: 'A',
//  *   bella: 'B'
//  * }
//  *
//  * expected output:
//  * ['alex: A', 'bella: B']
//  */
// function formatResult(obj) {
// 	let result = [];
// 	for (let students in obj) {
// 		result.push(`${students}: ${obj[students]}`);
// 	}

// 	// console.log(result);
// 	return result;
// }

// /**
//  * 6. MAIN FUNCTION
//  * Urutan WAJIB:
//  * - getStudentNames (hanya untuk validasi, tidak dipakai lagi)
//  * - calculateTotalScore
//  * - filterPassedStudents
//  * - convertToGrade
//  * - formatResult
//  */
// function result(data) {
// 	let first = getStudentNames(data);
// 	let second = calculateTotalScore(data);
// 	let third = filterPassedStudents(second);
// 	let forth = convertToGrade(third);
// 	let fifth = formatResult(forth);
// 	return fifth;
// }

// /**
//  * ============================
//  * TEST CASE (DO NOT MODIFY)
//  * ============================
//  */

// console.log(result(students));
// // expected output:
// // ['alex: A', 'bella: B']

// ==============================================
// --------------- L I N E 16 -------------------
// ==============================================
const trainers = [
	{
		name: 'Tai',
		digimons: [
			{
				name: 'Agumon',
				level: 5,
				type: 'Vaccine',
				evolutions: [
					{ name: 'Greymon', level: 10 },
					{ name: 'MetalGreymon', level: 20 },
				],
			},
			{
				name: 'Koromon',
				level: 2,
				type: 'Data',
				evolutions: [],
			},
		],
	},
	{
		name: 'Matt',
		digimons: [
			{
				name: 'Gabumon',
				level: 6,
				type: 'Data',
				evolutions: [{ name: 'Garurumon', level: 12 }],
			},
			{
				name: 'Tsukaimon',
				level: '4', // ❌ INVALID: level string, bukan number
				type: 'Virus',
				evolutions: [],
			},
		],
	},
];
function extractAllDigimons(trainers) {
	let result = [];
	for (let i = 0; i < trainers.length; i++) {
		const trainer = trainers[i];
		let digi = trainer.digimons;

		for (let j = 0; j < digi.length; j++) {
			const digimon = digi[j];
			result.push({
				name: digimon.name,
				level: digimon.level,
				type: digimon.type,
				evolutions: digimon.evolutions,
				owner: trainer.name,
			});
		}
	}
	// console.log(result);
	return result;
}

function filterValidDigimons(digimons) {
	let result = [];

	for (let i = 0; i < digimons.length; i++) {
		const digimon = digimons[i];
		// console.log(digimon);

		let name = digimon.name;
		let level = digimon.level;
		let type = digimon.type;
		let evolutions = digimon.evolutions;
		let owner = digimon.owner;

		// name
		if (typeof name !== 'string' || name.length === 0) continue;

		// level
		if (typeof level !== 'number' || level < 3) continue;

		//  type
		if (
			typeof type !== 'string' ||
			(type !== 'Vaccine' && type !== 'Data' && type !== 'Virus')
		) {
			continue;
		}

		// evolutions
		if (!Array.isArray(evolutions)) continue;

		// owner
		if (typeof owner !== 'string') continue;

		// console.log(digimon);
		result.push(digimon);
	}
	// console.log(result);
	return result;
}
/*
[
  {
    name: 'Agumon',
    level: 5,
    type: 'Vaccine',
    evolutions: [
      { name: 'Greymon', level: 10 },
      { name: 'MetalGreymon', level: 20 }
    ],
    owner: 'Tai'
  },
  {
    name: 'Gabumon',
    level: 6,
    type: 'Data',
    evolutions: [
      { name: 'Garurumon', level: 12 }
    ],
    owner: 'Matt'
  }
]
*/

function countDigimonByType(validDigimons) {
	let result = {
		Vaccine: 0,
		Data: 0,
		Virus: 0,
	};

	for (let i = 0; i < validDigimons.length; i++) {
		let type = validDigimons[i].type;

		if (type === 'Vaccine') result.Vaccine++;
		else if (type === 'Data') result.Data++;
		else if (type === 'Virus') result.Virus++;
	}

	// console.log(result);
	return result;
}
// {
//   Vaccine: Number,
//   Data: Number,
//   Virus: Number
// }

function findStrongestDigimon(validDigimons) {
	if (validDigimons.length === 0) return null;

	let result = {};
	let max = -Infinity;
	for (let i = 0; i < validDigimons.length; i++) {
		const digimon = validDigimons[i];
		let name = digimon.name;
		let level = digimon.level;
		let owner = digimon.owner;

		if (max < level) {
			max = level;
			result = { name: name, level: level, owner: owner };
		}
		// console.log(digimon);
	}

	// console.log(result);
	return result;
}
// {
//   name: String,
//   level: Number,
//   owner: String
// }

function buildTrainingReport(trainers) {
	let result = {};

	let allDigimons = extractAllDigimons(trainers);
	let validDigimons = filterValidDigimons(allDigimons);
	let counType = countDigimonByType(validDigimons);
	let strongest = findStrongestDigimon(validDigimons);

	result = {
		totalTrainer: trainers.length,
		totalValidDigimon: validDigimons.length,
		digimonByType: counType,
		strongestDigimon: strongest,
	};
	return result;
}

console.log(buildTrainingReport(trainers));
// {
//   totalTrainer: 2,
//   totalValidDigimon: 2,
//   digimonByType: { Vaccine: 1, Data: 1, Virus: 0 },
//   strongestDigimon: { name: 'Gabumon', level: 6, owner: 'Matt' }
// }

// ==============================================
// --------------- L I N E 17 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 18 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 19 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 21 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 22 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 23 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 24 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 25 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 26 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 27 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 28 -------------------
// ==============================================
