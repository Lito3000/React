import {Component} from 'react';


class PostCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oneHundredUserPieces: [],
            urlPhotos: [],
            UIShowTable:false
        };
    }
    async insertData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const post = await res.json();
        console.log(post)
        this.setState({post});
    }

    render() {
        return (
            <div>
                <button onClick={this.insertData}>click</button>
                {/*{!this.state.UIShowTable && oneHundredUserPieces.map(item => this.renderItem(item))}*/}
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