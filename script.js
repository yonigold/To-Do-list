const input = document.querySelector("#form2");
const button = document.querySelector(".btn");
const tabContent = document.querySelector(".tab-content");
const btn = document.querySelector(".close");

function addList() {
  const inputValue = input.value;
  if (inputValue === "") {
    alert("Please enter a value");
  } else {
    const task = document.createElement("li");
    task.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "border-0",
      "mb-2",
      "rounded"
    );
    tabContent.append(task);
    const taskText = document.createElement("p");
    taskText.classList.add("m-0", "text");
    taskText.textContent = inputValue;
    task.append(taskText);
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "Delete";
    task.append(closeBtn);
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerHTML = "Edit";
    task.append(editBtn);

    input.value = "";
  }

  function newFunction(task) {
    localStorage.setItem("task", JSON.stringify(task));
  }
}

// add task
button.addEventListener("click", function (e) {
  e.preventDefault();
  addList();
});

// close button
tabContent.addEventListener("click", function (e) {
  if (e.target.classList.contains("close")) {
    tabContent.removeChild(e.target.parentElement);
  }
});

// edit button
tabContent.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit")) {
    const editInput = prompt("Enter new value");
    e.target.parentElement.firstElementChild.textContent = editInput;
  }
});
