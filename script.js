import { addTask } from "./component/addTask.js";
import { readTask } from "./component/readTask.js";

const btn= document.querySelector('[data-form-btn]');

btn.addEventListener('click', addTask);


readTask();