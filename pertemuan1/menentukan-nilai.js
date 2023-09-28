/* 
 # Algoritma Menentukan Lulus atau Tidak
1. Masukkan nilai  dari pengguna
2. Jika nilai lebih dari sama dengan 80 dan kurang dari  sama dengan 100 a, maka:
   - Tampilkan tulisan "anda lulus dengan sangat baik"
3. Jika nilai lebih dari 70 dan kurang dari  sama dengan 79 , maka:
   - Tampilkan tulisan "anda lulus cukup baik"
4. Jika nilai lebih dari sama dengan 60 dan kurang dari  sama dengan 69, maka:
   - Tampilkan tulisan "anda lulus dengan nilai rata rata"
5. Jika nilai lebih dari sama dengan 50 dan kurang dari  sama dengan 59, maka:
   - Tampilkan "anda tidak lulus"
6. Jika nilai kurang dari sama dengan 49, maka:
   - Tampilkan "saya harap anda belajar dengan giat"
*/

function menentukanNilai(nilai) {
 if (nilai >= 80 && nilai <= 100) {
  console.log('anda lulus dengan sangat baik');
 } else if (nilai >= 70 && nilai <= 79) {
  console.log('anda lulus cukup baik');
 } else if (nilai >= 60 && nilai <= 69) {
  console.log('anda lulus dengan nilai rata rata');
 } else if (nilai >= 50 && nilai <= 59) {
  console.log('anda tidak lulus');
 } else if (nilai <= 49) {
  console.log('saya harap anda belajar dengan giat');
 }
}

console.log(menentukanNilai(80));
console.log(menentukanNilai(70));
console.log(menentukanNilai(60));
console.log(menentukanNilai(50));
console.log(menentukanNilai(40));
