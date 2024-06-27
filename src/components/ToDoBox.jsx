import {useState} from 'react';
import {cloneDeep, uniqueId} from 'lodash';

const HookComponent = (props) => {

    const [TodoBox, setTodoBox] = useState('');
    const [SaveData, setSaveData] = useState([]);

    // const handleClick = () => {
    //     setCount(count + 1)
    // }

    const handleChange = (event) => {
        const previousState = cloneDeep(TodoBox)
        setTodoBox(previousState)
        setTodoBox(event.target.value)
    }


    return (
        <div>
            <div className="mb-3">
                <form className="d-flex">
                    <div className="me-3">
                        <input
                            type="text"
                            name='TodoBox'
                            value={TodoBox}
                            required=""
                            className="form-control"
                            placeholder="I am going..."
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit"
                            className="btn btn-primary">add
                    </button>
                </form>
            </div>
            {/*{this.state.formData.saveData.map(item => this.renderFunction(item))}*/}
        </div>
    );
};

export default HookComponent;