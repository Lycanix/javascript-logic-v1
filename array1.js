// -Infinity adalah angka paling kecil yang ada js
// Infinity adalah angka paling besar di js
let numbers1 = [5, 3, 6, 18, 9, 20, 3, 7]; // array of number
console.log(getMax(numbers1)); // 20
// =====================================================
let numbers2 = [5, 3, 6, 18, 9, 20, 1, 7, -10];
console.log(getMin(numbers2)); // 1
// =====================================================
let numbers3 = [5, 3, 6, 18, 9, 20, 1, 7]; // array of number

function getMax(data1) {}

console.log(getMax(numbers3)); // [1, 20]

// =====================================================
let text1 = 'mangga;apel;jambu;nanas';
console.log(splitData(text1)); // ["mangga", "apel", "jambu", "nanas"]
// =====================================================
// 1. Buatlah sebuah variabel dengan nama "animals"

// 2. Isi variable tersebut dengan array yang memiliki 3 elemen string "kucing", "domba", "kuda"

// 3. Cetak element array pertama ("kucing")

// 4. Cetak element array ketiga ("kuda")

// 5. Ganti element ketiga dari array menjadi "kelinci"

// 6. Cetak element array ketiga ("kelinci")

// 7. Gunakan property length untuk mencetak jumlah element di array

// 8. Gunakan loop for untuk mencetak nilai animals di console secara berurutan
// output:
// kucing
// domba
// kuda
// =====================================================
const numbers4 = [1, 4, 2, 1, 51, 67, 8, 32, 21, 65];
// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari kumpulan angka diatas dan sesuaikan kebutuhan parameternya

// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 67

// =====================================================
const number7 = 103;
const number8 = 272;
const number9 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari ke-3 angka diatas dan sesuaikan kebutuhan parameternya

// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 189
// =====================================================
// /*
// # Mengenal Penggunaan Function
// ---
// Soal latihan ini memiliki 3 nomor. Simpan di 1 file yang sama!

// ## Objectives

// - Mampu memahami serta mengimplementasi penggunaan function pada JavaScript

// ### HINTS

// - Nama function haruslah `shoutOut`, `calculateMultiply` dan `processSentence` dan __tidak boleh diganti dengan nama function lainnya__. Untuk detail fungsi akan mengacu kepada [Directions](#directions) yang disebutkan di bawah

// ## Directions

// 1. Lanjutkan kode berikut ini hingga dapat menampilkan nilai / output yang diminta!

// ### 1. **shoutOut**
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

// ```js
// /*
//  BUATLAH KODE FUNCTION DISINI
// */

// console.log(shoutOut()) // Menampilkan "Halo Function!" di console
// ```

// ### 2. **calculateMultiply**

// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.

// ```js
// /*
//  BUATLAH KODE FUNCTION DISINI
// */

// var num1 = 5;
// var num2 = 6;

// var hasilPerkalian = calculateMultiply(num1,num2);
// console.log(hasilPerkalian); // Menampilkan angka 30
// ```
// ### 3. **processSentence**

// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

// ```js
// /*
//  BUATLAH KODE FUNCTION DISINI
// */

// var name = "Agus";
// var age = 30;
// var address = "Jln. Malioboro, Yogjakarta";
// var hobby = "gaming";

// var fullSentence = processSentence(name,age,address,hobby);
// console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
// ```
//

// =====================================================
/*
# Built in Function Challenges
---
Soal latihan ini memiliki 3 nomor. Simpan di 1 file yang sama!

---

## Objectives

- Mampu menggunakan built in function pada Array seperti .push, .shift, .unshift, dll
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

### 1. **Antrian**

Diberikan sebuah function antrian yang menerima dua parameter yaitu `line` bertipe array dan `person` bertipe string. Function ini akan mengembalikan array yang dimana data array tersebut sudah bertambah diakhir array sesuai dengan parameter `person`.

```js
let line = ['Rhaegar']

function antrian(line, person) {
  // your code here
}

console.log(antrian(line, 'Snow')) // ['Rhaegar', 'Snow']
```

### 2. **Panggil Antrian**

Diberikan sebuah function panggilAntrian yang menerima parameter `line` bertipe array. Function ini akan mengembalikan array yang dimana data array tersebut berkurang 1 didepannya.

```js
let line = ['Rhaegar', 'Snow']

function panggilAntrian(line) {
  // your code here
}

console.log(panggilAntrian(line)) // ['Snow']
```

### 3. **Tumpukan**

Diberikan sebuah function tumpukan yang menerima dua parameter `line` bertipe array dan `title` bertipe string. Function ini akan mengembalikan array yang dimana data array sudah bertambah diawal array sesuai dengan parameter `title`.

```js
let line = ['Snow']

function tumpukan(line, title) {
  // your code here
}

console.log(tumpukan(line, 'Jon')) // ['Jon', 'Snow']
```

*/
// =====================================================
/*
# Ganjil Genap

## Objectives
- Mampu menggunakan built in function pada Array seperti .push, .shift, .unshift, dll
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function
- Mampu menggunakan template literals


## Directions
Diberikan sebuah function ganjilGenap yang menerima satu parameter `plat` bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).

Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.

```js
function ganjilGenap(plat) {
  // your code here
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data
```
*/

// =====================================================
/*
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19287312&assignment_repo_type=AssignmentRepo)
# Fill

### NOTES

- Jalankan `npm install` terlebih dahulu
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- untuk menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function `.fill()`

### HINTS


- Wajib menggunakan `While loop`
---

## Objectives

- Mampu menggunakan built in function pada Array
- Mampu melakukan manipulasi pada sebuah Array
- Mampu membuat function dan mengerti penggunaan parameter dari sebuah function

## Directions

Diberikan sebuah function `fill` yang memiliki 4 parameter yaitu `data` (mandatory) dengan tipe Array, `value` (mandatory), `start` (optional) dengan tipe integer dan `end` (optional) dengan tipe integer.

Buatlah algoritma di dalam function `fill` sehingga bisa menghasilkan output seperti contoh berikut:

```js
function fill(data, value, start, end) {
  // your code here
}


//Test Case
console.log(fill()); 
// Invalid input

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"])); 
// Invalid input

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Echo", 2, 4)); 
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Foxtrot", 1, 3)); 
// [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Juliett", 3, 20)); 
// [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta"], "Golf", 0, 1)); 
// [ 'Golf', 'Beta', 'Charlie', 'Delta' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo"], "Hotel", 1)); 
// [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]

console.log(fill(["Alpha", "Beta", "Charlie", "Delta", "Echo", "Foxtrot"], "India")); 
// [ 'India', 'India', 'India', 'India', 'India', 'India' ]
```

*/
// =====================================================
