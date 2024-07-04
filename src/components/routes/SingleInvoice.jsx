import { useParams } from "react-router-dom";
import {getInvoices} from '../data/Data.jsx';

const SingleInvoice = () => {

    let index = useParams().invoiceId;
    let invoice = getInvoices()[index];


    return <div className="col-8">
        <div className="row" id="todoItems">
            <div className="col-4">
                <div className="taskWrapper">
                    <div className="taskHeading">{invoice.idData}</div>
                    <div className="taskDescription">{invoice.saveData}</div>
                    <hr/>
                    <label className="completed form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <span>Завершено ?</span>
                    </label>
                    <hr/>
                    <button className="btn btn-danger delete-btn">Удалить</button>
                </div>
            </div>
        </div>
    </div>
}

export default SingleInvoice;