import {Component} from 'react';
import {cloneDeep} from 'lodash'
import {Button, Form} from "react-bootstrap";
import Input from "../UI/Input";
import PropTypes from "prop-types";


const formInitialValue = {
    email: '',
    password: '',
    address: '',
    city: '',
    country: '',
    rules: 'off'
}

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData:
                {...formInitialValue}
        }
        // this.fields = [
        //     {
        //         label: 'Email address',
        //         name: 'email',
        //         type: 'email'
        //     },
        //     {
        //         label: 'Password',
        //         name: 'password',
        //         type: 'password'
        //     },
        //     {
        //         label: 'Address',
        //         name: 'address',
        //         type: 'text'
        //     },
        // ]
    }


    handleChange = (event) => {
        const previousState = cloneDeep(this.state.formData)
        if (event.target.name === 'rules') {
            if (previousState[event.target.name] === 'on') {
                previousState[event.target.name] = 'off'
            } else {
                previousState[event.target.name] = 'on'
            }
        } else {
            previousState[event.target.name] = event.target.value
        }
        // console.log(ev.target)
        // console.log(ev.target.name)
        console.log(this.state.formData.email)
        this.setState({formData: previousState})
    }

    handleSubmit = (event) => {
        console.log(this.state.formData)
        const g = this.props.onSubmit
        const [data] = g({7: 'u'})
        console.log(data)
        const k = [6, 8, 5]
        const b = k.map
        const f = b((iy) => ({iy}))
        console.log(f)
        event.preventDefault()
        this.props.onSubmit(this.state.formData)
        this.setState({formData: {...formInitialValue}})
    }

    render() {
        const {email, password, address, city, country} = this.state.formData
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1 className='text-center'>Form</h1>
                {/*                {this.fields.map(input=>{*/}
                {/*                    const value = this.state.formData[input.name]*/}
                {/*                    console.log(value)*/}
                {/*return <Input*/}
                {/*    key={random(0,100)}*/}
                {/*                        label={input.label}*/}
                {/*                        name={input.name}*/}
                {/*                        onchange={this.handleChange}*/}
                {/*                        value={this.state.formData[input.name]}*/}
                {/*                        type={input.type}*/}
                {/*                    />*/}
                {/*                })}*/}
                <Input
                    label='Email address'
                    name='email'
                    onchange={this.handleChange}
                    value={email}
                    type='email'
                />
                <Input
                    label='Password'
                    name='password'
                    onchange={this.handleChange}
                    value={password}
                    type='password'
                />
                <Input
                    label='Address'
                    name='address'
                    onchange={this.handleChange}
                    value={address}
                    as='textarea'
                />
                <Input
                    label='City'
                    name='city'
                    onchange={this.handleChange}
                    value={city}
                />
                <Form.Select className="mb-3"
                             aria-label="Default select example"
                             name='country'
                             onChange={this.handleChange}
                             value={country}
                >
                    <option>Open this select menu</option>
                    <option value="argentina">Argentina</option>
                    <option value="ukraine">Ukraine</option>
                    <option value="china">China</option>
                </Form.Select>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Check this switch"
                    name='rules'
                    onClick={this.handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        );
    }
}

MyForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
export default MyForm