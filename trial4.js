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

let stringAngka = '23567123';
let result = '';
for (let x = 0; x < stringAngka.length; x++) {
	const perChar = stringAngka[x];
	for (let z = 1; z <= Number(perChar); z++) {
		// console.log(`test`);
		result += '#';
	}
    result += "\n"
}
console.log(result);


//===================================================
