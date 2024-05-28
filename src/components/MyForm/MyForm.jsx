import React, {Component} from 'react';
import {cloneDeep} from 'lodash'
import {Button, Form} from "react-bootstrap";
import Input from "../UI/Input";


const formInitialValue = {
    email: '',
    password: '',
    address: ''
}

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {...formInitialValue}
        }
    }


    handleChange = (event) => {
        const previousState = cloneDeep(this.state.formData)
        previousState[event.target.name] = event.target.value
        // console.log(ev.target)
        // console.log(ev.target.name)
        console.log(this.state.formData.email)
        this.setState({formData: previousState})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.formData)
        this.setState({formData: {...formInitialValue}})
    }

    render() {
        const {email, password, address} = this.state.formData
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1 className='text-center'>Form</h1>
                <Input
                    label='Email address'
                    name='email'
                    onchange={this.handleChange}
                    value={email}
                    type='email'
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        as='textarea'
                        name='address'
                        type="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

export default MyForm