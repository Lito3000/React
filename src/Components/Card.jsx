import React from "react";
class Card extends React.Component{
    render() {
        const {title} = this.props
        const {text} = this.props
        return <div className="card">
            <div className="card-body">
                <h4 className="card-title">hi</h4>
                <p className="card-text">how are you?</p>
            </div>
        </div>
    }
}
Card.defaultProps = {
    title:null,
    text:null
}
export default Card