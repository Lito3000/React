import Header from './HeaderComponent.jsx'
import Body from "./BodyComponent.jsx";
import Footer from './FooterComponent.jsx'
import Content from './ContentComponent.jsx'
import Dialog from './DialogComponent.jsx'

import React from "react";


class Modal extends React.Component {
    state = {modal: false};

    static Header = Header;
    static Body = Body;
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
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                            <Modal.Body>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button"
                                        className="modal-close-button btn btn-secondary"
                                        onClick={this.toggle}>Cancel
                                </button>
                            </Modal.Footer>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Modal