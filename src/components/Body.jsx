import PropTypes from "prop-types";

const Body = (props) => <div className="modal-body">{props.children}</div>;

Body.protoTypes = {
    children: PropTypes.node.isRequired
}
export default Body;

