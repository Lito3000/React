import {Component} from "react";

class Collapse extends Component {
    constructor(props) {
        super(props);
        this.state = {isShown: false}
    }

    toggleText = () => {
        const {isShown} = this.state;
        this.setState({isShown: !isShown})
    }

    render() {
        const {isShown} = this.state;
        return (
            <div>
                <p>
                    <a className="btn btn-primary" onClick={this.toggleText} data-bs-toggle="collapse" href="#"
                       role="button"
                       aria-expanded={isShown}>Link with href</a>
                </p>
                <div className={isShown ? 'collapse' : 'collapse show'}>
                    <div className="card card-body">
                        collapse me
                    </div>
                </div>
            </div>
        )
    }
}

export default Collapse