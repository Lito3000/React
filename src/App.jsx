import {useState} from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Card from "./components/Card";


function App() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Text</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default App;
