const form = document.getElementById('form');
const buttonClear = document.getElementById('btn');
const outputList = document.querySelector('outputList');

export const tasks = [];

export function addTask(description){
    const newTask = {
        description: description,
        completed: false,
        index: index.length + 1
    }
        tasks.push(newTask);

}

