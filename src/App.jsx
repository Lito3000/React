
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MarkdownEditor from "./components/MarkdownEditor.jsx";

function App() {


  return (
    <>
        <MarkdownEditor onContentChange={console.log} />

    </>
  )
}

export default App
