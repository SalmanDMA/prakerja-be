const profile = {
 name: 'Muhammad Rafi',
 age: '21',
 address: 'Kediri',
};

const { name, age, address } = profile;

console.log(`Name: ${name}, Age: ${age}, Address: ${address}`);

const { name: nama = 'Muhammad', age: umur, address: alamat } = profile;

console.log(`Name: ${nama}, Age: ${umur}, Address: ${alamat}`);

const {
 name: [nama1, nama2],
 age: [umur1, umur2],
 address: [alamat1, alamat2],
} = profile;

console.log(`Name: ${nama1}, Age: ${umur1}, Address: ${alamat1}`);
console.log(`Name: ${nama2}, Age: ${umur2}, Address: ${alamat2}`);
