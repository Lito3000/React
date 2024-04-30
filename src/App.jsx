import Definitions from "./components/Definitions.jsx";

function App() {
    const items = [
        {id: 1, title: 'one'},
        {id: 2, title: 'two'},
        {id: 3, title: 'another term'},
        {id: 4, title: 'another description'},
    ]

    return (
        <div className='App'>
            <Definitions text={items}/>
        </div>
    )
}

export default App
