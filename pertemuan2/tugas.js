// Tugas  JavaScript

// Variables: Mendeklarasikan variabel-variabel
let name = 'John';
let age = 30;
let isStudent = false;

// Strings: Menggabungkan string
let greeting = 'Halo, nama saya ' + name + '. Saya berusia ' + age + ' tahun.';

// Numbers: Melakukan operasi matematika
let total = age * 2;

// Booleans: Menggunakan kondisi
if (age >= 18) {
 isStudent = false;
} else {
 isStudent = true;
}

if (age > 18) {
 console.log('Saya dewasa.');
} else {
 console.log('Saya masih remaja.');
}

// Functions: Membuat dan memanggil fungsi
function sayHello() {
 console.log('Halo, dunia!');
}
sayHello();

// Arrays: Membuat dan mengakses array
let fruits = ['apel', 'pisang', 'jeruk'];
console.log('Buah pertama:', fruits[0]);

// Objects: Membuat dan mengakses objek
let person = {
 name: 'Alice',
 age: 25,
 isStudent: true,
};
console.log('Nama:', person.name);

// Operators: Menggunakan operator aritmatika
let x = 5;
let y = 3;
let sum = x + y;
let difference = x - y;

console.log('Penjumlahan:', sum);
console.log('Selisih:', difference);
