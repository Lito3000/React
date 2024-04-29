import React from "react";

class Card extends React.Component {
    render() {
        const {data} = this.props

        return (
            <div className="card">
                <div className="card-body">
                    {<h4 key={data[0].id}>{data[0].name}</h4>}
                    {<p key={data[1].id}>{data[1].name}</p>}
                    {/*{data.map(item => <h4 key={item.id}>{item.name}</h4>)}*/}
                </div>
            </div>
        )
    }
}

export default Card