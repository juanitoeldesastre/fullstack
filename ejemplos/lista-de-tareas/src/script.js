const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Cargar tareas del localStorage
window.onload = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDOM(task.text, task.completed));
};

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTaskToDOM(taskText, false);
    saveTasks();
    taskInput.value = "";
  }
});

function addTaskToDOM(text, completed) {
  const li = document.createElement("li");
  if (completed) li.classList.add("completed");

  li.innerHTML = `
    <span>${text}</span>
    <div>
      <button class="delete">X</button>
    </div>
  `;

  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").innerText,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
