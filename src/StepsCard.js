import React, { Component } from 'react'

export default class StepsCard extends Component {
    render() {
        return (
            <div className="item">
                <div className={`number ${this.props.color ? 'benafsh' : ''}`}>{this.props.number}</div>
                <div className="text">
                    <span>{this.props.text1}</span>
                    <span>{this.props.text2}</span>
                    {this.props.text3 ? <span>{this.props.text3}</span> : null}
                </div>
            </div>
        )
    }
}

