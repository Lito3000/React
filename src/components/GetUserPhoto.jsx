import {Component} from "react";
import axios from "axios";
import _, {uniqueId} from 'lodash'

class GetUserPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneHundredUserPieces: [],
            urlPhotos: [],
        };
    }

    handleClickAlbums = async () => {
        const user100Pieces = await axios.get('https://jsonplaceholder.typicode.com/albums');
        this.setState({
            oneHundredUserPieces: user100Pieces.data,
        });
    }
    handleButton = (id) => async (e) => {
        e.preventDefault();
        const resPhotos = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
        this.setState({
            urlPhotos: resPhotos.data,
        });
    }

    renderItem = (elem) => {
        return (
            <div className="container">
                <div className="row align-items-start">
                    <button key={uniqueId()} onClick={this.handleButton(elem.id)}>{elem.title}</button>
                </div>
            </div>
        )
    }

    render() {
        const {oneHundredUserPieces, urlPhotos} = this.state;
        return (
            <div>
                <button className="list-group" onClick={this.handleClickAlbums}>Load Random Image</button>
                {oneHundredUserPieces.map(item => this.renderItem(item))}
                {urlPhotos.map(i => <img key={uniqueId()} src={i.url}/>)}
            </div>

        );
    }
}

export default GetUserPhoto;
