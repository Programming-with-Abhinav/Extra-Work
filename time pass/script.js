const input = document.getElementById('todo-input');
const addbtn = document.getElementById('add-btn');
const todolist = document.getElementById('todo-list');

const saved = localStorage.getItem('todo');
const todo = saved ? JSON.parse('saved') : [];

