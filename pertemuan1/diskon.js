/* 
 # Algoritma Diskon
 1. Masukkan total belanjaan dari pengguna
 2. Jika total belanjaan lebih atau sama dengan 300 ribu, maka lanjut hitung diskn / 
    masuk  kelangkah 3. jika tidak maka masuk kelangkah 5
 3. Hitung diskn 10% dari total belanjaan 
 4, kurangi total belanja dengan jumlah diskon yang di hitung
 5. tampilkan total belanjaan yang harus di bayarkan oleh pengguna
*/

function hitungDiskon(totalBelanjaan) {
 if (totalBelanjaan >= 300000) {
  const diskon = 0.1 * totalBelanjaan;
  const totalSetelahDiskon = totalBelanjaan - diskon;
  return totalSetelahDiskon;
 } else {
  return totalBelanjaan;
 }
}

console.log(hitungDiskon(400000));
console.log(hitungDiskon(200000));
