import {useState} from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TodoBox from "./components/TodoBox.jsx";

function App() {
    const [count, setCount] = useState(0)
    console.log(useState(6))
    console.log(useState)
    console.dir(useState(0))
    console.dir([count, setCount])
    console.dir(useState)
    console.log(setCount)
    console.dir(count)
    console.dir(setCount)
    console.log(count)
    console.log([count, setCount])

    const addButton = () => {

        return setCount(cou => cou + 1)
    }

    const div = (p) => {

        return [p,(value) =>{
          p = value(p)
            return value(p)
        }]
    }
    const [numb,func] = div(6)

    const ggf = () => {
        return func(numb  => numb + 1)

    }
    console.log(div(1));
    console.log([numb,func])
    console.log(ggf());
    console.log(ggf());
    const func5 = (map) => {
        return map(2)
    }
    const ggf5 = () => {
        return func5(cou  => cou + 1)
    }
    console.log(ggf5());
    return (
        <>
            {/*<TodoBox/>*/}
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => (func(numb => numb + 1))}>jog</button>
                    <button onClick={addButton}>
                        count is {numb}
                    </button>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test HMR
                    </p>
            </div>
        </>
)
}

export default App