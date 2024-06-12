import HeaderModal from './Header.jsx'
import BodyModal from "./Body.jsx";
import Footer from './Footer.jsx'
import ContentModal from './Content.jsx'
import DialogModal from './Dialog.jsx'
import TitleModal from "./Title.jsx"
import PropTypes from "prop-types";
import React from "react";


class Modal extends React.Component {
    static Header = HeaderModal;
    static Body = BodyModal;
    static Footer = Footer;
    static Content = ContentModal;
    static Dialog = DialogModal;
    static Title = TitleModal;


    render() {
        const {isOpen, children} = this.props

        return (
            <div className={`modal ${isOpen ? 'fade show' : ''}`} style={{display: isOpen ? 'block' : 'none'}}
                 role='dialog'>
                {children}
            </div>
        )
    }
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}
export default Modal