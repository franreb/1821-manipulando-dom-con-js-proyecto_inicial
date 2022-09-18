import checkComplete from "./completeTask.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');
    
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format('DD/MM/YYYY');
    
    input.value = '';
    calendar.value = '';

    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    taskList.push({value, dateFormat})
    localStorage.setItem("tasks",JSON.stringify(taskList))

    const task = createTask({value, dateFormat});
    list.appendChild(task);
}



export const createTask = ({value, dateFormat}) => { 
    
    const task = document.createElement('li');
        task.classList.add('card');
    
        const taskContent = document.createElement("div");
    
    const tittleTask = document.createElement("span");
        tittleTask.classList.add("task");
        tittleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(tittleTask);
    
    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon());
    
    return task;
}

