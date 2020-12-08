import React, { Component } from 'react';
import { Table, Dropdown, Checkbox, Button } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
const { status } = require('../../constants/status-options');

const statusOptions = [...status].map((st, index) => ({
    key: st.key,
    text: st.text,
    value: st.value
}));

// Item.prototype = {

// }

class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    handleClick = ({target: {name}}) => {
        const { openForm, task, deleteTask } = this.props;
        if (name === 'remove-button') { deleteTask(task) }
        else openForm(task);
    }

    handleChange = (event, {name, value, checked}) => {
        const { task, updateTask } = this.props;

        const tmpTask = {
            id: task.id,
            name: task.name,
            status: name === 'status' ? value : task.status,
            from: name === 'timeFrom' ? value : task.from,
            to: name === 'timeTo' ? value : task.to,
            isNotify: checked!==undefined ? checked : task.isNotify
        }

        console.log(JSON.stringify(tmpTask));

        updateTask(tmpTask);
    }

    defaultDate = () => {
        var date = new Date();
        return (`${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`);
    }

    render() {

        const { task, index } = this.props;

        return (
            <Table.Row verticalAlign='middle' textAlign='center'
                positive={task.status === 2}
                negative={task.status === 3}
                warning={task.status !== 2 && task.status !== 3}>
                
                <Table.Cell> { index } </Table.Cell>
                <Table.Cell> { task.name } </Table.Cell>
                <Table.Cell textAlign='center'>
                    <Dropdown
                        placeholder='Status'
                        selection
                        name='status'
                        value={task.status.toString()}
                        onChange = {this.handleChange}
                        options={statusOptions}
                    />
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <DateTimeInput
                        name="timeFrom"
                        placeholder="From"
                        value = {task.from}
                        iconPosition="left"
                        onChange={this.handleChange}
                    />
                    <DateTimeInput
                        name="timeTo"
                        placeholder="To"
                        value={task.to}
                        iconPosition="left"
                        onChange={this.handleChange}
                    />
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <Checkbox
                        toggle
                        name='isNotify'
                        checked={task.isNotify}
                        onChange={this.handleChange}
                    />
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    <Button.Group>
                        <Button
                            name = 'remove-button'
                            onClick={ this.handleClick }
                            color='orange'>Remove</Button>
                        <Button.Or />
                        <Button
                            name='edit-button'
                            onClick = {this.handleClick}
                            color='green'>Edit</Button>
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default Item;