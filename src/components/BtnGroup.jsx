import {Component} from "react";
import cn from 'classnames'


class BtnGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: false
        }
    }

    changeClass = () => {
        this.setState(({first})=>({first:!first ,active:first}))
    }


    render() {
        const btnClass = cn(
            'btn', this.state.first ? 'btn-danger' : 'btn-secondary',
        )
        const btnClass2 = cn(
            'btn', this.state.active ? 'btn-warning' : 'btn-secondary',
        )
        return (
        <div className="btn-group" role="group" >
            <button type="button" className={btnClass} onClick={this.changeClass}>Left</button>
            <button type="button" className={btnClass2} onClick={this.changeClass}>Middle</button>
        </div>
        )
    }
}

export default BtnGroup