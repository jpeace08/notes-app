import React, { Component } from 'react';
import List from '../components/Task/list';
import { connect } from 'react-redux';
import { openForm } from '../actions/form-action';

const { updateTask } = require('../actions/task-action');

class ListContainer extends Component {

    render() {

        const { taskReducer, formReducer, updateTask, openForm } = this.props;

        return (
            <List updateTask={updateTask} tasks={[...taskReducer]} openForm={ openForm }/>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
