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
        this.state = {
            id: null,
            name: null,
            status: '0',
            from: this.getDefaultStateDateTime(),
            to: this.getDefaultStateDateTime(),
            isNotify: null
        }
    }

    handleChange = (e, { name, value, checked }) => {
        
        if (checked !== undefined) {
            this.setState({
                [name] : checked
            })
            return;
        }

        this.setState({
            [name]: value
        })

    }           

    static getDerivedStateFromProps = (props, state) => {

        const { stateForm: { task } } = props;

        if (state.id === null) {
            return {
                ...task || null
            }
        }
    }

    handleClick = (e) => {

        const { saveTask, closeForm } = this.props;

        if (e.target.name === 'save-button') {
            
            saveTask({
                ...this.state
            });

        }

        this.setState({
            id: null,
            name: null,
            status: '0',
            from: this.getDefaultStateDateTime(),
            to: this.getDefaultStateDateTime(),
            isNotify: null
        });        

        closeForm();

    }

    getDefaultStateDateTime = () => {
        const date = new Date();
        return (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
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
                        onChange={this.handleChange}
                    />

                </Form.Field>
                <Form.Field>
                    <Label className='mb-2'>Status</Label>
                    <Dropdown
                        placeholder='Status'
                        selection
                        name='status'
                        onChange={this.handleChange}
                        value={status}  
                        options={statusOptions} 
                    />
                </Form.Field>
                <Form.Field>
                    <Label className='mb-2'>From</Label>
                    <DateTimeInput
                        name="from"
                        placeholder="From"
                        value={from}
                        iconPosition="left"
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
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        checked={isNotify}
                        name='isNotify'
                        label='Notification'
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