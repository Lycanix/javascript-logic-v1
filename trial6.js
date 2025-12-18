/*
# Logic Challenge - Palindrome

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Variable `kata` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah
- Mampu memberhentikan sebuah loop menggunakan `break`

## Directions

Diberikan sebuah variabel `kata` bertipe String.

Buatlah program yang menampilkan true jika kata yang diberikan merupakan palindrome dan false jika bukan. Buatlah program ini **tanpa** menggunakan built in function .reverse()

**Palindrome adalah sebuah kata yang jika dibalik atau dibaca dari belakang maka katanya tetap sama. Contoh, "katak" jika dibaca dari belakang tetaplah "katak"**

---

```js
Contoh 1:
let kata = 'katak'

maka output yang dihasilkan adalah true

Contoh 2:
let kata = 'kasur rusak'

maka output yang dihasilkan adalah true

Contoh 3
let kata = 'makan'

maka output yang dihasilkan adalah false
```
*/
// let kata = 'kakak';
// let reverse = '';

// for (let z = kata.length - 1; z >= 0; z--) {
// 	// console.log(kata[z] + ' - ' + z);
// 	reverse += kata[z];
// }
// console.log(kata);

// if (kata === reverse) {
// 	console.log('maka output yang dihasilkan adalah true');
// } else {
// 	console.log('maka output yang dihasilkan adalah false');
// }

// ========================================================
// 1
// ========================================================

/*
# Data Type Challenge

### RESTRICTION

- Hanya boleh menggunakan built-in function typeof, isNaN(), dan built-in untuk menkonversi tipe data, seperti toString(), Number(), dll

### HINTS

- Variable `kata` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu menggunakan `typeof` untuk sebuah kasus masalah yang diberikan
- Mampu dan mengerti penggunaan `conditional branch`
- Mampu menggunakan truthy falsy didalam pengecekan kondisi
- Mampu mengkondisikan posisi sebuah `conditional` dari sebuah permasalahan

## Directions

Diberikan sebuah variabel `kata`.

Buatlah program yang mengecek kondisi tipe data dari value di dalam variabel `kata`.

- Jika data merupakan sebuah string, maka tampilkan 'username ' + kata (gunakan template literals)
- Jika data merupakan sebuah number, maka tampilkan 'age: ' + data (gunakan template literals)
- Jika data merupakan sebuah boolean, cek nilainya:
  - Jika true maka tampilkan 'thank you for agreeing'
  - Jika false maka tampilkan 'cannot proceed without agreement'
- Jika nilai/value dari data adalah angka 0 atau empty string atau undefined atau null atau NaN maka tampilkan 'Invalid data'

```js
Contoh 1:
let kata = 'Stefani'

maka output adalah 'username Stefani'

Contoh 2:
let kata = 25

maka output adalah 'age 25'

Contoh 3:
let kata = 0

maka output adalah 'Invalid data'

Contoh 4:
let kata = '0'

maka output adalah 'username 0'

Contoh 5:
let kata = false

maka output adalah 'cannot proceed without agreement'
```
*/
// let kata = 0;
// if (
// 	kata === undefined ||
// 	kata === 0 ||
// 	kata === '' ||
// 	isNaN(kata) ||
// 	kata === null
// ) {
// 	console.log('Invalid data');
// } else if (typeof kata === 'string') {
// 	console.log(`Username ${kata}`);
// } else if (typeof kata === 'number') {
// 	console.log(`Age ${kata}`);
// } else if (typeof kata === 'boolean') {
// 	if (kata === true) {
// 		console.log(`Thank you for agreeing`);
// 	} else if (kata === false) {
// 		console.log(`Cannot proceed without agreement`);
// 	}
// }
// ========================================================
// 2
// ========================================================
/*
# Logic Challenge - Menghitung Jumlah Kata

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Variable `kalimat` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Directions

Diberikan sebuah variabel `kalimat` bertipe string. Buatlah program yang menghitung jumlah kata yang terdapat di dalam kalimat tersebut (dilarang menggunakan built in function split). Syarat terhitungnya sebuah kata adalah minimal terdapat 1 buah huruf (alfabet)

---

```js
Contoh 1:
let kalimat = 'I have a dream'

maka output yang dihasilkan adalah 4

Contoh 2:
let kalimat = 'I believe I can code'

maka output yang dihasilkan adalah 5

Contoh 3:
let kalimat = 'I'

maka output yang dihasilkan adalah 1

Contoh 4:
let kalimat = '   '

maka output yang dihasilkan adalah 0, karena walaupun length nya > 0, tapi tidak ada satupun huruf di dalamnya
```

*/
// PR

// ========================================================
// 3
// ========================================================
/*
# Ubah Huruf

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Variable `kata` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mengerti logika `looping`
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah

## Directions

Diberikan sebuah variabel `kata` bertipe string. Buatlah program yang dapat mengecek huruf yang terdapat pada kata tersebut dan hasil dari program tersebut adalah menghasilkan kata baru dimana huruf-huruf vokal yang terdapat pada `kata` akan diganti menjadi '$'

Contoh:

```JS
var kata = 'i love javascript'
```

maka output yang dihasilkan adalah

```
'$ l$v$ j$v$scr$pt'
```

*/
// ========================================================
// 4
// ========================================================
/*
# Logic Challenge - Palindrome Angka

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function untuk mengkonversi tipe data, seperti toString(), Number(), dll

### HINTS

- Variable `angka` **tidak boleh diganti dengan variabel lain** dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu memecahkan masalah yang diberikan
- Mampu menggabungkan konsep `looping/iteration` dan `conditional` didalam sebuah masalah
- Mampu mengubah/convert tipe data string ke number ataupun sebaliknya
- Mampu membedakan penggunaan while dan for
- Mampu memberhentikan sebuah loop menggunakan `break`

## Directions

Diberikan sebuah variabel `angka` bertipe number.

Buatlah program yang menampilkan angka palindrome selanjutnya dari `angka` yang diberikan.

Contoh jika `angka` bernilai 27 maka outputnya adalah 33 karena angka 33 merupakan angka palindrome.

penjelasan:

setelah angka 27, adalah:

- 28 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
- 29 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
- 30 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
- 31 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
- 32 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
- 33 angka palindrome. Karena angka palindrome telah ditemukan maka loop harus berhenti dan menampilkan angka 33

---

```js
Contoh 1:
let angka = 10

maka output yang dihasilkan adalah 11

Contoh 2:
let angka = 175

maka output yang dihasilkan adalah 181

Contoh 3:
let angka = 33

maka output yang dihasilkan adalah 44

Contoh 5:
let angka = 4

maka output yang dihasilkan adalah 5, karena angka 1 digit selalu dianggap palindrome
```

*/
// ========================================================
// 5
// ========================================================
