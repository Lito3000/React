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
        const formDataCopy = cloneDeep(formData)
        console.log(formDataCopy)

        this.setState({data: formDataCopy})
        console.log(this.state)
        console.log(this)
        return [this.state]
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