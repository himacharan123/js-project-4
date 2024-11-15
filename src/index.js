import Todo from './modules/todo';
import Project from './modules/project';
import Storage from './modules/storage';
import './styles/style.css';

const defaultProject = new Project('Default');
let projects = Storage.loadData('projects') || [defaultProject];

function saveProjects() {
  Storage.saveData('projects', projects);
}

function displayProjects() {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = '';
  projects.forEach((project, index) => {
    const projectItem = document.createElement('li');
    projectItem.textContent = project.name;
    projectItem.addEventListener('click', () => displayTodos(index));
    projectList.appendChild(projectItem);
  });
}

function displayTodos(projectIndex) {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  const project = projects[projectIndex];
  project.todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    todoItem.textContent = `${todo.title} - ${todo.dueDate}`;
    todoList.appendChild(todoItem);
  });
}

// Initial render
displayProjects();