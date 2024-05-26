import React from "react";
import _ from 'lodash'


class ListAdd extends React.Component {
    constructor(props) {
        super(props);
        const count2 = []
        this.state = {count2}
    }

    removeItem = (id) => (e) => {
        e.preventDefault();
        const oldState = _.cloneDeep(this.state)
        const newItems = oldState.count2.filter(function (item) {
            if (item.map1 !== id) {
                return item
            }
        });
        console.log(newItems)
        this.setState({count2: newItems});
    };

    buttonAddManus = (mic) => (e) => {
        const oldState = _.cloneDeep(this.state)
        if (oldState.count2.length === 0) {
            return
        }
        const newItems = oldState.count2.filter(function (item, i) {
            if (mic.length - 1 !== i) {
                return item
            }
        });
        console.log(newItems)

        this.setState({count2: newItems})
    }
    addItem = (mic) => (e) => {
        e.preventDefault();
        if (mic.length === 0) {
            const fid = (map) => ([map])
            const y = fid({map1: 1});
            console.log(y)

            this.setState({count2: y})
        } else {
            const oldState = _.cloneDeep(this.state)
            const newIte = oldState.count2.reduce(function (acc, item) {
                item = {map1: item.map1 + 1}
                return item
            }, {});

            let third = oldState.count2.concat(newIte);
            this.setState({count2: third})
        }
    }
    render() {
        return (<ul>
            <div className="btn-group font-monospace" role="group">
                <button type="button" onClick={this.addItem(this.state.count2)} className="btn btn-outline-success">+
                </button>
                <button type="button" onClick={this.buttonAddManus(this.state.count2)}
                        className="btn btn-outline-danger">-
                </button>
            </div>
            {this.state.count2.map((item) => <div key={item.map1} className="list-group">
                    <button type="button" onClick={this.removeItem(item.map1)} key={item.map1}
                            className="list-group-item list-group-item-action">{item.map1}</button>
                </div>
            )}
        </ul>);
    }
}

export default ListAdd;