import {Component} from "react";
import cn from 'classnames'
import cloneDp from 'lodash'
import nature1 from '/nature1.jpg'
import nature2 from '/nature2.jpg'
import nature3 from '/nature3.jpg'
import nature4 from '/nature4.jpg'

class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id: 1,
                    url: nature1,
                    alt: '1',
                    active: true
                },
                {
                    id: 2,
                    url: nature2,
                    alt: '2',
                    active: false
                },
                {
                    id: 3,
                    url: nature3,
                    alt: '3',
                    active: false
                },
                {
                    id: 4,
                    url: nature4,
                    alt: '4',
                    active: false
                },
            ]
        }
    }

    handlePrev() {
        const oldState = cloneDp.cloneDeep(this.state)
        const activeElementIndex = oldState.findIndex((item) => item.active)
        oldState[activeElementIndex].active = false
        oldState[activeElementIndex - 1].active = true
    }

    handleNext() {
        const oldState = cloneDp.cloneDeep(this.state)
        const activeElementIndex = oldState.findIndex((item) => item.active)
        oldState[activeElementIndex].active = false
        oldState[activeElementIndex + 1].active = true
    }

    render() {

        return (
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {this.state.map((item) => {
                            const cnClass = cn({
                                'carousel-item': true,
                                'active': item.active
                            })
                            return (
                                <div className="carousel-item active">
                                    <img src={item.url} className={cnClass} alt={item.alt}/>
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