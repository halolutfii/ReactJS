console.log('Soal 1 :');
// Membuat Looping Sederhana
for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log('Soal 2 :');
// Membuat Looping Dengan Conditional Angka Ganjil
for (let i =1; i < 10; i = i+2){
    console.log(i);
}

console.log('Soal 3 :');
// Membuat Looping Dengan Conditional Angka Genap
for (let i =0; i < 10; i = i+2){
    console.log(i);
}

console.log('Soal 4 :');
// Mengakses Element Array
let array1 = [1,2,3,4,5,6];
console.log(array1[5]);

console.log('Soal 5 :');
// Mengurutkan Element Array
let array2 = [5,2,4,1,3,5];
array2.sort();
console.log(array2);

console.log('Soal 6 :');
// Mengeluarkan Element Array
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"];
for(let i=0; i < array3.length; i++){
    console.log(array3[i]);
}

console.log('Soal 7 :');
//  Mengeluarkan Element Array Dan Dengan Kondisi
let array4 = [1,2,3,4,5,6,7,8,9,10];
for (let i=1; i < array4.length; i = i+2){
    console.log(array4[i]);
}

console.log('Soal 8 :');
// Menggabungkan Element Menjadi String
let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
let kalimatJoin = kalimat.join(" ")

console.log(kalimatJoin);

console.log('Soal 9 :');
// Menambahkan Element Array
var sayuran = [];
sayuran.push('Kangkung', 'Bayam', 'Buncis', 'Kubis', 'Timun', 'Seledri', 'Tauge')
console.log(sayuran);

