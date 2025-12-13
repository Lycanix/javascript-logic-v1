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
