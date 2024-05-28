import React, {Component} from 'react';
import {cloneDeep} from 'lodash'
import {Button, Form} from "react-bootstrap";

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: ''
            }
        }

    }


    handleChange = (event) => {
        const previousState = cloneDeep(this.state.formData)
        previousState[event.target.name] = event.target.value
        // console.log(ev.target)
        // console.log(ev.target.name)
        console.log(this.state.formData.email)
        this.setState({formData:previousState})
    }

    handleSabmit=(event)=>{
        event.preventDefault()
    }

    render() {
        const {email,password} = this.state.formData
        return (
            <Form>
                <h1 className='text-center'>Form</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name='email'
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name='password'
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button type = 'submit' onClick={this.handleSabmit}>Submit</Button>
            </Form>
        );
    }
}

export default MyForm