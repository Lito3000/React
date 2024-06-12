import React from "react";
import Modal from "./Modal.jsx";

const Dialog = (props) =>

    <div className="modal-dialog">

        <Modal.Content DialogJsx={props.AppJsx}></Modal.Content>
    </div>;
export default Dialog;