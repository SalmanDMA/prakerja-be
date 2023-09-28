const mahasiswa = {
 nama: 'Muhammad Rafi',
 umur: 21,
 alamat: 'Kediri',
};

for (const key in mahasiswa) {
 console.log(mahasiswa[key]);
}

const kalimat1 = 'Nama saya ' + mahasiswa.nama;
console.log(kalimat1);
