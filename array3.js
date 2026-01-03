// function ladder(word) {
// 	let result = [];
// 	for (let z = word.length; z > 0; z--) {
// 		let temp = [];
// 		for (let x = 0; x < z; x++) {
// 			const char = word[x];
// 			temp.push(char);
// 		}
// 		result.push(temp);
// 	}

// 	// console.log(result);
// 	return result;
// }

// // DRIVER CODE
// console.log(ladder('hacktiv8'));
// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]

// ==============================
//      1
// ==============================

// function vocalSeeker(board) {
// 	let HurufVokal = [`a`, `A`, `i`, `I`, `u`, `U`, `e`, `E`, `o`, `O`];
// 	let count = 0;
// 	let kumpulanVokal = '';

// 	for (let i = 0; i < board.length; i++) {
// 		for (let j = 0; j < board[i].length; j++) {
// 			let current = board[i][j];

// 			// pastikan bertipe string dan panjang 1 (hindari angka & simbol lain)
// 			if (typeof current === 'string' && current.length === 1) {
// 				for (let k = 0; k < HurufVokal.length; k++) {
// 					if (current === HurufVokal[k]) {
// 						count++;
// 						kumpulanVokal += current;
// 						break; // hentikan pengecekan vokal
// 					}
// 				}
// 			}
// 		}
// 	}

// 	return (
// 		'vokal ditemukan ' + count + ' dan kumpulan vokal adalah ' + kumpulanVokal
// 	);
// }

// //DRIVER CODE

// let board = [
// 	['*', '*', '*', 10],
// 	['*', '*', -5, -10, '*', 100],
// 	['a', 'A', 'o', 'b'],
// ];

// console.log(vocalSeeker(board)); // vokal ditemukan 3 dan kumpulan vokal adalah aAo

// ==============================
//      2
// ==============================

// function sittingArrangement(person, column) {
// 	if (!person || !column) {
// 		return 'Invalid number';
// 	}

// 	let result = [];
// 	let line = [];
// 	let extra = 'Kursi Kosong';
// 	// let col = Math.ceil(person.length / column);

// 	for (let z = 0; z <= person.length; z++) {
// 		const list = person[z];
// 		if (list === undefined) {
// 			for (let x = line.length; x <= column; x++) {
// 				if (line.length === column) {
// 					result.push(line);
// 					line = [];
// 				} else if (line.length > 0) {
// 					line.push(extra);
// 				}
// 			}
// 		} else {
// 			line.push(list);
// 			if (line.length === column) {
// 				result.push(line);
// 				line = [];
// 			}
// 		}
// 	}

// 	// console.log(result);
// 	// console.log(line);
// 	return result;
// }

// //DRIVER CODE

// console.log(sittingArrangement(['A', 'B', 'C'], 0));
// //Invalid number

// console.log(sittingArrangement(['Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji'], 2));
// //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]

// console.log(sittingArrangement(['Yosia', 'Asrawi', 'Andru'], 3));
// //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]

// console.log(
// 	sittingArrangement(['Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion'], 4)
// );
// // [
// //   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
// //   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// // ]

// ==============================
//      3
// ==============================
