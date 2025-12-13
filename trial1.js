/* Buat program yang menampilkan angka dari 1 sampai 30, tetapi dengan aturan:
1. Jika angka kelipatan 4, tampilkan "empat"
2. Jika angka kelipatan 6, tampilkan "enam"
3. Jika angka kelipatan 4 dan 6 sekaligus, tampilkan "empat-enam"
4. Selain itu, tampilkan angkanya seperti biasa
*/

let counter4 = 0;
let counter6 = 0;
for (let x = 1; x <= 30; x++) {
	counter4++;
	counter6++;
	if (counter4 === 4 && counter6 === 6) {
		console.log('empat-enam');
		counter6 = 0;
		counter4 = 0;
	} else if (counter6 === 6) {
		console.log('enam');
		counter6 = 0;
	} else if (counter4 === 4) {
		console.log('empat');
		counter4 = 0;
	} else {
		console.log(x);
	}
}

// ========================================

/*
let kata = "mentor";
Buat program untuk membalik string tersebut secara manual
let kalimat = "javascript fundamental";
Hitung berapa banyak huruf vokal: a, i, u, e, o.
*/

let kata = 'mentor';
let count = 0;
let result = '';
for (let x = 0; kata[x] !== undefined; x++) {
	count++;
}
for (let z = count - 1; z >= 0; z--) {
	result += kata[z];
}
console.log(count);
console.log(result);

// =====
let kalimat = 'javascript fundamental';
let counter = 0;
for (let a = 0; kalimat[a] !== undefined; a++) {
	huruf = kalimat[a];
	if (
		huruf === 'a' ||
		huruf === 'i' ||
		huruf === 'u' ||
		huruf === 'e' ||
		huruf === 'o'
	) {
		counter++;
	}
}
console.log(counter);
