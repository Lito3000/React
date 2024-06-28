import React, {useState} from 'react';
import _, {uniqueId} from 'lodash';
import InputTodoBox from "./InputTodoBox.jsx";

const HookComponent = () => {

    const [TodoBox, setTodoBox] = useState('');
    const [SaveData, setSaveData] = useState([]);
    const handleChange = (event) => {
        setTodoBox(event.target.value)
    }

    const handleSabmit = () => (event) => {
        event.preventDefault()
        const oldState = _.cloneDeep(TodoBox)
        const todoData = _.cloneDeep(SaveData)
        let arrComponent = []
        arrComponent.push({
            saveData: oldState,
            idData: uniqueId('iddName')
        })
        let third = todoData.concat(arrComponent);
        setSaveData(third)
        setTodoBox('')
    }
    const removeItem = (id) => (e) => {
        e.preventDefault();
        const todoData = _.cloneDeep(SaveData)
        const newItems = todoData.filter(function (item) {
            if (item.idData !== id) {
                return item
            }
        });
        setSaveData(newItems)
    };
    const renderFunction = (item) => {
        return <div key={item.saveData + uniqueId('iddDiv')} className="row">
            <div className="col-auto">
                <button type="button"
                        onClick={removeItem(item.idData)}
                        className="btn btn-primary btn-sm">-
                </button>
            </div>
            <div className="col">{item.saveData}</div>
            <hr/>
        </div>
    }

    return (
        <div>
            <InputTodoBox Change={handleChange} Click={handleSabmit} value={TodoBox}/>
            {SaveData.map(item => renderFunction(item))}
        </div>
    );
};

export default HookComponent;