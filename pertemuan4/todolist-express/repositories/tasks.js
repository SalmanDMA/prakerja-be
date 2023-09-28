import dbpool from '../utils/db.js';

const getAllTasks = async () => {
 const query = 'SELECT task_id, user_id, title, is_done, created_at, updated_at FROM tasks';
 return dbpool.query(query);
};

const getTasksById = async (taskId) => {
 const query = 'SELECT task_id, user_id, title, is_done, created_at, updated_at FROM tasks WHERE task_id = ?';
 const values = [taskId];
 return dbpool.query(query, values);
};

const createTask = async (userId, title, isDone) => {
 const created_at = new Date();
 const query = 'INSERT INTO tasks (user_id, title, is_done, created_at, updated_at) VALUES (?, ?, ?, ?, ?)';
 const values = [userId, title, isDone, created_at, created_at];
 return dbpool.query(query, values);
};

const updateTask = async (taskId, userId, title, isDone) => {
 const updated_at = new Date();
 const query = 'UPDATE tasks SET title = ?, is_done = ?, user_id = ?, updated_at = ? WHERE task_id = ?';
 const values = [title, isDone, userId, updated_at, taskId];
 return dbpool.query(query, values);
};

const deleteTask = async (taskId) => {
 const query = 'DELETE FROM tasks WHERE task_id = ?';
 return dbpool.query(query, [taskId]);
};

export { getAllTasks, getTasksById, createTask, updateTask, deleteTask };
