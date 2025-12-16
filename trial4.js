/*
    Diberikan 1 variabel data berisi angka dan symbol
    Tugasmu adalah jika bertemu dengan angka, maka ulangi symbol sebelumnya sebanyak angka tersebut

    CONTOH 1:
    input:
    let data = "<>?2()!@3>"
    ouput
    "<>???()!@@@@>"

    CONTOH 2:
    input:
    let data = "!@#4*(1&"
    ouput
    "!@#####*((&"
*/
// let data = '!@#4*(1&';
// let result = '';
// for (let i = 0; i < data.length; i++) {
// 	const satu = data[i];
// 	if (isNaN(satu) === true) {
// 		result += satu;
// 	} else {
// 		for (let j = 0; j < Number(satu); j++) {
//             result += data[i - 1];
// 		}
// 	}
// }
// console.log(result);

//==========================================

// let start = 20
// let stock = 25
// if (stock < start) {
//     console.log(`Kurang untuk memulai`);
// } else {
//     for (let x = 1; x <= stock; x++) {
//         console.log(`Rounde ke-${x} dimulai`);
//     }
// }

//===========================================

/*
Buatlah kode javascript menggunakan pseudocode di bawah ini

FOR i FROM 1 TO 10 INCREMENT BY 1
    DISPLAY "Perkalian " CONCAT i
    FOR j FROM 1 TO 10 INCREMENT BY 1
        DISPLAY "Hasil dari " CONCAT i CONCAT " x " CONCAT j CONCAT " adalah " CONCAT (i TIMES j)
    END FOR
END FOR
*/

// for (let i = 1; i <= 10; i++) {
//     console.log(`perkalian ` + i);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`Hasil dari `+ i + " x " + j + " adalah " + (i * j));
//     }
// }

//===========================================

/*
Buatlah program yang digunakan untuk mengasilkan output seperti di bawah ini
dimana program akan mencetak baris # sejumlah karakter yang ada di variabel str
dimana setiap barisnya akan dicetak sejumlah angka yang terdapat di string

contoh input:
var stringAngka = '263';

output: 
##
######
###

Penjelasan:
- Karakter pertama dari StringAngka adalah 2 sehingga menghasilkan ##
- Karakter kedua dari StringAngka adalah 6 sehingga menghasilkan ######
- Karakter ketiga dari StringAngka adalah 2 sehingga menghasilkan ###

contoh 2
var stringAngka = '23567123';
output:
##
###
#####
######
#######
#
##
###

*/

// let stringAngka = '23567123';
// let result = '';
// for (let x = 0; x < stringAngka.length; x++) {
// 	const perChar = stringAngka[x];
// 	for (let z = 1; z <= Number(perChar); z++) {
// 		// console.log(`test`);
// 		result += '#';
// 	}
//     result += "\n"
// }
// console.log(result);

//===================================================

/*
## Directions

## 1. Melakukan Looping Menggunakan For
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING FOR PERTAMA' dan 'LOOPING FOR KEDUA'.

## 2. Melakukan Looping Menggunakan While
Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING WHILE PERTAMA' dan 'LOOPING WHILE KEDUA'.

## Hints
Operator `++` disebut dengan operator _Increment_
Operator `--` disebut dengan operator _Decrement_
## Output 2
```
LOOPING WHILE PERTAMA
2 - I love coding
4 - I love coding
6 - I love coding
LOOPING WHILE KEDUA
20 - I will become fullstack developer
18 - I will become fullstack developer
16 - I will become fullstack developer
```
*/

// let test = "I love coding"
// let no = 20
// for (let x = 0; x <= no; x += 2) {
//     console.log(`${x} - `+ test);
// }

// =================

/* 
## Objectives
- Mengerti cara menggunakan while/ for
- Mengerti cara menggunakan modulus operator

## Directions
Pada tugas ini kamu diminta untuk melakukan looping dalam javascript untuk mengecek apakah sebuah bilangan merupakan bilangan genap atau ganjil dan mengecek apakah sebuah bilangan habis dibagi bilangan x atau tidak.

### 1.
Buatlah sebuah loop untuk mengecek setiap 3 angka dari 1-100, lalu cetak angka tersebut dan menuliskan apakah bilangan tersebut ganjil atau genap.

OUTPUT:
--------
```
  1 - ganjil
  4 - genap
  7 - ganjil
  .
  .
  100 - genap
```


### 2.
Buatlah sebuah loop untuk mengecek setiap 5 angka dari 50-200, lalu cetak angka tersebut dan tuliskan apakah bilangan tersebut merupakan faktor perkalian 3 atau bukan.

OUTPUT:
--------
```
   50 - tidak bisa dibagi 3
   55 - tidak bisa dibagi 3
   60 - faktor 3
   .
   .
   195 - faktor 3
   200 - tidak bisa dibagi 3
```

### 3.
Buatlah loop untuk mengecek setiap 7 angka dari 100-200, dan hanya cetak angka tersebut bila angkanya habis dibagi 8.

OUTPUT:
--------
```
   128
   184
*/

// 1
// let no1 = 40;
// for (let x = 1; x <= no1; x++) {
//     if (x % 2 === 0) {
//         console.log(`${x} - Bilangan Genap`);
//     } else {
//         console.log(`${x} - Bilangan Ganjil`);
//     }
// }

// let no2 = 200;
// for (let z = 50; z <= no2; z+=5) {
//     if (z % 3 === 0) {
//         console.log(`${z} - faktor 3`);
//     } else {
//         console.log(`${z} - tidak bisa dibagi 3`);
//     }

// }

// let no3 = 200;
// for (let z = 100; z <= no3; z+=7) {
//     if (z % 8 === 0) {
//         console.log(`${z}`);
//     } else {
//         continue
//     }

// }

// =====================================

/*
## Objectives

- Mengerti logika `looping`
- Dapat mengakses indeks dari sebuah String dari indeks awal sampai akhir ataupun sebaliknya


## Directions

---

```
Contoh: let kata = 'Javascript'

maka output yang dihasilkan adalah 'tpircsavaJ'
```
*/

// let kata = 'Javascript';
// let hasil = '';
// for (let f = Number(kata.length - 1); f >= 0; f--) {
// 	hasil += kata[f];
// }
// console.log(hasil);

// =================================================
/*
## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu menggunakan operator `'<', '>'` ataupun `'==='`
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Directions

Diberikan sebuah variable `kata` bertipe String.

Buatlah program dimana program tersebut akan menghitung jumlah karakter x dan jumlah karakter o. Setelah perhitungan selesai maka tampilkan true jika jumlah karakter o dan x sama dan false jika tidak

```js
Contoh 1:
var kata = 'xoxoxo'

maka output adalah true


Contoh 2:
var kata = 'oxooxox'

maka output adalah false
```
*/
// let kata = 'oxooxoxoxoxx';
// let count1 = 0;
// let count2 = 0;
// for (let z = 0; z < kata.length; z++) {
// const one = kata[z];
// console.log(one);
// if (one === 'x') {
// count1 += 1;
// } else if (one === 'o') {
// count2 += 1;
// }
// }
// console.log(count1, count2);
// if (count1 == count2) {
// console.log(true);
// } else {
// console.log(false);
// }

// =================================================

/*

# Logic Challenge - Asterisk

- Variable `rows1`, `rows2`, `rows3`, `rows4` dan `rows5` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---
Soal latihan ini memiliki 4 nomor. Simpan di 1 file yang sama!
---

## Objectives

- Mampu memecahkan sebuah masalah dengan `nested loop`
- Mengerti logika `nested loop`
- Dapat melihat pola dari posisi baris dan kolom Asterisk


## Directions

**1. Menyusun Barisan Bintang**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

**Skeleton Code**

```js
let rows1; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows1 = 5

```shell
*
*
*
*
*
```


**2. Menyusun Barisan Bintang Dengan Nested Looping**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan *nested loop* atau loop di dalam loop untuk menyelesaikan kasus ini.

**Skeleton Code**

```js
let rows2; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows2 = 5

```shell
*****
*****
*****
*****
*****
```

**3. Menyusun Barisan Tangga Bintang Dengan Nested Looping**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan *nested loop* atau loop di dalam loop untuk menyelesaikan kasus ini.


**Skeleton Code**

```js
let rows3; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows3 = 5

```shell
*
**
***
****
*****
```

**4. Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping**

Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol \'\*\' sesuai dengan nomor baris. Baris pertama, jumlah bintang sesuai dengan value dari letiabel rows4. Baris kedua jumlah bintang berkurang 1, dan seterusnya hingga bintang hanya sisa 1. Manfaatkan **nested loop** atau loop di dalam loop untuk menyelesaikan kasus ini.


**Skeleton Code**

```js
let rows4; // input the number of rows

// do loops to display asterisks in the console.
```

**Output**

jika rows4 = 5

```shell
*****
****
***
**
*
```
 */

//! 1 -2
// let rows1 = 5;
// let rows2 = 5;
// for (let z = 0; z < rows1; z++) {
// 	let simbol = '';
// 	for (let x = 0; x < rows1; x++) {
// 		simbol += '*';
// 	}
// 	console.log(simbol);
// }

//! 3
// let rows3 = 5;
// for (let z = 1; z <= rows3; z++) {
// 	let simbol = '';
// 	// console.log(z);
// 	for (let x = 0; x < z; x++) {
// 		simbol += '*';
// 	}
// 	console.log(simbol);
// }

//! 4
// let rows4 = 5;
// for (let z = 0; z < rows4; z++) {
// 	let simbol = '';
// 	for (let x = rows4; x > z; x--) {
// 		simbol += '*';
// 	}
// 	console.log(simbol);
// }