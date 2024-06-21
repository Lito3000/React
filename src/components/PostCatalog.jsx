import {Component} from 'react';
import {uniqueId} from "lodash";


class PostCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oneHundredUserPieces: [],
            UIShowTable: false,
            errResp: ''
        };
    }
   componentDidMount() {

        const p = new Promise(function (resolve, reject) {
            setTimeout(() => {
                    console.log('Preparing data....')
                    const API = 'https://jsonplaceholder.typicode.com/posts'
                    let request = fetch(API)
                    resolve(request)
                }
                , 2000)
        })
        p
            .then((data) => {
                console.log('Promise resolved', data)
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        data.modified = true
                        resolve(data.json())
                    }, 2000)
                })
            })
            .then(clientData => {
                console.log('Data recived', clientData)
                this.setState({oneHundredUserPieces: clientData})
            })
            .catch(() => {
                return this.setState({UIShowTable: false, errResp: 'err'})
            })
    }
    renderItem = (elem) => {
        return (
            <div key={uniqueId()} className="posts">
                <ul className="posts__list">
                    <li className="posts_single-post" data-post-id={elem.id}>
                        <h3 className="posts__post-title">{elem.title}</h3>
                        <p className="posts__post-description">{elem.body}</p>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        const {oneHundredUserPieces, errResp} = this.state;
        return (
            <div>
                {!this.state.UIShowTable && <div>{errResp}</div>}
                {!this.state.UIShowTable && oneHundredUserPieces.map(item => this.renderItem(item))}
            </div>
        );
    }
}

export default PostCatalog