// import SingleInvoice from "../routes/SingleInvoice.jsx";
// import Nav from "../Nav/index.jsx";
// import {useLocation} from "react-router-dom";
// import {useContext} from "react";
import Nav from '../Nav/index.jsx'

// SaveData
let invoices = [
    {
        name: "Santa Monica",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995",
    },
    {
        name: "Stankonia",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000",
    },
    {
        name: "Ocean Avenue",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003",
    },
    {
        name: "Tubthumper",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997",
    },
    {
        name: "Wide Open Spaces",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998",
    },
];
// eslint-disable-next-line react-hooks/rules-of-hooks
// const location = useContext();
// const { SaveData } = location.state
// const Data = (prkk) => {
//
//     const {}
//
// }
// const DataComponent = (pj) => {
//     const {SaveData} = Nav.funId
//   const {idDataComponent,setSaveData1}=pj
//     return (
//         <SingleInvoice copmId = {idDataComponent} data1={setSaveData1} dId ={SaveData}/>
//     )
// }
//
// export default DataComponent

export function getInvoices() {
    return Nav.funId
}
//-------------------------------------------------------------------------------------
// import './style.css'
//
// /*  Добавляем ссылки */
// import {Link} from "react-router-dom";
// import {getInvoices} from "../data/Data";
//
// const Nav = () => {
//     let invoices = getInvoices();
//
//     return <div>
//         <nav className='navigation-example'>
//             <Link to="/">Home Page</Link>
//             <Link to="/uuiooio">uuhiuoi</Link>
//             <Link to="/expenses">Expenses</Link>
//
//             <Link to="/invoices">Invoices</Link> |
//             {invoices.map((invoice, index) => (
//                 <Link
//                     to={`/invoices/${index}`}
//                     key={invoice.number}
//                 >
//                     {invoice.name}
//                 </Link>
//             ))}
//         </nav>
//     </div>
// }
// export default Nav;