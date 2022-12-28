// Soal 1 - Latihan Membuat Variable dan Valuenya
let namaLengkap = "Lutfi Cahya Nugraha";
console.log(namaLengkap);

// Soal 2 - Latihan Penggabungan Variable
let word = "JavaScript ";
let second = "is ";
let third = "Awesome";

let outputGabunganVariable = word + second + third;
console.log(outputGabunganVariable);

// Soal 3 - Latihan Penggabungan Variable Menggunakan Template Literals
let hello = "Hello";
let world = "World!!";

let output = `${hello} ${world}`;
console.log(output);

// Soal 4 - Latihan Mengubah Tipe Data
let panjangPersegiPanjang = parseInt("8");
let lebarPersegiPanjang = parseInt("5");

let kelilingPersegiPanjang = 2 * ( panjangPersegiPanjang + lebarPersegiPanjang );
console.log(kelilingPersegiPanjang);

// Soal 5 - Latihan Mengurai Kalimat
let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords= sentences.substring(4, 14); // do your own! 
let thirdWords=sentences.substring(15, 18);// do your own! 
let fourthWords=sentences.substring(19, 25);// do your own! 
let fifthWords=sentences.substring(25, 31); // do your own! 

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

// Soal 6 - Akses Karakter Dalam String
var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord= sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri, wajib mengikuti seperti contoh diatas 
var fourthWord= sentence[11] + sentence[12]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var fifthWord= sentence[14] + sentence[15]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var sixthWord= sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var seventhWord= sentence[23] + sentence[24]; // lakukan sendiri , wajib mengikuti seperti contoh diatas
var eighthWord= sentence[26] + sentence[27] + sentence[28] + sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34]; // lakukan sendiri , wajib mengikuti seperti contoh diatas

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);

// Soal 7 - Latihan Mengambil Sebuah Kalimat
let txt = "I can eat bananas all day";
let hasil = txt.slice(10,17); //lakukan pengambilan kalimat di variable ini

console.log(hasil);

// Soal 8 - Membuat Kondisi Sederhana
var nilaiDoe = 50;                                  

if (nilaiDoe >= 80) {
    console.log("A")
}else if(nilaiDoe >= 70 && nilaiDoe <=80){                       
    console.log("B")
}else if (nilaiDoe >= 60 && nilaiDoe <=70) {
    console.log("C")
}else if (nilaiDoe >=50 && nilaiDoe <=60) {
    console.log("D")
}else {
    console.log("E")
};

// (Pendapat saya untuk belajar membaca sebuah code dari Soal 8 )
// Mr.Doe mendapatkan nilai 50, 
// Jika nilai Mr. Doe lebih dari 80, maka Mr.Doe mendapatkan A.
// Jika nilai Mr. Doe tidak lebih dari 70 dan kurang dari 80. Maka Mr.Doe mendapatkan nilai B.
// Jika nilai Mr. Doe tidak lebih dari 60 dan kurang dari 70. Maka Mr.Doe mendapatkan nilai C.
// Jika nilai Mr. Doe tidak lebih dari 50 dan kurang dari 60. Maka Mr.Doe mendapatkan nilai D.
// Selain itu tidak lebih dari angka 50. Maka pilihan terakhir Mr.Doe mendapatkan nilai E.)

// Soal 9 - Conditional Tipe Tenary Operator
let angka = 2;

let angkaDua = angka === 2 ? "Angka nya 2" : "Bukan angka 2";
console.log(angkaDua);

// (Pendapat saya belajar tentang penjelasan sebuah code soal 9)
// angka mempunyai nilai 2
// jika nilai angka benar sama dengan 2 maka jawabannya true (Angka nya 2), jika tidak 2 maka jawabannya false (Bukan angka 2)

// Soal 10 - Conditional Tipe Switch Case
var traffic_lights = "red";
var traffic_lights = 1;

switch(traffic_lights){
    case 1 : {
        console.log('berhenti');
        break;
    };
    case 2 : {
        console.log('hati-hati');
        break;
    };
    case 3 : {
        console.log('berjalan');
        break;
    };
    default : {
        console.log('lampu jalanan sedang error, maka ber hati-hati saat berkendara');
    };
}

// (Pendapat saya belajar tentang penjelasan sebuah code soal no 10)
// Cara kerja lampu jalanan
// Jika lampu jalanan berwarna merah, dan lampu tersebut memiliki nilai 1. Maka pengendara harus berhenti.
// Jika lampu jalanan berwarna kuning, dan lampu tersebut memiliki nilai 2. Maka pengendara harus hati-hati.
// Jika lampu jalanan berwarna merah, dan lampu tersebut memiliki nilai 3. Maka pengendara harus berjalan.
// Jika lampu tersebut tidak menyala, dan lampu tersebut tidak memiliki nilai. Maka lampu jalanan sedang error, jadi pengendara harap ber hati-hati.