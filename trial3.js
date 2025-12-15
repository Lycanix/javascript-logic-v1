/*
    Menetukan jenis tiket konser berdasarkan usia dan VIP Pass

    diberikan 3 variabel
    nama => string 
    usia => number
    VIPPass => boolean

    usia dibawah 12 tahun tidak boleh masuk
    usia 12 - 17 tahun kategori Remaja
    usia 18 tahun keatas kategori Dewasa

    jika nama kosong, maka tampilkan "silahkan isi nama terlebih dahulu"
    jika usia dibawah 12 tahun maka tampilkan "Maaf <nama>, anak-anak tidak diperbolehkan masuk ke konser"
    jika kategori Remaja dan memiliki VIP Pass, maka tampilkan "Halo <nama>, Tiket Remaja (VIP) - Akses ke area khusus"
    jika kategori Remaja dan tidak memiliki VIP Pass, maka tampilkan "Halo <nama>, Tiket Remaja (Reguler)"
    jika kategori Dewasa dan memiliki VIP Pass, maka tampilkan "Halo <nama>, Tiket Dewasa (VIP) - Akses ke area backstage"
    jika kategori Dewasa dan tidak memiliki VIP Pass, maka tampilkan "Halo <nama>, Tiket Dewasa (Reguler)"
*/
// let nama = "amar";
// let usia = 1;
// let VIPPass = false;
// if (!nama) {
// 	console.log(`Silahkan isi nama terlebih dahulu`);
// } else if (usia >= 18) {
// 	if (VIPPass) {
// 		console.log(`Halo ${nama}, Tiket Dewasa (VIP) - Akses ke area backstage`);
// 	} else {
// 		console.log(`Halo ${nama}, Tiket Dewasa (Reguler)`);
// 	}
// } else if (usia >= 12 && usia <= 17) {
// 	if (VIPPass) {
// 		console.log(`Halo ${nama}, Tiket Remaja (VIP) - Akses ke area khusus`);
// 	} else {
// 		console.log(`Halo ${nama}, Tiket Remaja (Reguler)`);
// 	}
// } else if (usia < 12) {
// 	console.log(`Maaf ${nama}, anak-anak tidak diperbolehkan masuk ke konser`);
// }
/*
    layer 1 => cek nama, apakah kosong atau tidak
    layer 2 => cek usia (tidak boleh masuk, remaja atau dewasa)
    layer 3 => cek VIPPass (punya atau tidak punya)

    Algoritma
    =========
    1. cek apakah nama kosong ("") atau tidak
        1.1 jika nama berisi "", maka tampilkan "silahkan isi nama terlebih dahulu"
        1.2 jika nama tidak kosong, maka lanjut ke step 2
    2. cek apakah usia (tidak boleh masuk, remaja atau dewasa)
        2.1 usia < 12, maka tampilkan "Maaf <nama>, anak-anak tidak diperbolehkan masuk ke konser"
        2.2 usia >= 12 && usia <= 17, maka kategori Remaja, lanjut ke step 3
        2.2 usia >= 18, maka kategorinya Dewasa, lanjut ke step 3
    3. cek apakah VIPPass bernilai true atau false
        3.1 kategori remaja dan VIPPass true, maka tampilkan "Halo <nama>, Tiket Remaja (VIP) - Akses ke area khusus"
        3.2 kategori remaja dan VIPPass false, maka tampilkan "Halo <nama>, Tiket Remaja (Reguler)"
        3.3 kategori dewasa dan VIPPass true, maka tampilkan  "Halo <nama>, Tiket Dewasa (VIP) - Akses ke area backstage"
        3.4 kategori dewasa dan VIPPass false, maka tampilkan "Halo <nama>, Tiket Dewasa (Reguler)"
*/

//===================
/*
Buatlah kode javascript menggunakan pseudocode di bawah ini

STORE angka1 WITH ANY POSITIVE NUMBER
STORE angka2 WITH ANY POSITIVE NUMBER
STORE operator WITH ANY STRING
STORE total WITH -1

SWITCH operator
    CASE '+'
        SET total WITH angka1 PLUS angka2
    CASE '-'
        SET total WITH angka1 MINUS angka2
    CASE '*'
        SET total WITH angka1 TIMES angka2
    CASE '/'
        SET total WITH angka1 DEVIDE angka2
    CASE '%'
        SET total WITH angka1 MODULUS angka2
    DEFAULT
        DISPLAY "Invalid Operator"
END SWITCH
DISPLAY total
*/
// let angka1 = 50;
// let angka2 = 30;
// let operator = '%';
// let total = -1;

// switch (operator) {
// 	case '+':
// 		console.log(angka1 + angka2);
// 		break;
// 	case '-':
// 		console.log(angka1 - angka2);
// 		break;
// 	case '*':
// 		console.log(angka1 * angka2);
// 		break;
// 	case '/':
// 		console.log(angka1 / angka2);
// 		break;
// 	case '%':
// 		console.log(angka1 % angka2);
// 		break;
// 	default:
// 		console.log(`Invalid Operator`);
// 		break;
// }
//===================
/*
//Contoh input
var nama = 'Mikael';
var peran = '';
```

Silakan ganti nilai nama dan peran untuk mengetes kondisi!

### Output

```javascript
// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"

//Output untuk Input nama = 'Mikael' dan peran = ''
"Halo Mikael, Pilih peranmu untuk memulai game!"

//Output untuk Input nama = 'Nina' dan peran 'Ksatria'
"Selamat datang di Dunia Proxytia, Nina"
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

//Output untuk Input nama = 'Danu' dan peran 'Tabib'
"Selamat datang di Dunia Proxytia, Danu"
"Halo Tabib Danu, kamu akan membantu temanmu yang terluka."

//Output untuk Input nama = 'Zero' dan peran 'Penyihir'
"Selamat datang di Dunia Proxytia, Zero"
"Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!"
```
// */
// let nama = 'Amar';
// let peran = 'Penyihir';
// if (!nama) {
// 	console.log(`Nama harus diisi!`);
// } else if (!peran) {
// 	console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
// } else if (nama && peran) {
// 	if (peran === "Ksatria") {
// 		console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
// 	} else if (peran === "Tabib") {
// 		console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
// 	} else if (peran === "Penyihir") {
// 		console.log(
// 			`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
// 		);
// 	}
// }

//=====================================
/*
Buatlah program yang digunakan untuk menghitung hasil penjumlahan dari tiap angka yang berada di dalam string

contoh input:
var stringAngka = '26321896232';

output: 44

didapat dari 2 + 6 + 3 + 2 + 1 dst
*/
// let stringAngka = '26321896232';
// let total = 0
// for (let x = 0; stringAngka[x] < stringAngka.length; x++) {
//     let split = stringAngka[x]
//     total += parseInt(split);
// }
// console.log(total);

//======================================
/*
// Pseudocode Gacha angka 1-5
/*
math floor math random
STORE gacha WITH RANDOM NUMBER BETWEEN 1 AND 5
SWITCH gacha
    CASE gacha EQUAL 2
        DISPLAY "selamat kamu mendapatkan kupon sebanyak 5"
    BREAK
    CASE gacha EQUAL 3
        DISPLAY "selamat kamu mendapatkan kupon sebanyak 15"
    BREAK
    CASE gacha EQUAL 4
        DISPLAY "selamat kamu mendapatkan kupon sebanyak 50"
    BREAK
    CASE gacha EQUAL 5
        DISPLAY "WOW, kamu menang jackpot! Selamat!!"
    BREAK
    DEFAULT
        DISPLAY "coba lagi ya" 
    BREAK
END SWITCH
*/
// let gacha = Math.floor(Math.random() *5)+1;
// switch (gacha) {
// 	case 2:
// 		console.log(`Selamat kamu mendapatkan kupon sebanyak 5`);
// 		break;
// 	case 3:
// 		console.log(`Selamat kamu mendapatkan kupon sebanyak 15`);
// 		break;
// 	case 4:
// 		console.log(`Selamat kamu mendapatkan kupon sebanyak 30`);
// 		break;
// 	case 5:
// 		console.log(`WOW, kamu menang jackpot! selamat!!!`);
// 		break;
// 	default:
// 		console.log('coba lagi!');

// 		break;
// }

//====================================================
/*
// Pseudocode Dunia Pantasi
/*
## Directions

Dunia Pantasi adalah tempat yang di dalamnya terdapat wahana-wahana untuk memacu adrenalin pengunjung.

Dunia Pantasi punya peraturan sendiri untuk memasuki kawasan nya hingga menaiki suatu wahana yang ada di dalamnya, yaitu:

1. Jika umur pengunjung kurang dari 18 tahun, maka pengunjung tidak diperbolehkan memasuki kawasan Dunia Pantasi dan tampilkan `"Maaf [nama pengunjung], kamu tidak dapat memasuki kawasan ini!"`
2. Jika uang pengunjung tidak mencapai **50000** dan tinggi nya kurang dari **166cm**, maka tampilkan `"Tinggi kamu kurang [selisih tinggi]cm dan kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"`
3. Jika uang pengunjung tidak mencapai **50000** dan tinggi nya **166cm** keatas, maka tampilkan `"Kamu kurang uang sebanyak [selisih uang] untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!"`
4. Jika uang pengunjung **50000** keatas dan tinggi nya kurang dari **166cm**, maka tampilkan `"Tinggi kamu kurang [selisih tinggi]cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!"`
5. Jika uang pengunjung **50000** keatas dan tinggi nya **166cm** keatas, maka tampilkan `"Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!"`

## Examples

```js
// CONTOH 1
var nama = "Fajrin";
var umur = 20;
var tinggi = 180;
var uang = 80000;
// maka output yang dihasilkan adalah "Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!"

// CONTOH 2
var nama = "Aji";
var umur = 23;
var tinggi = 165;
var uang = 49000;
// maka output yang dihasilkan adalah "Tinggi kamu kurang 1cm dan kamu kurang uang sebanyak 1000 untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"
```

Buatlah pseudocode dan programnya!

**RESTRICTION**:
Tidak boleh menggunakan built-in function apapun
*/
let nama = 'Amar';
let tinggi = 165;
let umur = 23;
let uang = 49_000;

if (umur < 18) {
	console.log(`Maaf ${nama}, kamu tidak dapat memasuki kawasan ini!`);
} else {
	if (uang < 50_000 && tinggi < 166) {
		console.log(
			`Tinggi kamu kurang ${166 - tinggi}cm dan kamu kurang uang sebanyak ${
				50_000 - uang
			} untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!`
		);
	} else if (uang < 50_000 && tinggi >= 166) {
		console.log(
			`Kamu kurang uang sebanyak ${
				50_000 - uang
			} untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!`
		);
	} else if (uang >= 50_000 && tinggi < 166) {
		console.log(
			`Tinggi kamu kurang ${
				166 - tinggi
			}cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!`
		);
	} else if (uang >= 50_000 && tinggi >= 166) {
		console.log(`Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!`);
	}
}
