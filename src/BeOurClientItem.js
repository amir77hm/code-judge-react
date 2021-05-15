import React, { Component } from 'react'

export class BeOurClientItem extends Component {
    render() {
        return (
            <div className="nums">
                <span>{this.props.num}</span>
                <span>{this.props.name}</span>
            </div>
        )
    }
}
