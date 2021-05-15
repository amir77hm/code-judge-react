import React, { Component } from 'react'

export default class TextHeader extends Component {

    render() {

        if (this.props.purple) {
            return <div className="heading">
                <h2>
                    {this.props.prev}
                    <span>
                        {this.props.purple}
                    </span>
                    {this.props.next}
                </h2>
            </div>
        }
        return (
            <div className="heading">
                <h2>{this.props.prev}</h2>
            </div>
        )
    }
}

