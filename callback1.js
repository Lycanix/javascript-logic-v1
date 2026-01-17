// const students = [
// 	{
// 		name: 'Andi',
// 		scores: [80, 90, 75],
// 	},
// 	{
// 		name: 'Budi',
// 		scores: [60, 70],
// 	},
// 	{
// 		name: 'Citra',
// 		scores: [],
// 	},
// ];

// function processStudents(data, callback) {
// 	let result = [];
// 	for (let i = 0; i < data.length; i++) {
// 		const student = data[i];
// 		const score = student.scores;
// 		if (score.length === 0) continue;

// 		let point = 0;
// 		for (let j = 0; j < score.length; j++) {
// 			const grade = score[j];
// 			point += grade;
// 		}
// 		let avg = Math.floor(point / score.length);

// 		result.push({
// 			name: student.name,
// 			average: avg,
// 		});
// 	}

// 	callback(result);
// }
// function printResult(result) {
// 	console.log(result);
// }
// processStudents(students, printResult);
// ==============================================
// --------------- L I N E 17 -------------------
// ==============================================
const digimons = [
	{
		name: 'Agumon',
		level: 5,
		hp: [30, 20, 25],
	},
	{
		name: 'Gabumon',
		level: 4,
		hp: [20, 15],
	},
	{
		name: 'Patamon',
		level: 3,
		hp: [],
	},
];
function processDigimons(data, callback) {
	let result = [];
	for (let i = 0; i < data.length; i++) {
		const digimon = data[i];
		if (digimon.hp.length === 0) continue;
		result.push(callback(digimon));
	}
	return result;
}

function digiStats(result) {
	let status = result['hp'];
	let total = 0;
	for (let i = 0; i < status.length; i++) {
		const stat = status[i];
		if (stat.length === 0) {
			continue;
		}
		total += stat;
	}

	let avg = Math.floor(total / status.length);

	return {
		name: result.name,
		level: result.level,
		averageHp: avg,
	};
}

let show = processDigimons(digimons, digiStats);
console.log(show);

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
