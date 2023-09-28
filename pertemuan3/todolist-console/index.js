// import * as UserService from './services/user.js';

// await UserService.createUser('Salman', 'salman@example.com', 'salman12345');
// await UserService.getUsers();
// await UserService.updateUser(1, 'Dwi', 'w7kGx@example.com');
// await UserService.getUsers();
// await UserService.deleteUser(1);

import TaskService from './services/task.js';

await TaskService.createDataTask(10, 'Tugas keenam', 0);

await TaskService.createDataTask(11, 'Tugas ketujuh', 0);

await TaskService.getDataAllTasks();

await TaskService.deleteDataTask(10);

await TaskService.getDataAllTasks();

await TaskService.updateDataTask(2, 12, 'Tugas Update', 1);

await TaskService.getDataAllTasks();
