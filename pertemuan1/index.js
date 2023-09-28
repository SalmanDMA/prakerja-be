/* 
 # Algoritma liniar search
 1. Buat perulangan yang berjalan melalui setiap elemen array dimulai dari index 0
 2. Pada setiap iterasi (perulangan) periksa apakah elemen saat ini sama dengan nilai yang di cari
 3. Jika elemen saat ini sama dengan elemen yang dicari maka kembalikan nilai indexnya
 4. jika tidak ada elemen yang cocok setelah selesai perulangan makakembalikan nilai -1 
 5. Selesai
*/

/*
1. Pertama membuat sebuah fungsi yang menerima sebuah array dan sebuah nilai yang akan dicari
2. Membuat sebuah perulangan yang berjalan melalui setiap elemen array dimulai dari index 0
3. Kemudian membuat sebuah pengecekan apakah elemen saat ini sama dengan nilai yang di cari
4. Jika elemen saat ini sama dengan elemen yang dicari maka kembalikan nilai indexnya
5. Jika tidak ada elemen yang cocok setelah selesai perulangan maka kembalikan nilai -1
6. Jika sudah selesai perulangan dan di kembalikan nilai nya maka program selesai
*/

function linearSearch(array, value) {
 for (let i = 0; i < array.length; i++) {
  if (array[i] === value) {
   return i;
  }
 }
 return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 5));
console.log(linearSearch([1, 2, 3, 4, 5], 6));
