import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/layouts/menus/nav';
const { openForm } = require('../actions/form-action');

class NavContainer extends Component {
    render() {
        const { onOpenForm } = this.props;
        return (
            <Nav onOpenForm={ onOpenForm }/>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenForm: () => dispatch(openForm())
    }
}

export default connect(null, mapDispatchToProps)(NavContainer);