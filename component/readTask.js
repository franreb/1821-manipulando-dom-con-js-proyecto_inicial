import { createTask } from "./addTask.js";

export const readTask = () => {
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const list = document.querySelector("[data-list]")

    taskList.forEach((task) => {
        list.appendChild(createTask(task));
    });

};