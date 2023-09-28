/*# 
# Algoritma Pengurutan Bilangan dalam Array dari terkecil ke besar
1. Pengguna diminta untuk memasukkan jumlah bilangan  yang akan diurutkan.
2. lakukan perulangan untuk setiap bilangan yang di masukkan dari pengguna.
3. kemudian bandingkan bilangan pertama dengan bilangan kedua.
4. jika bilangan pertama lebih kecil dari bilangan kedua maka posisi bilangan pertama tetap 
5. jika bilangan kedua lebih kecil dari bilangan pertama maka posisi bilangan kedua swap
6. kemudian tampilkan setiap bilangan yang sudah diurutkan

   */

function bubbleSort(arr) {
 for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1; j++) {
   if (arr[j] > arr[j + 1]) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
   }
  }
 }
 return arr;
}

console.log(bubbleSort([5, 4, 3, 2, 1]));
console.log(bubbleSort([10, 9, 8, 6, 7, 5, 4, 3, 2, 1]));
