import { getAllTasks, createTask, deleteTask, updateTask } from '../repository/tasks.js';

const getDataAllTasks = async () => {
 const [task] = await getAllTasks();
 if (task.length > 0) {
  console.log('tasks', task);
 } else {
  console.log('Tidak ada data tasks');
 }
};

const createDataTask = async (userId, title, isDone) => {
 const [result] = await createTask(userId, title, isDone);
 if (result.affectedRows !== 0) {
  console.log(`Task berhasil ditambahkan dengan id ${result.insertId}`);
 } else {
  console.log('Task gagal ditambahkan');
 }
};

const updateDataTask = async (taskId, userId, title, isDone) => {
 const [result] = await updateTask(taskId, userId, title, isDone);
 if (result.affectedRows !== 0) {
  console.log(`Task berhasil diupdate dengan id ${taskId}`);
 } else {
  console.log('Task gagal diupdate');
 }
};

const deleteDataTask = async (taskId) => {
 const [result] = await deleteTask(taskId);
 if (result.affectedRows !== 0) {
  console.log(`Task berhasil dihapus dengan id ${taskId}`);
 } else {
  console.log('Task gagal dihapus');
 }
};

export default {
 getDataAllTasks,
 createDataTask,
 updateDataTask,
 deleteDataTask,
};
