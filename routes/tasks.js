const express = require('express');
const router = express.Router();
    
const taskController = require('../controllers/task_controller');

// Route to list all tasks
router.get('/', taskController.listTasks);

// Route to create a task
router.post('/create', taskController.create);

// Route to delete selected tasks
router.post('/delete/:id', taskController.deleteTask);


module.exports = router;