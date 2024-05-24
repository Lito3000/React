import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Collapse from './Collapse/Collapse.jsx'

function App() {
    const text = 'collapse me';
    return (
        <Collapse text={text} opened={false}/>
    )
}

export default App
