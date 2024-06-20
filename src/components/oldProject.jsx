import {Component} from "react";

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneHundredUserPieces: [],
            urlPhotos: [],
            UIShowTable:false
        };
    }
    // insertData = async () => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const post = await res.json();
    //     console.log(post)
    //     this.setState({oneHundredUserPieces: post});
    // }
    async componentDidMount() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await res.json();
            this.setState({ posts, loading: false });
        } catch (error) {
            console.error('Ошибка при получении статей', error);
            this.setState({ error: 'Ошибка при загрузке данных', loading: false });
        }
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
            UIShowTable:true
        });
    }

    renderItem = (elem) => {
        return (
            <div className="container" key={uniqueId()}>
                <div className="row align-items-start" >
                    <button onClick={this.handleButton(elem.id)}>{elem.title}</button>
                </div>
            </div>
        )
    }
    handleClickBack =()=>{
        this.setState({
            UIShowTable:false
        });
    }
    render() {
        const {oneHundredUserPieces, urlPhotos} = this.state;
        return (
            <div>
                <button className="list-group" onClick={this.handleClickAlbums}>Load Random Image</button>
                <button className="list-group" onClick={this.handleClickBack}>Back</button>
                {!this.state.UIShowTable && oneHundredUserPieces.map(item => this.renderItem(item))}
                {this.state.UIShowTable && urlPhotos.map(i => <img key={uniqueId()} src={i.url}/>)}
            </div>

        );
    }