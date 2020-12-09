const { LIST_ALL_TASK, UPDATE_TASK, SAVE_TASK, DELETE_TASK, SEARCH } = require('../constants/action-types');
const { WELCOME } = require('../constants/message');

module.exports = {
    listAllTask: () => ({
        type: LIST_ALL_TASK,
        message: WELCOME
    }),
    saveTask: (task) => ({
        type: SAVE_TASK,
        task
    }),
    updateTask: (task) => ({
        type: UPDATE_TASK,
        task
    }),
    deleteTask: (task) => ({
        type: DELETE_TASK,
        task
    }),
    searchTask: (name, status) => ({
        type: SEARCH,
        name,
        status,
    }),
}