import { combineReducers } from 'redux';
import { taskReducer } from './task';
import { formReducer } from './form';

const allReducers = combineReducers({
    taskReducer,
    formReducer
});

export default allReducers;