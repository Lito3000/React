import './style.css'
import {
    Routes,
    Route,
} from "react-router-dom"


import SingleInvoice from "../routes/SingleInvoice";


const NavRoutes = () => {
    return <Routes>
        <Route path="invoices/:invoiceId" element={<SingleInvoice />} />
    </Routes>
}


export default NavRoutes;