import React, { Component } from 'react';
import List from '../components/Task/list';
import { connect } from 'react-redux';
import { openForm } from '../actions/form-action';

const { updateTask, deleteTask } = require('../actions/task-action');

class ListContainer extends Component {

    render() {

        const { taskReducer, deleteTask, updateTask, openForm } = this.props;

        return (
            <List updateTask={updateTask} tasks={[...taskReducer]} openForm={openForm} deleteTask={ deleteTask }/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTask: (task) => {
            return dispatch(updateTask(task))
        },
        openForm: (task) => {
            return dispatch(openForm(task))
        },
        deleteTask: (task) => dispatch(deleteTask(task)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
