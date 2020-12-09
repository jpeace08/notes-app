import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTask } from '../actions/task-action';
import Nav from '../components/layouts/menus/nav';
const { openForm } = require('../actions/form-action');

class NavContainer extends Component {
    render() {
        const { onOpenForm, handleSearch } = this.props;
        return (
            <Nav
                onOpenForm={onOpenForm}
                handleSearch={handleSearch}
            />
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenForm: () => dispatch(openForm()),
        handleSearch: ({name, status}) => dispatch(searchTask(name, status))
    }
}

export default connect(null, mapDispatchToProps)(NavContainer);