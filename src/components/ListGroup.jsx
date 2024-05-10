import React from 'react'


class ListGroup extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <ul className='list-group'>
            {children.map((child,i) =>
                <li className='list-group-item' key ={i}>{child}</li>)}
        </ul>
        )

    }
}

export default ListGroup;