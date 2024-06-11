import Header from './Header.jsx'
import Body from "./Body.jsx";
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import Dialog from './Dialog.jsx'
import Title from "./Title.jsx";
import React from "react";
import style from "classnames";


class Modal extends React.Component {
    state = {modal: false};

    static Header = Header;
    static Body = Body;
    static Footer = Footer;
    static Content = Content;
    static Dialog = Dialog;
    static Title = Title;

    toggle = (e) => {
        this.setState({
            modal: !this.state.modal,
        });
    }


    render() {
        const styleClass = style([
            this.state.modal ? 'display: none' : 'display: block'
        ]);
        return <div>
            <button type="button" className="modal-open-button btn btn-danger" onClick={this.toggle}>Open</button>
            <div className="modal" style={styleClass}>
                <Modal.Dialog>

                </Modal.Dialog>
            </div>
        </div>
    }
}

export default Modal