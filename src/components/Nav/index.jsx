import './style.css'


/*  Добавляем ссылки */
import {Link} from "react-router-dom";
import {useState} from "react";
import {uniqueId} from "lodash";
// import {getInvoices} from "../data/Data";

const Nav = () => {


    const [TodoBox, setTodoBox] = useState('');
    const [SaveData, setSaveData] = useState([]);
    Nav.funId = SaveData

    // const x1 = () => {
    //   return SaveData
    // }
    const handleChange = (event) => {
        setTodoBox(event.target.value)
    }

    const handleSabmit = (e) => {
        e.preventDefault();
        if (TodoBox.trim() !== '') {
            const newData = {
                idData: uniqueId(),
                saveData: TodoBox
            };
            setSaveData([newData, ...SaveData]);
            setTodoBox('');
        }
    };
    return <div className="container">
        <div className="row">
            <div className="col-4">
                <form id="todoForm">
                    <div className="mb-3">
                        <label className="form-label">Task title</label>
                        <input type="text"
                               name='TodoBox'
                               className="form-control"
                               placeholder="Title"
                               required=""
                               onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Task body</label>
                        <textarea name="description" className="form-control" placeholder="Task body" cols="30"
                                  rows="10" required=""></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <input type="submit"
                                   className="btn btn-primary"
                                   value="Create Task!"
                                   onClick={handleSabmit}
                            />
                            <input type="reset" value="Очистить" className="btn btn-warning"/>
                        </div>
                        <button type="button" className="btn btn-danger remove-all">Удалить все</button>
                    </div>
                </form>
            </div>

            <nav className='navigation-example'>
                {SaveData.map((invoice, index) => (
                    <Link
                        to={`/invoices/${index}`}
                        key={invoice.saveData}
                    >
                        {invoice.saveData}
                    </Link>
                ))}
            </nav>
        </div>
    </div>
}
export default Nav;

