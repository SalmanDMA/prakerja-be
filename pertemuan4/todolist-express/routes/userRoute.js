import express from 'express';
import * as UserService from '../services/user.js';

const userRouter = express.Router();

userRouter.get('/users', UserService.getUser);
userRouter.get('/users/:id', UserService.getUserById);
userRouter.post('/users', UserService.createUser);
userRouter.put('/users/:id', UserService.updateUser);
userRouter.delete('/users/:id', UserService.deleteUser);

export default userRouter;
