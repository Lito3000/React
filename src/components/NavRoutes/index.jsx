import './style.css'

/* Настраиваем маршрутизатор */
import {
    Routes,
    Route,
} from "react-router-dom"

/*  Добавляем роуты */

import HomePage from "../routes/HomePage";
import Invoices from "../routes/Invoices";
import Expenses from "../routes/Expenses";
import SingleInvoice from "../routes/SingleInvoice";


const NavRoutes = () => {
    return <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="invoices" element={<Invoices />} />

        {/* принимаем динамический параметр */}
        <Route path="invoices/:invoiceId" element={<SingleInvoice />} />

        <Route path="expenses" element={<Expenses />} />

        <Route
            path="*"
            element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
            }
        />
    </Routes>
}


export default NavRoutes;