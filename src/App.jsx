import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MyForm from "./components/MyForm";
import {Container} from "react-bootstrap";
import {cloneDeep} from "lodash";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    onSubmitHandler = (formData) => {
        const formDataCopy = cloneDeep(formData)//здесь без const onSubmitHandler является переменной для MyForm onSubmit
        console.log(formDataCopy)//onSubmit здесь ключ:(formData) => {} ,(formData) => {}значение
        //                                    {onSubmit:(formData) => {}}
        this.setState({data: formDataCopy})
        return [this.state]//onSubmit={this.onSubmitHandler} === this.props.onSubmit(formData)
    }

    render() {
        return (
            <Container>
                <MyForm onSubmit={this.onSubmitHandler}/>
            </Container>
        )
    }


}

export default App