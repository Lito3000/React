import {Component} from 'react';
import _, {cloneDeep} from 'lodash';
// import {random} from "lodash";
import {uniqueId} from 'lodash'

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                TodoBox: '',
                saveData: []
            },
        }
    }

    handleChange = (event) => {
        const previousState = cloneDeep(this.state.formData)
        previousState[event.target.name] = event.target.value
        this.setState({formData: previousState})
    }

    handleSabmit = () => (event) => {
        event.preventDefault()
        const oldState = _.cloneDeep(this.state)
        let arrComponent = []
        arrComponent.push({
            saveData: oldState.formData.TodoBox,
            idData: uniqueId('iddName')
        })
        let third = oldState.formData.saveData.concat(arrComponent);
        this.setState({
            formData: {
                TodoBox: '',
                saveData: third,
            },
        })
    }
    removeItem = (id) => (e) => {
        e.preventDefault();
        const oldState = _.cloneDeep(this.state.formData)
        const newItems = oldState.saveData.filter(function (item) {
            if (item.idData !== id) {
                return item
            }
        });
        console.log(newItems)
        this.setState({
            formData: {
                TodoBox: '',
                saveData: newItems
            }
        });
    };
    renderFunction = (item) => {
        return <div key={item.saveData + uniqueId('iddDiv')} className="row">
            <div className="col-auto">
                <button type="button"
                        onClick={this.removeItem(item.idData)}
                        className="btn btn-primary btn-sm">-
                </button>
            </div>
            <div className="col">{item.saveData}</div>
            <hr/>
        </div>
    }

    render() {
        const {TodoBox} = this.state.formData
        return (
            <div>
                <div className="mb-3">
                    <form className="d-flex">
                        <div className="me-3">
                            <input type="text"
                                   name='TodoBox'
                                   value={TodoBox}
                                   required=""
                                   className="form-control"
                                   placeholder="I am going..."
                                   onChange={this.handleChange}
                            />
                        </div>
                        <button type="submit" onClick={this.handleSabmit()}
                                className="btn btn-primary">add
                        </button>
                    </form>
                </div>
                {this.state.formData.saveData.map(item => this.renderFunction(item))}
            </div>
        );
    }
}

export default TodoBox
