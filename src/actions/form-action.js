
const { CLOSE_FORM, OPEN_FORM } = require('../constants/action-types'); 

module.exports = {
    closeForm: () => ({
        type: CLOSE_FORM,
    }),
    openForm: (task) => ({
        type: OPEN_FORM,
        task
    })
}