/* Buat program yang menampilkan angka dari 1 sampai 30, tetapi dengan aturan:
1. Jika angka kelipatan 4, tampilkan "empat"
2. Jika angka kelipatan 6, tampilkan "enam"
3. Jika angka kelipatan 4 dan 6 sekaligus, tampilkan "empat-enam"
4. Selain itu, tampilkan angkanya seperti biasa
*/

let counter = 0
for (let x = 0; x <= 30; x++) {
    if (counter === 4) {
        console.log("empat");
        counter = 0
    } else if (x) {
        console.log(x);
    }
    counter++
}
