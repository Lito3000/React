import React from "react";

class EventLog extends React.Component {

    render() {

        return (
            <div>
                <div className="btn-group font-monospace" role="group">
                    <button type="button" className="btn btn-outline-success">+</button>
                    <button type="button" className="btn btn-outline-danger">-</button>
                </div>
                <div className="list-group">
                    <button type="button" className="list-group-item list-group-item-action">2</button>
                    <button type="button" className="list-group-item list-group-item-action">1</button>
                    <button type="button" className="list-group-item list-group-item-action">2</button>
                    <button type="button" className="list-group-item list-group-item-action">1</button>
                </div>
            </div>
        )
    }
}

export  default EventLog