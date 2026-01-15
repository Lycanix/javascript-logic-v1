// const trainers = [
// 	{
// 		name: 'Tai',
// 		team: [
// 			{
// 				name: 'Agumon',
// 				level: 5,
// 				type: 'Vaccine',
// 				battles: [
// 					{ opponent: 'Goblimon', result: 'win', damage: 10 },
// 					{ opponent: 'Devimon', result: 'lose', damage: 30 },
// 					{ opponent: 'meramon', result: 'draw', damage: 20 },
// 				],
// 			},
// 			{
// 				name: 'Koromon',
// 				level: 2,
// 				type: 'Data',
// 				battles: [],
// 			},
// 		],
// 	},
// 	{
// 		name: 'Matt',
// 		team: [
// 			{
// 				name: 'Gabumon',
// 				level: 6,
// 				type: 'Data',
// 				battles: [
// 					{ opponent: 'Ikakumon', result: 'win', damage: 25 },
// 					{ opponent: 'Palmon', result: 'win', damage: 40 },
// 					{ opponent: 'Mamemon', result: 'win', damage: 0 },
// 				],
// 			},
// 			{
// 				name: 'Tsukaimon',
// 				level: '4', // ❌ INVALID
// 				type: 'Virus',
// 				battles: [{ opponent: 'Patamon', result: 'win', damage: 15 }],
// 			},
// 		],
// 	},
// ];

// function extractAllDigimons(trainers) {
// 	let result = [];
// 	for (let i = 0; i < trainers.length; i++) {
// 		const trainer = trainers[i];
// 		for (let j = 0; j < trainer.team.length; j++) {
// 			const teams = trainer.team[j];
// 			result.push({
// 				name: teams.name,
// 				level: teams.level,
// 				type: teams.type,
// 				battles: teams.battles,
// 				owner: trainer.name,
// 			});
// 		}
// 	}

// 	// console.log(result);
// 	return result;
// }

// function filterValidDigimons(digimons) {
// 	let result = [];
// 	for (let i = 0; i < digimons.length; i++) {
// 		const d = digimons[i];
// 		if (typeof d.name !== 'string' || d.name === 0) continue;
// 		if (typeof d.level !== 'number' || d.level < 3) continue;
// 		if (d.type !== 'Vaccine' && d.type !== 'Data' && d.type !== 'Virus')
// 			continue;
// 		if (!Array.isArray(d.battles)) continue;

// 		result.push(d);
// 	}

// 	// console.log(result);
// 	return result;
// }

// function sanitizeBattles(validDigimons) {
// 	let result = [];
// 	for (let i = 0; i < validDigimons.length; i++) {
// 		let d = validDigimons[i];
// 		let battle = validDigimons[i].battles;
// 		let temp = [];
// 		for (let j = 0; j < battle.length; j++) {
// 			const list = battle[j];
// 			if (typeof list.opponent !== 'string') continue;
// 			if (list.result !== 'win' && list.result !== 'lose') continue;
// 			if (typeof list.damage !== 'number' || list.damage < 1) continue;

// 			temp.push(list);
// 		}
// 		result.push({
// 			name: d.name,
// 			level: d.level,
// 			type: d.type,
// 			owner: d.owner,
// 			battles: temp,
// 		});
// 	}

// 	// console.log(result);
// 	return result;
// }

// function countDigimonByType(validDigimons) {
// 	let result = {
// 		Vaccine: 0,
// 		Data: 0,
// 		Virus: 0,
// 	};

// 	for (let i = 0; i < validDigimons.length; i++) {
// 		let digiType = validDigimons[i].type;
// 		result[digiType]++;
// 	}

// 	// console.log(result);
// 	return result;
// }

// function buildBattleSummary(digimonsWithBattles) {
// 	let result = {
// 		totalBattle: 0,
// 		totalWin: 0,
// 		totalLose: 0,
// 		totalDamage: 0,
// 	};

// 	for (let i = 0; i < digimonsWithBattles.length; i++) {
// 		const d = digimonsWithBattles[i].battles;
// 		for (let j = 0; j < d.length; j++) {
// 			const list = d[j];
// 			result.totalBattle++;
// 			if (list.result === 'win') result.totalWin++;
// 			if (list.result === 'lose') result.totalLose++;
// 			result.totalDamage += list.damage;
// 		}
// 	}

// 	// console.log(result);
// 	return result;
// }

// function findMostAggressiveDigimon(digimonsWithBattles) {
// 	let maxDamage = -1;
// 	let result = null;
// 	let hasBattle = false;

// 	for (let i = 0; i < digimonsWithBattles.length; i++) {
// 		let d = digimonsWithBattles[i];

// 		let totalDamage = 0;

// 		for (let j = 0; j < d.battles.length; j++) {
// 			totalDamage += d.battles[j].damage;
// 			hasBattle = true;
// 		}

// 		console.log(totalDamage);

// 		if (totalDamage > maxDamage) {
// 			maxDamage = totalDamage;
// 			result = {
// 				name: d.name,
// 				owner: d.owner,
// 				totalDamage: totalDamage,
// 			};
// 		}
// 	}

// 	if (!hasBattle) return null;
// 	return result;
// }

// function buildFinalReport(trainers) {
// 	let digimons = extractAllDigimons(trainers);
// 	let validDigimons = filterValidDigimons(digimons);
// 	let digimonsWithBattles = sanitizeBattles(validDigimons);

// 	return {
// 		totalTrainer: trainers.length,
// 		totalValidDigimon: validDigimons.length,
// 		digimonByType: countDigimonByType(validDigimons),
// 		battleSummary: buildBattleSummary(digimonsWithBattles),
// 		mostAggressiveDigimon: findMostAggressiveDigimon(digimonsWithBattles),
// 	};
// }

// console.log(buildFinalReport(trainers));
/*
{
	totalTrainer: Number,
	totalValidDigimon: Number,
	digimonByType: {
		Vaccine: Number,
		Data: Number,
		Virus: Number,
	},
	battleSummary: {
		totalBattle: Number,
		totalWin: Number,
		totalLose: Number,
		totalDamage: Number,
	},
	mostAggressiveDigimon: {
		name: String,
		owner: String,
		totalDamage: Number,
	} | null,
}

*/
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
