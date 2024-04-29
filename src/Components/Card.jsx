import React from "react";

class Card extends React.Component {
    render() {
        const {data} = this.props

        return (
            <div className="card">
                <div className="card-body">
                    {<h4 key={data[0].id}>{data[0].title}</h4>}
                    {<p key={data[1].id}>{data[1].text}</p>}
                </div>
            </div>
        )
    }
}
Card.defaultProps = {
    data:null
}
export default Card