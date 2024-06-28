import { useState } from 'react'
import viteLogo from '/vite.svg'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MarkdownEditor from "./components/MarkdownEditor.jsx";

function App() {


  return (
    <>
     <MarkdownEditor textView = {console.log}/>
    </>
  )
}

export default App
