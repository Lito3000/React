import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EventLog from "./Component/EventLog.jsx";
import CollapseList from "./Component/CollapseList.jsx";
import ListAdd from "./Component/ListAdd.jsx";
import Buttons from "./Component/Buttons.jsx";

function App() {
  // const [count, setCount] = useState(0)
  //   const text = 'collapse me';
  return (

    <>
        {/*<Buttons/>*/}
        <ListAdd/>
        {/*<CollapseList text={text} opened={false}/>*/}
        {/*<EventLog/>*/}
      {/*<div>*/}
      {/*  <a href="https://vitejs.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      {/*<h1>Vite + React</h1>*/}
      {/*<div className="card">*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  </button>*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.jsx</code> and save to test HMR*/}
      {/*  </p>*/}
      {/*</div>*/}
    </>
  )
}

export default App
