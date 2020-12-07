import React, { Component } from 'react';
import List from '../components/Task/list';
import { connect } from 'react-redux';

const { updateTask } = require('../actions/task-action');

class ListContainer extends Component {

    render() {

        const { tasks, updateTask } = this.props;

        return (
            <List updateTask={updateTask} tasks={ tasks }/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    var { taskReducer } = state;
    return {
        tasks: taskReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateTask: (task) => {
            return dispatch(updateTask(task))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
