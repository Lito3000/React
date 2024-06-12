import React from "react";
import Modal from "./Modal.jsx";

const Content = (props) => <div className="modal-content">
    <Modal.Header ContentJsx={props.DialogJsx}/>
    <Modal.Body>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
    </Modal.Body>
    <Modal.Footer ContentJsx={props.DialogJsx}/>
</div>;
export default Content;