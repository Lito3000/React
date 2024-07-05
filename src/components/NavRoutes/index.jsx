import './style.css'
import {
    Routes,
    Route,
} from "react-router-dom"


import SingleInvoice from "../routes/SingleInvoice";
import HomePage from "../routes/HomePage.jsx";


const NavRoutes = (prf) => {
    const {fr,dyte}=prf
    console.log(fr)
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="invoices/:invoiceId" element={<SingleInvoice copmId={fr} Data1={dyte}/>} />
    </Routes>
}


export default NavRoutes;