const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  
  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("action-btns");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => li.remove();

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✔";
  doneBtn.onclick = () => span.classList.toggle("done");

  btnContainer.append(doneBtn, editBtn, deleteBtn);
  li.append(span, btnContainer);
  taskList.appendChild(li);

  taskInput.value = "";
}

function editTask(span) {
  const newText = prompt("Edit your task:", span.textContent);
  if (newText !== null && newText.trim() !== "") {
    span.textContent = newText.trim();
  }
}