import {Component} from 'react';


class TodoBox extends Component {
    render() {
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text"
                                   value=""
                                   required=""
                                   className="form-control"
                                   placeholder="I am going..."/>
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                {/*<div>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-auto">*/}
                {/*            <button type="button" className="btn btn-primary btn-sm">-</button>*/}
                {/*        </div>*/}
                {/*        <div className="col">second</div>*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-auto">*/}
                {/*            <button type="button" className="btn btn-primary btn-sm">-</button>*/}
                {/*        </div>*/}
                {/*        <div className="col">first</div>*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default TodoBox
//----------------------------------------------------------------------------------------------------------
// import { Component } from 'react';
// import { findDOMNode } from 'react-dom';
//
// class AutoselectingInput extends Component {
//     componentDidMount() {
//         const input = findDOMNode(this);
//         input.select()
//     }
//
//     render() {
//         return <input/>
//     }
// }
//
// export default AutoselectingInput;