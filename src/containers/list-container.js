import React, { Component } from 'react';
import List from '../components/Task/list';
import { connect } from 'react-redux';

class ListContainer extends Component {

    render() {

        const { tasks } = this.props;

        return (
            <List tasks={ tasks }/>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    var { taskReducer } = state;
    return {
        tasks: taskReducer
    }
}

export default connect(mapStateToProps)(ListContainer);
