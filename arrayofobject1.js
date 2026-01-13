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

function convertSymbol(arr) {
	let resultConvertSimbol = [];
	let simbolObject = {
		'!': 1,
		'@': 2,
		'#': 3,
		$: 4,
		'%': 5,
		'^': 6,
		'&': 7,
		'*': 8,
		'(': 9,
		')': 0,
	};

	let temp = '';
	for (let z = 0; z < arr.length; z++) {
		const data = arr[z];

		for (let x = 0; x <= data.length; x++) {
			const char = data[x];
			if (char !== undefined) {
				for (let scan in simbolObject) {
					if (scan === char) {
						temp += String(simbolObject[scan]);
					}
				}
			} else {
				resultConvertSimbol.push(Number(temp));
				temp = '';
			}
		}
	}

	// console.log(temp);
	// console.log(resultConvertSimbol);

	return resultConvertSimbol;
}

function decrementOdd(arr) {
	let resultDecrementOdd = [];
	for (let z = 0; z < arr.length; z++) {
		const scan = arr[z];
		if (scan % 2 === 1) {
			resultDecrementOdd.push(scan - arr.length);
		} else {
			resultDecrementOdd.push(scan);
		}
	}
	// console.log(resultDecrementOdd);

	return resultDecrementOdd;
}

function splitNumber(arr) {
	let resultSplitNumber = [];
	let tempArr = [];
	for (let z = 0; z <= arr.length; z++) {
		const scan = arr[z];
		if (scan > 26 || scan === undefined) {
			resultSplitNumber.push(tempArr);
			tempArr = [];
		} else {
			tempArr.push(scan);
		}
	}
	// console.log(resultSplitNumber);

	return resultSplitNumber;
}

function convertNumber(arr) {
	let resultConvertNumber = '';
	let alphabet = {
		1: 'a',
		2: 'b',
		3: 'c',
		4: 'd',
		5: 'e',
		6: 'f',
		7: 'g',
		8: 'h',
		9: 'i',
		10: 'j',
		11: 'k',
		12: 'l',
		13: 'm',
		14: 'n',
		15: 'o',
		16: 'p',
		17: 'q',
		18: 'r',
		19: 's',
		20: 't',
		21: 'u',
		22: 'v',
		23: 'w',
		24: 'x',
		25: 'y',
		26: 'z',
	};

	for (let z = 0; z < arr.length; z++) {
		const outter = arr[z];
		for (let x = 0; x <= outter.length; x++) {
			const scan = outter[x];
			for (let char in alphabet) {
				if (scan === undefined) {
					resultConvertNumber += ' ';
					break;
				} else if (String(scan) === char) {
					resultConvertNumber += alphabet[char];
					break;
				}
			}
		}
	}

	// console.log(resultConvertNumber);

	return resultConvertNumber;
}

function result(arr) {
	let resConvertSymbol = convertSymbol(arr);
	let resDecrementOdd = decrementOdd(resConvertSymbol);
	let resSplitNumber = splitNumber(resDecrementOdd);
	let result = convertNumber(resSplitNumber);

	return result;
}

// // =================================================================================================
console.log(
	result([
		'!@',
		'!&',
		'@)',
		'#!',
		'&#',
		'!(',
		'@&',
		'%%',
		'!(',
		'##',
		'#&',
		'@^',
	])
);
// // lets go guyz

console.log(
	result(['!(', '#&', '!@', '@%', '@@', '!%', '&#', '#%', '@%', '#!'])
);
// // i love you

console.log(
	result(['!%', '@&', '$', '!&', '$#', '*', '!#', '!%', '@#', '@)', '@!', '@@'])
);
// // code hacktiv

// ==============================================
// --------------- L I N E 9 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 10 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 11 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 16 -------------------
// ==============================================

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
