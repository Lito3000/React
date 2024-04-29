
import './App.css'
import Card from "./Components/Card.jsx";

function App() {
    const items = [
        {id: 1, name: 'hi'},
        {id: 2, name: 'how are you?'}
    ]

    return (
        <div className='App'>
            <Card data={items}/>
        </div>
    )
}

export default App
