/*
### Directions

Diberikan sebuah variable word bertipe **string** yang di dalamnya terdapat sebuah angka. Buatlah sebuah program yang akan mengganti angka tersebut dengan huruf di index sebelumnya sebanyak angka tersebut ( Lihat contoh untuk lebih jelasnya ). Dengan ketentuan sebagai berikut:

1. Jika variable `word` berisi string kosong maka outputnya adalah `Tidak ada kata yang bisa di proses`

### Notes
1. Range angka pada soal adalah 1 sampai 9
2. Tidak mungkin ada angka yang bersebelahan
3. Tidak mungkin ada angka di awal kata

### Examples

```js
// Contoh ketika word diisi string kosong
let word = ''
// maka outputnya adalah Tidak ada kata yang bisa di proses

// CONTOH 1
let word = 'I Lo1ve Co4ding'
// maka outputnya adalah I Loove Coooooding
```

Gantilah value pada variable `word` dalam file `index.js` dengan beberapa test case dibawah ini:

```js
let word = 'pha4se pre3parat2ion'
// phaaaaase preeeeparatttion

let word = 'Ja4va4scri1pt'
// Jaaaaavaaaaascriipt
```
*/
// let word = 'I Lo1ve Co4ding';
// let result = '';
// for (let q = 0; q < word.length; q++) {
// 	const one = word[q];
// 	// console.log(Number(one));

// 	if (one === ' ') {
// 		result += ' ';
// 	} else if (isNaN(one)) {
// 		result += one;
// 	} else {
// 		for (let w = 0; w < Number(one); w++) {
// 			result += word[q - 1];
// 		}
// 	}
// }
// console.log(result);

// ============================================

/*
# DISNEY ISLAND

## Restrictions
- Build-in function yang dibolehkan mengikuti aturan umum saat briefing.

## Objectives
- Mampu menyelesaikan masalah yang diberikan.
- Mengerti konsep dan cara penggunaan `conditional` dan `data primitive`.

## Directions

Buatlah program mesin non-tunai sederhana untuk mensimulasikan transaksi tiket masuk ke wahana bermain di DISNEY ISLAND.

Berikut adalah daftar harga tiket masuk ke wahana bermain.
```
Wahana : 
============= **Wahana Utara** => `Anak-anak` (85.000)
============= **Wahana Utara** => `Dewasa` (125.00)
============= **Wahana Utara** => `Lansia` (125.000)
============= **Wahana Selatan** => `Anak-Anak`(143.000)
============= **Wahana Selatan** => `Dewasa` (165.000)
============= **Wahana Selatan** => `Lansia` (165.000)
```

Dimana kategori umur dapat dikategorikan sebagai berikut
- Anak-anak : Usia 2 s/d 12 tahun
- Dewasa : Usia 13 s/d 49 tahun
- Lansia : 50 tahun ke atas

VALIDASI
- Sebagai contoh, jika pengunjung berumur **`28 tahun`** dan masuk ke **`'Wahana Utara'`** maka tarifnya **`125000`**.
- Semua yang tidak ada di dalam tabel dianggap tidak sesuai.
- Apabila pengunjung berumur 1 tahun ke bawah maka tampilkan pesan `Dilarang masuk`

<br>

Output yang diinginkan terlihat di console adalah sebagai berikut:

1. Jika wahana dan kategori usia sesuai dan saldo cukup.
**`"Sisa saldo anda adalah RP <sisa_saldo>,00. Selamat bermain."`**
2. Jika wahana dan kategori usia sesuai dan saldo tidak cukup.
**`"Saldo anda kurang RP <selisih_saldo_dan_tarif>,00. Tidak cukup untuk membeli tiket."`**
3. Jika wahana atau kategori usia tidak sesuai.
**`"Tiket tidak ditemukan!"`**
4. Jika usia 1 tahun ke bawah
**`"Dilarang Masuk"`**

<br>

## Notes

- Jangan mengubah penaman variabel yang telah diberikan (**`usia`**, **`wahana`**, **`saldo`**, **`tarif`**).
- Untuk variabel **`tarif`** nilainya jangan di-isi (*assign*) langsung. Gunakan program untuk mengisi ini!

<br>

## Examples

```js
// CONTOH 1
Input:
let wahana = "Wahana Utara"
let usia = 28
let saldo = 180000
let tarif

Output:
"Sisa saldo anda adalah Rp 55000,00. Selamat bermain."

// CONTOH 2
let wahana = "Wahana Selatan"
let usia = 8
let saldo = 140000
let tarif

Output:
"Saldo anda kurang Rp 3000,00. Tidak cukup untuk membeli tiket."

// CONTOH 3
Input:
let wahana = "Wahana Barat"
let usia = 28
let saldo = 180000
let tarif

Output:
"Tarif tidak ditemukan!"

// CONTOH 4
Input:
let wahana = "Wahana Utara"
let usia = 1
let saldo = 180000
let tarif

Output:
"Dilarang Masuk"
```
<br>
*/

// let wahana = 'Wahana Selatan';
// let usia = 3;
// let saldo = 200000;
// let tarif;

// if (wahana === 'Wahana Utara') {
// 	if (usia >= 50) {
// 		tarif = 125000;
// 		if (saldo >= tarif) {
// 			console.log(
// 				`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`
// 			);
// 		} else if (saldo < tarif) {
// 			console.log(
// 				`Saldo anda kurang RP ${
// 					saldo - tarif
// 				},00. Tidak cukup untuk membeli tiket.`
// 			);
// 		}
// 	} else if (usia >= 13 && usia <= 49) {
// 		tarif = 125000;
// 		if (saldo >= tarif) {
// 			console.log(
// 				`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`
// 			);
// 		} else if (saldo < tarif) {
// 			console.log(
// 				`Saldo anda kurang RP ${
// 					saldo - tarif
// 				},00. Tidak cukup untuk membeli tiket.`
// 			);
// 		}
// 	} else if (usia >= 2 && usia <= 12) {
// 		tarif = 85000;
// 		if (saldo >= tarif) {
// 			console.log(
// 				`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`
// 			);
// 		} else if (saldo < tarif) {
// 			console.log(
// 				`Saldo anda kurang RP ${
// 					saldo - tarif
// 				},00. Tidak cukup untuk membeli tiket.`
// 			);
// 		}
// 	} else if (usia < 2) {
// 		console.log('Dilarang Masuk');
// 	}
// } else if (wahana === 'Wahana Selatan') {
// 	if (usia >= 50) {
// 		tarif = 165000;
// 		if (saldo >= tarif) {
// 			console.log(
// 				`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`
// 			);
// 		} else if (saldo < tarif) {
// 			console.log(
// 				`Saldo anda kurang RP ${
// 					saldo - tarif
// 				},00. Tidak cukup untuk membeli tiket.`
// 			);
// 		}
// 	} else if (usia >= 13 && usia <= 49) {
// 		tarif = 165000;
// 		if (saldo >= tarif) {
// 			console.log(
// 				`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`
// 			);
// 		} else if (saldo < tarif) {
// 			console.log(
// 				`Saldo anda kurang RP ${
// 					saldo - tarif
// 				},00. Tidak cukup untuk membeli tiket.`
// 			);
// 		}
// 	} else if (usia >= 2 && usia <= 12) {
// 		tarif = 143000;
// 		if (saldo >= tarif) {
// 			console.log(
// 				`Sisa saldo anda adalah RP ${saldo - tarif},00. Selamat bermain.`
// 			);
// 		} else if (saldo < tarif) {
// 			console.log(
// 				`Saldo anda kurang RP ${
// 					saldo - tarif
// 				},00. Tidak cukup untuk membeli tiket.`
// 			);
// 		}
// 	} else if (usia < 2) {
// 		console.log('Dilarang Masuk');
// 	}
// } else {
// 	console.log('Tiket/Tarif tidak ditemukan!');
// }

// ==================================================

/*
# Ayo Joget

Terdapat permainan ayo joget, dimana user memasukan input berupa arah sesuai dengan exercise yang ada, untuk setiap arah pada userInput yang sesuai dengan exercise, maka score akan bertambah 10. Program juga akan menampilkan kategori berdasarkan persentase:
- 100 % - Perfect
- 80 % - 99% - Great
- 60 % - 79 % - Good
- 0 - 59 % - Bad

### Notes
- Persentase didapat dari poin dibagi total poin yang bisa didapat dikali 100, pembulatan kebawah
- Jika panjang variable `exercise` dan `userInput` berbeda maka tampilkan ` Input yang anda masukkan tidak lengkap!`

### Example
```
EXAMPLE:
var exercise = '<>^v>>>'
var userInput = '<>^^>><'

Output:
Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
```

**Proses**
1. Kita akan melakukan compare terhadap setiap karakter
   1. `<` adalah karakter pertama di variable exercise akan di compare dengan `<` karakter pertama di variable userInput. <br /> Karena keduanya adalah arah yang **sama** maka user mendapatkan 10 point
   2. `>` adalah karakter kedua di variable exercise akan di compare dengan `>` karakter kedua di variable userInput. <br />Karena keduanya adalah arah yang **sama** maka user mendapatkan 10 point
   3. `^` adalah karakter ketiga di variable exercise akan di compare dengan `^` karakter ketiga di variable userInput. <br />Karena keduanya adalah arah yang **sama** maka user mendapatkan 10 point
   4. `V` adalah karakter keempat di variable exercise akan di compare dengan `^` karakter kempat di variable userInput. <br />Karena keduanya adalah arah yang **tidak sama** maka user tidak mendapatkan point.
2. Setelah di check keseluruhan inputnya, didapatkan 2 output yang tidak sesuai, dan 5 output yang sesuai.
3. Oleh karena itu output yang diharapkan adalah `Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good`
   1. `50/70`  didapatkan karena kita mendapatkan 50 point dari 70 point yang tersedia.
   2. `71%` adalah persentase kesamaan dari setiap karakter pada variable `userInput` dan `exercise` ( 50 / 70 * 100 %)
   3. `Good` didapatkan sesuai kategori persentase yang didapatkan.
   
## RULES:

- Hanya boleh menggunakan built in function yang diperbolehkan pada readme


## Test Case

```js
let exercise = '<>^v>>>'
let userInput = '<>^^>><'

// Anda mendapatkan score 50 / 70. Persentase: 71%, Kategori : Good
```


```js
let exercise = '<>^v'
let userInput = '<>^v'

// Anda mendapatkan score 40 / 40. Persentase: 100%, Kategori : Perfect
```

```js
var exercise = '<>^v'
var userInput = '<'

// Input yang anda masukkan tidak lengkap!
```
- 100 % - Perfect
- 80 % - 99% - Great
- 60 % - 79 % - Good
- 0 - 59 % - Bad
( 50 / 70 * 100 %)
*/

// let exercise = '<>^v>>>';
// let userInput = '<>^^>><';

// let score = 0;
// let maxScore = 0;

// if (exercise.length !== userInput.length) {
// 	console.log(`Input yang anda masukkan tidak lengkap!`);
// } else {
// 	maxScore = exercise.length * 10;

// 	for (let x = 0; x < exercise.length; x++) {
// 		const noteExercise = exercise[x];
// 		for (let y = x; y <= x; y++) {
// 			const noteUser = userInput[y];
// 			if (noteExercise === noteUser) {
// 				score += 10;
// 			} else {
// 				continue;
// 			}
// 		}
// 	}
// }

// let calculate = Math.floor((score / maxScore) * 100);
// if (calculate === 100) {
// 	console.log(
// 		`Anda mendapatkan score ${score} / ${maxScore}. Persentase: ${calculate}%, Kategori : Perfect`
// 	);
// } else if (calculate >= 80 && calculate <= 99) {
// 	console.log(
// 		`Anda mendapatkan score ${score} / ${maxScore}. Persentase: ${calculate}%, Kategori : Great`
// 	);
// } else if (calculate >= 60 && calculate <= 79) {
// 	console.log(
// 		`Anda mendapatkan score ${score} / ${maxScore}. Persentase: ${calculate}%, Kategori : Good`
// 	);
// } else if (calculate >= 0 && calculate <= 59) {
// 	console.log(
// 		`Anda mendapatkan score ${score} / ${maxScore}. Persentase: ${calculate}%, Kategori : Bad`
// 	);
// }

// ==================================================

/*
# Asterix in the Box

## DIRECTION

Buatlah sebuah program dengan satu buah variable `row` yang akan mewakilkan jumlah baris yang akan kita buat. Setiap baris yang dibuat akan memiliki 5 buah `col`.

Buatlah sebuah output '#' dengan jumlah maksimum yang bisa di capai dari informasi `row` dan `col` yang diberikan.

Tambah kan 1 buak asterix ('*') sesuai dengan koordinat yang berada di variabel coordinate dimana:
- karakter pertama menunjukkan baris (row)
- karakter kedua menunjukkann kolom (col)


### Contoh:

```js
let row = 3
let coordinate = "23"
// output
//
// # # # # #
// # # * # #  (baris ke 2 , kolom ke 3)
// # # # # #
```

```js
let row = 5
let coordinate = "45"
// # # # # #
// # # # # #  
// # # # # #
// # # # # *  (baris ke 4, kolom ke 5)
// # # # # #
```

```js
let row = 1
let coordinate = "11"
// output
// * # # # #
```

## RULES:
- Tidak diperbolehkan menggunakan built-in function:
.map .filter .reduce .split .join .indexOf .findIndex .substring

## NOTES
- Diasumsikan input koordinat selalu benar
*/
// let row = 1;
// let col = 5;
// let coordinate = '11';
// let first;
// let second;
// for (let n = 0; n < coordinate.length; n++) {
// 	first = Number(coordinate[0]);
// 	second = Number(coordinate[1]);
// }
// for (let z = 1; z <= row; z++) {
// 	let box = '';
// 	for (let x = 1; x <= col; x++) {
// 		if (z === first && x === second) {
// 			box += 'o';
// 		} else {
// 			box += '#';
// 		}
// 	}
// 	console.log(box);
// }
