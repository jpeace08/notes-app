import React from 'react';
import { Button, Checkbox, Form, Dropdown } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
const { status } = require('../../constants/status-options');

const statusOptions = [...status].map((st, index) => ({
    key: st.key,
    text: st.text,
    value: st.value
}));

class FormInput extends React.Component {

    constructor (props) {
        super(props);
        this.jobNameRef = React.createRef();
        this.jobStatusRef = React.createRef();
        this.timeFromRef = React.createRef();
        this.timeToRef = React.createRef();
        this.notifyRef = React.createRef();
    }


    handleClick = (e) => {

        const { addTask, closeForm } = this.props;

        if (e.target.name === 'add-button') {
            addTask({
                name: this.jobNameRef.current.value,
                status: this.jobStatusRef.current.state.selectedIndex,
                from: this.timeFromRef.current.props.value,
                to: this.timeToRef.current.props.value,
                isNotify: this.notifyRef.current.state.checked
            });
        }
        else if (e.target.name === 'close-button') {
            closeForm();
        }

    }

    getDefaultStateDateTime = () => {
        const date = new Date();
        return ({ date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
            hour: date.getHours(),
            minute: date.getMinutes(),
        });
    }

    renderForm = () => (

        <div className="form-input">
            <Form>
                <Form.Field>
                    <label>Your job</label>
                    <input
                        name='jobName'
                        placeholder='Enter your job...'
                        ref={this.jobNameRef}

                    />
                </Form.Field>
                <Form.Field>
                    <label>Status</label>
                    <Dropdown
                        placeholder='State'
                        selection
                        options={statusOptions}
                        ref={this.jobStatusRef}
                    />
                </Form.Field>
                <Form.Field>
                    <label>From</label>
                    <DateTimeInput
                        name="timeFrom"
                        placeholder="From"
                        // value={}
                        iconPosition="left"
                        ref={this.timeFromRef}
                        // onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>To</label>
                    <DateTimeInput
                        name="timeTo"
                        placeholder="To"
                        // value={}
                        iconPosition="left"
                        ref={this.timeToRef}
                        // onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        name='isNotify'
                        label='Notification'
                        ref={this.notifyRef}
                        // onChange = {this.handleChange}
                    />
                </Form.Field>
                <Button.Group>
                    <Button
                        name='add-button'
                        color='green'
                        onClick={this.handleClick}
                    >Save</Button>
                    <Button
                        name='close-button'
                        color='red'
                        onClick={this.handleClick}
                    >Close</Button>
                </Button.Group>
            </Form>
        </div>
    )

    render() {
        const { isDisplay } = this.props.isDisplay;

        if (isDisplay) {
            return this.renderForm();
        }
        return'';
    }
}

export default FormInput;