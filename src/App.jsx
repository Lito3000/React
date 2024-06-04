import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import State from "./state/state.jsx";
import ListAdd from "./components/ListAdd.jsx";
import TodoBox from "./components/TodoBox.jsx";
import OtherFiles from "./Otherfiles/OtherFiles.jsx";
import OtherFiles2 from "./Otherfiles/OtherFiles2.jsx";
import AutoselectingInput from "./components/TodoBox.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <AutoselectingInput/>
        <OtherFiles2/>
        <OtherFiles/>
        <TodoBox/>
        <ListAdd/>
        <State/>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
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
