// module.exports.home = function(req, res) {
//     return res.render('home', {
//         title: 'Home'
//     });
// }

const Task = require('../models/task');

module.exports.home = async function (req, res) {
    try {
        // Fetch tasks from the database
        const tasks = await Task.find({});
        return res.render('home', {
            title: 'To-Do List',
            tasks: tasks, // Pass tasks to the EJS template
        });
    } catch (err) {
        console.log('Error in fetching tasks:', err);
        return res.redirect('back');
    }
};
