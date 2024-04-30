import React from "react";

class Definitions extends React.Component{
    render() {
        const {text} = this.props
        return (
            <dl>
                <dt key={text[0].id}>{text[0].title}</dt>
                <dd key={text[1].id}>{text[1].title}</dd>
                <dt key={text[2].id}>{text[2].title}</dt>
                <dd key={text[3].id}>{text[3].title}</dd>
            </dl>
        )
    }
}
Definitions.defaultProps = {
    text:null
}
export default Definitions