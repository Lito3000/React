// import React from 'react';
// import {Form} from "react-bootstrap";
// import {random} from "lodash";
// import PropTypes from "prop-types";
//
// const Input = ({name,type,placeholder,value,onchange,label}) => {
//     const controlId = 'form-input- + ' + random(0, 1000)
//     return (
//         <Form.Group className="mb-3" controlId={controlId}>
//             {label && <Form.Label>{label}</Form.Label>}
//             <Form.Control
//                 name={name}
//                 type={type}
//                 placeholder={placeholder}
//                 value={value}
//                 onChange={onchange}
//                 autoComplete="off"
//             />
//             <Form.Text className="text-muted">
//                 We'll never share your email with anyone else.
//             </Form.Text>
//         </Form.Group>
//     );
// };
// // Input.defaultprops = {
// //     label: null,
// //     name:'',
// //     type:'text1',
// //     placeholder:'Put your data here type',
// //     value:'',
// //     onchange:(e)=>{
// //         console.log(e.target.value)
// //     }
// // }
// Input.propTypes ={
//     label: PropTypes.string,
//     placeholder: PropTypes.string,
//     value: PropTypes.string.isRequired,
//     onchange: PropTypes.func.isRequired,
//     name: PropTypes.string.isRequired,
//     type: PropTypes.oneOf(['text','number','password','email']),
// }
// export default Input;