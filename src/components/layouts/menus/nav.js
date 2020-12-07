import React, { Component } from 'react'
import { Button, Dropdown, Menu, Input } from 'semantic-ui-react';
const { status } = require('../../../constants/status-options');

const statusOptions = [...status].map((st, index) => ({
    key: st.key,
    text: st.text,
    value: st.value
}));

export default class Nav extends Component {

    handleClick = (e) => {
        this.props.onOpenForm();
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
                    <Input className='icon' icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Item>
                    <Dropdown
                        placeholder='Filter'
                        selection
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