import React, {useEffect, useState} from 'react';
import _, {uniqueId} from 'lodash';
import PropTypes from "prop-types";

function PostCatalog(props) {

    const [posts, setPosts] = useState([])
    const [uIShowTable, setUIShowTable] = useState(false)
    const [errResp, setErrResp] = useState('')
    const [modified, setModified] = useState(false)

    useEffect(() => {
        const p = new Promise(function (resolve, reject) {
            setTimeout(() => {
                    console.log('Preparing data....')
                    const API = 'https://jsonplaceholder.typicode.com/posts'
                    let request = fetch(API)
                    resolve(request)
                }
                , 2000)
        })
        p.then((data) => {
            console.log('Promise resolved', data)
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    data.modified = true
                    setModified(data.modified)
                    resolve(data.json())
                }, 2000)
            })
        })
            .then(clientData => {
                console.log('Data recived', clientData)
                setPosts(clientData)
            })
            .catch(() => {
                setUIShowTable(false)
                setErrResp('err')
            })
    }, [])

    const renderItem = (elem) => {
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

    return (

        <div>
            {!modified && <div>Preparing data....</div>}
            {!uIShowTable && <div>{errResp}</div>}
            {!uIShowTable && posts.map(item => renderItem(item))}
        </div>
    );
}

PostCatalog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })),
    modified: PropTypes.bool
};
export default PostCatalog;