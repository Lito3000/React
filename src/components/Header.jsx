import Title from "./Title.jsx";
import Modal from "./Modal.jsx";
import React from "react";

const Header = (props) =>

    <div className="modal-header">
        <Modal.Title>Modal title</Modal.Title>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
    </div>
;

export default Header;