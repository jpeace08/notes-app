import React, { Component } from 'react';
import FormInput from '../components/Task/form';
import { connect } from 'react-redux';
const { addTask } = require('../actions/task-action');
const { closeForm } = require('../actions/form-action');

class FormContainer extends Component {
    render() {
        const { isDisplay: { ...isDisplay }, addTask, closeForm } = this.props;
        return (
            <FormInput closeForm={closeForm} addTask={addTask} isDisplay={ isDisplay }/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { formReducer } = state;
    return {
        isDisplay: formReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTask: (task) => dispatch(addTask(task)),
        closeForm: () => dispatch(closeForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
