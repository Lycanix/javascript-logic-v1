// ==============================================
// --------------- L I N E 0 -------------------
// ==============================================

/*
// /*
// ====================================
// REWARD STATION X
// ====================================
// Aturan ringkas:
// - Hitung total point dari history belanja
// - Ambil hadiah berdasarkan PRIZE_LIST
// - Hadiah punya dependency
// - Sisa point < 500 → hangus
// - History tidak valid → return string
// */

// /* ======================
// DATA ITEM POINT
// ====================== */
// const ITEM_POINT = {
// 	Soda: 100,
// 	Snack: 250,
// 	Noodle: 500,
// 	Coffee: 800,
// };

// /* ======================
// DATA HADIAH
// Format:
// [minPoint, rewardName, dependency]
// ====================== */
// const PRIZE_LIST = [
// 	[1000, 'Keychain', null],
// 	[2000, 'Mug', 'Keychain'],
// 	[4000, 'Tumbler', 'Mug'],
// 	[7000, 'Backpack', null],
// ];

// /* ======================
// FUNCTION 1
// Hitung total point
// ====================== */
// function calculatePoint(history) {
// 	// write your code here
// 	let result1 = 0;
// 	for (let q = 0; q < history.length; q++) {
// 		const item = history[q];
// 		// console.log(item);
// 		// console.log(ITEM_POINT[item]);
// 		result1 += ITEM_POINT[item];
// 	}

// 	// console.log(result1);
// 	return result1;
// }

// /* ======================
// FUNCTION 2
// Ambil hadiah + sisa point
// ====================== */
// function collectPrizes(totalPoint) {
// 	/*
//   return {
//     prizes: [],
//     remainingPoint: number
//   }
//   */
// 	// write your code here
// 	let result2 = {
// 		prizes: [],
// 		remainingPoint: 0,
// 	};
// 	// console.log(totalPoint);
// 	let isDepedency = '';
// 	for (let z = 0; z < PRIZE_LIST.length; z++) {
// 		const list = PRIZE_LIST[z];
// 		let minPoint = list[0];
// 		let rewardName = list[1];
// 		let dependency = list[2];
// 		// console.log(list);
// 		// console.log(dependency);

// 		if (totalPoint >= minPoint) {
// 			if (dependency === null || dependency === isDepedency) {
// 				isDepedency = rewardName;
// 				result2.prizes.push(rewardName);
// 			}
// 		} else {
// 			if (totalPoint < PRIZE_LIST[0][0]) {
// 				break;
// 			} else {
// 				result2.remainingPoint = totalPoint -= PRIZE_LIST[z - 1][0];
// 				break;
// 			}
// 		}
// 	}
// 	isDepedency = '';

// 	// console.log(result2);
// 	return result2;
// }

// /* ======================
// FUNCTION 3
// Main handler
// ====================== */
// function rewardStation(customer) {
// 	// write your code here

// 	let name = customer.name;
// 	let bill = customer.history;

// 	if (!name) {
// 		return 'User tidak ditemukan';
// 	} else if (typeof bill !== 'object' || bill === null || !('length' in bill)) {
// 		return 'History tidak valid';
// 	} else if (bill.length === 0) {
// 		return 'Tidak ada transaksi';
// 	}
// 	let calculate = calculatePoint(bill);
// 	let reward = collectPrizes(calculate);

// 	let result = {
// 		name: name,
// 		totalPoint: calculate,
// 		prizes: reward.prizes,
// 		remainingPoint: reward.remainingPoint,
// 	};

// 	return result;
// }

// /* ======================
// TEST CASE UTAMA
// ====================== */
// console.log(
// 	rewardStation({
// 		name: 'Rina',
// 		history: ['Soda', 'Snack', 'Coffee', 'Noodle', 'Snack', 'Coffee'],
// 	})
// );
// /*
// {
//   name: 'Rina',
//   totalPoint: 2700,
//   prizes: ['Keychain', 'Mug'],
//   remainingPoint: 700
// }
// */

// /* ======================
// EDGE CASE 1
// History kosong
// ====================== */
// console.log(
// 	rewardStation({
// 		name: 'Budi',
// 		history: [],
// 	})
// );
// // 'Tidak ada transaksi'

// /* ======================
// EDGE CASE 2
// History bukan array
// ====================== */
// console.log(
// 	rewardStation({
// 		name: 'Ani',
// 		history: 'Soda',
// 	})
// );
// // 'History tidak valid'

// /* ======================
// EDGE CASE 3
// Dependency gagal
// ====================== */
// console.log(
// 	rewardStation({
// 		name: 'Dewi',
// 		history: ['Coffee', 'Coffee'],
// 	})
// );
// /*
// {
//   name: 'Dewi',
//   totalPoint: 1600,
//   prizes: ['Keychain'],
//   remainingPoint: 600
// }
// */

// /* ======================
// EDGE CASE 4
// Point hangus
// ====================== */
// console.log(
// 	rewardStation({
// 		name: 'Tono',
// 		history: ['Snack', 'Snack', 'Snack'],
// 	})
// );
// /*
// {
//   name: 'Tono',
//   totalPoint: 750,
//   prizes: [],
//   remainingPoint: 0
// }
// */

// ==============================================
// --------------- L I N E 1 -------------------
// ==============================================

// const ITEM_POINT_TREASURE = {
// 	Map: 150,
// 	Compass: 300,
// 	Torch: 500,
// 	Rope: 700,
// };

// // Format: [minPoint, rewardName, dependency]
// const TREASURE_LIST = [
// 	[500, 'Silver Coin', null],
// 	[1200, 'Golden Coin', 'Silver Coin'],
// 	[2500, 'Treasure Chest', 'Golden Coin'],
// 	[4000, 'Ancient Relic', null],
// ];

// /*
// Hitung total point dari history
// Ambil hadiah berurutan dari TREASURE_LIST
// Harus cukup point dan dependency terpenuhi
// Point dipotong per hadiah
// Sisa point < 400 → hangus
// History tidak valid → return string error
// */

// function calcPoint(history) {
// 	// write your code here

// 	let result1 = 0;

// 	for (let q = 0; q < history.length; q++) {
// 		const item = history[q];
// 		// console.log(ITEM_POINT_TREASURE[item]);
// 		if (ITEM_POINT_TREASURE[item] !== undefined) {
// 			result1 += ITEM_POINT_TREASURE[item];
// 		}
// 	}

// 	// console.log(result1);
// 	return result1;
// }

// function pickTreasures(totalPoint) {
// 	// write your code here
// 	/*
//     return {
//     treasures: [],
//     remainingPoint: number
//     }
//   */

// 	let result2 = {
// 		treasures: [],
// 		remainingPoint: 0,
// 	};
// 	let isDepedency = '';
// 	result2.remainingPoint = totalPoint;
// 	for (let z = 0; z < TREASURE_LIST.length; z++) {
// 		const list = TREASURE_LIST[z];
// 		let minPoint = list[0];
// 		let rewardName = list[1];
// 		let dependency = list[2];

// 		if (result2.remainingPoint >= minPoint) {
// 			result2.remainingPoint -= list[0];

// 			// kondisi mendapatkan reward selanjutnya depedency harus terpenuhi
// 			if (dependency === null || dependency === isDepedency) {
// 				isDepedency = rewardName;
// 				result2.treasures.push(rewardName);
// 			}
// 		} else {
// 			// validasi jika sisa point dibawah 400 maka, hangus
// 			if (result2.remainingPoint < 410) {
// 				result2.remainingPoint = 0;
// 			} else {
// 				// jika sisa point diatas 400 maka berhenti loop
// 				break;
// 			}
// 		}
// 	}
// 	isDepedency = '';

// 	// console.log(result2);
// 	return result2;
// }

// function treasureHunt(player) {
// 	// write your code here
// 	let name = player.name;
// 	let item = player.history;

// 	// validasi jika name tidak ada
// 	if (!name) {
// 		return 'Player tidak ditemukan';
// 	}

// 	// validasi jika history kosong
// 	if (item.length === 0) {
// 		return 'Tidak ada transaksi';
// 	}

// 	// validasi jika data history tidak valid
// 	if (!Array.isArray(item)) {
// 		return 'History tidak valid';
// 	}

// 	let calc = calcPoint(item);
// 	let pick = pickTreasures(calc);
// 	let result = {
// 		name: name,
// 		totalPoint: calc,
// 		treasures: pick.treasures,
// 		remainingPoint: pick.remainingPoint,
// 	};

// 	// console.log(result);
// 	return result;
// }

// // =====
// console.log(
// 	treasureHunt({
// 		name: 'Ardi',
// 		history: ['Map', 'Torch', 'Compass', 'Torch', 'Rope'],
// 	})
// );
// /*
// totalPoint:
// 150 + 500 + 300 + 500 + 700 = 2150

// Treasures:
// - Silver Coin (500) ✔
// - Golden Coin (1200) ✔ (dependency Silver Coin sudah ada)
// - Treasure Chest (2500) ❌ (point kurang)
// - Ancient Relic (4000) ❌

// Remaining point:
// 2150 - 500 - 1200 = 450

// Output:
// {
//   name: 'Ardi',
//   totalPoint: 2150,
//   treasures: ['Silver Coin', 'Golden Coin'],
//   remainingPoint: 450
// }
// */

// console.log(
// 	treasureHunt({
// 		name: 'Bella',
// 		history: [],
// 	})
// );
// // 'Tidak ada transaksi'

// console.log(
// 	treasureHunt({
// 		name: 'Citra',
// 		history: 'Map',
// 	})
// );
// // 'History tidak valid'

// console.log(
//   treasureHunt({
//     name: 'Dika',
//     history: ['Rope', 'Rope']
//   })
// );
// /*
// totalPoint = 1400

// Treasures:
// - Silver Coin (500) ✔
// - Golden Coin (1200) ❌ (sisa point < 1200)
// - Treasure Chest ❌ (dependency Golden Coin tidak ada)
// - Ancient Relic ❌ (point < 4000)

// Remaining point = 900

// Output:
// {
//   name: 'Dika',
//   totalPoint: 1400,
//   treasures: ['Silver Coin'],
//   remainingPoint: 900
// }
// */

// console.log(
// 	treasureHunt({
// 		name: 'Eko',
// 		history: ['Map', 'Map'],
// 	})
// );
// /*
// totalPoint = 300
// - Tidak cukup untuk hadiah pertama (500)
// - Sisa point < 300 → hangus

// Output:
// {
//   name: 'Eko',
//   totalPoint: 300,
//   treasures: [],
//   remainingPoint: 0
// }
// */

// ==============================================
// --------------- L I N E 2 -------------------
// ==============================================

// function targetTerdekat(arr) {
// 	let result = 0;
// 	let countStart = 0;
// 	let countFinish = 0;

// 	for (let z = 0; z < arr.length; z++) {
// 		const scanO = arr[z];
// 		if (scanO === 'o') {
// 			countStart = z;
// 			countFinish = z;
// 		}
// 	}

// 	for (let x = countStart; x < arr.length; x++) {
// 		const scanX = arr[x];

// 		if (scanX !== 'x' && x + 1 === arr.length) {
// 			for (let c = countStart; c >= 0; c--) {
// 				const reverse = arr[c];
// 				if (reverse === 'x') {
// 					countFinish = x;
// 					break;
// 				}
// 			}
// 		} else if (scanX === 'x') {
// 			countFinish = x;
// 			break;
// 		}
// 	}

// 	result = countFinish - countStart;

// 	return result;
// }

// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// ==============================================
// --------------- L I N E 3 -------------------
// ==============================================

// function startUpCompetition(startUpList) {
// 	if (!startUpList || startUpList.length === 0) {
// 		return 'Invalid Data';
// 	}

// 	let result = [];
// 	let temp = [];
// 	let word = '';
// 	for (let z = 0; z < startUpList.length; z++) {
// 		const scan = startUpList[z];
// 		for (let x = 0; x <= scan.length; x++) {
// 			const char = scan[x];
// 			if (char === '-') {
// 				temp.push(word);
// 				word = '';
// 			} else if (char === undefined) {
// 				temp.push(word);
// 				word = '';
// 				result.push(temp);
// 				temp = [];
// 				temp = [];
// 			} else {
// 				word += char;
// 			}
// 		}
// 	}

// 	let final = [];
// 	for (let c = 0; c < result.length; c++) {
// 		const convert = result[c];
// 		let age = convert[1];
// 		let sorten = convert[2];

// 		if (sorten === 'E') {
// 			convert[convert.length - 1] = 'Ecommerce';
// 		} else if (sorten === 'T') {
// 			convert[convert.length - 1] = 'Technology';
// 		} else if (sorten === 'H') {
// 			convert[convert.length - 1] = 'Healthcare';
// 		} else if (sorten === 'A') {
// 			convert[convert.length - 1] = 'Agrotech';
// 		}

// 		if (age >= 14) {
// 			final.push(convert);
// 		}
// 	}

// 	return final;
// }

// console.log(startUpCompetition());
// // 'Invalid Data'

// console.log(startUpCompetition([]));
// // Invalid Data

// let indonesia = [
// 	'Tikipidia-17-E',
// 	'Bikilipik-08-E',
// 	'Bhinniki-07-E',
// 	'BleBle.cim-15-E',
// 	'Triviliki-16-T',
// 	'Tikit.cim-12-T',
// 	'Hilidic-15-H',
// 	'Siyirbix-17-A',
// 	'TikingSiyir.ci-16-A',
// ];

// console.log(startUpCompetition(indonesia));
// // [
// //   [ 'Tikipidia', 17, 'Ecommerce' ],
// //   [ 'BleBle.cim', 15, 'Ecommerce' ],
// //   [ 'Triviliki', 16, 'Technology' ],
// //   [ 'Hilidic', 15, 'Healthcare' ],
// //   [ 'Siyirbix', 17, 'Agrotech' ],
// //   [ 'TikingSiyir.ci', 16, 'Agrotech' ]
// // ]

// let singapore = [
// 	'Shipee-18-E',
// 	'Lizidi-19-E',
// 	'HalalTrip-07-T',
// 	'verylocaltrip.com-12-T',
// 	'Doctor Anywhere-14-H',
// 	'Healint-13-H',
// 	'SINGROW-19-A',
// 	'Simplyfresh-09-A',
// 	'eFeedLink-18-A',
// ];
// console.log(startUpCompetition(singapore));
// // [
// //   [ 'Shipee', 18, 'Ecommerce' ],
// //   [ 'Lizidi', 19, 'Ecommerce' ],
// //   [ 'Doctor Anywhere', 14, 'Healthcare' ],
// //   [ 'SINGROW', 19, 'Agrotech' ],
// //   [ 'eFeedLink', 18, 'Agrotech' ],
// // ]

// let malaysia = ['Dropee-17-E', 'BookDoc-18-H', 'dahmakan-19-A'];
// console.log(startUpCompetition(malaysia));
// // [
// //   [ 'Dropee', 17, 'Ecommerce' ],
// //   [ 'BookDoc', 18, 'Healthcare' ],
// //   [ 'dahmakan', 19, 'Agrotech' ],
// // ]

// ==============================================
// --------------- L I N E 4 -------------------
// ==============================================

// function splitting(str) {
// 	let result = [];
// 	let group = [];
// 	let word = '';

// 	for (let i = 0; i <= str.length; i++) {
// 		const char = str[i];
// 		if (char === '-') {
// 			group.push(word);
// 			word = '';
// 		} else if (char === ',' || char === undefined) {
// 			group.push(word);
// 			word = '';
// 			result.push(group);
// 			group = [];
// 		} else {
// 			word += char;
// 		}
// 	}

// 	let finish = [];
// 	let range = [];
// 	let melee = [];
// 	for (let x = 0; x < result.length; x++) {
// 		const split = result[x];
// 		if (split[1] === 'Ranged') {
// 			range.push(split[0]);
// 		} else if (split[1] === 'Melee') {
// 			melee.push(split[0]);
// 		}
// 	}
// 	finish.push(range, melee);

// 	// console.log(finish);
// 	return finish;
// }

// function meleeRangedGrouping(str) {
// 	if (!str) {
// 		return 'Invalid data';
// 	}

// 	let result = splitting(str);
// 	return result;
// }

// // TEST CASE
// let input1 = 'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged';
// let input2 = 'Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged';
// console.log(meleeRangedGrouping(input1)); // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
// console.log(meleeRangedGrouping(input2)); // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
// console.log(meleeRangedGrouping('')); // 'Invalid data'

// ==============================================
// --------------- L I N E 5 -------------------
// ==============================================

// function tukarBesarKecil(kalimat) {
// 	let result = '';
// 	for (let z = 0; z < kalimat.length; z++) {
// 		const element = kalimat[z];
// 		if (element === element.toUpperCase()) {
// 			result += element.toLowerCase();
// 		} else {
// 			result += element.toUpperCase();
// 		}
// 	}
// 	return result;
// }

// // TEST CASES
// console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
// console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
// console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
// console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
// console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

// ==============================================
// --------------- L I N E 6 -------------------
// ==============================================

// function urutkanAbjad(str) {
// 	let chars = [];
// 	for (let i = 0; i < str.length; i++) {
// 		chars.push(str[i]);
// 	}

// 	for (let i = 0; i < chars.length - 1; i++) {
// 		let minIndex = i;
// 		for (let j = i + 1; j < chars.length; j++) {
// 			if (chars[j] < chars[minIndex]) {
// 				minIndex = j;
// 			}
// 		}
// 		if (minIndex !== i) {
// 			let temp = chars[i];
// 			chars[i] = chars[minIndex];
// 			chars[minIndex] = temp;
// 		}
// 	}

// 	let result = '';
// 	for (let i = 0; i < chars.length; i++) {
// 		result += chars[i];
// 	}
// 	return result;
// }

// TEST CASES
// console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'
// console.log(urutkanAbjad('developer')); // 'deeeloprv'
// console.log(urutkanAbjad('software')); // 'aeforstw'
// console.log(urutkanAbjad('aegis')); // 'aegis'

// ==============================================
// --------------- L I N E 7 -------------------
// ==============================================

// function sorting(array) {
// 	let arr = [];
// 	for (let i = 0; i < array.length; i++) {
// 		arr.push(array[i]);
// 	}

// 	for (let i = 0; i < arr.length - 1; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] > arr[j]) {
// 				let tmp = arr[i];
// 				arr[i] = arr[j];
// 				arr[j] = tmp;
// 			}
// 		}
// 	}
// 	return arr;
// }

// function sortingByType(array) {
// 	let nums = [];
// 	let strs = [];
// 	let bools = [];

// 	for (let i = 0; i < array.length; i++) {
// 		if (typeof array[i] === 'number') nums.push(array[i]);
// 		else if (typeof array[i] === 'string') strs.push(array[i]);
// 		else if (typeof array[i] === 'boolean') bools.push(array[i]);
// 	}

// 	return [sorting(nums), sorting(strs), sorting(bools)];
// }

// function sortAllClean(array) {
// 	let nums = [];
// 	let strs = [];
// 	let bools = [];

// 	for (let i = 0; i < array.length; i++) {
// 		const val = array[i];
// 		if (typeof val === 'number' && !isNaN(val)) nums.push(val);
// 		else if (typeof val === 'string') strs.push(val);
// 		else if (typeof val === 'boolean') bools.push(val);
// 	}

// 	if (nums.length === 0 && strs.length === 0 && bools.length === 0) return [];

// 	return [sorting(nums), sorting(strs), sorting(bools)];
// }

// //do not change the code below
// let inputArrSorting = [2, 4, 6, 8, 2, 3];
// let inputArrSortingType = [1, 3, 'array', -45, true, false, 'big'];
// let inputArrSortingClean = [
// 	undefined,
// 	null,
// 	456,
// 	'def',
// 	NaN,
// 	[],
// 	true,
// 	123,
// 	'bcd',
// 	false,
// ];
// console.log(sorting(inputArrSorting)); //[ 2, 2, 3, 4, 6, 8 ]
// console.log(sortingByType(inputArrSortingType)); // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
// console.log(sortAllClean(inputArrSortingClean)); //[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
// console.log(sortAllClean([NaN, undefined])); // []

// ==============================================
// --------------- L I N E 8 -------------------
// ==============================================

/**
 * =========================
 * Custom Sorting Exercises
 * =========================
 * Aturan:
 * - Tidak boleh pakai built-in sort()
 * - Gunakan loop manual dan swap
 * - Boleh pakai push, typeof, length
 */

/**
 * 1. sortingDescending(array)
 * Mengurutkan angka dari besar ke kecil
 */
// function sortingDescending(array) {
// 	// YOUR CODE HERE
// 	let arr = [];

// 	for (let z = 0; z < array.length; z++) arr.push(array[z]);

// 	for (let x = 0; x < arr.length - 1; x++) {
// 		for (let c = x + 1; c < array.length; c++) {
// 			if (arr[x] < arr[c]) {
// 				let temp = arr[x];
// 				arr[x] = arr[c];
// 				arr[c] = temp;
// 			}
// 		}
// 	}
// 	return arr;
// }

// /**
//  * 2. sortingByParity(array)
//  * Memisahkan angka genap dan ganjil lalu mengurutkan masing-masing ASC
//  * Output: [ genapAsc, ganjilAsc ]
//  */
// function sortingByParity(array) {
// 	// YOUR CODE HERE
// 	let arr = [];

// 	for (let z = 0; z < array.length; z++) arr.push(array[z]);

// 	for (let x = 0; x < arr.length - 1; x++) {
// 		for (let c = x + 1; c < arr.length; c++) {
// 			if (arr[x] > arr[c]) {
// 				let temp = arr[x];
// 				arr[x] = arr[c];
// 				arr[c] = temp;
// 			}
// 		}
// 	}

// 	let final = [];
// 	let genap = [];
// 	let ganjil = [];

// 	for (let q = 0; q < arr.length; q++) {
// 		const element = arr[q];
// 		if (element % 2 === 0) {
// 			genap.push(element);
// 		} else {
// 			ganjil.push(element);
// 		}
// 	}
// 	final.push(genap, ganjil);
// 	return final;
// }

/**
 * 3. sortNumberClean(array)
 * Ambil hanya number valid (bukan NaN)
 * Urutkan ASC
 * Jika tidak ada number, return []
 */
// function sortNumberClean(array) {
// 	// YOUR CODE HERE
// 	let nums = [];

// 	for (let i = 0; i < array.length; i++) {
// 		const el = array[i];
// 		if (typeof el === 'number' && !isNaN(el)) {
// 			nums.push(el);
// 		}
// 	}

// 	if (nums.length === 0) return [];

// 	// sorting ASC manual
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] > nums[j]) {
// 				let tmp = nums[i];
// 				nums[i] = nums[j];
// 				nums[j] = tmp;
// 			}
// 		}
// 	}

// 	return nums;
// }

// // ===== TEST CASES (DO NOT EDIT) =====
// let input1 = [3, 1, 4, 1, 5, 9];
// let input2 = [10, 3, 5, 8, 7, 2];
// let input3 = [NaN, undefined, '3', true];

// console.log(sortingDescending(input1)); // [ 9, 5, 4, 3, 1, 1 ]
// console.log(sortingByParity(input2)); // [ [ 2, 8, 10 ], [ 3, 5, 7 ] ]
// console.log(sortNumberClean(input3)); // []

// ==============================================
// --------------- L I N E ? -------------------
// ==============================================

// function changeMe(arr) {
// 	if (arr.length === 0) {
// 		console.log('Invalid data');
// 	}
// 	let name = '';
// 	let data = {
// 		firstName: '',
// 		lastName: '',
// 		gender: '',
// 		age: 0,
// 	};
// 	for (let z = 0; z < arr.length; z++) {
// 		const element = arr[z];
// 		let validAge = 2026 - element[3];
// 		if (!element[3]) {
// 			validAge = 'Invalid Birth Year';
// 		}
// 		name = `${z + 1}. ${element[0]} ${element[1]}:`;
// 		data = {
// 			firstName: element[0],
// 			lastName: element[1],
// 			gender: element[2],
// 			age: validAge,
// 		};
// 		console.log(name);
// 		console.log(data);
// 	}
// }
// // // ==========================================
// changeMe([
// 	['Christ', 'Evans', 'Male', 1982],
// 	['Robert', 'Downey', 'Male'],
// ]);
// // 1. Christ Evans:
// // { firstName: 'Christ',
// //   lastName: 'Evans',
// //   gender: 'Male',
// //   age: 44 }
// // 2. Robert Downey:
// // { firstName: 'Robert',
// //   lastName: 'Downey',
// //   gender: 'Male',
// //   age: 'Invalid Birth Year' }
// // ==========================================
// changeMe([]); // ""

// ==============================================
// --------------- L I N E 9 -------------------
// ==============================================

// function countMe(arr) {
// 	let result = {};
// 	for (let z = 0; z < arr.length; z++) {
// 		const element = arr[z];
// 		if (result[element] === undefined) {
// 			result[element] = 1;
// 		} else {
// 			result[element] = result[element] + 1;
// 		}
// 	}
// 	console.log(result);

// 	return;
// }

// console.log(countMe(['Sofyan', 'Ricky', 'Sofyan', 'Semmi', 'Semmi', 'Wika']));
// // { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

// console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }

// ==============================================
// --------------- L I N E 10 -------------------
// ==============================================

// function getAnimals(arr) {
// 	let result = [];
// 	let k = '';
// 	let h = '';
// 	let o = '';
// 	let temp = '';
// 	for (let z = 0; z < arr.length; z++) {
// 		const element = arr[z];
// 		for (let x = 0; x <= element.length - 2; x++) {
// 			const char = element[x];
// 			if (char === ':' || char === undefined) {
// 				if (element[x + 1] === 'K') {
// 					if (k.length < temp.length) {
// 						k = temp;
// 						temp = '';
// 						continue;
// 					} else {
// 						temp = '';
// 						continue;
// 					}
// 				} else if (element[x + 1] === 'H') {
// 					if (h.length < temp.length) {
// 						h = temp;
// 						temp = '';
// 						continue;
// 					} else {
// 						temp = '';
// 						continue;
// 					}
// 				} else if (element[x + 1] === 'O') {
// 					if (o.length < temp.length) {
// 						o = temp;
// 						temp = '';
// 						continue;
// 					} else {
// 						temp = '';
// 						continue;
// 					}
// 				}
// 			}
// 			temp += char;
// 		}
// 	}
// 	result.push(k, h, o);
// 	return result;
// }

// //Test Case

// console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']));
// // [ 'Singa','Kuda','Monyet' ]

// console.log(
// 	getAnimals([
// 		'Macan:K',
// 		'Ayam:O',
// 		'Gajah:H',
// 		'Monyet:O',
// 		'Kerbau:H',
// 		'Musang:O',
// 		'Burung:H',
// 		'Hiu:K',
// 	])
// );
// // [ 'Macan', 'Kerbau', 'Monyet' ]

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

// ==============================================
// --------------- L I N E 11 -------------------
// ==============================================

// let arrayMulti = [
//     ["apuse", "Papua"],
//     ["Anging Mamiri", "Sulawesi Selatan"],
//     ["Ampar-Ampar Pisang", "Kalimantan Selatan"],
//     ["Bungong Jeumpa", "Nanggroe Aceh Darussalam"],
//     ["Manuk Dadali", "Jawa Barat"]
// ]

// // merubah array multidimensi menjadi array of objek
// function changeData(data) {

//     return
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
// --------------- L I N E 12 -------------------
// ==============================================

// let arrOfObj = [
// 	{ name: 'Andika', score: [85, 90, 67, 75], class: 'A' },
// 	{ name: 'Budika', score: [77, 80, 95, 100], class: 'B' },
// 	{ name: 'Cendikia', score: [60, 90, 85, 89], class: 'B' },
// 	{ name: 'Dodika', score: [88, 79, 83, 95], class: 'A' },
// 	{ name: 'Endika', score: [85, 92, 65, 70], class: 'C' },
// ];

// function grouppingClass(data) {
// 	return;
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
// --------------- L I N E 13 -------------------
// ==============================================
// function getMinMax(data) {

//     return
// }
// let arrOfObj = [
//     {
//         name: "andi",
//         score: 70
//     },
//     {
//         name: "Budi",
//         score: 85
//     },
//     {
//         name: "Candi",
//         score: 60
//     },
//     {
//         name: "Dandi",
//         score: 65
//     },
//     {
//         name: "Endra",
//         score: 99
//     },
//     {
//         name: "Fina",
//         score: 95
//     }
// ]
// console.log(getMinMax(arrOfObj));

/*
    [
        { name: 'Candi', score: 60 },  // min
        { name: 'Endra', score: 99 }  // max
    ]
*/
// ==============================================
// --------------- L I N E 14 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 15 -------------------
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
