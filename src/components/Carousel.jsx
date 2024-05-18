import {Component} from 'react'
import cn from 'classnames'
import cloneDp from 'lodash'

class Carousel extends Component {


    constructor(props) {
        super(props);
        const {0: l, 1: k, 2: j, 3: s} = this.props.item
        this.state = {
            images: [
                {
                    id: 1,
                    url: l,
                    alt: '1',
                    active: true
                },
                {
                    id: 2,
                    url: k,
                    alt: '2',
                    active: false
                },
                {
                    id: 3,
                    url: j,
                    alt: '3',
                    active: false
                },
                {
                    id: 4,
                    url: s,
                    alt: '4',
                    active: false
                },
            ]
        }
    }

    handlePrev = () => {
        const oldState = cloneDp.cloneDeep(this.state)
        const activeElementIndex = oldState.images.findIndex((item) => item.active)
        oldState.images[activeElementIndex].active = false
        if (activeElementIndex === 0) {
            oldState.images[3].active = true
            this.setState(oldState)
            this.render()
        } else {
            oldState.images[activeElementIndex - 1].active = true
            this.setState(oldState)
            this.render()
        }
    }

    handleNext = () => {
        const oldState = cloneDp.cloneDeep(this.state)
        const activeElementIndex = oldState.images.findIndex((item) => item.active)
        oldState.images[activeElementIndex].active = false
        if (activeElementIndex !== 3) {
            oldState.images[activeElementIndex + 1].active = true
            this.setState(oldState)
            this.render()
        } else {
            oldState.images[0].active = true
            this.setState(oldState)
            this.render()
        }
    }

    render() {
        const {images} = this.state
        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {images.map((item) => {
                            const cnClass = cn({
                                'carousel-item': true,
                                'active': item.active

                            })
                            return (
                                <div className={cnClass} key={item.id}>
                                    <img src={item.url} className="d-block w-100" alt={item.alt}/>
                                </div>
                            )
                        }
                    )}
                </div>
                <button onClick={this.handlePrev} className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button onClick={this.handleNext} className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}

export default Carousel
