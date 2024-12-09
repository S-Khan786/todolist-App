// References to DOM elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const deleteTasksBtn = document.getElementById('delete-tasks-btn');

// Handle task form submission
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const dueDateInput = document.getElementById('due-date').value;

  // Format due date (or display "No Deadline")
  const dueDate = dueDateInput ? new Date(dueDateInput).toLocaleDateString() : 'No Deadline';

  // Create a new task item
  const taskItem = document.createElement('div');
  taskItem.classList.add('task-item');

  // Task HTML structure
  taskItem.innerHTML = `
    <input type="checkbox" class="task-checkbox">
    <div class="task-details">
      <p>${description}</p>
      <small>Due: ${dueDate}</small>
    </div>
    <span class="task-category ${category.toLowerCase()}">${category}</span>
  `;

  // Append to task list
  taskList.appendChild(taskItem);

  // Add event listener for the checkbox
  const checkbox = taskItem.querySelector('.task-checkbox');
  checkbox.addEventListener('change', function () {
    taskItem.classList.toggle('completed');
  });

  // Clear the form
  taskForm.reset();
});

// Handle deleting selected tasks
deleteTasksBtn.addEventListener('click', function () {
  const checkboxes = document.querySelectorAll('.task-checkbox:checked');
  checkboxes.forEach((checkbox) => {
    checkbox.parentElement.remove();
  });
});
