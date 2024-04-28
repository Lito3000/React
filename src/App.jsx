import Hello from './components/Hello';
import FuncComponent from './components/FuncComponent'
import Card from "./components/Card.jsx";


function App() {

    return (
        <div className='App'>
            <Hello/>
            <FuncComponent name = {'Viva' + 11}/>
            <Card/>
        </div>
    )
}
export default App
