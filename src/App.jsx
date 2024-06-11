// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Modal from "./components/Modal.jsx";


function App() {
    return (
        <Modal>
            <Modal.Dialog>
                <Modal.Content>
                    <Modal.Header>Modal title</Modal.Header>
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
