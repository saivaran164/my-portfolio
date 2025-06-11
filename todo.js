let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  taskList.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      taskList.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(taskList));
      renderTasks();
    };
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    taskList.push(task);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    input.value = "";
    renderTasks();
  }
}

renderTasks();