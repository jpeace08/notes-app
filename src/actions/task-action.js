const { LIST_ALL_TASK, ADD_TASK } = require('../constants/action-types');
const { WELCOME } = require('../constants/message');

module.exports = {
    listAllTask: () => ({
        type: LIST_ALL_TASK,
        message: WELCOME
    }),
    addTask: (task) => ({
        type: ADD_TASK,
        task
    })
}