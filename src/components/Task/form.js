import React from 'react';
import { Button, Checkbox, Form, Dropdown, Input, Label } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
const { status } = require('../../constants/status-options');

const statusOptions = [...status].map(st => ({
    key: st.key,
    text: st.text,
    value: st.value
}));

class FormInput extends React.Component {

    constructor (props) {
        super(props);
        // this.state = {
        //     id: null,
        //     name: null,
        //     status: null,
        //     from: null,
        //     to: null,
        //     isDisplay: false
        // }
        this.jobNameRef = React.createRef();
        this.jobStatusRef = React.createRef();
        this.timeFromRef = React.createRef();
        this.timeToRef = React.createRef();
        this.notifyRef = React.createRef();
    }

    handleChange = (e, { name, value }) => {
        // this.setState(state => {
        //     return {
        //         [name]: value
        //     }
        // })
    }           

    static getDerivedStateFromProps = (props, state) => {
        const { stateForm: { task } } = props;
        return {
            ...task || null
        }
    }

    handleClick = (e) => {

        const { stateForm:{ task }, saveTask, closeForm } = this.props;

        if (e.target.name === 'save-button') {
            console.log(this.jobNameRef.current.value);
            saveTask({
                id: task === undefined ? null : task.id,
                name: this.jobNameRef.current.value,
                status: this.jobStatusRef.current.state.selectedIndex,
                from: this.timeFromRef.current.props.value,
                to: this.timeToRef.current.props.value,
                isNotify: this.notifyRef.current.state.checked
            });
            
        }
        closeForm();

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

    renderForm = ({id, name, status, from, to, isNotify}) => (
        
        <div className="form-input">
            <Form>
                <Form.Field>
                    <Label className='mb-2'>Job name</Label>
                    <Input
                        value={name}
                        name='name'
                        placeholder='Enter your job...'
                        ref={this.jobNameRef}
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Label className='mb-2'>Status</Label>
                    <Dropdown
                        placeholder='Status'
                        selection
                        search
                        name='status'
                        value={status}  
                        options={statusOptions} 
                        ref={this.jobStatusRef}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label className='mb-2'>From</Label>
                    <DateTimeInput
                        name="from"
                        placeholder="From"
                        value={from}
                        iconPosition="left"
                        ref={this.timeFromRef}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Label className='mb-2'>To</Label>
                    <DateTimeInput
                        name="to"
                        placeholder="To"
                        value={to}
                        iconPosition="left"
                        ref={this.timeToRef}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        checked={isNotify}
                        name='isNotify'
                        label='Notification'
                        ref={this.notifyRef}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button.Group>
                    <Button
                        name='save-button'
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
            const { stateForm: { isDisplay } } = this.props;
        
        if (isDisplay) {
            return this.renderForm(this.state);
        }
        return'';
    }
}

export default FormInput;