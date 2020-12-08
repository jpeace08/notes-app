import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import Item from './item';

class List extends Component {


    render() {

        const { tasks } = this.props;

        return (
            <Table celled structured className='mb-5'>
                <Table.Header>
                    <Table.Row textAlign='center'>
                        <Table.HeaderCell width={1}>STT</Table.HeaderCell>
                        <Table.HeaderCell width={3}>Job</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Status</Table.HeaderCell>
                        <Table.HeaderCell width={2}>Date/Time</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Notify</Table.HeaderCell>
                        <Table.HeaderCell width={1}>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{ this.renderTasks(tasks) }</Table.Body>
            </Table>
        );
    }

    renderTasks = (tasks) => {

        const { updateTask, openForm, deleteTask } = this.props;

        if (tasks && tasks.length > 0) {
            return tasks.map((task, index) => (
                <Item
                    openForm={openForm}
                    updateTask={updateTask}
                    task={task} key={task.id}
                    index={index + 1}
                    deleteTask={ deleteTask }
                />
            ))
        }
        return null;
    }    

}

export default List;