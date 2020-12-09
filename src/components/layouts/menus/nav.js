import React, { Component } from 'react'
import { Button, Dropdown, Menu, Input } from 'semantic-ui-react';
const { status } = require('../../../constants/status-options');

const statusOptions = [...status].map((st, index) => ({
    key: st.key,
    text: st.text,
    value: st.value
}));

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: null,
        }
    }
    

    handleClick = (e) => {
        this.props.onOpenForm();
    }

    handleSearchInput = (e, {name, value}) => {
        const { handleSearch } = this.props;

        this.setState({
            [name] : value
        });

        handleSearch(this.state);
    }

    render() {

        return (

            <Menu stackable size='small'>
                <Menu.Item>
                    <img src=''alt='Notes App' />
                </Menu.Item>
                <Menu.Item
                    name='messages'
                />

                <Menu.Item>
                    <Input className='icon' name='name' icon='search' placeholder='Search...' onChange = {this.handleSearchInput} />
                </Menu.Item>

                <Menu.Item>
                    <Dropdown
                        name='status'
                        placeholder='Filter'
                        selection
                        onChange = {this.handleSearchInput}
                        options={statusOptions}
                    />
                </Menu.Item>

                <Menu.Item>
                    <Button
                        basic color='green'
                        onClick = {this.handleClick}    
                    >
                        Add your job
                    </Button>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item>
                        <Button basic color='red'>Logout</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}