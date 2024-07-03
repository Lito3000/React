import { useParams } from "react-router-dom";
import {getInvoices} from '../data/Data';

const SingleInvoice = () => {
    console.log(useParams())
    console.log(useParams)
    console.dir(useParams)
    function f() {
        return {ert:8}
    }
    const ew =f()["ert"]
    console.log(ew)
    console.log({invoiceId: '7'}["invoiceId"])

    let index = useParams().invoiceId;
    let invoice = getInvoices()[index];


    return <div>
        <h2>Invoice: {invoice.name}</h2>
        <ul>
            <li>name: {invoice.name},</li>
            <li> number: {invoice.number},</li>
            <li>amount: {invoice.amount},</li>
            <li>due: {invoice.due},</li>
        </ul>
    </div>;
}

export default SingleInvoice;