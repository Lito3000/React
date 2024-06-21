import {Component} from 'react';
import {uniqueId} from "lodash";
import PropTypes from "prop-types";


class PostCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            UIShowTable: false,
            errResp: '',
            modified: false
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
                        this.setState({modified: data.modified})
                        resolve(data.json())
                    }, 2000)
                })
            })
            .then(clientData => {
                console.log('Data recived', clientData)
                this.setState({posts: clientData})
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
        const {posts, errResp,modified,UIShowTable} = this.state;
        return (
            <div>
                {!UIShowTable && <div>{modified}</div>}
                {!UIShowTable && <div>{errResp}</div>}
                {!UIShowTable && posts.map(item => this.renderItem(item))}
            </div>
        );
    }
}

PostCatalog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })),
    modified: PropTypes.bool.isRequired
};
export default PostCatalog