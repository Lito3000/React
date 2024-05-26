import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleClick = () => {
        // this.setState({ count: this.state.count + 1 });
        // this.setState({ count: this.state.count + 1 });

        this.setState((state, props) => {
            console.log(props)
            const { count } = state;

            return { count: count + 1 };
        })
    };

    render() {
        return (
            <button onClick={this.handleClick}>count: {this.state.count}</button>
        );
    }
}

export default Counter;
//--------------------------------------------------------------------------------------------------------------------------

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
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    onChangeClass = () => {
        this.setState(({ primary }) => ({ primary: !primary }));
    };

    onClickBtn = () => {
        this.onIncrement()
        this.onChangeClass()
    }

    render() {
        const buttonClass = classNames([
            'btn m-3',
            this.state.primary ? 'btn-primary' : 'btn-secondary'
        ]);


        return <div>
            <button className={buttonClass} onClick={this.onClickBtn}>
                count: {this.state.count}
            </button>
            <button className={buttonClass} onClick={this.onChangeClass}>
                button
            </button>
        </div>;
    }
}

export default Buttons;
//----------------------------------------------------------------------------------------------------------------------------
import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>{`${this.state.count} clicks`}</button>
            </form>
        );
    }
}

export default Component;
//-----------------------------------------------------------------------------------------------------------------------
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import CounterV2 from "./components/CounterV2";
import Buttons from "./components/Buttons";

function App() {
    return (
        <div className="App">
            <Clock />
            <hr/>
            <Counter pen={1}/>
            <hr/>
            <CounterV2 count={3} />
            <hr/>
            <Buttons />
        </div>
    );
}

export default App;
//------------------------------------------------------------------------------------------------------------------
import React from "react";

class CounterV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.count }
    }

    handleClick = () => {
        this.setState((state) => ({ count: state.count + 1 }));
    };

    render() {
        return <button onClick={this.handleClick}>
            count: {this.state.count}
        </button>;
    }
}


CounterV2.defaultProps = {
    count: 0,
};


export default CounterV2;
//-----------------------------------------------------------------------------------------------------------------------
import React from "react";

class List extends React.Component {
    removeItem = (id) => (e) => {
        e.preventDefault();
        const newItems = this.state.items.filter((item) => item.id !== id);
        this.setState({ items: newItems });
    };

    constructor(props) {
        super(props);
        const items = [1, 2, 3, 4, 5].map((i) => ({ id: i }));
        this.state = { items };
    }

    render() {
        return <ul>
            {this.state.items.map((item) => this.renderItem(item))}
        </ul>;
    }

    renderItem({ id }) {
        return <li><a href="#" onClick={this.removeItem(id)}>{id}</a></li>;
    }
}

export default List;
//----------------------------------------------------------------------------------------------------------------------
import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button>{`${this.state.count} clicks`}</button>
            </form>
        );
    }
}

export default Component;