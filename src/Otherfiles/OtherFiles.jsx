// import React, {Component} from 'react';
// import {cloneDeep} from 'lodash'
// import {Button, Form} from "react-bootstrap";
//
// class OtherFiles extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             formData: {
//                 email: '',
//                 password: '',
//                 ToDoList:''
//             }
//         }
//
//     }
//
//
//     handleChange = (event) => {
//         const previousState = cloneDeep(this.state.formData)
//         previousState[event.target.name] = event.target.value
//         // console.log(ev.target)
//         // console.log(ev.target.name)
//         console.log(this.state.formData.email)
//         this.setState({formData:previousState})
//     }
//
//     handleSabmit=(event)=>{
//         event.preventDefault()
//     }
//
//     render() {
//         const {ToDoList} = this.state.formData
//         return (
//             <Form>
//                 <h1 className='text-center'>ToDoList</h1>
//                 <Form.Group className="mb-3" controlId="formBasicAddress">
//                     <Form.Label>ToDoList</Form.Label>
//                     <Form.Control
//                         as='textarea'
//                         name='ToDoList'
//                         type="ToDoList"
//                         placeholder="Enter text"
//                         value={ToDoList}
//                         onChange={this.handleChange}
//                         autoComplete="off"
//                     />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>
//
//                 <Button type = 'submit' onClick={this.handleSabmit}>Submit</Button>
//             </Form>
//         );
//     }
// }
//
// export default OtherFiles