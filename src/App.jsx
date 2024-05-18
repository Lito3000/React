import Carousel from "./components/Carousel";
import featured1 from '/nature1.jpg'
import featured2 from '/nature2.jpg'
import featured3 from '/nature3.jpg'
import featured4 from '/nature4.jpg'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    const img =[featured1,featured2,featured3,featured4]


    return (
        <Carousel item={img}/>
    );
}

export default App;
