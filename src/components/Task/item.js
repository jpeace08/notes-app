import React, { Component } from 'react';
import { Table, Dropdown, Checkbox } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
const { status } = require('../../constants/status-options');

const statusOptions = [...status].map((st, index) => ({
    key: st.key,
    text: st.text,
    value: st.value
}));


class Item extends Component {


    handleChange = (event, { name, value }) => {
        console.log(value);
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
                        placeholder='State'
                        selection
                        value={task.status.toString()}
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
                    <Checkbox toggle checked={task.isNotify} />
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default Item;