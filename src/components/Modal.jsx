import Header from './Header.jsx'
import Body from "./Body.jsx";
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Dialog from './Dialog.jsx'
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
        return <div>
            <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
            <div className="modal">{this.props.children}</div>
        </div>
    }
}

export default Modal