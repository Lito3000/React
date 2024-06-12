import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Modal from "./components/Modal.jsx";


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {modal: false};

    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }

    render() {
        return <div>
            <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <Modal.Dialog AppJsx = {this}/>
            </Modal>
        </div>
    }
}

export default App;
