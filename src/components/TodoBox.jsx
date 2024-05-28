import {Component} from "react";

class TodoBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text" value="" required="" className="form-control"
                                   placeholder="I am going..."/>
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    <div className="row">
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary btn-sm">-</button>
                        </div>
                        <div className="col">second</div>
                    </div>
                    <hr/>
                </div>
                <div>
                    <div className="row">
                        <div className="col-auto">
                            <button type="button" className="btn btn-primary btn-sm">-</button>
                        </div>
                        <div className="col">first</div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }
}


export default TodoBox