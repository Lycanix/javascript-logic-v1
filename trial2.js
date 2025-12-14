/*
  1.Buatlah sebuah kode javascript dari pseudocode berikut

    STORE suhu WITH ANY NUMBER
    IF suhu GREATER THAN 37.5 THEN
      DISPLAY "Anda Demam"
    ELSE IF suhu GREATER THAN 37 THEN
      DISPLAY "Anda Terindikasi Demam"
    ELSE 
      DISPLAY "Anda sehat"
    END IF
*/

let suhu = 37.3;
if (suhu > 37.5) {
	console.log('Anda Demam');
} else if (suhu > 37) {
	console.log('Anda Terindikasi Demam');
} else {
	('Anda Sehat');
}

/*
  2. Untuk soal ini tidak boleh uncomment code dan tidak boleh dijalankan. Kalian wajib menganalisa dan membaca alur kode untuk mendapatkan outputnya.

  Apa output dari kode javascript berikut ? 

  var money = 500000
  var hargaSepatu = 500000
  var hargaSendal = 100000
  if (money >= hargaSepatu) {
      console.log("Bisa membeli sepatu")
  } else if (money >= 100000) {
      console.log("Bisa membeli sendal")
  } else {
      console.log("Tidak bisa memberli sendal ataupun sepatu")
  }

  - Jawaban : Bisa membeli sepatu
*/

// 3. Buatlah sebuah variabel berisi data angka berapapun dari 1 - 100 dengan nama "angka1"

// 4. Buatlah sebuah variabel berisi data angka berapapun dari 1 - 100 dengan nama "angka2"

// 5. Buatlah sebuah variabel dengan nama "total" yang isinya adalah hasil perkalian "angka1" dan "angka2"

// 6. Buatlah kondisi apabila "total" lebih dari 500 maka tampilkan di terminal "angka besar". Apabila "total" antara 100 - 499 maka tampilkan di terminal "angka sedang". Apabila "total" dibawah 100 maka tampilkan di terminal "angka kecil".

// Jawaban nomor 3 - 6

let angka1 = 8;
let angka2 = 10;
let total = angka1 * angka2;

if (total > 500) {
	console.log('angka besar');
} else if (total >= 100 && total <= 499) {
	console.log('angka sedang');
} else if (total < 100) {
	console.log('angka kecil');
}

/*
Buatlah algoritma dan implementasi di javascript untuk kasus berikut: Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:

- Nilai 80 - 100: A
- Nilai 65 - 79: B
- Nilai 50 - 64: C
- Nilai 35 - 49: D
- Nilai 0 - 34: E

Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.
*/

let nama = 'Amar';
let score = 56;
if (score <= 100 && score >= 80) {
	console.log(`Nama : ${nama}. Score kamu A`);
} else if (score <= 79 && score >= 65) {
	console.log(`Nama : ${nama}. Score kamu B`);
} else if (score <= 64 && score >= 50) {
	console.log(`Nama : ${nama}. Score kamu C`);
} else if (score <= 49 && score >= 35) {
	console.log(`Nama : ${nama}. Score kamu D`);
} else if (score <= 34 && score >= 0) {
	console.log(`Nama : ${nama}. Score kamu E`);
}
