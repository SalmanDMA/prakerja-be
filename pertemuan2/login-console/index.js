/*
 1. Buat fungsi untuk menghapus data user  berdasarkan id yang di inputkan kedalam param
 2. Buat fungsi untuk menampilkan data user berdasarkan id yang di inputkan kedalam param
 3. Buat fungsi untuk login sederhana :
    - parameternya masukkan email dan password
    - cocokkan data sesuai dengan email dan password yang di berikan
    - bila terdapat data yang sama pada array maka tampilkan di log "selamat datang ${nama_user}"
    - bila tidak terdapat data yang sama pada array maka tampilkan di log "email dan password tidak cocok"
*/

const users = [];

const addUser = (inputId, inputName, inputEmail, inputPass) => {
 const user = {
  id: inputId,
  name: inputName,
  email: inputEmail,
  pass: inputPass,
 };
 users.push(user);
 console.log('Data berhasil ditambahkan');
};

const findIndex = (inputId) => {
 const index = users.findIndex((user) => user.id === inputId);
 if (index === -1) return console.log('user not found');
 return index;
};

const updateuser = (inputId, inputName, inputEmail) => {
 const index = findIndex(inputId);
 const newUser = (users[index] = {
  id: inputId,
  name: inputName,
  email: inputEmail,
 });
 console.log('Data berhasil di update');
 return newUser;
};

const removeUser = (inputId) => {
 const index = findIndex(inputId);
 users.splice(index, 1);
 console.log('Data berhasil di hapus');
 return users;
};

const getUser = (inputId) => {
 const index = findIndex(inputId);
 return users[index];
};

const login = (inputEmail, inputPass) => {
 const user = users.find((user) => user.email === inputEmail && user.pass === inputPass);
 if (user) return console.log(`selamat datang ${user.name}`);
 console.log('email dan password tidak cocok');
};

addUser(1, 'salman', 'salman@gmail.com', 'salman123');
addUser(2, 'dwi', 'dwi@gmail.com', 'dwi123');
addUser(3, 'budi', 'budi@gmail.com', 'budi123');
addUser(4, 'cici', 'cici@gmail.com', 'cici123');
addUser(5, 'deni', 'deni@gmail.com', 'deni123');
console.log(users, 'Data users pertama');
updateuser(1, 'nameUpdate', 'emailUpdate');
console.log('Data users setelah id 1 di update', users);
removeUser(2);
console.log('Data users setelah id 2 di hapus', users);
console.log('user di dapat dari function get user by id : ', getUser(3));
console.log(login('salman@gmail.com', 'salman123'));
console.log(login('cici@gmail.com', 'cici123'));
