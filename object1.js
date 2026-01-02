/*
====================================
REWARD STATION X
====================================
Aturan ringkas:
- Hitung total point dari history belanja
- Ambil hadiah berdasarkan PRIZE_LIST
- Hadiah punya dependency
- Sisa point < 500 → hangus
- History tidak valid → return string
*/

/* ======================
DATA ITEM POINT
====================== */
const ITEM_POINT = {
	Soda: 100,
	Snack: 250,
	Noodle: 500,
	Coffee: 800,
};

/* ======================
DATA HADIAH
Format:
[minPoint, rewardName, dependency]
====================== */
const PRIZE_LIST = [
	[1000, 'Keychain', null],
	[2000, 'Mug', 'Keychain'],
	[4000, 'Tumbler', 'Mug'],
	[7000, 'Backpack', null],
];

/* ======================
FUNCTION 1
Hitung total point
====================== */
function calculatePoint(history) {
	// write your code here
	let result1 = 0;
	for (let q = 0; q < history.length; q++) {
		const item = history[q];
		// console.log(item);
		// console.log(ITEM_POINT[item]);
		result1 += ITEM_POINT[item];
	}

	// console.log(result1);
	return result1;
}

/* ======================
FUNCTION 2
Ambil hadiah + sisa point
====================== */
function collectPrizes(totalPoint) {
	/*
  return {
    prizes: [],
    remainingPoint: number
  }
  */
	// write your code here
	let result2 = {
		prizes: [],
		remainingPoint: 0,
	};
	// console.log(totalPoint);
	let isDepedency = '';
	for (let z = 0; z < PRIZE_LIST.length; z++) {
		const list = PRIZE_LIST[z];
		let minPoint = list[0];
		let rewardName = list[1];
		let dependency = list[2];
		// console.log(list);
		// console.log(dependency);

		if (totalPoint >= minPoint) {
			if (dependency === null || dependency === isDepedency) {
				isDepedency = rewardName;
				result2.prizes.push(rewardName);
			}
		} else {
			if (totalPoint < PRIZE_LIST[0][0]) {
				break;
			} else {
				result2.remainingPoint = totalPoint -= PRIZE_LIST[z - 1][0];
				break;
			}
		}
	}
	isDepedency = '';

	// console.log(result2);
	return result2;
}

/* ======================
FUNCTION 3
Main handler
====================== */
function rewardStation(customer) {
	// write your code here

	let name = customer.name;
	let bill = customer.history;

	if (!name) {
		return 'User tidak ditemukan';
	} else if (typeof bill !== 'object' || bill === null || !('length' in bill)) {
		return 'History tidak valid';
	} else if (bill.length === 0) {
		return 'Tidak ada transaksi';
	}
	let calculate = calculatePoint(bill);
	let reward = collectPrizes(calculate);

	let result = {
		name: name,
		totalPoint: calculate,
		prizes: reward.prizes,
		remainingPoint: reward.remainingPoint,
	};

	return result;
}

/* ======================
TEST CASE UTAMA
====================== */
console.log(
	rewardStation({
		name: 'Rina',
		history: ['Soda', 'Snack', 'Coffee', 'Noodle', 'Snack', 'Coffee'],
	})
);
/*
{
  name: 'Rina',
  totalPoint: 2700,
  prizes: ['Keychain', 'Mug'],
  remainingPoint: 700
}
*/

/* ======================
EDGE CASE 1
History kosong
====================== */
console.log(
	rewardStation({
		name: 'Budi',
		history: [],
	})
);
// 'Tidak ada transaksi'

/* ======================
EDGE CASE 2
History bukan array
====================== */
console.log(
	rewardStation({
		name: 'Ani',
		history: 'Soda',
	})
);
// 'History tidak valid'

/* ======================
EDGE CASE 3
Dependency gagal
====================== */
console.log(
	rewardStation({
		name: 'Dewi',
		history: ['Coffee', 'Coffee'],
	})
);
/*
{
  name: 'Dewi',
  totalPoint: 1600,
  prizes: ['Keychain'],
  remainingPoint: 600
}
*/

/* ======================
EDGE CASE 4
Point hangus
====================== */
console.log(
	rewardStation({
		name: 'Tono',
		history: ['Snack', 'Snack', 'Snack'],
	})
);
/*
{
  name: 'Tono',
  totalPoint: 750,
  prizes: [],
  remainingPoint: 0
}
*/
