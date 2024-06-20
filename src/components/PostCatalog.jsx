import {Component} from 'react';


class PostCatalog extends Component {

    async insertData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data);
    }

    render() {
        return (
            <div>
                <button onClick={this.insertData}>click</button>
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