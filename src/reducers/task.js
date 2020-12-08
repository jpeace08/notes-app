const { LIST_ALL_TASK, SAVE_TASK, UPDATE_TASK, DELETE_TASK } = require("../constants/action-types");
const {getFromLocalStorage, saveToLocalStorage, generateId} = require('../utils');

var initialSate = getFromLocalStorage('My tasks');

module.exports.taskReducer = (state = initialSate, action) => {

    var task, index;
    let tasks = getFromLocalStorage('My tasks');

    switch (action.type) {
        case LIST_ALL_TASK:
            return [...state];
        
        case SAVE_TASK:
            
            if (action.task.id === undefined || action.task.id == null) {

                tasks.unshift({
                    ...action.task,
                    id: generateId(),
                });

            }
            else {
                task = tasks.find(item => item.id === action.task.id);
                index = tasks.indexOf(task);
                tasks[index] = { ...action.task }
            }

            saveToLocalStorage('My tasks', tasks);
            state = [...tasks];
            return [...state]
        
        case UPDATE_TASK:

            task = tasks.find(item => item.id === action.task.id);
            index = tasks.indexOf(task);
            tasks[index] = {...action.task}
            
            saveToLocalStorage('My tasks', tasks);
            state = [...tasks];

            return [...state];
        
        case DELETE_TASK:
            const newTasks = tasks.filter(x => x.id !== action.task.id);
            
            saveToLocalStorage('My tasks', newTasks);
            state = [...newTasks];

            return [...state];
        
        default:
            return [...state];
    }
}
