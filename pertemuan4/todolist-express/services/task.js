import { getAllTasks, getTasksById, createTask, deleteTask, updateTask } from '../repositories/tasks.js';
import { successResponse } from '../utils/response.js';

const getDataAllTasks = async (req, res, next) => {
 try {
  const [result] = await getAllTasks();
  successResponse(res, 'Get Data All Tasks Success', result);
 } catch (error) {
  next(error);
 }
};

const getDataTasksById = async (req, res, next) => {
 try {
  const { taskId } = req.params;
  const [result] = await getTasksById(taskId);
  successResponse(res, `Get Data Task Success by id ${taskId}`, result);
 } catch (error) {
  next(error);
 }
};

const createDataTask = async (req, res, next) => {
 try {
  const { userId, title, isDone } = req.body;
  const [created] = await createTask(userId, title, isDone);
  const [result] = await getTasksById(created.insertId);
  successResponse(res, 'Create Data Task Success', result[0]);
 } catch (error) {
  next(error);
 }
};

const updateDataTask = async (req, res, next) => {
 try {
  const { taskId } = req.params;
  const { userId, title, isDone } = req.body;
  const [result] = await updateTask(taskId, userId, title, isDone);
  if (result.affectedRows > 0) {
   successResponse(res, 'Update Data Task Success', `Berhasil memperbarui task dengan id ${taskId}`);
  } else {
   errorResponse(res, 'Update Data Task Failed', `Gagal memperbarui task dengan id ${taskId}`);
  }
 } catch (error) {
  next(error);
 }
};

const deleteDataTask = async (req, res, next) => {
 try {
  const { taskId } = req.params;
  const [result] = await deleteTask(taskId);
  if (result.affectedRows > 0) {
   successResponse(res, 'Delete Data Task Success', `Berhasil menghapus task dengan id ${taskId}`);
  } else {
   errorResponse(res, 'Delete Data Task Failed', `Gagal menghapus task dengan id ${taskId}`);
  }
 } catch (error) {
  next(error);
 }
};

export { getDataAllTasks, getDataTasksById, createDataTask, updateDataTask, deleteDataTask };
