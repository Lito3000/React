import {Component} from 'react';
import axios from "axios";


class PostCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            oneHundredUserPieces: [],
            urlPhotos: [],
            UIShowTable:false
        };
    }
    // async insertData() {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const post = await res.json();
    //     console.log(post)
    //     this.setState({post});
    // }
    // async insertData() {
    //     try {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         const posts = await res.json();
    //         this.setState({ posts, loading: false });
    //     } catch (error) {
    //         console.error('Ошибка при получении статей', error);
    //         this.setState({ error: 'Ошибка при загрузке данных', loading: false });
    //     }
    // }
    insertData = async () => {
        const user100Pieces = await axios.get('https://jsonplaceholder.typicode.com/albums');
        this.setState({
            oneHundredUserPieces: user100Pieces.data,
        });
        console.log(user100Pieces.data)
    }
    renderItem = (elem) => {
        return (
            <div className="container" key={uniqueId()}>
                <li>{elem.title}</li>


            </div>
        )
    }
    render() {
        const {oneHundredUserPieces, urlPhotos} = this.state;

        return (
            <div>
                <button onClick={this.insertData}>click</button>
                {!this.state.UIShowTable && oneHundredUserPieces.map(item => this.renderItem(item))}
                {/*{this.state.UIShowTable && urlPhotos.map(i => <img key={uniqueId()} src={i.url}/>)}*/}
                <div className="posts">
                    <ul className="posts__list">
                        <li className="posts_single-post" data-post-id="Id поста">
                            <h3 className="posts__post-title">Заголовок поста</h3>
                            <p className="posts__post-description">Контент поста</p>
                        </li>

                        <li className="posts_single-post" data-post-id="Id следующего поста">
                            <h3 className="posts__post-title">Заголовок поста</h3>
                            <p className="posts__post-description">Контент поста</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PostCatalog