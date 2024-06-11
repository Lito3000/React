import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Modal from "./components/Modal.jsx";
import {ModalTitle} from "react-bootstrap";


function App() {
    return (
        <Modal>
            <Modal.Dialog>
                <Modal.Content>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal.Content>
            </Modal.Dialog>
        </Modal>
    );
}

export default App;
