import React from "react";
import classNames from "classnames";


class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            primary: false
        };
    }

    onIncrement = () => {
        const fid = ( {count} ) => ({ count: count + 1 })
        // this.state.count = fid({count:5})
        // console.log(this.state.count)
        this.setState(fid);
        // this.render()
    };

    onChangeClass = () => {
        this.setState(({ primary }) => ({ primary: !primary }));
    };

    // onClickBtn = () => {
    //     this.onIncrement()
    //     this.onChangeClass()
    // }

    render() {
        const buttonClass = classNames([
            'btn m-3',
            this.state.primary ? 'btn-primary' : 'btn-secondary'
        ]);


        return <div>
            <button className={buttonClass} onClick={this.onIncrement}>
                count: {this.state.count}
            </button>
            <button className={buttonClass} onClick={this.onChangeClass}>
                button
            </button>
        </div>;
    }
}

export default Buttons;