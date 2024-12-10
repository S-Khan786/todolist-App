<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        code {
            background: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
        ul {
            list-style-type: disc;
            padding-left: 20px;
        }
        a {
            color: #007acc;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .screenshot {
            max-width: 100%;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>To-Do App</h1>
    <p>A simple and interactive <strong>To-Do List Application</strong> built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>, allowing users to create, view, edit, and delete tasks.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Add Tasks:</strong> Users can add tasks with a description, category, and due date.</li>
        <li><strong>Delete Tasks:</strong> Option to delete individual tasks.</li>
        <li><strong>Edit Tasks:</strong> Modify the description, category, and due date of existing tasks.</li>
        <li><strong>Task Management:</strong> Mark tasks as completed.</li>
        <li><strong>Dynamic UI:</strong> Responsive and interactive design.</li>
    </ul>

    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Frontend:</strong> EJS for templating, HTML, CSS, JavaScript</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Styling:</strong> Custom CSS</li>
    </ul>

    <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name</code></pre>
        </li>
        <li>Install dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Set up the environment variables:
            <p>Create a <code>.env</code> file in the root directory and add the following:</p>
            <pre><code>MONGO_URI=your_mongodb_connection_string
PORT=8000</code></pre>
        </li>
        <li>Start the application:
            <pre><code>npm start</code></pre>
        </li>
        <li>Visit the app at:
            <p><code>http://localhost:8000</code></p>
        </li>
    </ol>

    <h2>How to Use</h2>
    <ul>
        <li><strong>Add a Task:</strong> Enter a task description, select a category, and set a due date. Click the "Add Task" button to add the task to your to-do list.</li>
        <li><strong>Edit a Task:</strong> Click the edit button next to a task, modify the task details, and save your changes.</li>
        <li><strong>Delete a Task:</strong> Click the delete button next to a task to remove it.</li>
        <li><strong>Mark as Completed:</strong> Check the box next to a task to mark it as completed. The task will be crossed out.</li>
    </ul>

    <h2>Screenshots</h2>
    <h3>Task Management</h3>
    <img src="path-to-screenshot.png" alt="Task Management" class="screenshot">
    <h3>Edit Task</h3>
    <img src="path-to-edit-task-screenshot.png" alt="Edit Task" class="screenshot">

    <h2>Contributing</h2>
    <p>Contributions are welcome! Please fork this repository and submit a pull request.</p>

    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for details.</p>
</body>
</html>
