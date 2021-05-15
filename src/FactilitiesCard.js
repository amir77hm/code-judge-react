import React, { Component } from 'react'

export class FactilitiesCard extends Component {
    render() {
        return (
            <div className="item">
                <img className="item__img" src={this.props.image} alt={this.props.alt} />
                <p className="item__text">
                    <span>{this.props.text1}</span>
                    <span>{this.props.text2}</span>
                </p>
            </div>
        )
    }
}
