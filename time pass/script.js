const input = document.getElementById("todo-input");
const addbtn = document.getElementById("todo-add");
const todolist = document.getElementById("todo-list");

// Safely load saved todos from localStorage
let todos = [];
try {
	const saved = localStorage.getItem("todos");
	todos = saved ? JSON.parse(saved) : [];
	if (!Array.isArray(todos)) {
		todos = [];
	}
} catch (error) {
	console.error("Failed to load todos from localStorage:", error);
	todos = [];
}

function saveTodos() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoNode(item, index) {
	const li = document.createElement("li");
	li.className = "todo-item" + (item.completed ? " completed" : "");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "todo-checkbox";
	checkbox.checked = !!item.completed;
	checkbox.addEventListener("change", () => {
		item.completed = checkbox.checked;
		saveTodos();
		render();
	});

	const textSpan = document.createElement("span");
	textSpan.className = "todo-text";
	textSpan.textContent = item.text;
	textSpan.title = "Double-click to edit";
	if (item.completed) {
		textSpan.style.textDecoration = "line-through";
	}
	textSpan.addEventListener("dblclick", () => {
		const newtext = prompt("Edit todo", item.text);
		if (newtext !== null) {
			const trimmed = newtext.trim();
			if (trimmed) {
				item.text = trimmed;
				textSpan.textContent = item.text;
				saveTodos();
			}
		}
	});

	const delbtn = document.createElement("button");
	delbtn.className = "todo-delete-btn";
	delbtn.textContent = "Delete";
	delbtn.addEventListener("click", () => {
		todos.splice(index, 1);
		saveTodos();
		render();
	});

	li.appendChild(checkbox);
	li.appendChild(textSpan);
	li.appendChild(delbtn);
	return li;
}

function render() {
	todolist.innerHTML = "";
	if (todos.length === 0) {
		const emptyLi = document.createElement("li");
		emptyLi.className = "todo-empty";
		emptyLi.textContent = "No tasks yet. Add one above!";
		todolist.appendChild(emptyLi);
		return;
	}

	todos.forEach((item, index) => {
		const node = createTodoNode(item, index);
		todolist.appendChild(node);
	});
}

function addtodo() {
	const text = input.value.trim();
	if (!text) {
		return;
	}

	todos.push({ text: text, completed: false });
	input.value = "";
	saveTodos();
	render();
}

addbtn.addEventListener("click", addtodo);
input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		addtodo();
	}
});

render();

