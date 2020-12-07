const { LIST_ALL_TASK, ADD_TASK, UPDATE_TASK } = require("../constants/action-types");
const {getFromLocalStorage, saveToLocalStorage, generateId} = require('../utils');

var initialSate = getFromLocalStorage('My tasks');
const tasks = getFromLocalStorage('My tasks');

module.exports.taskReducer = (state = initialSate, action) => {
    switch (action.type) {
        case LIST_ALL_TASK:
            return [...state];
        
        case ADD_TASK:
            tasks.unshift({
                id: generateId(),
                ...action.task
            });
            saveToLocalStorage('My tasks', tasks);
            state = [...tasks];
            return [...state]
        
        case UPDATE_TASK:

            var task = tasks.find(item => item.id === action.task.id);
            var index = tasks.indexOf(task);
            tasks[index] = {...action.task}
            
            saveToLocalStorage('My tasks', tasks);
            state = [...tasks];

            return [...state];
        
        default:
            return [...state];
    }
}
