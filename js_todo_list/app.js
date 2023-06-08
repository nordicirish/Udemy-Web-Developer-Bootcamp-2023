const todos = ["Collect Eggs", "Walk the Dog"];
const appElement = document.getElementById("app");
const todoActionContainer = document.getElementById("todoActionContainer");
const todoInput = document.getElementById("todoInput");
const todoActionLabel = document.getElementById("todoActionLabel");
const messageElement = document.createElement("p"); // Create a new element for displaying messages
let action = ""; // stores the current action (new/delete)

const renderTodos = () => {
  appElement.innerHTML = ""; // Clear previous contents

  const headingElement = document.createElement("h2");
  headingElement.textContent = "Todo List";
  appElement.appendChild(headingElement);

  todos.forEach((todo, index) => {
    const element = document.createElement("p");
    element.textContent = `${index}: ${todo}`;
    appElement.appendChild(element);
  });

  appElement.appendChild(messageElement); // Append the message element to the app element
  appElement.style.display = "flex";
  // Make appElement visible
};

const showMessage = (message, todoAction) => {
  messageElement.textContent = message;
  messageElement.className =
    todoAction === "new" ? "new-message" : "delete-message";
};

const showTodoInput = (todoAction) => {
  todoActionContainer.style.display = "block";
  todoInput.focus();
  action = todoAction;
  todoActionLabel.textContent =
    todoAction === "new"
      ? "Enter the new Todo:"
      : "Enter the Todo ID to delete:";

  showMessage(""); // Clear any existing messages
};

const performTodoAction = () => {
  const todo = todoInput.value.trim();
  if (todo) {
    if (action === "new") {
      todos.push(todo);
      showMessage(`${todo} added`, "new"); // Show the success message
    } else if (action === "delete") {
      const index = parseInt(todo);
      if (!Number.isNaN(index)) {
        if (index >= 0 && index < todos.length) {
          const deleted = todos.splice(index, 1);
          showMessage(`${deleted[0]} deleted`, "delete"); // Show the success message
        } else {
          showMessage("Invalid index!", "delete"); // Show an error message
        }
      } else {
        showMessage("Unknown index!", "delete"); // Show an error message
      }
    }
    todoActionContainer.style.display = "none";
    todoInput.value = "";
    renderTodos();
  }
};
const handleUserInput = (event) => {
  if (event.key === "Enter") {
    const { value } = document.getElementById("input");
    const trimmedValue = value.trim().toLowerCase();

    if (trimmedValue === "list") {
      renderTodos();
    } else if (trimmedValue === "new") {
      showTodoInput("new");
    } else if (trimmedValue === "delete") {
      showTodoInput("delete");
    } else {
      todoInput.value = trimmedValue; // Populate input with new todo
      showTodoInput("new");
    }

    document.getElementById("input").value = "";
  }
};
