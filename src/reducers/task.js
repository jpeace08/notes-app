const { LIST_ALL_TASK, ADD_TASK } = require("../constants/action-types");
const {getFromLocalStorage, saveToLocalStorage, generateId} = require('../utils');

var initialSate = getFromLocalStorage('My tasks');
module.exports.taskReducer = (state = initialSate, action) => {
    switch (action.type) {
        case LIST_ALL_TASK:
            return [...state];
        case ADD_TASK:
            const tasks = getFromLocalStorage('My tasks');
            console.log(action.task);
            tasks.unshift({
                id: generateId(),
                ...action.task
            });
            saveToLocalStorage('My tasks', tasks);
            state = [...tasks];
            return [...state]
        default:
            return [...state];
    }
}
