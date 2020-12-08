const {CLOSE_FORM, OPEN_FORM} = require('../constants/action-types');
var initialState = {
    isDisplay: false,
    task: null,
}

module.exports.formReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_FORM:
            state = {
                isDisplay: true,
                task: action.task
            }
            return {...state};
        case CLOSE_FORM:
            state.isDisplay = false;
            return { ...state };
        default:
            return {...state};
    }
}
