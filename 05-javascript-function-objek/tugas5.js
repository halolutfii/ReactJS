console.log("====== Soal 1 ======")
// Membuat Function dengan return String
function cetakFuntion(){
    return "Hallo nama saya Lutfi";
}
// Output nya
console.log(cetakFuntion());

console.log("====== Soal 2 ======")
// Membuat Function dengan rumus penjumlahan di dalamnya
function myFunction(angka1, angka2){
    return angka1 + angka2;
} 
// Output nya
console.log(myFunction(20,7));

console.log("====== Soal 3 ======")
// Mengubah dalam bentuk arrow Function ES6
myFunction = () => {
    return "Hello";
}
// Output nya
console.log(myFunction());

console.log("====== Soal 4 ======")
// Memanggil key dalam sebuah objek
let obj= {
    nama : "john",
    umur : "22",
    bahasa : "Indonesia",
}
// Output nya
console.log(obj.bahasa);

console.log("====== Soal 5 ======")
// Mengubah Array menjadi Objek
var arrayIntroduction = [
    "Lutfi - ",
    "Laki-Laki - ", 
    "Bermain Sepak Bola - ", 
    "2002"]
var objIntroduction = {
    Nama : arrayIntroduction[0],
    JenisKelamin : arrayIntroduction[1],
    Hobby : arrayIntroduction[2],
    Kelahiran : arrayIntroduction[3],
}
// Output nya
console.log(
    objIntroduction.Nama,
    objIntroduction.JenisKelamin,
    objIntroduction.Hobby,
    objIntroduction.Kelahiran);

console.log("====== Soal 6 ======")
// Membuat sebuah Array of Objek dan Menggunakan Method Filter
var namaBuah = [
    {nama : "Nanas", warna : "Kuning", adaBijinya : "False", harga : "9000"},
    {nama : "Jeruk", warna : "Orange", adaBijinya : "True", harga : "8000"},
    {nama : "Semangka", warna : "Merah & Hijau", adaBijinya : "True", harga : "10000"},
    {nama : "Pisang", warna : "Kuning", adaBijinya : "False", harga : "5000"}
] // Array of Objek nya

var namaBuahFilter = namaBuah.filter(function(item){
    return item.adaBijinya != "True";
 }) // Method Filter nya
 // Output nya
console.log(namaBuahFilter);

console.log("====== Soal 7 ======")
// Destructuring pada Objek
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }; //Objek nya

let {name, brand,year} = phone; // Kode Destructuring fitur ES6
// Outputnya
console.log(name,brand,year);

console.log("====== Soal 8 ======")
//  Spread Operator pada Objek
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  } // Objek data buku
  
let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  } // Objek nama buku
  
let objOutput = {...dataBukuTambahan,...buku} // Kode Spread Operator
// Output nya
console.log(objOutput);

console.log("====== Soal 9 ======")
// Penggunaan Function dan Objek
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
} // Objek

const functionObject = (mobil) => {
    return mobil; // mobil nama Parameter Objek
} // Function untuk pemanggilan data Objek
// Output nya
console.log(functionObject(mobil));