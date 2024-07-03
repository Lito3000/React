import Nav from './components/Nav/index.jsx'
import NavRoutes from './components/NavRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
            <Nav/>
            <hr/>
            <NavRoutes/>
        </div>
    )
}