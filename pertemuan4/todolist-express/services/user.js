import { getData, getDataById, createData, updateData, deleteData } from '../repositories/users.js';
import { successResponse } from '../utils/response.js';

export const getUser = async (req, res, next) => {
 try {
  const [result] = await getData();
  successResponse(res, 'Get Data User Success', result);
 } catch (error) {
  next(error);
 }
};

export const getUserById = async (req, res, next) => {
 try {
  const { id } = req.params;
  console.log(id);
  const [result] = await getDataById(id);
  successResponse(res, `Get Data User Success by id ${id}`, result);
 } catch (error) {
  next(error);
 }
};

export const createUser = async (req, res, next) => {
 try {
  const { name, email, password } = req.body;
  const [created] = await createData(name, email, password);
  const [result] = await getDataById(created.insertId);
  successResponse(res, 'Create Data User Success', result[0]);
 } catch (error) {
  next(error);
 }
};

export const updateUser = async (req, res, next) => {
 try {
  const { id } = req.params;
  const { name, email } = req.body;
  const [result] = await updateData(id, name, email);
  if (result.affectedRows > 0) {
   successResponse(res, 'Update Data User Success', `Berhasil memperbarui user dengan id ${id}`);
  } else {
   errorResponse(res, 'Update Data User Failed', `Gagal memperbarui user dengan id ${id}`);
  }
 } catch (error) {
  next(error);
 }
};

export const deleteUser = async (req, res, next) => {
 try {
  const { id } = req.params;
  const [result] = await deleteData(id);
  if (result.affectedRows > 0) {
   successResponse(res, 'Delete Data User Success', `Berhasil menghapus user dengan id ${id}`);
  } else {
   errorResponse(res, 'Delete Data User Failed', `Gagal menghapus user dengan id ${id}`);
  }
 } catch (error) {
  next(error);
 }
};
