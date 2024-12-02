const taskForm = document.getElementById('FormTasks');
        const taskNameInput = document.getElementById('taskInput');
        const taskDescInput = document.getElementById('taskdescription');
        const dateInput = document.getElementById('dateInput');
        const taskList = document.getElementById('Tasks');

        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const task = taskNameInput.value;
            const taskdesc = taskDescInput.value;
            const dueDate = dateInput.value;

            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${task} - ${taskdesc} <small>${dueDate}</small></span>
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            `;

            taskList.appendChild(taskItem);

            // Clear input fields
            taskNameInput.value = '';
            taskDescInput.value = '';
            dateInput.value = '';
        });

        taskList.addEventListener('click', (e) => {
            if (e.target.classList.contains('complete-btn')) {
                e.target.parentElement.style.textDecoration = 'line-through';
            } else if (e.target.classList.contains('delete-btn')) {
                e.target.parentElement.remove();
            }
        });