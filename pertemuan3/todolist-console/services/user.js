import { getData, createData, deleteData, updateData } from '../repository/users.js';

export const getUsers = async () => {
 const [users] = await getData();
 if (users.length > 0) {
  console.log('users', users);
 } else {
  console.log('Tidak ada data users');
 }
};

export const createUser = async (name, email, password) => {
 const [result] = await createData(name, email, password);
 if (result.insertId > 0) {
  console.log(`User berhasil ditambahkan dengan id ${result.insertId}`);
 } else {
  console.log('User gagal ditambahkan');
 }
};

export const updateUser = async (id, name, email) => {
 const [result] = await updateData(id, name, email);
 if (result.affectedRows !== 0) {
  console.log(`User berhasil diupdate dengan id ${id}`);
 } else {
  console.log('User gagal diupdate/user tidak ditemukan');
 }
};

export const deleteUser = async (id) => {
 const [result] = await deleteData(id);
 if (result.affectedRows !== 0) {
  console.log(`User berhasil dihapus dengan id ${id}`);
 } else {
  console.log('User gagal dihapus/user tidak ditemukan');
 }
};
