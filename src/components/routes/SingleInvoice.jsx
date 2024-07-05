// import _, {uniqueId} from "lodash";
import {useParams} from "react-router-dom";
// import {c} from "vite/dist/node/types.d-aGj9QkWt.js";
import {getInvoices} from '../data/DataComponent.jsx';
// import _, {uniqueId} from "lodash";

const SingleInvoice = (prop) => {

    let index = useParams().invoiceId;
    const {dataAfg, DataSave11} = prop
    console.log(dataAfg)

    // const x34 = (c) => {
    //   const fn = c
    //     return function () {
    //         return fn
    //     }
    //
    // }
    // isShown ? 'hide' : 'show'
    //
    if (useParams().invoiceId === undefined) {
        return
    }
    // let newFun =x34(copmId)
    // newFun  = getInvoices()
    let invoice = getInvoices()[index];
    let arr = []
    arr.push(invoice)

    const removeItem = (id) => (e) => {
        e.preventDefault();

        const newItems = arr.filter(function (item) {
            if (item.idData !== id) {
                return item
            }
        });
        Data1(newItems)
    };
    // return <div>
    //     <h2>Invoice: {invoice.idData}</h2>
    //     <ul>
    //         <li>name: {invoice.saveData},</li>
    //         {/*<li> number: {invoice.number},</li>*/}
    //         {/*<li>amount: {invoice.amount},</li>*/}
    //         {/*<li>due: {invoice.due},</li>*/}
    //     </ul>
    // </div>;
    return <div>
        <div className="col-8">
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
                        <button className="btn btn-danger delete-btn" onClick={removeItem(invoice.idData)}>Удалить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SingleInvoice;