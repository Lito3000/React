import Header from './Header.jsx'
import Body1 from "./Body1.jsx";
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Dialog from './Dialog.jsx'
import Modal from "./Modal.jsx";
import React from "react";


class Component extends React.Component {
    state = {modal: false};
    static Modal = Modal
    static Header = Header;
    static Body1 = Body1;
    static Footer = Footer;
    static Content = Content;
    static Dialog = Dialog;

    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }


    render() {
        return (
            <div>
                <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body1>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-secondary"
                                onClick={this.toggle}>Cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Component