/*# 
Algoritma Menghitung Rata-Rata
   1. Masukkan jumlah bilangan yang akan dihitung rata-ratanya  dari pengguna
   2. lakukan perulangan untuk setiap bilangan yang di masukkan dari pengguna
   3. simpan jumlah bilangan ke dalam variabel
   4. kemudian hitung total dari jumlah bilangan yang di masukkan
   5. jika sudah maka hitung rata rata nya dari total dibagi dengan jumlah bilangan
   6. kemudian tampilkan rata-rata ke layar:
   */

/*# 
# Algoritma Pengurutan Bilangan dalam Array dari terkecil ke besar
1. Pengguna diminta untuk memasukkan jumlah bilangan  yang akan diurutkan.
2. lakukan perulangan untuk setiap bilangan yang di masukkan dari pengguna.
3. kemudian bandingkan bilangan pertama dengan bilangan kedua.
4. jika bilangan pertama lebih kecil dari bilangan kedua maka posisi bilangan pertama tetap 
5. jika bilangan kedua lebih kecil dari bilangan pertama maka posisi bilangan kedua swap
6. kemudian tampilkan setiap bilangan yang sudah diurutkan

   */

function rataRata(array) {
 let total = 0;
 let jumlahBilangan = 0;
 for (let i = 0; i < array.length; i++) {
  jumlahBilangan++;
  total += array[i];
 }
 return total / jumlahBilangan;
}

console.log(rataRata([1, 2, 3]));
console.log(rataRata([1, 2, 3, 4]));
console.log(rataRata([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
