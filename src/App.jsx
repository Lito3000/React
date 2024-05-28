import {useState} from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TodoBox from "./components/TodoBox.jsx";

function App() {
    const [count, setCount] = useState(0)
    console.log(useState(6))
    console.log(useState)
    console.dir(useState())
    console.dir(useState)
    console.log(setCount)
    console.dir(count)
    console.dir(setCount)
    console.log(count)
    console.log([count, setCount])
    console.dir([count, setCount])
const addButton = ()=>{
   // const [h,jk] =  setCount((cou) => cou + 1)//это параметры которые туда уходят
   //  console.log(h)
    console.log(setCount)
        return setCount(cou => cou + 1)
    }

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
                <button onClick={addButton}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default App
