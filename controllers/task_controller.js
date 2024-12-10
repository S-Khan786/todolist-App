const Task = require('../models/task');

module.exports.listTasks = async function (req, res) {
    try {
        const tasks = await Task.find({});
        return res.render('home', {
            title: 'To-Do List',
            tasks: tasks,
        });
    } catch (err) {
        console.log('Error in fetching tasks:', err);
        return res.redirect('back');
    }
};

// Create a new task
module.exports.create = async function (req, res) {
    try {
        await Task.create(req.body);
        return res.redirect('/');
    } catch (err) {
        console.log('Error creating task:', err);
        return res.redirect('back');
    }
};

// delete a task from id
module.exports.deleteTask = async function (req, res) {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

