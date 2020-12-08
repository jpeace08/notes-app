import React, { Component } from 'react';
import FormInput from '../components/Task/form';
import { connect } from 'react-redux';
const { saveTask } = require('../actions/task-action');
const { closeForm } = require('../actions/form-action');

class FormContainer extends Component {
    render() {
        const { stateForm , saveTask, closeForm } = this.props;
        return (
            <FormInput closeForm={closeForm} saveTask={saveTask} stateForm={ stateForm }/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { formReducer } = state;
    return {
        stateForm: {...formReducer}
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        saveTask: (task) => dispatch(saveTask(task)),
        closeForm: () => dispatch(closeForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
