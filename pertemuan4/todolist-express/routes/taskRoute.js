import express from 'express';
import * as TaskService from '../services/task.js';

const taskRouter = express.Router();

taskRouter.get('/tasks', TaskService.getDataAllTasks);
taskRouter.get('/tasks/:taskId', TaskService.getDataTasksById);
taskRouter.post('/tasks', TaskService.createDataTask);
taskRouter.put('/tasks/:taskId', TaskService.updateDataTask);
taskRouter.delete('/tasks/:taskId', TaskService.deleteDataTask);

export default taskRouter;
