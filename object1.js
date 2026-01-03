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

// ==============================================
// --------------- L I N E 3 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 4 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 5 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 6 -------------------
// ==============================================

// ==============================================
// --------------- L I N E 7 -------------------
// ==============================================
