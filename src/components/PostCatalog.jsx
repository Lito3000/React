import {Component} from 'react';
import {uniqueId} from "lodash";
import axios from "axios";


class PostCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oneHundredUserPieces: [],
            UIShowTable:false,
            errResp:''
        };
    }


    // async componentDidMount() {
    //     const res = await axios('https://jsonplaceholder.typicode.com/posts')
    //
    //     console.log(res)
    //     this.setState({oneHundredUserPieces: res.data});
    // }
    insertData = async () => {
        const API = 'htts://jsonplaceholder.typicode.com/posts'
        let request  = fetch(API)
        console.log(request)
        request
            .catch(err => this.setState({UIShowTable:false,errResp:err}))
            .then(response=> response.json())
            .then( data => this.setState({oneHundredUserPieces: data}))

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
        const {oneHundredUserPieces,errResp} = this.state;

        return (
            <div>
                <button onClick={this.insertData}>button</button>
                {!this.state.UIShowTable && <div>{errResp}</div>}
                {!this.state.UIShowTable && oneHundredUserPieces.map(item => this.renderItem(item))}
            </div>
        );
    }
}

export default PostCatalog